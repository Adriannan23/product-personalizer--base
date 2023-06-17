import clsx from 'clsx';
const OptionSize = props => {

  const { sizesStyles,
    sizesOptionLabel,
    stylesChoices,
    sizesActive,
    currentSize,
    setCurrentSize,
    sizes } = props;

  return (
    <div className={sizesStyles}>
      <h3 className={sizesOptionLabel}>Sizes</h3>
      <ul className={stylesChoices}>
        {props.sizes.map(size => <li key={size.name}><button type="button"
          className={clsx({ [sizesActive]: currentSize === size })}
          onClick={() => setCurrentSize(size)}
        >{size.name}
        </button>
        </li>)}
      </ul>
    </div>)
};

export default OptionSize;