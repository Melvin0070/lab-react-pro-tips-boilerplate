import React, { useState } from 'react'

function RegistrationForm() {
  const [sumbitted, setSumbitted] = useState(false)
  const[validate, setValidate] = useState(false)

  const [field, setField] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })
  
 const handleSubmit =(e)=>{
    e.preventDefault();
    if(field.firstName && field.lastName && field.email && field.phoneNumber){
      setValidate(true)      
    }
    setSumbitted(true)
  }
  

  return (
    <div className='wrpper'>
      <form onSubmit={handleSubmit}>

        {sumbitted && validate && <h2>Registration Sucessfull</h2>}
        <input type="text" placeholder='First Name' value={field.firstName} onChange={(event)=>setField({...field, firstName: event.target.value})}/>
        {sumbitted && !field.firstName && <p>First Name is required</p>}
        <input type="text" placeholder='Last Name' value={field.lastName} onChange={(event)=>setField({...field, lastName: event.target.value})}/>
        {sumbitted && !field.lastName && <p>Last Name is required</p>}
        <input type="email" placeholder='Email' value={field.email} onChange={(event)=>setField({...field, email: event.target.value})}/>
        {sumbitted && !field.email && <p>Email is required</p>}
        <input type="number" placeholder='Phone Number' value={field.phoneNumber} onChange={(event)=>setField({...field, phoneNumber: event.target.value})}/>
        {sumbitted && !field.phoneNumber && <p>Phone Number is required</p>}
        
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default RegistrationForm
