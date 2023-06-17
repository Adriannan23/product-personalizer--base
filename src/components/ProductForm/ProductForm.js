import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';

const ProductForm = props => {

  const {
    sizesStyles,
    sizesOptionLabel,
    stylesChoices,
    sizesActive,
    currentSize,
    setCurrentSize,
    sizes,
    colors,
    currentColor,
    setCurrentColor,
    optionLabel,
    colorsStyles,
    styles
  } = props;

  return (
    <form>
      <OptionSize
        sizesStyles={sizesStyles}
        sizesOptionLabel={sizesOptionLabel}
        stylesChoices={stylesChoices}
        sizesActive={sizesActive}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        sizes={sizes}
      />
      <OptionColor
        colorsActive={sizesActive}
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        optionLabel={optionLabel}
        colorsStyles={colorsStyles}
        stylesChoices={stylesChoices}
        styles={styles}
      />
      <Button className={props.buttonStyles} action={props.handleClick}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>)
};

export default ProductForm;