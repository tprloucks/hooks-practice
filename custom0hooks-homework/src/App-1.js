import React from "react";
import CustomHooksUsingArrayFormat from './hooks/inputHooks'
import './App.css';



function App() {
  const [
    firstName,
    firstNameOnChange,
    firstNameShowValue,
    firstNameClearInput,
    firstNameGreeting,
  ]= CustomHooksUsingArrayFormat("")

  const [
    lastName,
    lastNameOnChange,
    lastNameShowValue,
    lastNameClearInput,
    
  ]= CustomHooksUsingArrayFormat("")

  const [
    email,
    emailOnChange,
    emailShowValue,
    emailClearInput
  ] = CustomHooksUsingArrayFormat("")

  function handleOnSubmit(e){
    e.preventDefault()
    firstNameGreeting()
    firstNameShowValue()
    firstNameClearInput()
    lastNameShowValue()
    lastNameClearInput()
    emailShowValue()
    emailClearInput()
    
  }
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e)=> firstNameOnChange(e)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=> lastNameOnChange(e)}/>
        <input type="text" placeholder="Email" value={email} onChange={(e)=> emailOnChange(e)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
