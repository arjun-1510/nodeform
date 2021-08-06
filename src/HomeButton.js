import Table from './Table';
import React from "react";
import { useHistory } from "react-router-dom";
import Map from "./Map";
import Chart from './Chart';
import { userData } from './dummy';



function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div>
      
      
      <Table />
      <h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'35px',padding:'3px'}}>Google Map</h1>
      <Map />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    
      
      
    </div>
  );
}

export default HomeButton;