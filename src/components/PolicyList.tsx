import React from 'react'
import { usePolicies } from '../context/PolicyContext'
import PolicyCard from './PolicyCard'

export const PolicyList: React.FC = () => {
  const { activePoliciesSorted, currentPage, pageSize, loading } = usePolicies()

  if (loading) return <p className="p-6">Loading policies…</p>

  const start = (currentPage - 1) * pageSize
  const slice = activePoliciesSorted.slice(start, start + pageSize)

  if (!slice.length) {
    return <p className="p-6">No active policies found.</p>
  }

  return (
    <section>
      {slice.map((p) => (
        <PolicyCard key={p.policyNumber} policy={p} />
      ))}
    </section>
  )
}

export default PolicyList
