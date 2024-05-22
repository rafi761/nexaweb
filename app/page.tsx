import { AboutUs } from "@/components/AboutUs";
import Hero from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Testimoni } from "@/components/Testimoni";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-background flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <AboutUs />
        {/* <Portfolio /> */}
        <Testimoni />
      </div>
    </main>
  );
}
