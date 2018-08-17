import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Router from "./pages/Router";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
