/* eslint-disable react/prop-types */
import './TransactionHistory.css';
const TransactionHistory = ({ items }) => {
    return (
        <>
            <table>
                <thead className="head-transactions">
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({ id, type, amount, currency }, i) => {
                        return (
                            <tr key={id} className={i % 2 != 0 ? 'table-line dark' : 'table-line'}>
                                <td>{firstSymbolToUpCase(type)}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

function firstSymbolToUpCase(str) {
    const firstSymbol = str.slice(0, 1).toUpperCase();
    const cuttedString = str.slice(1, str.length);
    return firstSymbol + cuttedString;
}


export default TransactionHistory