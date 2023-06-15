const OptionColor = props => {

  return (
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
    </div>)
};

export default OptionColor;