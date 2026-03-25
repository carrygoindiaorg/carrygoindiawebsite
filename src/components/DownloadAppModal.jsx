import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Smartphone, AppleIcon, Chrome } from 'lucide-react';

const DownloadAppModal = ({ isOpen, onClose }) => {
  const handleDownload = (platform) => {
    // Mock download action
    alert(`Redirecting to ${platform} store...`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Download <span className="text-[#3c096c]">CarryGo</span> App
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Get the app on your device and start riding today!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-6">
          <Button
            onClick={() => handleDownload('Google Play')}
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
            size="lg"
          >
            <Chrome className="mr-3" size={24} />
            Download for Android
          </Button>

          <Button
            onClick={() => handleDownload('App Store')}
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
            size="lg"
          >
            <AppleIcon className="mr-3" size={24} />
            Download for iOS
          </Button>

          <div className="pt-4 text-center">
            <p className="text-sm text-gray-500">
              Available on both Android and iOS platforms
            </p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
          <div className="flex items-start gap-3">
            <Smartphone className="text-[#3c096c] flex-shrink-0 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-zinc-900 mb-1">Coming Soon!</h4>
              <p className="text-sm text-gray-600">
                Our app is currently under development. Sign up to get notified when it launches!
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadAppModal;
