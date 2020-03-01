import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Button danger />
      <Button />
    </div>
  );
}

const Button = ({ danger }) => (
  <button
    className={danger ? "button button--danger" : "button button--success"}
  >
    Hello
  </button>
);

export default App;
