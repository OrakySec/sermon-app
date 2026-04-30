"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Smartphone, Shield, Headphones, CheckSquare } from "lucide-react";

const faqs = [
  {
    icon: Smartphone,
    question: "Puis-je y accéder depuis mon téléphone ?",
    answer: "Absolument ! Le contenu est 100 % compatible avec tous les appareils : smartphones, tablettes, ordinateurs. Vous pouvez consulter vos plans de prédication où que vous soyez, à tout moment."
  },
  {
    icon: Shield,
    question: "Le paiement est-il sécurisé ?",
    answer: "Oui, totalement. Nous utilisons Hotmart, une plateforme de paiement reconnue mondialement et certifiée PCI DSS. Toutes vos informations sont cryptées et protégées par les plus hauts standards de sécurité."
  },
  {
    icon: Headphones,
    question: "Ai-je droit à une assistance si j'ai des questions ?",
    answer: "Bien sûr ! Notre équipe est disponible pour vous accompagner. Si vous rencontrez un problème ou avez une question sur le contenu, contactez-nous et nous vous aiderons rapidement."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#fafbfc] font-sans">
      <div className="container mx-auto px-6 max-w-[900px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-[40px] md:text-[56px] font-bold leading-[1.1] mb-6">
            <span className="text-[#0c182b]">Questions</span>
            <br />
            <span className="text-[#D4AF37]">Fréquentes</span>
          </h2>
          <p className="text-[18px] text-[#4b5563] font-medium">
            Toutes les réponses à vos interrogations
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5 mb-16">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl md:rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-white hover:bg-gray-50/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center gap-5 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <faq.icon size={24} className="text-[#0c182b]" strokeWidth={2} />
                  </div>
                  <span className="text-[18px] md:text-[22px] font-bold text-[#0c182b]">{faq.question}</span>
                </div>
                {openIndex === i ? (
                  <ChevronUp className="text-[#D4AF37] flex-shrink-0 ml-4" size={28} />
                ) : (
                  <ChevronDown className="text-[#D4AF37] flex-shrink-0 ml-4" size={28} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-8 pt-2 pl-[88px] md:pl-[104px]">
                  <p className="text-[#4b5563] text-[16px] md:text-[18px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[#6b7280] text-[18px] font-medium mb-6">
            Toutes vos questions ont trouvé réponse ?
          </p>
          <a href="https://pay.hotmart.com/B105602483X" className="w-full md:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white px-8 md:px-12 py-5 rounded-full text-[18px] md:text-[20px] font-bold flex items-center justify-center gap-3 transition-transform shadow-[0_10px_25px_rgba(22,163,74,0.3)] hover:scale-[1.02] active:scale-[0.98] mb-4">
            <CheckSquare size={24} />
            Vous avez répondu à mes questions, allons-y !
          </a>
          <p className="text-[#9ca3af] text-[14px] md:text-[15px] font-medium">
            Accès immédiat après votre commande
          </p>
        </div>

      </div>
    </section>
  );
}
