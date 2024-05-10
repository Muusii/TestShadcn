import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 transition duration-300 ease-in-out" >
      <div className="container mx-auto">
        <h1 className="text-white text-center text-xl font-bold">Task Manager</h1>
      </div>
    </nav>
  )
}

export default Navbar
