import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-black.svg";
import gsap from "gsap";

export default function Header() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  });
  const animation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.25 * direction;
    requestAnimationFrame(animation);
  };
  return (
    <nav className="flex w-full h-nav justify-between items-center bg-light px-4">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-max" />
      </Link>
      <div className="flex bg-dark rounded-sm w-60 px-2">
        <div className="flex whitespace-nowrap font-semibold leading-8 text-lg text-light gap-1 w-full relative overflow-hidden">
          <h1 ref={firstText}>Digital Marketing Growth Partners ★</h1>
          <h1 ref={secondText}>Digital Marketing Growth Partners ★</h1>
        </div>
      </div>
      <ul className="flex font-semibold gap-8">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to={"/service"}>Services</Link>
        </li>
        <li>
          <Link to={"/team"}>Teams</Link>
        </li>
      </ul>
      <Link to={"/contact"} className="font-semibold">
        Contact
      </Link>
      {/* <MenuButton /> */}
    </nav>
  );
}
