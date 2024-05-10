import React from 'react'

interface Task {
  id: number;
  title: string;
  description: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="border-b py-2">
            <h3 className="text-blue-500">{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
