import { Fragment } from 'react';
import mealsImage from '../../assets/jewish-deli.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Nosh.js</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='table full of delicious food'></img>
        </div>
    </Fragment>
}

export default Header;