import { useEffect, useState } from "react";
import { Button } from "../stories/Button";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  // code for the search bar for searching the entered text
  useEffect(() => {
    if (searchText.trim() !== "") {
      const { results: data } = mockData;
      // let len = searchText.trim().length;
      let txt = searchText.trim().toLowerCase();

      let newData = data.filter((item) =>
        item["&id"].toLowerCase().includes(txt)
      );
      setFilteredItems(newData);
    } else {
      setFilteredItems([]);
    }
  }, [searchText]);
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle
          primaryTitle="Orders"
          secondaryTitle={`${mockData.results.length} orders`}
        />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List
          rows={searchText.trim() === "" ? mockData.results : filteredItems}
          timestamps={timestamps["results"]}
          currency={currency}
          setSelectedOrderDetails={setSelectedOrderDetails}
          setSelectedOrderTimeStamps={setSelectedOrderTimeStamps}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          backgroundColor={"#043463"}
          primary={true}
          size="large"
          label="Story Book Button"
          onClick={() => alert("story book btn")}
        />
      </div>
    </div>
  );
};

export default Dashboard;
