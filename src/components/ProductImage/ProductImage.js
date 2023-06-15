const ProductImage = props => {

  return (
    <div className={props.stylesImgContainer}>
      <img
        className={props.stylesImage}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
    </div>)
};

export default ProductImage;