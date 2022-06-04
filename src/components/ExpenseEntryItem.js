import React from 'react';
class ExpenseEntryItem extends React.Component {

   render() {
      const { item, amount, date, category,itemCount,setItemCount } = this.props;
      
      return (<div className=" expense-item-container">
         <div className="card">
            <div className="card-header">
               <button onClick={() => setItemCount(itemCount - 1) } className="btn" >-</button>
               {item}
               <button onClick={() => setItemCount(itemCount + 1) } className="btn" >+</button>
            </div>
            <img className="card-img-top" src="https://mindovermunch.com/wp-content/uploads/2021/08/Mango-Juice-8.jpg" alt="Card image" />
            <div className="card-body">
               <div><b>Item:</b> <em>{item}</em></div>
               <div><b>Amount:</b> <em>{amount}</em></div>
               <div><b>Spend Date:</b> <em>{date}</em></div>
               <div><b>Category:</b> <em>{category}</em></div>
               <div><b>Count:</b> <em>{itemCount}</em></div>
            </div>
         </div>
      </div>
      );
   }
}

export default ExpenseEntryItem;

