import Header from "@/components/landing/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";


const imageUrl = "https://images.unsplash.com/photo-1694434948850-ed51bd461733?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Home() {
  return (
   <div className="">
   <section className="bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 h-full">
    <Header />
   <div className="max-w-7xl mx-auto my-0 px-4 flex items-start justify-center flex-col h-3/4">
   <h1 className="text-white text-4xl md:text-7xl font-bold font-sans">Wambilianga </h1>
   <p className="text-white text-3xl md:text-6xl font-semibold font-sans mt-4">& CO. Advocates</p>
   <p className="text-gray-200 text-lg md:text-xl font-sans mt-8 md:max-w-2xl leading-relaxed">Welcome to Wambilianga & CO. Advocates Law Firm, commissioners for oaths and notary public. We offer a wide range of legal services that your future and business can rely on.</p>
  <div className="absolute bottom-20 left-0 right-0 px-4 flex items-center justify-between gap-4 flex-col md:flex-row w-full md:max-w-1/2">
  <Button variant="default" className="flex items-center justify-between w-full md:w-1/2 font-sans font-semibold text-lg h-12">Get Started
   <ArrowRight size={30} />
   </Button>
   <Button variant="default" className="flex items-center justify-between w-full md:w-1/2 font-sans font-semibold text-lg h-12">Free Case Evaluation
   <BriefcaseBusiness size={30} />
   </Button>
  </div>
   </div>
  </div>
</section>
   </div>
  );
}
