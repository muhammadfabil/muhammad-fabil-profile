import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

import OrganizationExperiences from "@/components/OrganizationExperiences";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center
     items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full text-white">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <test />
        
        <Grid />
        <RecentProjects />
        <Experiences />
        <OrganizationExperiences />
        <Footer />
      </div>
    </main>
  );
}
