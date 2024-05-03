import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4 sticky top-0 z-10">
      <div className="flex flex-wrap justify-between items-center container mx-auto">
      <img alt="Hogwarts" src="https://i.imgur.com/dUWAqJE.png" width="30" height="30" />
        <ul className="flex flex-wrap justify-between items-center p-1">
          <li>
            <Link className="px-2 py-1 text-white" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="px-2 py-1 text-white" href="/Dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
