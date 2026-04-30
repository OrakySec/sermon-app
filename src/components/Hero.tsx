"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const date = new Date();
    const formatted = date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    setToday(formatted);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-10 overflow-hidden font-sans"
      style={{
        background: "radial-gradient(circle at 50% 50%, #15263d 0%, #0d1b2e 100%)"
      }}
    >
      
      {/* Background glow exactly behind the mockup */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Text Content - Left Side */}
          <div className="lg:w-[50%] text-white flex flex-col items-center lg:items-start pt-4 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start"
            >
              {/* Red Badge with pulsing effect */}
              {today && (
                <motion.div 
                  animate={{ backgroundColor: ["#b03a3d", "#d14b4e", "#b03a3d"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="inline-block text-[#f8dada] px-5 py-2 rounded-[50px] text-[15px] font-bold mb-8 tracking-wide font-sans shadow-lg"
                >
                  Remise valable aujourd'hui seulement : {today}
                </motion.div>
              )}

              {/* Main Headline */}
              <h1 style={{ fontFamily: "Georgia, serif" }} className="text-[44px] md:text-[54px] lg:text-[62px] font-bold leading-[1.05] mb-6 tracking-tight">
                300 Plans de <br />
                Prédications <br />
                <span className="text-[#D4AF37]">Prêts à l'Emploi !</span>
              </h1>
              
              {/* Subheadline 1 */}
              <h2 style={{ fontFamily: "Georgia, serif" }} className="text-[22px] md:text-[28px] font-bold text-[#D4AF37] mb-8 leading-snug">
                Prêchez avec assurance et puissance.
              </h2>

              {/* Subheadline 2 */}
              <p className="text-[17px] md:text-[19px] text-[#b3c5db] mb-10 max-w-xl leading-relaxed font-sans font-medium">
                Ne manquez plus jamais une parole qui transforme les vies !
              </p>

              {/* CTA Button */}
              <a href="#benefits" className="bg-[#D4AF37] hover:brightness-110 text-[#0f1f33] px-6 lg:px-8 py-3.5 rounded-full text-[16px] lg:text-[18px] font-bold flex items-center justify-center w-full sm:w-max gap-3 transition-transform shadow-xl hover:scale-105 active:scale-95 font-sans">
                <span className="text-[20px] lg:text-[22px]">👉</span>
                Accédez dès maintenant aux 300 sermons.
              </a>
            </motion.div>
          </div>

          {/* Mockup Image - Right Side */}
          <div className="lg:w-[45%] flex justify-center lg:justify-end relative mt-12 lg:mt-0 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[450px] lg:max-w-[650px] lg:mr-[-5%]"
            >
              <Image
                src="/hero-mockup-v2.png"
                alt="300 Plans de Prédications Mockup"
                width={800}
                height={800}
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center w-full">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="text-[#D4AF37] opacity-80" size={30} strokeWidth={2} />
        </motion.div>
      </div>
    </section>
  );
}
