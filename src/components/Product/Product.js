import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';



const Product = props => {

  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  // const [currentAdditionalPrice, setCurrentAdditionalPrice] = useState(props.sizes[0].additionalPrice);


  const getPrice = () => {
    // console.log('currentAdditionalPrice', currentAdditionalPrice)
    return currentSize.additionalPrice + props.basePrice;
  };

  // const handleSizeClick = (size) => {
  //   setCurrentSize(size);

  //   // setCurrentAdditionalPrice(size.additionalPrice);
  // };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size}><button type="button"
                className={clsx({ [styles.active]: currentSize === size })}
                onClick={() => setCurrentSize(size)}
              >{size.name}
              </button>
              </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
                <li key={color}>
                  <button type="button"
                    className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], currentColor === color && styles.active)}
                    onClick={() => setCurrentColor(color)} />
                </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;