'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      
      {/* --- FUTURISTIC BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Digital Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Atmospheric Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* --- NAVIGATION (FLOATING POD) --- */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-5xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-[0_0_20px_-5px_rgba(120,119,198,0.3)]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_cyan] transition-all duration-300">
                <Image src="/icone.jpg" alt="TaskJamm Logo" fill className="object-cover" />
              </div>
              <div className="text-xl font-bold tracking-wider">
                TASK<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">JAMM</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white hover:tracking-widest transition-all duration-300">
                Testimonials
              </a>
              <a href="#contact" className="px-6 py-2 text-sm font-bold text-black bg-cyan-400 rounded-full hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:border-purple-500/50 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-gray-300 font-medium text-xs tracking-[0.2em] uppercase">AI Neural Automation</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            AI That Works<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              While You Sleep
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed border-l-2 border-cyan-500/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            Streamline your business operations with intelligent task automation.
            Save time and focus on what truly matters.
          </p>

          {/* HUD Stats */}
          <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/30 transition-all opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-6 rounded-xl bg-[#0f0c29]/80 border border-white/10 backdrop-blur-md group-hover:border-cyan-500/50 transition-all">
                <div className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">2K</div>
                <div className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Customers</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl group-hover:bg-purple-500/30 transition-all opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-6 rounded-xl bg-[#0f0c29]/80 border border-white/10 backdrop-blur-md group-hover:border-purple-500/50 transition-all">
                <div className="text-4xl font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">10K+</div>
                <div className="text-purple-400 text-xs font-mono uppercase tracking-widest">Tasks Automated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (HOLOGRAPHIC CARDS) --- */}
      <section id="testimonials" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Trusted by <span className="text-cyan-400 relative">
                Early Adopters
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how early users are transforming their workflows with TaskJamm
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "As an early adopter, I'm impressed with TaskJamm's potential. The AI automation is already helping me streamline my daily workflows.", name: "Sarah Johnson", role: "Marketing Specialist", initials: "SJ", accent: "border-pink-500" },
              { text: "TaskJamm shows great promise for automating repetitive work. I'm excited to see how it evolves and helps streamline my business operations.", name: "Michael Chen", role: "Small Business Owner", initials: "MC", accent: "border-cyan-500" },
              { text: "The interface is intuitive and the AI features are impressive for a new platform. Looking forward to seeing TaskJamm grow capabilities.", name: "Emily Parker", role: "Freelance Consultant", initials: "EP", accent: "border-purple-500" }
            ].map((t, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative p-8 rounded-2xl bg-[#0a0a16] border border-white/5 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-8 leading-relaxed font-light">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className={`w-10 h-10 rounded-lg border ${t.accent} flex items-center justify-center text-white font-bold bg-white/5`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{t.name}</div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT (CONTROL PANEL) --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="flex-1 text-left">
              <div className="inline-block mb-6 px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded text-cyan-400 text-xs font-mono tracking-widest uppercase">
                System Status: Online
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Ready to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Automate?</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Send a signal to our network. We'll analyze your requirements and establish a connection protocol immediately.
              </p>
            </div>

            <div className="flex-1 w-full">
              <form onSubmit={handleSubmit} className="relative bg-black/60 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_-20px_rgba(168,85,247,0.3)]">
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500 rounded-br-lg"></div>

                {submitStatus.type && (
                  <div className={`p-4 mb-6 rounded border ${
                      submitStatus.type === 'success' ? 'bg-green-500/10 border-green-500/50 text-green-400' : 'bg-red-500/10 border-red-500/50 text-red-400'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs font-mono text-cyan-500 mb-2 uppercase ml-1">Identity</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-[#121220] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all placeholder-gray-700"
                        placeholder="NAME"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-xs font-mono text-cyan-500 mb-2 uppercase ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-[#121220] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all placeholder-gray-700"
                        placeholder="EMAIL@ADDRESS.COM"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyan-500 mb-2 uppercase ml-1">Text</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#121220] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all resize-none placeholder-gray-700"
                      placeholder="INITIATE TRANSMISSION..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-lg rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'PROCESSING...' : 'TRANSMIT MESSAGE'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative bg-[#050510] border-t border-white/5 py-12 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-gray-800 to-black border border-white/10 overflow-hidden relative">
                 <Image src="/icone.jpg" alt="TaskJamm Logo" fill className="object-cover opacity-80" />
            </div>
            <span className="font-bold text-lg tracking-wider">TaskJamm <span className="text-gray-600 font-normal text-sm">v2.0</span></span>
          </div>
          
          <div className="text-gray-500 text-sm font-mono">
            &copy; 2025 // AUTOMATION SYSTEMS
          </div>

          <div className="flex gap-4">
            <a href="https://www.youtube.com/@maddyaiautomation" target="_blank" className="text-gray-500 hover:text-red-500 hover:drop-shadow-[0_0_8px_red] transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.instagram.com/maddy_ai_automates?igsh=Znh3em5wYWZqNGRj&utm_source=qr" target="_blank" className="text-gray-500 hover:text-pink-500 hover:drop-shadow-[0_0_8px_pink] transition-all">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}