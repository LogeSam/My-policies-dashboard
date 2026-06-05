import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Policy } from '../types/policy'

interface PolicyContextValue {
  policies: Policy[]
  activePoliciesSorted: Policy[]
  currentPage: number
  pageSize: number
  totalPages: number
  goToPage: (n: number) => void
  nextPage: () => void
  prevPage: () => void
  loading: boolean
}

const PolicyContext = createContext<PolicyContextValue | undefined>(undefined)

export const PolicyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [policies, setPolicies] = useState<Policy[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 3

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch('/policies.json')
      .then((r) => r.json())
      .then((data: Policy[]) => {
        if (!mounted) return
        setPolicies(data)
      })
      .catch((e) => console.error(e))
      .finally(() => mounted && setLoading(false))
    return () => {
      mounted = false
    }
  }, [])

  const activePoliciesSorted = useMemo(() => {
    return policies
      .filter((p) => p.status === 'Active')
      .sort((a, b) => new Date(a.policyStart).getTime() - new Date(b.policyStart).getTime())
  }, [policies])

  const totalPages = Math.max(1, Math.ceil(activePoliciesSorted.length / pageSize))

  useEffect(() => {
    // clamp current page if policies change
    if (currentPage > totalPages) setCurrentPage(totalPages)
  }, [totalPages, currentPage])

  const goToPage = (n: number) => setCurrentPage((_) => {
    const next = Math.min(Math.max(1, n), totalPages)
    return next
  })
  const nextPage = () => goToPage(currentPage + 1)
  const prevPage = () => goToPage(currentPage - 1)

  return (
    <PolicyContext.Provider
      value={{ policies, activePoliciesSorted, currentPage, pageSize, totalPages, goToPage, nextPage, prevPage, loading }}
    >
      {children}
    </PolicyContext.Provider>
  )
}

export const usePolicies = () => {
  const ctx = useContext(PolicyContext)
  if (!ctx) throw new Error('usePolicies must be used within PolicyProvider')
  return ctx
}
