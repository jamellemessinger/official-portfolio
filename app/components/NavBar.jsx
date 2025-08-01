import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar flex justify-between p-2 border-b border-gray-300">
      <img
        className="md:hidden rounded-full"
        src="/images/TMlogo.JPG"
        width="40"
      ></img>
      <div className="hidden md:block">Jamelle Messinger</div>
      <div className="flex gap-2 items-center">
        <Link href="/">Home</Link>
        <span>|</span>
        <Link href="">Projects</Link>
        <span>|</span>
        <Link href="">About</Link>
        <span>|</span>
        <Link href="">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
``;
