import React, { useContext } from "react";
import { StoreContext } from "../App";

export default function Buttons() {
  const store = useContext(StoreContext);
  return (
    <div className="row">
      <div className="col-sm">
        <button
          type="button"
          className="btn btn-primary align-top"
          onClick={() => store.Add()}
        >
          Counter +
        </button>
        <button
          type="button"
          className="btn btn-danger align-top"
          onClick={() => store.sub()}
        >
          Counter -
        </button>
      </div>
    </div>
  );
}
