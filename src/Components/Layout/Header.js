import React, { Fragment} from "react";
import classes from './Header.module.css';
import MealsImage from '../../Assests/Meals.jpg';
import HeaderCartButton from "./HeaderCartButton";



const Header = props => {

    return (<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onClick}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt="A table with delicious food"></img>
        </div>
    </Fragment>
    );
};


export default Header;