import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../main";

export default function Count() {
  const store = useContext(StoreContext);
  return useObserver(() => (
    <div className="row reactions-count">{store.Count}</div>
  ));
}
