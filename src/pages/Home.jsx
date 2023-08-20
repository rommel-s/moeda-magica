import "./styles.css";

import Coin from "../components/Coin";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Coin />
    </div>
  );
};

export default Home;
