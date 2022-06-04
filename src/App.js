import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import ExpenseEntryItem1 from './components/ExpenseEntryItem1';

function App() {
  const [itemName, setItemName] = useState("Mango Juice");
  const [itemCount, setItemCount] = useState(1);

  const [userName, setUserName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (eventArg) => {
    setUserName(eventArg.target.value);
  }

  const handleBlur = (eventArg) => {
    if(eventArg.target.required && eventArg.target.value === ""){
      setShowMessage(true);
    }
    else{
      setShowMessage(false);
    }
  }

  return (
    <div className="row text-center">
      <div className='col-md-6 col-xs-12' >
        <input type="text" onChange={handleChange} onBlur={handleBlur} required={true} />
        {showMessage && <p style={{color: 'red'}} >User name is required</p>}
        <p>You entered: {userName}</p>
        <ExpenseEntryItem item={itemName} amount="30.00" date="2020-10-10" category="Food" itemCount={itemCount} setItemCount={setItemCount}/>
      </div>
    </div>
  );
}

export default App;


