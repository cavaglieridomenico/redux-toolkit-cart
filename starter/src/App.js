import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";

const App = () => {
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
};
export default App;
