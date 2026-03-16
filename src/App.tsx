/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Droplets, 
  Cpu, 
  Sprout, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Menu, 
  X,
  ArrowRight,
  Zap,
  Globe,
  Settings
} from 'lucide-react';

const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`relative flex items-center ${className}`}>
    <svg viewBox="0 0 400 150" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Globe Element */}
      <defs>
        <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </radialGradient>
      </defs>
      <circle cx="80" cy="60" r="55" fill="url(#globeGradient)" opacity="0.9" />
      
      {/* ERK Text - Styled to match the provided image */}
      <text 
        x="100" 
        y="110" 
        fontFamily="Arial Black, sans-serif" 
        fontSize="110" 
        fontWeight="900" 
        fill="#475569" 
        letterSpacing="-2"
      >
        ERK
      </text>
    </svg>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <Logo className="w-32 h-12" />
            <span className="hidden sm:block font-display text-xl font-bold tracking-tight text-slate-900 border-l border-slate-200 pl-4 ml-1">SULAMA & YAZILIM</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Ana Sayfa</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Hizmetler</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Hakkımızda</a>
            <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all">İletişim</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-6 flex flex-col gap-4"
          >
            <a href="#home" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Ana Sayfa</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Hizmetler</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600">Hakkımızda</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-emerald-600">İletişim</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} />
              Geleceğin Teknolojisi, Doğanın Gücü
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Yazılım ve Sulama <span className="text-emerald-600 italic">Sinerjisi</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Erk Sulama & Yazılım olarak, tarımsal verimliliği artıran akıllı sulama sistemleri ve işletmenizi geleceğe taşıyan özel yazılım çözümleri sunuyoruz.
            </p>
            {/* Buttons removed as per user request */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/agriculture/1200/1200" 
                alt="Modern Agriculture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                  <Code2 />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">YAZILIM</div>
                  <div className="text-sm font-bold text-slate-900">Özel Çözümler</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                  <Droplets />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">SULAMA</div>
                  <div className="text-sm font-bold text-slate-900">Akıllı Sistemler</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-100/50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const softwareServices = [
    { icon: <Cpu />, title: "IoT Çözümleri", desc: "Nesnelerin interneti ile cihazlarınızı akıllandırın ve uzaktan yönetin." },
    { icon: <Globe />, title: "Web Geliştirme", desc: "Modern, hızlı ve kullanıcı dostu web uygulamaları tasarlıyoruz." },
    { icon: <Settings />, title: "Otomasyon", desc: "İş süreçlerinizi optimize eden özel otomasyon yazılımları." }
  ];

  const irrigationServices = [
    { icon: <Droplets />, title: "Damlama Sistemleri", desc: "Su tasarrufu sağlayan yüksek verimli damlama sulama projeleri." },
    { icon: <Sprout />, title: "Akıllı Tarım", desc: "Sensör destekli, toprak nemine göre çalışan sulama sistemleri." },
    { icon: <Zap />, title: "Enerji Verimliliği", desc: "Güneş enerjisi destekli ve düşük tüketimli pompa çözümleri." }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Hizmet Alanlarımız</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">İki farklı disiplini tek bir çatı altında birleştirerek, teknoloji ve doğayı buluşturuyoruz.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Software Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Code2 />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">Yazılım Teknolojileri</h3>
            </div>
            <div className="space-y-6">
              {softwareServices.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="text-blue-600 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{service.title}</h4>
                      <p className="text-sm text-slate-600">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Irrigation Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                <Droplets />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">Sulama Sistemleri</h3>
            </div>
            <div className="space-y-6">
              {irrigationServices.map((service, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex gap-4">
                    <div className="text-emerald-600 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{service.title}</h4>
                      <p className="text-sm text-slate-600">{service.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
          <div className="grid lg:grid-cols-2 items-stretch">
            <div className="p-12 md:p-20 text-white relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Neden Erk Sulama & Yazılım?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Hibrit Uzmanlık</h4>
                    <p className="text-slate-400 leading-relaxed">Hem yazılım dünyasının dinamiklerine hem de tarımsal sulamanın teknik detaylarına hakimiz. Bu sayede gerçekten çalışan akıllı sistemler üretiyoruz.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Yenilikçi Yaklaşım</h4>
                    <p className="text-slate-400 leading-relaxed">Geleneksel yöntemleri modern teknolojiyle harmanlayarak, kaynaklarınızı en verimli şekilde kullanmanızı sağlıyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block min-h-[500px]">
              <img 
                src="https://picsum.photos/seed/tech/800/1200" 
                alt="Technology" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl font-bold text-slate-900 mb-6">Bizimle İletişime Geçin</h2>
            <p className="text-slate-600 mb-10">Projeleriniz için teklif almak veya merak ettiklerinizi sormak için formu doldurabilir veya doğrudan bize ulaşabilirsiniz.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">E-POSTA</div>
                  <div className="text-slate-900 font-medium">info@erkinsaat.com.tr</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">TELEFON</div>
                  <div className="text-slate-900 font-medium">+90 312 472 69 74</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">ADRES</div>
                  <div className="text-slate-900 font-medium">Mutlukent Mh. 1933 Cad. No. 45, Çankaya - Ankara - Türkiye</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Ad Soyad</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="Adınız" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">E-posta</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="E-posta adresiniz" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Konu</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white">
                  <option>Yazılım Çözümleri</option>
                  <option>Sulama Sistemleri</option>
                  <option>Akıllı Tarım Projeleri</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" placeholder="Mesajınızı buraya yazın..."></textarea>
              </div>
              <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Logo className="w-28 h-10 brightness-200 contrast-150" />
            <span className="font-display text-lg font-bold tracking-tight border-l border-slate-700 pl-4">SULAMA & YAZILIM</span>
          </div>
          
          <div className="text-sm text-slate-400">
            © 2026 Erk Sulama & Yazılım. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
