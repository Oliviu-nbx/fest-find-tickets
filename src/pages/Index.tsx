import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventGrid from "@/components/EventGrid";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EventGrid />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;
