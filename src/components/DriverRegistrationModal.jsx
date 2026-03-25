import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';

const DriverRegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleType: '',
    vehicleNumber: '',
    drivingLicense: '',
    address: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    toast.success('Registration submitted successfully! Our team will contact you within 24 hours.');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        vehicleType: '',
        vehicleNumber: '',
        drivingLicense: '',
        address: ''
      });
      onClose();
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-3">Registration Successful!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for joining CarryGo. Our team will review your application and contact you within 24 hours.
            </p>
            <Button
              onClick={onClose}
              className="bg-[#3c096c] hover:bg-[#5a189a] text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Join <span className="text-[#3c096c]">CarryGo</span> as a Driver
          </DialogTitle>
          <DialogDescription>
            Fill in your details below. We accept all vehicle types - bikes, autos, cabs, and tempos.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="mt-2"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="vehicleType">Vehicle Type *</Label>
              <Select
                value={formData.vehicleType}
                onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
                required
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bike">Bike/Scooter</SelectItem>
                  <SelectItem value="auto">Auto Rickshaw</SelectItem>
                  <SelectItem value="cab">Cab/Car</SelectItem>
                  <SelectItem value="tempo3">3-Wheeler Tempo</SelectItem>
                  <SelectItem value="tempo4">4-Wheeler Tempo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vehicleNumber">Vehicle Registration Number *</Label>
              <Input
                id="vehicleNumber"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                placeholder="MH12XX1234"
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="drivingLicense">Driving License Number *</Label>
              <Input
                id="drivingLicense"
                name="drivingLicense"
                value={formData.drivingLicense}
                onChange={handleChange}
                placeholder="MH1220210012345"
                required
                className="mt-2"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address">Address *</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your complete address"
              required
              rows={3}
              className="mt-2"
            />
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <h4 className="font-semibold text-zinc-900 mb-2">Required Documents:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Valid Driving License</li>
              <li>• Aadhaar Card</li>
              <li>• Vehicle Registration Certificate (RC)</li>
              <li>• Vehicle Insurance</li>
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              * Our team will contact you for document verification
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#3c096c] hover:bg-[#5a189a] text-white font-semibold"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DriverRegistrationModal;
