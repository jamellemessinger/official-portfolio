import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <div className="flex-container">
        <Link href="/">Home</Link>
        <span>|</span>
        <Link href="/projects">Projects</Link>
        <span>|</span>
        <Link href="/about">About</Link>
        <span>|</span>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
