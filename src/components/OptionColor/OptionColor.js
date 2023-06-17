import clsx from 'clsx';
const OptionColor = props => {

  const {
    colorsActive,
    colors,
    currentColor,
    setCurrentColor,
    optionLabel,
    colorsStyles,
    stylesChoices,
    styles
  } = props;

  return (
    <div className={colorsStyles}>
      <h3 className={optionLabel}>Colors</h3>
      <ul className={stylesChoices}>
        {colors.map(color =>
          <li key={color}>
            <button type="button"
              className={clsx(styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()], currentColor === color && colorsActive)}
              onClick={() => setCurrentColor(color)} />
          </li>)}
      </ul>
    </div>
  )
};

export default OptionColor;