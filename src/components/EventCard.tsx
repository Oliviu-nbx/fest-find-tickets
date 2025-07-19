import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
  attendees: number;
  rating: number;
  category: string;
}

const EventCard = ({ 
  title, 
  date, 
  time, 
  location, 
  price, 
  image, 
  attendees, 
  rating, 
  category 
}: EventCardProps) => {
  return (
    <div className="group bg-card rounded-xl border shadow-card-hover hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Event Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1">
          <div className="flex items-center gap-1 text-xs">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
      </div>
      
      {/* Event Details */}
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date} at {time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{attendees.toLocaleString()} attending</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">Starting from</span>
            <div className="text-2xl font-bold text-primary">{price}</div>
          </div>
          <Button variant="default" className="hover:scale-105">
            Get Tickets
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;