/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from "react";
import Logo from "../assets/images/logo-black.svg";
import gsap from "gsap";

export default function LogoHeader() {
  const [textHover, setTextHover] = useState(false);
  const logoRef = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    logoRef.current.addEventListener("mouseover", () => {
      setTextHover(true);
    });
    logoRef.current.addEventListener("mouseout", () => {
      setTextHover(false);
    });
    requestAnimationFrame(animation);
  }, [textHover]);

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
    <div className="flex gap-1 w-40">
      <img ref={logoRef} src={Logo} alt="logo" className="w-max" />
      <div
        className={`flex bg-dark rounded-[3px] transition-all ${
          textHover ? "w-32 px-2" : "w-0 px-0"
        }  `}
      >
        <div className="flex whitespace-nowrap font-semibold leading-8 text-lg text-light gap-1 w-full relative overflow-hidden">
          <h1 ref={firstText}>Digital Marketing Growth Partners -</h1>
          <h1 ref={secondText}>Digital Marketing Growth Partners -</h1>
        </div>
      </div>
    </div>
  );
}
