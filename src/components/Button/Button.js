import styles from './Button.module.scss';
import clsx from 'clsx';
import { handleClick } from '../Product/Product';

const handleCartClick = (event) => {
    event.preventDefault();
    handleClick();
};

const Button = (props) => {
    return (<button type="button" className={clsx(styles.button, props.className)} onClick={handleCartClick}>{props.children}</button>);
};

export default Button;