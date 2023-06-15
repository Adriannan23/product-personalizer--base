import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = props => {

  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);

  const getPrice = () => {
    return currentSize.additionalPrice + props.basePrice;
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(`Summary`)
    console.log(`================`)
    console.log(`Name: ${props.title}`)
    console.log(`Price: ${getPrice()}`)
    console.log(`Size: ${currentSize.name}`)
    console.log(`Color: ${currentColor}`)
  }

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        color={currentColor}
        stylesImgContainer={styles.imageContainer}
        stylesImage={styles.image}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        {/* <ProductForm />  TO TU BEDZIE*/}
      </div>
    </article>
  )
};

export default Product;