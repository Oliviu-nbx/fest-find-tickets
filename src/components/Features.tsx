import { Zap, Shield, BarChart3, Headphones, CreditCard, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Create your event and start selling tickets in under 5 minutes with our intuitive platform."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Bank-level security with fraud protection and PCI compliance for all transactions."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track sales, attendee demographics, and revenue with powerful insights dashboard."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert support team available around the clock to help you succeed."
  },
  {
    icon: CreditCard,
    title: "Flexible Pricing",
    description: "Competitive fees with no setup costs. You only pay when you sell tickets."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Sell tickets worldwide with multi-currency support and localization."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and features designed to help event organizers create, 
            manage, and grow their events effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-xl border bg-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-primary rounded-lg p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;