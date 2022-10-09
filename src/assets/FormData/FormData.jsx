import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form' 
import "./FormData.css"

const FormData = ({createUser, updateUser, updateInfo, setUpdateInfo, changeKey}) => {

const defaultData = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
}

const {handleSubmit, register, reset} = useForm()

useEffect(() => {
    if(updateInfo){
        reset(updateInfo)
    }
}, [updateInfo])



const submit = data => {

    if(updateInfo){
        updateUser(data)
        setUpdateInfo("")
    }else{
        createUser(data);
    }
    reset(defaultData)
}

  return (
    <div className='FormData'>
        <box-icon onClick={() => {changeKey(), submit()}} id="x" name='x' color="#256D85"></box-icon>
        <h1>{updateInfo? "Update Information" :  "New User"}</h1>
        <div className="spacing"></div>
        <form className='formInfo' onSubmit={handleSubmit(submit)}>

            <div className="form__item">
                <label htmlFor="email">Email</label>
                <input id='email' placeholder='Email' type="email" {...register("email", {required:true})}/>
            </div>

            <div className="form__item">
                <label htmlFor="password">Password</label>
                <input id='password' placeholder='Password' type="password" {...register("password", {required:true})}/>
            </div>

            <div className="form__item">
                <label htmlFor="first_name">First Name</label>
                <input id='first_name' placeholder='First Name' type="text" {...register("first_name", {required:true})}/>
            </div>

            <div className="form__item">
                <label htmlFor="last_name">Last Name</label>
                <input id='last_name' placeholder='Last Name' type="text" {...register("last_name", {required:true})}/>
            </div>

            <div className="form__item">
                <label htmlFor="birthday">Birthday</label>
                <input id='birthday' type="date" {...register("birthday", {required:true})}/>
            </div>
            <button onClick={() => changeKey()} className='btn'>{updateInfo? <span>Update</span> : <span>Create</span> }</button>
        </form>
    </div>
  )
}

export default FormData