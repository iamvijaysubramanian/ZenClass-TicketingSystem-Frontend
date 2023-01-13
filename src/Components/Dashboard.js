import React from "react";
import Card from "./Card";
import Tickets from "./Tickets";

function Dashboard() {
  return (
    <>
      <div className="row">
        <Card />
      </div>
      <div className="row">
        <Tickets/>
      </div>
    </>
  );
}

export default Dashboard;
