import PropTypes from "prop-types";
import "../styles/button.css";

export default function Button({ text, width, height }) {
  return (
    <a
      href="#"
      className="button"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <p className="first-text">{text}</p>
      <p className="second-text">{text}</p>
    </a>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
