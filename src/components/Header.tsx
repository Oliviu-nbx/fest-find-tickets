import { Button } from "@/components/ui/button";
import { CalendarPlus, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary rounded-lg p-2">
              <CalendarPlus className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EventHub
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#events" className="text-foreground hover:text-primary transition-colors">
              Browse Events
            </a>
            <a href="#create" className="text-foreground hover:text-primary transition-colors">
              Create Event
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="event" size="sm">
              <User className="h-4 w-4" />
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Create Event
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;