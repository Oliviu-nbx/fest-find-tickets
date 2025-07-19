import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-events.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Event stage with colorful lights" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Ultimate Event Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Sell Tickets,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Create Experiences
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up delay-200">
            The complete platform for event organizers to create, manage, and sell tickets 
            for unforgettable experiences. From intimate gatherings to massive festivals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
            <Button variant="hero" size="lg" className="text-lg">
              Start Selling Tickets
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="event" size="lg" className="text-lg">
              Browse Events
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in delay-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">10K+</div>
              <div>Events Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">500K+</div>
              <div>Tickets Sold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div>Happy Organizers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;