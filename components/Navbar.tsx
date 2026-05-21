import { useEffect, useState } from "react";
import Link from "next/link";

const navlinks = [
  { Label: "Pathways", href: "#pathways" },
  { Label: "For Business", href: "#business" },
  { Label: "Free Cohort", href: "#cohort" },
  { Label: "Marketplace", href: "#marketplace" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 bg-white duration-300 ${scrolled ? "top-0" : "top-12.5"}`}
    >
      <nav className="max-w-7xl max-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-[#53093a] font-bold text-2xl tracking-tight">
            Ascendency
          </span>
          <span className="text-gray-400 text-xs font-normal">
            by Because She Can
          </span>
        </Link>

        <ul className="md:flex items-center gap-8">
          {navlinks.map((link) => (
            <li key={link.Label}>
              <Link
                href={link.href}
                className="text-[#370627b3] text-sm font-medium hover:text-[#cd0e34] transition-colors"
              >
                {link.Label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/auth"
          className="bg-[#cd0e34] text-white text-sm font-semibold px-5 py-3 rounded hover:bg-[#a80b2a] transition-colors"
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}
