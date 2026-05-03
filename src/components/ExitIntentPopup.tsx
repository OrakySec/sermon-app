"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle, CheckSquare, Gift } from "lucide-react";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Verifica se já foi mostrado nesta sessão
    if (sessionStorage.getItem("exitPopupShown")) {
      setHasTriggered(true);
      return;
    }

    const triggerPopup = () => {
      if (!hasTriggered && !(window as any).isCTAClicked) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem("exitPopupShown", "true");
        document.body.style.overflow = "hidden"; // Bloqueia scroll
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // Se o mouse sair pelo topo da tela (intenção de fechar a aba/voltar)
      if (e.clientY <= 0 || e.clientY < 10) {
        triggerPopup();
      }
    };

    const handlePopState = () => {
      // Se o usuário clicou em algum link interno recentemente, ignoramos o gatilho de voltar
      if ((window as any).isCTAClicked) return;

      if (!hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem("exitPopupShown", "true");
        document.body.style.overflow = "hidden";
        // Empurra o estado novamente para que o popup permaneça aberto e o usuário precise clicar de novo para sair
        window.history.pushState(null, "", window.location.href);
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link) {
        // Marca como clicado para ignorar o gatilho (importante para âncoras # e links externos)
        (window as any).isCTAClicked = true;
        // Tempo de segurança para a navegação ocorrer sem disparar o popstate
        setTimeout(() => {
          (window as any).isCTAClicked = false;
        }, 1500);
      }
    };

    // Estratégia para Mobile: Empurra um estado no histórico para interceptar o botão "Voltar"
    window.history.pushState(null, "", window.location.href);

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleGlobalClick);
      document.body.style.overflow = "auto";
    };
  }, [hasTriggered]);

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-sans">
          {/* Overlay escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0d1b2e]/80 backdrop-blur-sm"
            onClick={closePopup}
          />
          
          {/* Caixa do Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[800px] max-h-[95vh] overflow-y-auto md:overflow-hidden bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row"
          >
            {/* Lado Esquerdo - Visual */}
            <div className="w-full md:w-[45%] bg-[#0d1b2e] p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/20 blur-[50px] rounded-full pointer-events-none"></div>
              <Gift size={48} className="text-[#D4AF37] mb-3 md:mb-6 md:w-16 md:h-16 relative z-10 animate-bounce" />
              <h3 className="text-white text-center font-bold text-[22px] md:text-[32px] mb-2 md:mb-4 relative z-10" style={{ fontFamily: "Georgia, serif" }}>
                Attendez&nbsp;!
              </h3>
              <p className="text-[#b3c5db] text-center text-[14px] md:text-[18px] leading-relaxed relative z-10 font-medium max-w-[280px] md:max-w-none">
                Ne partez pas sans vos 300 plans de prédications. J'ai une offre spéciale <span className="text-white font-bold">juste pour vous</span>.
              </p>
            </div>

            {/* Lado Direito - Detalhes da Oferta */}
            <div className="w-full md:w-[55%] p-6 md:p-10 flex flex-col justify-center bg-white relative z-10">
              <div className="mb-4 md:mb-6">
                <div className="inline-block bg-[#fef3c7] text-[#b45309] px-3 py-1 rounded-full text-[12px] md:text-[14px] font-bold mb-3 md:mb-4 shadow-sm border border-[#fde68a]">
                  Dernière Chance&nbsp;!
                </div>
                <h2 className="text-[26px] md:text-[38px] font-bold leading-tight mb-1 md:mb-2 text-[#0c182b]" style={{ fontFamily: "Georgia, serif" }}>
                  Obtenez tout pour <br/>
                  <span className="text-[#D4AF37]">seulement $2,00</span>
                </h2>
                <p className="text-gray-400 text-[14px] md:text-[18px] font-medium line-through">
                  Prix normal : $27,00
                </p>
              </div>

              <div className="bg-[#f8fafc] border border-gray-100 rounded-2xl p-4 mb-5 md:mb-8">
                <p className="text-gray-600 text-[13px] md:text-[15px] font-medium flex items-start gap-2 md:gap-3 leading-relaxed">
                  <AlertCircle size={20} className="text-[#D4AF37] flex-shrink-0 md:w-6 md:h-6" />
                  Cette page ne s'affichera qu'une seule fois. Si vous la fermez, vous perdrez cette réduction exclusive de -92%.
                </p>
              </div>

              <a 
                href="https://pay.hotmart.com/B105602483X?off=mn20efy8&checkoutMode=10"
                onClick={() => { (window as any).isCTAClicked = true; }}
                className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white px-5 py-3.5 md:px-6 md:py-4 rounded-full text-[16px] md:text-[20px] font-bold flex items-center justify-center gap-2 md:gap-3 transition-transform shadow-xl hover:scale-[1.02] active:scale-[0.98] mb-3 md:mb-4"
              >
                <CheckSquare size={20} className="flex-shrink-0 md:w-6 md:h-6" />
                <span className="text-center">Oui, je veux payer seulement $2</span>
              </a>
              
              <button 
                onClick={closePopup}
                className="text-gray-400 hover:text-gray-600 font-medium text-[13px] md:text-[15px] underline underline-offset-4 text-center mt-1 md:mt-2 transition-colors"
              >
                Non merci, je préfère payer le prix plein.
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
