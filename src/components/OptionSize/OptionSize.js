const OptionSize = props => {

  return (
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
    </div>)
};

export default OptionSize;