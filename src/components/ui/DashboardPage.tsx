import React from 'react'
import Navbar from '@/components/ui/Navbar.tsx'
import Sidebar from '@/components/ui/Sidebar'

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        {/* Add dashboard content */}
      </div>
    </div>
  )
}

export default DashboardPage
