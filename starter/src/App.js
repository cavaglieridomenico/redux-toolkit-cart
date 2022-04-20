import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

const App = () => {
  const { isModalOpen } = useSelector((store) => store.modal);
  return (
    <main>
      {isModalOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
