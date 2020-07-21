import React , { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import { v4 as uuid } from 'uuid'
import Team from './Team'

const testTeamList = {
  id: uuid(),
  name: 'test',
  email: 'test@test.com',
  role: 'tester'
}

const blankFormValues = {
  name:'',
  email:'',
  role:''
}

//notsureifweneed fakeAxios or not
const fakeAxiosGet = () => {
  return Promise.resolve({status:200, success:true, data:testTeamList})
}

const fakeAxiosPost = (url, {name, email, role}) => {
  const newTeamMember = {id: uuid(), name, email, role }
  return Promise.resolve({status:200, success:true, data: newTeamMember})
}



function App() {

  const [teamList, setTeamList] = useState([])
  const [formValue, setFormValue] = useState(blankFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValue = {...formValue,[inputName]: inputValue}
    setFormValue(updatedFormValue)
  }

  const submitForm = () => {

    const newTeamMember = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role
    }
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
    return

    fakeAxiosPost('fakeApi.com', newTeamMember)
    .then(value => {
      console.log('happy path start')
      const newFromApi = value.data
      console.log(newFromApi)
      console.log(teamList)
      setTeamList([newFromApi,...teamList])
      setFormValue(blankFormValues)
    })
    .catch( error => {
      console.log('error')
    })
  }

  useEffect(() => {
    fakeAxiosGet('fakeApi.com').then(value => setTeamList(value.data))
  }, [])

  return (
    <div className="App">
      <header><h1>Team Builder</h1></header>
      <Form values={formValue} 
      update={updateForm} 
      submit={submitForm} />

     {[teamList].map(values => {
       return (
        <Team key={values.id} teamMember={values} />
       )
     })}

    </div>
  );
}

export default App;
