import { useContext, useEffect, useState } from "react";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const [btnIsAnimated, setBtnIsAnimated] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //only play button animation when items are added
  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ''}`

  //for side effects
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsAnimated(true);

    //once btnIsAnimated is set to false
    //the 'bump' class will be reset to an empty string
    //ensures the bump effect will play more than once
    const timer = setTimeout(() => {
      setBtnIsAnimated(false);
    }, 300);

    //clean up function
    return () => {
      clearTimeout(timer);
    }
  }, [items, cartCtx.items.length]);  //animation plays when these dependencies change

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
