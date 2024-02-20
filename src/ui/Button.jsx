/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "focus-yellow-300 text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300   focus:ring-offset-2 disabled:cursor-not-allowed   ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    round: base + "px-2.5 text-sm py-1 md:px-3.5 md:py-2",
    secondary:
      "border-2 text-sm border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 focus-yellow-300 inline-block rounded-full transparent font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300   focus:ring-offset-2 disabled:cursor-not-allowed   ",
    small: base + "px-4 text-xs py-2 md:px-5 md:py-2.5",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
export default Button;
