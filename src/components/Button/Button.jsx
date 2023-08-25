import "./Button.css";

export const Button = ({
  label = "Inicial",
  type = "normal",
  textColor = "#5a84a2",
  transform = "none",
  spacing = "2px",
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      className={[type].join()}
      style={{ letterSpacing: `${spacing}px` }}
    >
      <span
        style={{
          color: textColor,
          textTransform: `${transform}`,
        }}
      >
        {label}
      </span>
    </a>
  );
};
