import Button from "./Button";

const Navlinks = [
  { Label: "Pathways", href: "#" },
  { Label: "For Business", href: "#" },
  { Label: "Free Cohort", href: "#" },
  { Label: "Marketplace", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 ">
      
        <p className="font-bold text-2xl text-[#53093a]" >
            Ascendency  <sup className="text-[10px] text-gray-500 font-light ">by Because She Can</sup>
        </p>

      
      <div className="flex  gap-8">
        {Navlinks.map((link, index) => (
        <a key={index} href={link.href} className="text-sm text-[#745168]">
          {link.Label}
        </a>
      ))}
      </div>
      <Button/>
    </nav>
  );
}