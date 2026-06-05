import React from 'react'
import { usePolicies } from '../context/PolicyContext'

export const Pagination: React.FC = () => {
  const { totalPages, currentPage, goToPage, prevPage, nextPage } = usePolicies()

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="flex items-center gap-2 justify-center my-6" aria-label="Pagination">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand border"
        aria-label="Previous page"
      >
        ◀
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => goToPage(p)}
          aria-current={p === currentPage ? 'page' : undefined}
          className={`px-3 py-1 rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand ${p === currentPage ? 'bg-brand text-white' : 'bg-white border'}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand border"
        aria-label="Next page"
      >
        ▶
      </button>
    </nav>
  )
}

export default Pagination
