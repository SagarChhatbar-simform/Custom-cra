import React, { Component } from "react";

import Count from "./Count";
import Buttons from "./Buttons";

export default function Dashboard() {
  return (
    <div className="container-md card" align="center">
      <Count />
      <Buttons />
    </div>
  );
}
