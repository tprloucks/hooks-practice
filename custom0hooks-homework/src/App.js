import React, {useState} from "react";

import './App.css';

function CustomHooksUsingObjectFormat(initialState){
  const [value, setValue] = useState(initialState)

  function onChange(e){
    setValue(e.target.value)
  }
  function showValue(){
    console.log(value);
  }
  function clearInput(){
    setValue("")
  }
  return {value, onChange, showValue, clearInput}
}


function App() {
  const {
    value: firstName,
    onChange:firstNameOnChange,
    showValue: firstNameShowValue,
    clearInput: firstNameClearInput,
    
  }= CustomHooksUsingObjectFormat("", false)

  const {
    value:lastName,
    onChange:lastNameOnChange,
    showValue:lastNameShowValue,
    clearInput:lastNameClearInput,
    
  }= CustomHooksUsingObjectFormat("")

  const {
    value:email,
    onChange:emailOnChange,
    showValue:emailShowValue,
    clearInput:emailClearInput
  } = CustomHooksUsingObjectFormat("")

  function handleOnSubmit(e){
    e.preventDefault()
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
