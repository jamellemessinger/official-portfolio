import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div className="flex-container">
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
