import "./styles.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const MainHeader = () => {
  const showInitialInstructions = () => {
    MySwal.fire({
      html: "Clique na moeda pra lançar",
      confirmButtonText: "Certo!",
    });
  };

  if (document.readyState === "complete") {
    showInitialInstructions();
  }

  return (
    <>
      <header className="header"></header>
    </>
  );
};

export default MainHeader;
