import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Because She Can"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="realitive z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-4 py-32 md:py-10">
        <div className="max-w-xl">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">
            A Because She Can Programme
          </p>

          <h1 className="text-white font-bold text-7xl">
            Where African Excellence{" "}
            <em className="italic font-bold">Ascends</em>
          </h1>

          <p className="text-white/85 text-xl max-w-10/12">
            A trusted mentorship ecosystem connecting ambitious Africans with
            world-class guidance. From free cohorts to curated pathways — grow
            at every stage.
          </p>

          <div className=" flex flex-wrap gap-4 py-10">
            <Link href="#" className="max-w-96 bg-[#cd0e34] text-white font-semibold text-sm  px-7 py-3.5 rounded hover:bg-[#a80b2a] transition-colors">
            Find Your Pathway
            </Link>
                        <Link href="#" className="border-2 border-white text-white font-semibold text-sm  px-7 py-3.5 rounded hover:bg-white/5 transition-colors">
          For Business 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
