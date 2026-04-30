import Image from "next/image";
import { Heart, Zap, Smartphone, Target, Users, Lightbulb, Crown } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    image: "/1.png",
    icon: Heart,
    title: "Des messages qui touchent les cœurs",
    description: "Chaque plan est conçu pour connecter profondément avec votre congrégation et inspirer une transformation authentique.",
    imageLeft: true
  },
  {
    image: "/2.png",
    icon: Zap,
    title: "Gagnez un temps précieux",
    description: "Fini les heures passées à préparer vos sermons. Concentrez-vous sur votre ministère pendant que nous préparons le contenu.",
    imageLeft: false
  },
  {
    image: "/3.png",
    icon: Smartphone,
    title: "Une structure biblique solide",
    description: "Tous les plans sont fondés sur les Écritures et organisés pour une prédication claire, percutante et mémorable.",
    imageLeft: true
  },
  {
    image: "/4.png",
    icon: Target,
    title: "Inspirez et mobilisez",
    description: "Encouragez votre communauté à agir avec des messages pratiques qui transforment la foi en action quotidienne.",
    imageLeft: false
  },
  {
    image: "/5.png",
    icon: Users,
    title: "Développez votre ministère",
    description: "Avec des ressources constantes à portée de main, vous pouvez vous concentrer sur la croissance spirituelle de vos fidèles.",
    imageLeft: true
  },
  {
    image: "/6.png",
    icon: Lightbulb,
    title: "Prêchez avec créativité",
    description: "Découvrez des approches nouvelles et fraîches pour présenter des vérités éternelles de manière captivante.",
    imageLeft: false
  },
  {
    image: "/7.png",
    icon: Crown,
    title: "Excellence et autorité",
    description: "Prêchez avec la confiance et l'autorité que donne une préparation exceptionnelle et une base théologique solide.",
    imageLeft: true
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 style={{ fontFamily: "Georgia, serif" }} className="text-[40px] md:text-[48px] font-bold leading-tight mb-6">
            <span className="text-[#0c182b]">Impactez des vies avec des messages</span>
            <br />
            <span className="text-[#D4AF37]">inspirés et puissants</span>
          </h2>
          <p className="text-[18px] text-gray-600 font-medium max-w-2xl mx-auto">
            Transformez votre ministère avec des ressources qui vous permettent de prêcher avec excellence et autorité
          </p>
        </div>

        {/* Benefits Rows */}
        <div className="flex flex-col gap-20 md:gap-32 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${benefit.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={benefit.image} 
                    alt={benefit.title} 
                    width={600} 
                    height={600} 
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6 shadow-md">
                  <benefit.icon size={28} className="text-[#0c182b]" strokeWidth={2.5} />
                </div>
                <h3 style={{ fontFamily: "Georgia, serif" }} className="text-[32px] md:text-[38px] font-bold text-[#0c182b] mb-5 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-[18px] text-gray-600 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Final CTA Button */}
        <div className="flex justify-center mt-12">
          <a href="#bonus" className="bg-[#D4AF37] hover:brightness-110 text-[#0f1f33] px-10 py-4 rounded-[50px] text-[22px] font-bold flex items-center gap-3 transition-transform shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 font-sans">
            <span className="text-[24px]">🔥</span>
            Oui, je veux prêcher avec autorité.
          </a>
        </div>

      </div>
    </section>
  );
}
