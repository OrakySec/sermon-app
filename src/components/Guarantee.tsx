import { Shield, Clock, CheckCircle2, Lock } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-24 bg-[#0c182b] font-sans">
      <div className="container mx-auto px-6 max-w-[1000px] flex flex-col items-center">
        
        {/* Top Icon */}
        <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
          <Shield size={32} className="text-[#0c182b]" strokeWidth={2.5} />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-[36px] md:text-[52px] font-bold leading-[1.1] mb-6">
            <span className="text-white">Votre Satisfaction Est</span>
            <br />
            <span className="text-[#D4AF37]">Garantie à 100 %</span>
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#b3c5db] max-w-2xl mx-auto font-medium leading-relaxed">
            Nous croyons en la qualité de notre produit. C'est pourquoi nous vous offrons une garantie de remboursement intégral sans poser de questions.
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full bg-[#182d48] rounded-[24px] p-8 md:p-12 shadow-2xl border border-white/5">
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            
            {/* Item 1 */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-[#0c182b]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-white text-[20px] font-bold mb-2">45 jours de garantie</h3>
                <p className="text-[#b3c5db] text-[16px] leading-relaxed">
                  Vous avez un mois et demi pour tester le produit sans aucun risque.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} className="text-[#0c182b]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-white text-[20px] font-bold mb-2">Remboursement complet</h3>
                <p className="text-[#b3c5db] text-[16px] leading-relaxed">
                  Si vous n'êtes pas satisfait, nous vous remboursons intégralement.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                <Lock size={24} className="text-[#0c182b]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-white text-[20px] font-bold mb-2">Paiement sécurisé</h3>
                <p className="text-[#b3c5db] text-[16px] leading-relaxed">
                  Toutes vos informations sont protégées par un cryptage SSL de niveau bancaire.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield size={24} className="text-[#0c182b]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-white text-[20px] font-bold mb-2">Zéro risque</h3>
                <p className="text-[#b3c5db] text-[16px] leading-relaxed">
                  Testez le contenu en toute tranquillité, sans engagement.
                </p>
              </div>
            </div>

          </div>

          {/* Inner Highlight Box */}
          <div className="bg-[#ffffff]/[0.03] border border-[#D4AF37]/30 rounded-[16px] p-6 text-center">
            <p className="text-white text-[16px] md:text-[18px] mb-2 leading-relaxed">
              Si vous estimez que le contenu ne vous a pas été utile, vous pouvez demander le remboursement intégral dans les <span className="text-[#D4AF37] font-bold">45 jours</span>.
            </p>
            <p className="text-[#D4AF37] font-bold text-[16px] md:text-[18px]">
              Paiement 100 % sécurisé — vos informations sont protégées.
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-[#738ba5] text-[15px] mt-8 max-w-2xl font-medium px-4">
          Notre priorité est votre satisfaction et le développement de votre ministère. Nous ne prenons aucun risque avec votre confiance.
        </p>

      </div>
    </section>
  );
}
