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
              <a href="#features" className="text-gray-300 hover:text-automation transition-all font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-automation transition-all font-medium">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-300 hover:text-automation transition-all font-medium">
                Contact
              </a>
              <a href="/app" className="text-gray-300 hover:text-automation transition-all font-medium">
                Enter App
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/app" className="group relative overflow-hidden bg-automation text-white px-10 py-4 rounded-full hover:bg-automation-light transition-all text-lg font-bold shadow-2xl shadow-automation/50 hover:shadow-automation/70 hover:scale-105 inline-flex items-center justify-center gap-2">
              <span className="relative z-10">Enter App</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </a>
            <button className="relative border-2 border-gray-700 text-gray-300 px-10 py-4 rounded-full hover:border-automation hover:text-automation hover:bg-automation/10 transition-all text-lg font-semibold hover:scale-105">
              Watch Demo →
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-gray-800/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-automation-light mb-1">10K+</div>
              <div className="text-gray-500 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-automation-light mb-1">99.9%</div>
              <div className="text-gray-500 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-automation-light mb-1">50M+</div>
              <div className="text-gray-500 text-sm">Tasks Automated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-automation-light mb-1">24/7</div>
              <div className="text-gray-500 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-automation/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-automation/20 rounded-full border border-automation/30">
              <span className="text-automation-300 font-semibold text-sm">FEATURES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything You Need to <span className="text-automation-light">Automate</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Powerful features designed to streamline your workflows and boost productivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-automation/50 hover:shadow-2xl hover:shadow-automation/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-automation to-automation-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-automation/50">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-automation-light transition-colors">Smart Task Management</h3>
              <p className="text-gray-400 leading-relaxed">
                Organize and prioritize tasks automatically with AI-powered intelligence tailored to your business needs.
              </p>
            </div>

            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-automation/50 hover:shadow-2xl hover:shadow-automation/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-automation to-automation-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-automation/50">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-automation-light transition-colors">Lightning Fast Execution</h3>
              <p className="text-gray-400 leading-relaxed">
                Execute complex workflows in milliseconds with our optimized automation engine and cloud infrastructure.
              </p>
            </div>

            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-automation/50 hover:shadow-2xl hover:shadow-automation/20 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-automation to-automation-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-automation/50">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-automation-light transition-colors">Enterprise Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Bank-level encryption and industry-leading compliance standards keep your data safe and secure 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-gray-950 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-automation/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-automation/20 rounded-full border border-automation/30">
              <span className="text-automation-300 font-semibold text-sm">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by <span className="text-automation-light">10,000+</span> Teams
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how businesses worldwide are transforming their operations with TaskJamm
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
                TaskJamm has transformed how our marketing team operates. We've automated 80% of our repetitive tasks and can now focus on strategy and creativity.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-automation to-automation-light rounded-full flex items-center justify-center text-white font-bold">
                  SJ
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">Marketing Director, TechCorp</div>
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
                The ROI has been incredible. We've cut manual processing time by 75% and our team is happier focusing on high-value work instead of repetitive tasks.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-automation rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div>
                  <div className="text-white font-semibold">Michael Chen</div>
                  <div className="text-gray-400 text-sm">Operations Manager, GrowthLabs</div>
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
                Setup was incredibly easy, and the support team has been amazing. We went from zero to fully automated workflows in just two weeks.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-automation to-automation-light rounded-full flex items-center justify-center text-white font-bold">
                  EP
                </div>
                <div>
                  <div className="text-white font-semibold">Emily Parker</div>
                  <div className="text-gray-400 text-sm">CEO, StartupHub</div>
                </div>
              </div>
            </div>
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
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-automation hover:text-white flex items-center justify-center transition-all border border-gray-700 hover:border-automation">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-automation hover:text-white flex items-center justify-center transition-all border border-gray-700 hover:border-automation">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">Features</a></li>
                <li><a href="#testimonials" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">Documentation</a></li>
                <li><a href="#" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">API Reference</a></li>
                <li><a href="#" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">Terms of Service</a></li>
                <li><a href="#" className="hover:text-automation-light transition-colors hover:translate-x-1 inline-block">Cookie Policy</a></li>
              </ul>
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
            <div className="text-center">
              <a href="mailto:taskjamm@gmail.com" className="text-gray-400 hover:text-automation-light transition-colors text-sm">
                taskjamm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
