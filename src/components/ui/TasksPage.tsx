import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import TaskList from '@/components/ui/TaskList'

const TasksPage: React.FC = () => {
  // Dummy task data
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3' },
  ]

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Tasks</h2>
        <TaskList tasks={tasks} />
      </div>
    </div>
  )
}

export default TasksPage
