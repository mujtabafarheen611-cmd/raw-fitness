/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Dumbbell, 
  Zap, 
  HeartPulse, 
  Beef, 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  ChevronRight, 
  CheckCircle2,
  Users,
  Award,
  ArrowRight
} from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Types & Constants ---

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
}

interface PricePlan {
  id: string;
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

const SERVICES: Service[] = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Advanced weightlifting and circuit training programs designed to build functional power.",
    icon: <Dumbbell className="w-8 h-8" />,
    color: "from-orange-500 to-red-600"
  },
  {
    id: "hiit",
    title: "HIIT & Cardio",
    description: "High-Intensity Interval Training to maximize fat burn and improve cardiovascular health.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: "personal",
    title: "Personal Coaching",
    description: "One-on-one sessions with certified trainers to reach your specific fitness goals.",
    icon: <HeartPulse className="w-8 h-8" />,
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "diet",
    title: "Nutrition Guidance",
    description: "Basic to advanced diet plans tailored to your body type and workout intensity.",
    icon: <Beef className="w-8 h-8" />,
    color: "from-blue-400 to-indigo-500"
  }
];

const PRICING: PricePlan[] = [
  {
    id: "monthly",
    title: "Monthly",
    price: "₹1,300",
    period: "per month",
    features: ["Access to all equipment", "Free storage lockers", "Standard diet chart", "Locker access"]
  },
  {
    id: "quarterly",
    title: "Quarterly",
    price: "₹3,000",
    period: "per 3 months",
    popular: true,
    features: ["Access to all equipment", "2 Trial PT sessions", "Personalized diet chart", "Free gym t-shirt"]
  },
  {
    id: "yearly",
    title: "Yearly",
    price: "₹7,500",
    period: "per year",
    features: ["Best value for money", "Full body assessment", "Premium lockers", "Exclusive events access"]
  }
];

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center md:text-left">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-2 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-sans font-bold text-white leading-tight"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white pb-20">
      
      {/* Navigation - Sophisticated Style */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-brand-bg/95 backdrop-blur-md py-4 border-brand-border" : "bg-transparent py-8 border-transparent"}`}>
        <div className="max-w-[1440px] mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-black tracking-tighter text-white uppercase leading-none">
              RAW <span className="text-brand-accent">FITNESS</span>
            </span>
            <div className="status-pill hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse" />
              Open & Operational
            </div>
          </div>
          <div className="hidden md:flex gap-10 items-center text-[11px] font-bold uppercase tracking-widest text-brand-dim">
            <a href="#services" className="hover:text-brand-accent transition-colors">Services</a>
            <a href="#pricing" className="hover:text-brand-accent transition-colors">Pricing</a>
            <a href="#location" className="hover:text-brand-accent transition-colors">Location</a>
            <button className="bg-brand-accent text-white px-6 py-2.5 rounded-sm hover:brightness-110 transition-all">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Main Grid Layout from Sophisticated Design */}
      <main className="max-w-[1440px] mx-auto px-10 pt-32 lg:pt-48">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 lg:gap-32">
          
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-[14vw] lg:text-[110px] font-black tight-heading uppercase mb-12">
                REAL POWER.<br />
                RAW <span className="text-brand-accent italic">RESULTS.</span>
              </h1>

              {/* Rating Bar */}
              <div className="flex flex-wrap gap-12 lg:gap-20 mb-20">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-brand-accent">4.9 ★</span>
                  <span className="text-[11px] text-brand-dim uppercase tracking-widest font-bold">Average Rating</span>
                </div>
                <div className="flex flex-col gap-1 h-full border-l border-brand-border pl-12 lg:pl-20">
                  <span className="text-3xl font-bold text-white">80+</span>
                  <span className="text-[11px] text-brand-dim uppercase tracking-widest font-bold">Verified Reviews</span>
                </div>
                <div className="flex flex-col gap-1 h-full border-l border-brand-border pl-12 lg:pl-20">
                  <span className="text-3xl font-bold text-white">CSI Layout</span>
                  <span className="text-[11px] text-brand-dim uppercase tracking-widest font-bold">Primary Location</span>
                </div>
              </div>

              {/* Services Tags Grid */}
              <div className="mb-12">
                <span className="text-[11px] text-brand-dim uppercase tracking-widest font-bold block mb-6">Our Core Services</span>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {SERVICES.map((s) => (
                    <div key={s.id} className="service-tag group">
                      <span className="font-medium text-white group-hover:text-brand-accent transition-colors">{s.title}</span>
                    </div>
                  ))}
                  <div className="service-tag group">
                    <span className="font-medium text-white group-hover:text-brand-accent transition-colors">Beginner Programs</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Pricing Aside */}
          <aside>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-brand-card border border-brand-border p-10 rounded-xl lg:sticky lg:top-32"
            >
              <span className="text-[11px] text-brand-dim uppercase tracking-widest font-bold block mb-8">Membership Plans</span>
              
              <div className="space-y-0">
                {PRICING.map((plan, i) => (
                  <div key={plan.id} className={`flex justify-between items-center py-6 ${i !== PRICING.length - 1 ? 'border-b border-brand-border' : ''}`}>
                    <div className="flex flex-col">
                      <span className="text-brand-dim text-sm">{plan.title}</span>
                      {plan.popular && (
                        <span className="text-[9px] text-brand-accent border border-brand-accent/30 px-1.5 py-0.5 mt-1 rounded-sm uppercase font-black tracking-tighter w-fit">
                          Best Value
                        </span>
                      )}
                    </div>
                    <span className={`text-xl font-bold ${plan.popular ? 'text-brand-accent' : 'text-white'}`}>{plan.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-4">
                <span className="text-[10px] text-brand-dim uppercase tracking-widest font-bold block">Why Raw Fitness?</span>
                <p className="text-[13px] text-brand-dim leading-relaxed">
                  Affordable high-performance environment with modern equipment and expert guidance for all fitness levels.
                </p>
                <button className="w-full mt-6 bg-white text-black py-4 uppercase font-black text-xs tracking-[0.2em] hover:bg-brand-accent hover:text-white transition-all">
                  Get Started →
                </button>
              </div>
            </motion.div>
          </aside>

        </div>
      </main>

      {/* Immersive Image Section */}
      <section className="max-w-[1440px] mx-auto px-10 py-32">
        <div className="relative aspect-[21/9] rounded-sm overflow-hidden border border-brand-border group">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
            alt="Gym vibe"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12">
            <h2 className="text-4xl font-black uppercase tight-heading mb-4">Elite Environment</h2>
            <p className="text-brand-dim text-sm max-w-md uppercase tracking-wider font-medium">Designated zones for Strength, HIIT, and Cardio. Cleaned hourly. Built for focus.</p>
          </div>
        </div>
      </section>

      {/* Location Footer from Design */}
      <footer id="location" className="max-w-[1440px] mx-auto px-10 pb-20 mt-12 pt-12 border-t border-brand-border">
        <div className="flex flex-col md:row justify-between items-end gap-12">
          <div className="max-w-xl">
             <div className="flex items-center gap-2 mb-4">
               <span className="text-lg font-black uppercase text-white">Raw Fitness Tumakuru</span>
             </div>
             <p className="text-brand-dim text-sm leading-relaxed uppercase tracking-wider font-semibold">
               📍 2nd Floor, Mahalakshmi Complex, Bangalore–Honnavar Highway, CSI Layout, Tumakuru, Karnataka 572102
             </p>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-brand-dim uppercase tracking-widest font-bold block mb-2">Operational Timings</span>
            <span className="text-white font-black text-lg">5:30 AM – 9:30 PM <span className="text-brand-dim text-sm font-normal">MON-SAT</span></span>
          </div>
        </div>
        
        <div className="mt-20 flex justify-between items-center text-[9px] text-neutral-800 uppercase font-black tracking-[0.3em]">
          <span>© 2024 RAW FITNESS</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
