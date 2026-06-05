export interface Destination { code: string; name: string }

export type PolicyType = 'Single Trip' | 'Annual'

export interface Policy {
  policyNumber: string
  policyStart: string // ISO date
  policyEnd: string
  primaryTravellerFirstname: string
  primaryTravellerLastName: string
  primaryTravellerPhoneNumber: string
  status: 'Active' | 'Expired' | string
  destinations: Destination[]
  alphaCode?: string
  iSO3CountryOfResidence?: string
  underwriterCode?: string
  groupCode?: string
  type: PolicyType
  excess: number
  maxTripDuration: number
  planName: string
}
