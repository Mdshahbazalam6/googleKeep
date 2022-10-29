import React, { useState } from 'react';
import '../CSS/login.css'

const Login = () => {
  const[value,setValue]  = useState({
    email:'',
    password:''
  })
  const[error,setError] = useState({
    emailError:'',
    passwordError:''
  })

const handleChange = ( e ) =>{
  
let inpValue = e.target.value
let name = e.target.name
setValue({...value,[name]:inpValue})
}
// console.log(value)

const handleSumit =  ( e ) =>{
  e.preventDefault()

  if(error.emailError || error.passwordError)return

  console.log(value)
}

const validate = ( ) =>{
  value.email != 'foo' && value.password != 'bar' ?  setError({...error,emailError:"Please Enter Correct Email",passwordError:"Please Enter Correct Password"}) :  
  value.email != 'foo' ? setError({...error,emailError:"Please Enter Correct Email"}):setError({...error,passwordError:"Please Enter Correct Password"})

  return error
}
console.log(error)
  return (
   <div className='LoginContainer'>
     <h1 className="loginheading">Login</h1>
     <br />
     <form action="" onSubmit={handleSumit}>
        <label htmlFor="">Email</label><br />
        <input type="text" 
        placeholder='Enter Email'
        name='email'
        onChange={handleChange}/><br /><br />

        <label htmlFor="">Password</label><br />
        <input type="password" 
        placeholder='Enter Password'
        name='password'
        onChange={handleChange}/><br/><br />

        <input type='submit' value="Submit" className='SubmitButton'/>
    </form>
   </div>
  )
}

export default Login