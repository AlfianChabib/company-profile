import LogoHeader from "./LogoHeader";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <nav className="flex w-full justify-between items-center bg-light py-4 px-6">
      <LogoHeader />
      <ul className="gap-8 hidden">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
      </ul>
      <MenuButton />
    </nav>
  );
}
