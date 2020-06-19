import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "../SideDrawer/SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = ({ displayed, toggle }) => {
  return (
    <>
      {displayed ? <Backdrop clicked={toggle} /> : null}
      <div
        className={[
          classes.SideDrawer,
          displayed ? classes.Open : classes.Close,
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
