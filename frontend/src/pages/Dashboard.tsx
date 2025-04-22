import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dashboard = () => {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
        console.log("nhi hai token")
      navigate('/login')
      return
    }

    axios
      .get('http://localhost:5000/api/user/dashboard', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setMessage(res.data.message))
      .catch(() => {
        console.log("catch hua")
        localStorage.removeItem('token')
        navigate('/login')
      })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-xl font-bold">{message}</h1>
        <button
          onClick={() => {
            localStorage.removeItem('token')
            navigate('/login')
          }}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
