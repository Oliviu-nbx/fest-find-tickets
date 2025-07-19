import EventCard from "./EventCard";

// Mock data for events
const mockEvents = [
  {
    id: "1",
    title: "Summer Music Festival 2024",
    date: "July 15, 2024",
    time: "6:00 PM",
    location: "Central Park, New York",
    price: "$45",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
    attendees: 2500,
    rating: 4.8,
    category: "Music"
  },
  {
    id: "2", 
    title: "Tech Innovation Summit",
    date: "August 3, 2024",
    time: "9:00 AM",
    location: "Convention Center, San Francisco",
    price: "$120",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    attendees: 800,
    rating: 4.9,
    category: "Technology"
  },
  {
    id: "3",
    title: "Food & Wine Experience", 
    date: "July 28, 2024",
    time: "3:00 PM",
    location: "Napa Valley, California",
    price: "$85",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    attendees: 150,
    rating: 4.7,
    category: "Food & Drink"
  },
  {
    id: "4",
    title: "Art Gallery Opening Night",
    date: "August 12, 2024", 
    time: "7:00 PM",
    location: "Modern Art Museum, Chicago",
    price: "$35",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    attendees: 200,
    rating: 4.6,
    category: "Art"
  },
  {
    id: "5",
    title: "Business Networking Mixer",
    date: "July 22, 2024",
    time: "6:30 PM", 
    location: "Downtown Hotel, Miami",
    price: "$25",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
    attendees: 120,
    rating: 4.5,
    category: "Business"
  },
  {
    id: "6",
    title: "Comedy Night Special",
    date: "August 5, 2024",
    time: "8:00 PM",
    location: "Comedy Club, Austin",
    price: "$30",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
    attendees: 300,
    rating: 4.9,
    category: "Entertainment"
  }
];

const EventGrid = () => {
  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Discover Amazing{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intimate workshops to massive festivals - find the perfect event for you
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-glow font-medium hover:underline transition-colors">
            View All Events →
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventGrid;