import { useState } from "react";

import "./styles.css";

const Coin = () => {
  const [val, setVal] = useState(-1);
  const [active, setActive] = useState(true);
  const [message, setMessage] = useState(true);

  const flipCoin = () => {
    setActive(false);
    setMessage(false);
    setVal(-1);
    setTimeout(() => {
      setVal(Math.random());
    }, 100);

    setTimeout(() => {
      setActive(true);
      setMessage(true);
    }, 2000);
  };
  return (
    <>
      <div className="coin-container">
        <div
          className={`${active === true ? "active" : "inactive"} ${
            val > 0 ? (val >= 0.5 ? "sleep" : "read") : ""
          } coin`}
          onClick={() => flipCoin()}
        >
          <div className="coin__sleep">
            <img src="/assets/sleep.svg" alt="Dormir" />
          </div>
          <div id="read" className="coin__read">
            <img src="/assets/read.svg" alt="Ler" />
          </div>
        </div>
        <h2 className={`${message ? "active" : ""} flip-result`}>{`${
          val > 0
            ? val >= 0.5
              ? "Acho que já chega de ler por hoje..."
              : "Vamos ler mais um pouquinho!"
            : ""
        }`}</h2>
      </div>
    </>
  );
};

export default Coin;
