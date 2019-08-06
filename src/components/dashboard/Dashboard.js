import React from "react";
import ReactTable from "../table/reactTable";

const Dashboard = () => {
  return (
    <ReactTable header={[
      {
        name: "Name",
        prop: "name"
      },
      {
        name: "Age",
        prop: "age"
      }
      ,
    ]} data={[
      {
        name: "Piyush",
        age: "32"
      },
      {
        name: "Mihir",
        age: "17"
      }
    ]} />
  );
}
 
export default Dashboard;
