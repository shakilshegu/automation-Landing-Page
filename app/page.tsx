import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-automation/20 blur-xl rounded-full"></div>
                <Image src="/icone.jpg" alt="TaskJamm Logo" width={48} height={48} className="object-contain relative rounded-lg" />
              </div>
              <div className="text-2xl font-bold gradient-text">
                TASK JAMM
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#testimonials" className="text-gray-300 hover:text-automation transition-all font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-300 hover:text-automation transition-all font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-automation/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-automation/20 rounded-full border border-automation/30">
            <span className="text-automation-300 font-semibold text-sm">✨ AI-Powered Automation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI That Works<br />
            <span className="gradient-text">While You Sleep</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Streamline your business operations with intelligent task automation.
            Save time and focus on what truly matters.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-gray-800/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-automation-light mb-1">100+</div>
              <div className="text-gray-500 text-sm">Early Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-automation-light mb-1">99.5%</div>
              <div className="text-gray-500 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-automation-light mb-1">10K+</div>
              <div className="text-gray-500 text-sm">Tasks Automated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-automation-light mb-1">24/7</div>
              <div className="text-gray-500 text-sm">AI Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}



      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-automation/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-automation/20 rounded-full border border-automation/30">
              <span className="text-automation-300 font-semibold text-sm">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="text-automation-light">Early Adopters</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how early users are transforming their workflows with TaskJamm
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-automation/10 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                As an early adopter, I&apos;m impressed with TaskJamm&apos;s potential. The AI automation is already helping me streamline my daily workflows and save valuable time.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-automation to-automation-light rounded-full flex items-center justify-center text-white font-bold">
                  SJ
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">Marketing Specialist</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-automation/10 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                TaskJamm shows great promise for automating repetitive work. I&apos;m excited to see how it evolves and helps streamline my business operations.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-automation rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-gray-400 text-sm">Small Business Owner</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-automation/10 transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The interface is intuitive and the AI features are impressive for a new platform. Looking forward to seeing TaskJamm grow and add more capabilities.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-automation to-automation-light rounded-full flex items-center justify-center text-white font-bold">
                  EP
                </div>
                <div>
                  <div className="text-white font-semibold">Emily Parker</div>
                  <div className="text-gray-400 text-sm">Freelance Consultant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-automation/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-automation/20 rounded-full border border-automation/30">
              <span className="text-automation-300 font-semibold text-sm">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-automation-light">TaskJamm</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-automation focus:ring-1 focus:ring-automation transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-automation focus:ring-1 focus:ring-automation transition-all"
                    placeholder="taskjamm@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-automation focus:ring-1 focus:ring-automation transition-all resize-none"
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-automation hover:bg-automation-light text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-automation/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 border-t border-gray-800 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/icone.jpg" alt="TaskJamm Logo" width={32} height={32} className="object-contain rounded-lg" />
                <div className="text-xl font-bold gradient-text">
                  TaskJamm
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                AI-powered workflow automation to streamline your business operations.
              </p>
              <div className="flex gap-3">
                <a href="https://youtube.com/@taskjamm" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-[#FF0000] text-gray-400 hover:text-white flex items-center justify-center transition-all border border-gray-700 hover:border-[#FF0000]" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/taskjamm" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] text-gray-400 hover:text-white flex items-center justify-center transition-all border border-gray-700 hover:border-[#E1306C]" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <div className="text-gray-400 text-sm">
                &copy; 2025 TaskJamm. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Made with</span>
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>by the TaskJamm Team</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
