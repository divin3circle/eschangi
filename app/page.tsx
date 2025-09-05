"use client";

import Header from "@/components/landing/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";


const imageUrl = "https://images.unsplash.com/photo-1694434948850-ed51bd461733?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Home() {
  return (
   <div className="">
    <section className="bg-cover bg-center h-screen relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url(${imageUrl})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      <div className="relative z-10 h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Header />
        </motion.div>
        
        <div className="max-w-7xl mx-auto my-0 px-4 flex items-start justify-center flex-col h-3/4">
          <motion.h1 
            className="text-white text-4xl md:text-7xl font-bold font-sans"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Wambilianga 
          </motion.h1>
          
          <motion.p 
            className="text-white text-3xl md:text-6xl font-semibold font-sans mt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            & CO. Advocates
          </motion.p>
          
          <motion.p 
            className="text-gray-200 text-lg md:text-xl font-sans mt-8 md:max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Welcome to Wambilianga & CO. Advocates Law Firm, commissioners for oaths and notary public. We offer a wide range of legal services that your future and business can rely on.
          </motion.p>
          
          <motion.div 
            className="absolute bottom-20 left-0 right-0 px-4 flex items-center justify-between gap-4 flex-col md:flex-row w-full md:max-w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Button variant="default" className="flex items-center justify-between w-full font-sans font-semibold text-lg h-12">
                Get Started
                <ArrowRight size={30} />
              </Button>
            </motion.div>
            
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Button variant="default" className="flex items-center justify-between w-full font-sans font-semibold text-lg h-12">
                Free Case Evaluation
                <BriefcaseBusiness size={30} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
   </div>
  );
}
