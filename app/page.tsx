import { AboutUs } from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { Testimoni } from "@/components/Testimoni";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-background flex flex-col justify-center items-center overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <AboutUs />
        <Portfolio />
        <Pricing />
        <Testimoni />
      </div>
      <Footer />
    </main>
  );
}
