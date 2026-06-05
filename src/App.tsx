import React from 'react'
import { PolicyProvider } from './context/PolicyContext'
import PolicyList from './components/PolicyList'
import Pagination from './components/Pagination'

const App: React.FC = () => {
  return (
    <PolicyProvider>
      <main className="container">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-brand">My Policies</h1>
          <p className="text-sm text-gray-600">Your active policies are listed below.</p>
        </header>

        <PolicyList />
        <Pagination />
      </main>
    </PolicyProvider>
  )
}

export default App
