import React from 'react';
import { IndianRupee, Clock, ShieldCheck, MapPin, Truck, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = {
  IndianRupee: IndianRupee,
  Clock: Clock,
  ShieldCheck: ShieldCheck,
  MapPin: MapPin,
  Truck: Truck,
  Zap: Zap
};

const FeatureCard = ({ feature }) => {
  const IconComponent = iconMap[feature.icon];

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zinc-200 bg-white">
      <CardContent className="p-8 text-center">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 text-[#3c096c] group-hover:bg-[#3c096c] group-hover:text-white transition-all duration-300">
          {IconComponent && <IconComponent size={32} />}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-zinc-900">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
