"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AlarmClock, Download, Sparkles, Shield, Clock, CreditCard, CheckCircle2, Lock, CheckSquare } from "lucide-react";

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos = 300 segundos

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return (
    <section id="pricing" className="py-20 bg-white font-sans">
      <div className="container mx-auto px-6 max-w-[1100px] flex flex-col items-center">
        
        {/* Top Countdown Badge */}
        <div className="bg-[#f07b7b] text-white px-5 py-2 rounded-full font-bold text-sm md:text-base flex items-center gap-2 mb-6 shadow-sm">
          <AlarmClock size={18} />
          <span suppressHydrationWarning>Le prix promotionnel prend fin dans : {formattedTime}</span>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-[40px] md:text-[52px] font-bold leading-tight mb-4">
            <span className="text-[#0c182b]">Offre Spéciale</span>
            <br />
            <span className="text-[#D4AF37]">Limitée</span>
          </h2>
          <p className="text-[18px] text-gray-500 font-medium max-w-2xl mx-auto">
            Investissez dans votre ministère dès aujourd'hui et transformez votre façon de prêcher
          </p>
        </div>

        {/* Pricing Card */}
        <div className="w-full border-2 border-[#D4AF37] rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(212,175,55,0.15)] bg-white relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Image Side */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D4AF37]/15 blur-[80px] rounded-full pointer-events-none"></div>
              <Image 
                src="/hero-mockup-v2.png" 
                alt="300 Plans de Sermons" 
                width={500} 
                height={500} 
                className="relative z-10 w-full max-w-[420px] h-auto drop-shadow-2xl"
              />
            </div>

            {/* Right Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              
              {/* Price Details */}
              <div className="mb-8 w-full">
                <p className="text-[20px] text-gray-400 line-through font-medium mb-1">
                  Prix normal : $27,00
                </p>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[#0c182b] text-[64px] font-black leading-none tracking-tight">
                    $ 7,00
                  </span>
                  <span className="text-[#ef4444] text-[24px] font-bold">
                    -74%
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-[18px]">
                  <span>💰</span>
                  <span>Économisez $20,00 aujourd'hui&nbsp;!</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 w-full">
                {[
                  { icon: Download, text: "300 Plans de Prédications Prêts à l'Emploi" },
                  { icon: Sparkles, text: 'Bonus : "Prêcher avec puissance"' },
                  { icon: Shield, text: "Garantie de remboursement de 45 jours" },
                  { icon: Clock, text: "Accès immédiat et illimité" },
                  { icon: CreditCard, text: "Paiement 100 % sécurisé" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-[17px] md:text-[18px] text-[#4b5563] font-medium">
                    <CheckCircle2 size={24} className="text-[#22c55e] flex-shrink-0" fill="#22c55e" stroke="white" />
                    <item.icon size={20} className="text-[#D4AF37] flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="w-full flex flex-col items-center">
                <a 
                  href="https://pay.hotmart.com/B105602483X?checkoutMode=10"
                  onClick={() => {
                    const eventId = "evt_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
                    if (typeof window !== 'undefined' && (window as any).fbq) {
                      (window as any).fbq('trackCustom', 'ClickCheckoutCTA', {}, { eventID: eventId });
                    }
                    fetch('/api/capi', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        eventName: 'ClickCheckoutCTA',
                        eventId: eventId,
                        eventUrl: window.location.href,
                        userAgent: navigator.userAgent
                      })
                    }).catch(console.error);
                  }}
                  className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-5 rounded-[20px] text-[20px] md:text-[22px] font-bold flex items-center justify-center gap-3 transition-transform shadow-[0_10px_25px_rgba(22,163,74,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <CheckSquare size={24} />
                  Obtenir un accès immédiat
                </a>
                <div className="flex items-center gap-2 mt-4 text-[14px] text-gray-500 font-medium">
                  <Lock size={14} className="text-gray-800" />
                  <span>Transaction sécurisée et cryptée</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 bg-[#0c182b] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 shadow-lg">
          <Shield size={24} className="text-[#D4AF37]" />
          <span className="font-bold text-[18px] md:text-[20px]">Satisfait ou remboursé pendant 45 jours</span>
        </div>

      </div>
    </section>
  );
}
