import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseEntryItem from './components/ExpenseEntryItem';

function App() {

  const [itemName, setItemName] = useState("Mango Juice");
  const [itemCount, setItemCount] = useState(1);

  return (
    <div className="row text-center">
      <div className='col-md-6 col-xs-12' >
        <ExpenseEntryItem item={itemName} amount="30.00" date="2020-10-10" category="Food" itemCount={itemCount} setItemCount={setItemCount} />
      </div>
    </div>
  );
}

export default App;


