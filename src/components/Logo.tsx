import React from 'react';
import { storeConfig } from '../config/store';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-11 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex-shrink-0 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold shadow-lg shadow-rose-600/20 rounded-xl p-1.5 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M30 15 L70 15 L85 90 L15 90 Z" fill="none" stroke="currentColor" strokeWidth="6" /><path d="M40 15 C40 30 60 30 60 15" fill="none" stroke="currentColor" strokeWidth="5" /><circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-base sm:text-lg tracking-tight leading-tight">
          {storeConfig.storeNameAr}
        </span>
        <span className="text-[10px] opacity-75 font-medium">
          {storeConfig.companyNameAr}
        </span>
      </div>
    </div>
  );
};
