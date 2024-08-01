import dynamicLoad from "next/dynamic";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const RecentProjects = dynamicLoad(() => import("@/components/RecentProjects"));
const Clients = dynamicLoad(() => import("@/components/Clients"));
const Experience = dynamicLoad(() => import("@/components/Experience"));
const Approach = dynamicLoad(() => import("@/components/Approach"));
const Footer = dynamicLoad(() => import("@/components/Footer"));

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
