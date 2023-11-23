export default function Header() {
  return (
    <nav className="flex justify-between bg-gray-200 p-4">
      <h1>Company Profile</h1>
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
    </nav>
  );
}
