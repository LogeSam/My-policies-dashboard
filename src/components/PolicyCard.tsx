import React from 'react'
import type { Policy } from '../types/policy'

const formatDate = (iso: string) => new Date(iso).toLocaleDateString()

export const PolicyCard: React.FC<{ policy: Policy }> = ({ policy }) => {
  return (
    <article className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-2xl font-bold text-brand mb-3">Policy number: <span className="text-gray-800 font-normal">{policy.policyNumber}</span></h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
        <div>
          <p><strong>Destination:</strong> {policy.destinations?.[0]?.name ?? '—'}</p>
          {policy.type === 'Single Trip' ? (
            <p><strong>Travel date:</strong> {formatDate(policy.policyStart)} - {formatDate(policy.policyEnd)}</p>
          ) : (
            <>
              <p><strong>Policy start date:</strong> {formatDate(policy.policyStart)}</p>
              <p><strong>Maximum trip duration:</strong> Up to {policy.maxTripDuration} days</p>
            </>
          )}
        </div>

        <div>
          <p><strong>Plan:</strong> {policy.planName}</p>
          <p><strong>Excess:</strong> ${policy.excess}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <a href="#" className="text-sm text-gray-600 underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand" aria-label="View PDS">View PDS</a>
        <a href="#" className="text-sm text-gray-600 underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand" aria-label="Certificate of Insurance">Certificate of Insurance</a>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => console.log('Make a claim', policy.policyNumber)}
          className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand bg-brand-accent text-black rounded-full py-2 px-6"
          aria-label={`Make a claim for ${policy.policyNumber}`}
        >
          Make a claim
        </button>

        <button
          onClick={() => console.log('Manage policy', policy.policyNumber)}
          className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand border-2 border-brand text-brand rounded-full py-2 px-6"
          aria-label={`Manage policy ${policy.policyNumber}`}
        >
          Manage my policy
        </button>
      </div>
    </article>
  )
}

export default PolicyCard
