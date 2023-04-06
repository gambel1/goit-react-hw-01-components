import { Table, TableType, TableList } from './TransactionHistory.styled';
import PropTypes from "prop-types";
export default function TransactionHistory(props) {
  const { items } = props;
  return (
    <Table>
      <TableType>
        <TableList>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableList>
      </TableType>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
