import AnnouncementBar from "@/components/Announcementbar";
import HeroSection from "@/components/HeroSection";
import Marketplace from "@/components/Marketplace";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/*Announcemnet Bar-scroll away natrually*/}
      <AnnouncementBar />
      <Navbar />
      {/* NAvbar -fixed
offset=announcent = 40px +64px =104
 */}

      <div className="pt-16">
        <HeroSection />
       <Marketplace/>
      </div>
    </>
  );
}
