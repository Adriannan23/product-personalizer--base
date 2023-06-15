import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {

  return (
    <form>
      <OptionSize />
      <OptionColor />
      <Button className={styles.button} action={handleClick}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>)
};

export default ProductForm;