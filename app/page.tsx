"use client";

import Image from "next/image";
import { 
  Scissors, 
  Sparkles, 
  Heart, 
  Clock, 
  MapPin, 
  Phone,
  CheckCircle2,
  Instagram,
  Facebook
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const whatsappNumber = "5531999999999"; // Default placeholder, usually obtained from client or lead
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar um serviço no Bela Ela Salão de Beleza.`;

  const services = [
    { name: "Cabelo", description: "Cortes, coloração, hidratação e penteados exclusivos.", icon: <Scissors className="w-8 h-8" /> },
    { name: "Unhas", description: "Manicure, pedicure e alongamentos de alta durabilidade.", icon: <Heart className="w-8 h-8" /> },
    { name: "Sobrancelhas", description: "Design e micropigmentação para realçar seu olhar.", icon: <Sparkles className="w-8 h-8" /> },
    { name: "Estética Facial", description: "Botox, limpeza de pele e tratamentos rejuvenescedores.", icon: <Sparkles className="w-8 h-8" /> },
    { name: "Estética Corporal", description: "Massagens, drenagem e tratamentos de última geração.", icon: <CheckCircle2 className="w-8 h-8" /> },
    { name: "Maquiagem", description: "Produções para eventos, casamentos e ocasiões especiais.", icon: <Sparkles className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Nav */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-pink-500">
              <Image src="/logo.jpg" alt="Bela Ela Logo" fill className="object-cover" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
              Bela Ela
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            <a href="#inicio" className="hover:text-pink-600 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-pink-600 transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-pink-600 transition-colors">Sobre</a>
            <a href={whatsappUrl} className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
              Agendar Agora
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Sua beleza em <span className="text-pink-600">boas mãos.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              No Bela Ela, unimos técnica, elegância e os melhores produtos para realçar sua essência e elevar sua autoestima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={whatsappUrl}
                className="inline-flex items-center justify-center gap-2 bg-pink-600 text-white text-lg font-bold px-8 py-4 rounded-xl hover:bg-pink-700 hover:scale-105 transition-all shadow-lg shadow-pink-200"
              >
                <FaWhatsapp className="text-2xl" />
                Agendar Horário
              </a>
              <a 
                href="#servicos"
                className="inline-flex items-center justify-center bg-white text-pink-600 border-2 border-pink-600 text-lg font-bold px-8 py-4 rounded-xl hover:bg-pink-50 transition-all"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
              <Image 
                src="/logo.jpg" 
                alt="Salão de Beleza" 
                fill 
                className="object-cover rounded-3xl shadow-2xl relative z-10 border-8 border-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tratamentos completos para cabelo, corpo e rosto, realizados por profissionais especializados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-pink-100 hover:shadow-xl hover:shadow-pink-100 transition-all"
              >
                <div className="text-pink-600 mb-6 bg-pink-50 w-fit p-4 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={whatsappUrl} className="text-pink-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Saiba mais <Sparkles className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/logo.jpg" 
                alt="Ambiente do Salão" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <span className="text-pink-600 font-bold tracking-widest uppercase mb-4 block">Sobre o Bela Ela</span>
            <h2 className="text-4xl font-bold mb-6">Onde a elegância encontra o bem-estar.</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O Salão Bela Ela nasceu da paixão por transformar não apenas a aparência, mas também a confiança de nossas clientes. Localizado em um ambiente acolhedor e sofisticado, oferecemos uma experiência completa de cuidado.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Utilizamos produtos de alta performance e as técnicas mais modernas do mercado de estética facial e corporal para garantir resultados impecáveis e duradouros.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pink-500" />
                <span className="font-medium">Produtos Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pink-500" />
                <span className="font-medium">Atendimento VIP</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pink-500" />
                <span className="font-medium">Ambiente Moderno</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-pink-500" />
                <span className="font-medium">Especialistas</span>
              </div>
            </div>
            <a 
              href={whatsappUrl}
              className="inline-block bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors"
            >
              Conheça nossas promoções
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold text-pink-500">Bela Ela</span>
              </div>
              <p className="text-gray-400">
                Sua beleza é nossa maior inspiração. Visite-nos e descubra o que há de melhor em estética e cuidados.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#inicio" className="hover:text-pink-500 transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-pink-500 transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-pink-500 transition-colors">Sobre Nós</a></li>
                <li><a href={whatsappUrl} className="hover:text-pink-500 transition-colors">Agendamento</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone className="text-pink-500 w-5 h-5" />
                  (31) 99999-9999
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-pink-500 w-5 h-5" />
                  Rua das Flores, 123 - Centro
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="text-pink-500 w-5 h-5" />
                  Seg à Sáb: 09h às 19h
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={whatsappUrl} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; 2024 Bela Ela Salão de Beleza. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
          1
        </span>
      </a>
    </div>
  );
}
