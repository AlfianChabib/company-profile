import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <nav className="flex justify-between items-center bg-dark p-4">
      <h1 className="font-semibold text-3xl">DD BYGG</h1>
      <ul className="flex gap-8">
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
