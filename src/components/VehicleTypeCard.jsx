import React from 'react';
import { Bike, Car, CarFront, Truck, TruckIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const iconMap = {
  Bike: Bike,
  Car: Car,
  CarFront: CarFront,
  Truck: Truck,
  TruckIcon: Truck
};

const VehicleTypeCard = ({ vehicle }) => {
  const IconComponent = iconMap[vehicle.icon];

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-amber-200 bg-white hover:border-[#3c096c]">
      <CardContent className="p-6">
        <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 text-[#3c096c] group-hover:from-[#3c096c] group-hover:to-[#5a189a] group-hover:text-white transition-all duration-300">
          {IconComponent && <IconComponent size={28} />}
        </div>
        <h3 className="text-lg font-bold mb-2 text-zinc-900 group-hover:text-[#3c096c] transition-colors">{vehicle.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{vehicle.description}</p>
        <div className="pt-3 border-t border-gray-200">
          <span className="text-xs font-semibold text-[#3c096c] bg-amber-50 px-3 py-1 rounded-full">
            {vehicle.capacity}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleTypeCard;
