import React from 'react';
import { TrendingUp, CalendarClock, Wallet, Headphones } from 'lucide-react';

const iconMap = {
  TrendingUp: TrendingUp,
  CalendarClock: CalendarClock,
  Wallet: Wallet,
  Headphones: Headphones
};

const DriverBenefitCard = ({ benefit }) => {
  const IconComponent = iconMap[benefit.icon];

  return (
    <div className="bg-white border border-purple-200 rounded-xl p-6 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-[#3c096c] flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent size={24} className="text-white" />}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-1">{benefit.title}</h3>
          <p className="text-gray-600 text-sm">{benefit.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DriverBenefitCard;
