import React from 'react'
import "./UserData.css"
import 'boxicons'

const UserData = ({user, deleteUser, setUpdateInfo, changeKey}) => {

  const handleEdit = data => {
    setUpdateInfo(data)
  }

  return (
    <div className='userCard'>
      <div className="user__item">
      <h2>{`${user?.first_name} ${user?.last_name}`} </h2>
      <div className="spacing"></div>
      </div>
      <div className="user__item">
      <p>Email: </p> <span>{user?.email}</span>
      </div>
      <div className="user__item">
      <p>Birthday: </p> <span>{user?.birthday}</span>
      </div>
      <div className="buttons">
        <box-icon onClick={() => deleteUser(user?.id)} type='solid' name='trash' size="sm" color="rgba(205, 24, 24, .8)"></box-icon>
        <box-icon onClick={() => {changeKey(), handleEdit(user)}} name='edit' size="sm" color="rgba(243, 149, 13, .8)"></box-icon>
      </div>
    </div>
  )
}

export default UserData