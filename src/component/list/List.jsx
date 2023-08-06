import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({
  rows,
  timestamps,
  currency,
  setSelectedOrderDetails,
  setSelectedOrderTimeStamps,
}) => {
  function handleOrderSelected(i) {
    setSelectedOrderDetails(rows[i].executionDetails);
    setSelectedOrderTimeStamps(timestamps[i].timestamps);
    // console.log(i);
  }
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <ListRow key={i} i={i} handleClick={handleOrderSelected}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>
              {timestamps[i]["timestamps"].orderSubmitted}
            </ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume[`${currency}`]}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
