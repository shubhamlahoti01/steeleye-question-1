import styles from "./ListRow.module.css";

const ListCell = ({ children, i, handleClick }) => {
  return (
    <tr onClick={() => handleClick(i)} className={styles.cell}>
      {children}
    </tr>
  );
};

export default ListCell;
