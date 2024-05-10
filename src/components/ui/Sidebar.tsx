import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-200 h-screen w-48" >
      <ul className="p-4">
        <li className="mb-2">
          <a href="/" className="text-blue-500 hover:text-orange-600">Dashboard</a>
        </li>
        <li className="mb-2">
          <a href="/tasks" className="text-blue-500 hover:text-orange-600">Tasks</a>
        </li>
        <li className="mb-2">
          <a href="/tasks" className="text-blue-500 hover:text-orange-600">Settings</a>
        </li>
        
      </ul>
    </div>
  )
}

export default Sidebar
