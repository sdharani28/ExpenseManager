function ExpenseEntryItem1(props) {
    const { item, amount, date, category } = props;
    return (<div className="expense-item-container">
        <div className="card">
            <div className="card-header">{item}</div>
            <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/2/23/Apple_juice_with_3apples.jpg" alt="Card image" />
            <div className="card-body">
                <div><b>Item:</b> <em>{item}</em></div>
                <div><b>Amount:</b> <em>{amount}</em></div>
                <div><b>Spend Date:</b> <em>{date}</em></div>
                <div><b>Category:</b> <em>{category}</em></div>
            </div>
        </div>
    </div>
    );
}

ExpenseEntryItem1.defaultProps = {
    item:"Apple Juice", amount:"50.00", date:"2020-10-10", category:"Food"
}
export default ExpenseEntryItem1;

