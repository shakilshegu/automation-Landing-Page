export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass-effect border-b border-gray-200 z-50 animate-fade-in">
        <div className="container mx-auto px-6 lg:px-32 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-anton tracking-wider text-gray-900 hover:scale-105 transition-transform duration-300 cursor-pointer">
                TASK<span className="text-primary">JAMM</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#usecases" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                Use Cases
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 relative group">
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <button className="btn-primary">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-gray-900 hover:text-primary transition-colors p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white">
        {/* Enhanced gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh opacity-70"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        {/* Animated background elements with vibrant colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-orb"></div>
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-orb" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block opacity-0 animate-fade-in-up">
                <span className="text-primary text-xs font-bold tracking-widest uppercase bg-blue-100 px-5 py-2.5 rounded-full border-2 border-blue-200/50 hover:bg-blue-200 hover:border-blue-300 transition-all duration-300 cursor-default shadow-sm hover:shadow-md inline-flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  Powered by Maddy AI
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-anton font-bold text-gray-900 leading-[1.1] opacity-0 animate-fade-in-up delay-100">
                Intelligent Workflow
                <br />
                <span className="gradient-text relative inline-block">
                  Automation Agent
                  <svg className="absolute -bottom-2 left-0 w-full opacity-30" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 5 100 2 150 5C200 8 250 5 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                        <stop offset="0%" stopColor="#2563eb"/>
                        <stop offset="50%" stopColor="#7c3aed"/>
                        <stop offset="100%" stopColor="#2563eb"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed opacity-0 animate-fade-in-up delay-200">
                Maddy AI intelligently manages, prioritizes, and executes routine multi-step tasks to streamline business operations and reduce manual work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 opacity-0 animate-fade-in-up delay-300">
                <button className="btn-primary text-lg btn-shine group relative overflow-hidden shadow-lg hover:shadow-xl">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Free Trial
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="btn-secondary text-lg btn-shine group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                    </svg>
                    Watch Demo
                  </span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 opacity-0 animate-fade-in delay-400">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      +50K
                    </div>
                  </div>
                  <span className="font-medium text-gray-700">Trusted by 50,000+ teams</span>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700">4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Right Visual/Illustration */}
            <div className="relative opacity-0 animate-fade-in delay-500">
              <div className="relative">
                {/* Main illustration container */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>

                  {/* Dashboard mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-gray-400 font-mono">TaskJamm Dashboard</div>
                    </div>

                    {/* Stats cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-bold text-blue-600">2.5M+</div>
                        <div className="text-xs text-blue-700 mt-1">Tasks Automated</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                        <div className="text-2xl font-bold text-purple-600">85%</div>
                        <div className="text-xs text-purple-700 mt-1">Time Saved</div>
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div className="space-y-3 pt-2">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600 font-medium">Email Automation</span>
                          <span className="text-gray-500">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600 font-medium">Data Processing</span>
                          <span className="text-gray-500">88%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{width: '88%'}}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600 font-medium">Workflow Sync</span>
                          <span className="text-gray-500">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Activity feed */}
                    <div className="pt-2 space-y-2">
                      <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3 border border-green-200">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="text-xs text-green-700 font-medium">Campaign sent successfully</div>
                      </div>
                      <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <div className="text-xs text-blue-700 font-medium">Data sync in progress</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-3 border border-gray-100 animate-float">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-700">Active</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg p-4 text-white animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-xl font-bold">99.9%</div>
                  <div className="text-xs opacity-90">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to automate your workflows and boost productivity
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-md hover:shadow-xl group cursor-pointer relative overflow-hidden border border-gray-100">
              <div className="absolute inset-0 gradient-ai-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 gradient-automation rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Smart Task Management</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Automatically prioritize and organize tasks based on urgency, dependencies, and business impact.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-md hover:shadow-xl group cursor-pointer relative overflow-hidden border border-gray-100">
              <div className="absolute inset-0 gradient-ai-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 gradient-automation rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Lightning Fast Execution</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Execute multi-step workflows in seconds with optimized AI algorithms and parallel processing.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-md hover:shadow-xl group cursor-pointer relative overflow-hidden border border-gray-100">
              <div className="absolute inset-0 gradient-ai-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 gradient-automation rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Enterprise Security</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Bank-level encryption and compliance with SOC 2, GDPR, and industry security standards.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-md hover:shadow-xl group cursor-pointer relative overflow-hidden border border-gray-100">
              <div className="absolute inset-0 gradient-ai-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 gradient-automation rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 010 2H6v13h2a1 1 0 110 2H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1h-4a1 1 0 110-2h2V6h-2a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Seamless Integration</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Connect with 1000+ apps and tools including Slack, Google Workspace, Microsoft 365, and more.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-md hover:shadow-xl group cursor-pointer relative overflow-hidden border border-gray-100">
              <div className="absolute inset-0 gradient-ai-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 gradient-automation rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Real-Time Analytics</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Track performance metrics, identify bottlenecks, and optimize workflows with detailed insights.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="card-hover bg-white rounded-2xl p-8 shadow-md hover:shadow-xl group cursor-pointer relative overflow-hidden border border-gray-100">
              <div className="absolute inset-0 gradient-ai-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 gradient-automation rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Customizable Workflows</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Build and customize automation workflows tailored to your unique business processes and needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="py-20 px-6 lg:px-32 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton font-bold text-gray-900 mb-4">
              Use Cases
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how teams across industries leverage TaskJamm to automate their workflows
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="text-primary text-sm font-semibold mb-3">MARKETING TEAMS</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Campaign Management Automation</h3>
              <p className="text-gray-600 mb-6">Automate social media scheduling, email campaigns, lead nurturing, and performance reporting across multiple platforms.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Schedule and publish content across channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Automated A/B testing and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Real-time campaign performance tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-8 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="text-secondary text-sm font-semibold mb-3">SALES TEAMS</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead Processing & Follow-ups</h3>
              <p className="text-gray-600 mb-6">Streamline lead qualification, automated outreach, CRM updates, and follow-up sequences to never miss an opportunity.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Intelligent lead scoring and routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Automated email sequences and reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>CRM data enrichment and updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-8 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="text-secondary text-sm font-semibold mb-3">OPERATIONS</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Process Automation</h3>
              <p className="text-gray-600 mb-6">Automate invoice processing, expense approvals, data entry, and cross-system synchronization to reduce manual overhead.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Automated invoice and expense processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Multi-system data synchronization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Workflow approval routing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="text-primary text-sm font-semibold mb-3">CUSTOMER SUPPORT</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Ticket Management</h3>
              <p className="text-gray-600 mb-6">Automatically categorize, prioritize, and route support tickets while providing instant responses to common queries.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Smart ticket categorization and routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Automated responses to FAQs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>SLA monitoring and escalation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-32 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-anton font-bold text-primary mb-2">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-anton font-bold text-primary mb-2">99.9%</div>
                <div className="text-gray-600">Uptime SLA</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-anton font-bold text-primary mb-2">2.5M+</div>
                <div className="text-gray-600">Tasks Automated Daily</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-anton font-bold text-primary mb-2">85%</div>
                <div className="text-gray-600">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 lg:px-32 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your team size and automation needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="text-gray-600 font-semibold mb-2">STARTER</div>
              <div className="text-5xl font-anton font-bold text-gray-900 mb-6">
                $29<span className="text-2xl text-gray-600">/mo</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for small teams getting started with automation</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Up to 5 team members</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>1,000 tasks per month</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Basic integrations</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Get Started</button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 relative transform md:scale-105 shadow-2xl border-2 border-blue-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                MOST POPULAR
              </div>
              <div className="text-blue-100 font-semibold mb-2">PROFESSIONAL</div>
              <div className="text-5xl font-anton font-bold text-white mb-6">
                $99<span className="text-2xl text-blue-100">/mo</span>
              </div>
              <p className="text-blue-50 mb-6">For growing teams that need advanced automation</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Up to 25 team members</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>10,000 tasks per month</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced integrations</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <svg className="w-5 h-5 text-green-300 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom workflows</span>
                </li>
              </ul>
              <button className="bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all w-full">Get Started</button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all">
              <div className="text-gray-600 font-semibold mb-2">ENTERPRISE</div>
              <div className="text-5xl font-anton font-bold text-gray-900 mb-6">
                Custom
              </div>
              <p className="text-gray-600 mb-6">For large organizations with custom needs</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited tasks</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>SLA guarantee</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 lg:px-32 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-anton font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers automating their workflows
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                TaskJamm has transformed how our marketing team operates. We've automated 80% of our repetitive tasks and can now focus on strategy and creativity.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  SJ
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">Sarah Johnson</div>
                  <div className="text-gray-500 text-sm">Marketing Director, TechCorp</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The ROI has been incredible. We've cut manual processing time by 75% and our team is happier focusing on high-value work instead of repetitive tasks.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">Michael Chen</div>
                  <div className="text-gray-500 text-sm">Operations Manager, GrowthLabs</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Setup was incredibly easy, and the support team has been amazing. We went from zero to fully automated workflows in just two weeks.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  EP
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">Emily Parker</div>
                  <div className="text-gray-500 text-sm">CEO, StartupHub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24 px-6 lg:px-32 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute inset-0 gradient-mesh opacity-50"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h2 className="text-4xl md:text-5xl font-anton font-bold text-gray-900 mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses already using TaskJamm to automate their operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="btn-primary btn-shine text-lg">
                Start Free Trial
              </button>
              <button className="btn-secondary btn-shine text-lg">
                Schedule a Demo
              </button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 lg:px-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-anton tracking-wider text-gray-900 mb-4">
                TASK<span className="text-primary">JAMM</span>
              </div>
              <p className="text-gray-600 text-sm">
                AI-powered workflow automation to streamline your business operations.
              </p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#usecases" className="hover:text-primary transition-colors">Use Cases</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              &copy; 2024 TaskJamm. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
