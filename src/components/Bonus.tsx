import Image from "next/image";
import { Sparkles, Gift } from "lucide-react";

export default function Bonus() {
  return (
    <section id="bonus" className="py-24 bg-[#0d1b2e] font-sans">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-[#D4AF37] text-[#0f1f33] px-5 py-1.5 rounded-full font-bold text-sm md:text-base flex items-center gap-2 mb-4 shadow-md">
            <Gift size={18} />
            <span>Offre Exclusive</span>
          </div>
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-[34px] md:text-[46px] font-bold leading-tight">
            <span className="text-white">Bonus Exclusif</span>
            <br />
            <span className="text-[#D4AF37]">Offert Aujourd'hui&nbsp;!</span>
          </h2>
        </div>

        {/* Bonus Card */}
        <div className="bg-[#172b46] border border-white/5 rounded-3xl p-8 md:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle inner glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/bonus-mockup.webp"
                  alt="Guide Prêcher avec Puissance"
                  width={500}
                  height={600}
                  className="w-full max-w-[420px] h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              
              {/* Tag */}
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-[16px] md:text-[18px] mb-4">
                <Sparkles size={20} strokeWidth={2.5} />
                <span>Bonus Gratuit</span>
              </div>
              
              {/* Title */}
              <h2 style={{ fontFamily: "Georgia, serif" }} className="text-[32px] md:text-[40px] font-bold text-white mb-5 leading-[1.15]">
                Guide : Prêcher avec Puissance
              </h2>

              {/* Description */}
              <p className="text-[17px] md:text-[19px] text-[#b3c5db] mb-6 leading-relaxed font-medium">
                Apprenez à interpréter les textes bibliques avec sagesse et profondeur. Ce guide exclusif vous révèle les techniques des grands prédicateurs pour transmettre la Parole avec impact et autorité.
              </p>

              {/* List */}
              <ul className="space-y-3 mb-8 text-[16px] md:text-[18px] text-[#d1e0f3] font-medium">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0"></span>
                  <span>Méthodes d'interprétation biblique avancées</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0"></span>
                  <span>Techniques de communication persuasive</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0"></span>
                  <span>Secrets pour captiver votre audience</span>
                </li>
              </ul>

              {/* CTA Button */}
              <a href="#pricing" className="bg-[#D4AF37] hover:brightness-110 text-[#0f1f33] px-8 py-4 rounded-[50px] text-[18px] md:text-[20px] font-bold flex items-center gap-3 transition-transform shadow-[0_10px_25px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 font-sans w-full md:w-auto justify-center">
                <span className="text-[22px]">🎁</span>
                Accéder à mon bonus maintenant
              </a>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
