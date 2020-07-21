import React, { useState, useEffect } from 'react'

function Form (props) {

    const {values, update, submit} = props

    const onChange = event => {

        const name = event.target.name
        const value = event.target.value

        update(name, value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        submit()
    }


    return (
        <form className='form-container' onSubmit={onSubmit}>
        <div className='formsetup'><h2>Add a Team Member</h2></div>
        <button disabled={!values.name || !values.email || !values.role}>
            Submit
        </button>

        <div className='formSetup'>
        <h3>Information:</h3>
        <label htmmlFor='nameInput'>
            Name:
            <input 
            id='nameInput'
            name='name'
            type='text'
            placeholder='Enter name'
            maxLength='26'
            value={values.name}
            onChange={onChange} />
        </label>

        <label htmlFor='emailInput'>
            Email:
            <input
            id='emailInput'
            name='email'
            type='email'
            placeholder='Enter email'
            maxLength='26'
            value={values.email}
            onChange={onChange} />
       </label>

        
        <label>
        Role:
       <select id='selectrole' name='role' value={values.roll} onChange={onChange}>
           <option value=''>Select a Role</option>
           <option value='Project Manager'>Project Manager</option>
           <option value='Event Coordinator'>Event Coordinator</option>
           <option value='Pixel Artist'>Pixel Artist</option>
           <option value='Game Designer'>Game Designer</option>
       </select>
        </label>

        </div>
        </form>
    )
}

export default Form;