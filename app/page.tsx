import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <LeadForm />
    </main>

    <Footer />
  </>
);
};