import { CartIcon, Testing } from "../icons";
import { useSelector } from "react-redux";

const navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <>
          <Testing/>
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
export default navbar;
