import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Bonus from "@/components/Bonus";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Bonus />
      <Pricing />
      <Guarantee />
      <FAQ />

      <footer className="py-10 bg-[#fafbfc] border-t border-gray-200">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <p className="text-[#6b7280] font-medium text-[15px] mb-1">
            © 2025 - 300 Plans de Prédications. Tous droits réservés.
          </p>
          <p className="text-[#9ca3af] font-medium text-[14px]">
            Plateforme de paiement sécurisée par Hotmart
          </p>
        </div>
      </footer>
    </main>
  );
}
