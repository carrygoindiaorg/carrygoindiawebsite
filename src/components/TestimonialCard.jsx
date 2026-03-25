import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zinc-200 bg-white relative overflow-hidden">
      <div className="absolute top-4 right-4 text-[#3c096c] opacity-20">
        <Quote size={48} />
      </div>
      <CardContent className="p-8 relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-14 h-14 bg-[#3c096c] text-white font-semibold text-lg">
            <AvatarFallback className="bg-[#3c096c] text-white">{testimonial.avatar}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-zinc-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#7209b7] text-[#7209b7]" />
          ))}
        </div>
        
        <p className="text-gray-600 leading-relaxed italic">"{testimonial.comment}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
