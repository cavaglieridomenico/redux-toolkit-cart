import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";
import Modal from "./Modal";

const CartContainer = () => {
  const { isModalOpen } = useSelector((store) => store.modal);

  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {isModalOpen && <Modal />}
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
