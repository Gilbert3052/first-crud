import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ButtonCreate from './assets/ButtonCreate/ButtonCreate'
import Footer from './assets/Footer/Footer'
import FormData from './assets/FormData/FormData'
import Title from './assets/Title/Title'
import UserData from './assets/UserData/UserData'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState("")
  const [key, setKey] = useState(false)

  const base = "https://users-crud1.herokuapp.com"

  const showUsers = () => {
    
    const URL = `${base}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    showUsers()
  }, [])

  const createUser = data => {
    const URL = `${base}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        showUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = data => {
    const URL = `${base}/users/${data.id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        showUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUser = id => {
    const URL = `${base}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        showUsers()
      })
      .catch(err => console.log(err))
  }  

  const changeKey = () => (setKey(!key))

  return (
    <div className="App">

      <Title />

      <ButtonCreate 
        changeKey = {changeKey}
      />
      
      <div className={`Form ${key? "" : "disable__form"}`}>
        <FormData 
          createUser = {createUser}
          updateUser = {updateUser}
          updateInfo = {updateInfo} 
          setUpdateInfo = {setUpdateInfo}
          changeKey = {changeKey}
        />
      </div>

      <div className="Users">
        <h2>Users</h2>
        {
          users?.map(user => (
            <UserData 
              key = {user.id}
              user = {user}
              setUpdateInfo = {setUpdateInfo}
              deleteUser = {deleteUser}
              changeKey = {changeKey}
            />
          ))
        }
      </div>

      <Footer />

    </div>
  )
}

export default App
