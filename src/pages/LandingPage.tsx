import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Activity, BarChart2, ShieldCheck, Target, ChevronRight, Play, TrendingUp, Globe, Layers, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* 1. NAV */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="font-serif text-2xl text-primary font-bold cursor-pointer"
            onClick={() => scrollTo("home")}
            data-testid="nav-logo"
          >
            iteachtrading.com
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {["Home", "About", "Experience", "Philosophy", "Framework", "YouTube", "Contact"].map((label) => (
                <button
                  key={label}
                  onClick={() => scrollTo(label.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`nav-link-${label.toLowerCase()}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Button 
              className="bg-primary text-white hover:bg-primary/90 transition-colors font-medium rounded-full px-6 py-2"
              onClick={() => scrollTo("community")}
              data-testid="nav-button-get-started"
            >
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="nav-hamburger"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 bg-white border-b border-border z-40 md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {["Home", "About", "Experience", "Philosophy", "Framework", "YouTube", "Contact"].map((label) => (
                <button
                  key={label}
                  onClick={() => scrollTo(label.toLowerCase())}
                  className="text-left text-lg font-medium text-foreground hover:text-primary"
                >
                  {label}
                </button>
              ))}
              <Button 
                className="bg-primary text-white w-full mt-2 rounded-full"
                onClick={() => scrollTo("community")}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* 1. HERO - Full Bleed */}
        <section 
          id="home" 
          className="relative min-h-[100dvh] pt-28 pb-32 bg-primary flex items-center overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] rounded-full border-2 border-white/15 z-0"></div>
          <div className="absolute top-[30%] right-[10%] w-[150px] h-[150px] rounded-full border-2 border-white/10 z-0"></div>
          
          {/* Dot Grid */}
          <div className="absolute bottom-10 right-10 z-0 opacity-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 16px)', gap: '8px' }}>
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 text-primary-foreground relative z-10">
            {/* LEFT: Abstract Visual */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-[45%] aspect-square relative z-10 flex items-center justify-center order-2 md:order-1"
            >
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                {/* Upward trending candlesticks */}
                <rect x="60" y="280" width="20" height="40" rx="4" fill="#F5A623" />
                <rect x="68" y="260" width="4" height="80" fill="#F5A623" />
                
                <rect x="120" y="220" width="20" height="60" rx="4" fill="#F5A623" />
                <rect x="128" y="200" width="4" height="100" fill="#F5A623" />
                
                <rect x="180" y="250" width="20" height="30" rx="4" fill="white" opacity="0.6" />
                <rect x="188" y="230" width="4" height="70" fill="white" opacity="0.6" />

                <rect x="240" y="160" width="20" height="80" rx="4" fill="#F5A623" />
                <rect x="248" y="120" width="4" height="160" fill="#F5A623" />

                <rect x="300" y="80" width="20" height="100" rx="4" fill="#F5A623" />
                <rect x="308" y="50" width="4" height="160" fill="#F5A623" />

                {/* Bold trend line */}
                <path d="M 40 340 L 140 240 L 200 280 L 340 100" stroke="#F5A623" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Subtle glow/shadow under line */}
                <path d="M 40 340 L 140 240 L 200 280 L 340 100" stroke="url(#trend_gradient)" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" filter="blur(8px)" />

                <defs>
                  <linearGradient id="trend_gradient" x1="40" y1="340" x2="340" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5A623" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#F5A623" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* RIGHT: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-xl relative z-10 order-1 md:order-2"
            >
              <h1 className="font-serif leading-[1.1] mb-6">
                <span className="text-[2.5rem] md:text-[3rem] font-normal block text-white/90">Master the</span>
                <span className="text-[3.5rem] md:text-[4.5rem] font-black block text-white">Art of Trading</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 font-sans leading-relaxed mb-10">
                8 years across Equities, Options, and Forex — structured frameworks built through preparation, not prediction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 font-semibold text-base"
                  onClick={() => scrollTo("youtube")}
                  data-testid="hero-cta-youtube"
                >
                  Watch on YouTube
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 font-semibold text-base"
                  onClick={() => scrollTo("community")}
                  data-testid="hero-cta-community"
                >
                  Join the Community
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. FEATURE CARDS */}
        <section className="px-6 max-w-7xl mx-auto -mt-24 relative z-20 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "8+ Years", subtitle: "Market Experience", icon: TrendingUp },
              { title: "3 Markets", subtitle: "Equities · Options · Forex", icon: Globe },
              { title: "Structured", subtitle: "Framework-Based Approach", icon: Layers },
              { title: "6 Steps", subtitle: "Structured Trading Framework", icon: ListChecks }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white shadow-xl rounded-2xl p-8 text-center flex flex-col items-center justify-center border border-border/50"
              >
                {/* Double ring icon container */}
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center mb-4 relative">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="font-serif font-bold text-primary text-3xl mb-1">{stat.title}</div>
                <div className="text-muted-foreground font-sans text-xs uppercase tracking-wider font-semibold">{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. ABOUT */}
        <section id="about" className="py-24 px-6 relative bg-white">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(17, 28, 106, 0.03) 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            >
              <div className="border-l-4 border-accent pl-8">
                <blockquote className="font-serif text-3xl md:text-4xl italic text-primary leading-snug font-semibold">
                  "Markets become easier to navigate when decisions are made through preparation rather than emotion."
                </blockquote>
                <div className="mt-6 text-muted-foreground font-bold uppercase tracking-wider text-sm">— Badrinath</div>
              </div>
              <div>
                <div className="text-accent text-sm font-bold uppercase tracking-wider mb-4">About</div>
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-6">My Trading Journey.</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed font-sans text-lg">
                  <p>
                    I began my journey in the markets at 17, experiencing the typical cycle of emotional trading, inconsistent execution, and unpredictable results. It wasn't until I stripped away the complexity and focused entirely on risk management and structured execution that my trajectory changed.
                  </p>
                  <p>
                    Today, my focus is on systematic market participation across equities, options, and forex. This platform exists to share the frameworks that transformed my trading—helping others build the discipline required to survive and thrive in live market conditions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. EXPERIENCE */}
        <section id="experience" className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-4 text-center md:text-left">Areas of Focus</div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-white mb-16 text-center md:text-left">Experience Across Markets.</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Activity,
                    title: "Intraday Trading",
                    desc: "Structured execution within shorter timeframes across equities, options, and forex."
                  },
                  {
                    icon: BarChart2,
                    title: "Swing Trading",
                    desc: "Capturing broader market movements through planning, timing, and disciplined trade management."
                  },
                  {
                    icon: Target,
                    title: "Long-Term Participation",
                    desc: "Building positions through structured market analysis and long-term decision-making principles."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Prop Firm Strategy",
                    desc: "A systematic approach to preparing for and managing prop firm evaluations through planning and execution."
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="p-10 bg-white rounded-2xl flex flex-col items-center md:items-start text-center md:text-left shadow-lg hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 relative">
                      <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-primary mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. PHILOSOPHY */}
        <section id="philosophy" className="py-24 px-6 bg-secondary relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-[15rem] md:text-[20rem] text-primary/5 leading-none select-none z-0">
            "
          </div>
          <div className="max-w-[700px] mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-4">Philosophy</div>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-primary mb-10">Simplicity Creates Consistency.</h2>
              
              <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed">
                <p>Complexity does not create better decisions.</p>
                <p>Through years of experience, I developed trading frameworks designed to simplify execution and reduce emotional decision-making during live market conditions.</p>
                <p className="text-primary font-medium">Each trade begins with predefined rules and clear planning — because every decision already has structure before entering the market.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. FRAMEWORK */}
        <section id="framework" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-4 text-center">Framework</div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-16 text-center">Every Trade Begins With A Plan.</h2>

              <div className="relative">
                {/* Horizontal line with arrow for desktop */}
                <div className="hidden lg:flex absolute top-[2.5rem] left-0 right-0 items-center z-0">
                  <div className="h-[2px] bg-accent/40 border-dashed border-t-2 flex-grow" />
                  <ChevronRight className="text-accent/60 -ml-2 w-6 h-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 relative z-10">
                  {[
                    { title: "Entry", desc: "Why should this trade exist?" },
                    { title: "Risk", desc: "How much capital is acceptable to risk?" },
                    { title: "Management", desc: "How should the position be handled?" },
                    { title: "Profit Taking", desc: "What conditions justify taking profits?" },
                    { title: "Protection", desc: "How should downside be controlled?" },
                    { title: "Exit", desc: "When should the trade end?" },
                  ].map((step, i) => (
                    <div key={i} className="bg-card shadow-lg rounded-xl p-6 border-l-4 border-accent text-center relative flex flex-col items-center hover:-translate-y-1 transition-transform">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 text-primary font-serif font-bold text-xl border-2 border-white shadow-sm">
                        {i + 1}
                      </div>
                      <h3 className="font-serif font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. YOUTUBE */}
        <section id="youtube" className="py-24 px-6 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <div className="text-accent text-sm font-bold uppercase tracking-wider mb-4">YouTube</div>
                <h2 className="font-serif font-bold text-3xl md:text-5xl text-primary mb-8">Follow The Journey.</h2>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Market Insights", "Trading Frameworks", "Trade Breakdowns", "Execution Principles", "Trading Psychology", "Risk Management"].map((topic, i) => (
                    <span key={i} className="px-4 py-2 bg-white text-primary text-sm font-semibold rounded-full shadow-sm">
                      {topic}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg">New videos published regularly to help you build structure.</p>
                
                <a href="#" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all duration-300 text-lg">
                  Visit YouTube <ChevronRight size={20} />
                </a>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-all duration-500 shadow-xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Orbit circles */}
                <div className="absolute w-32 h-32 border border-white/20 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute w-48 h-48 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-500 delay-75"></div>
                
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg relative z-10">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </div>
                <span className="font-sans font-medium text-white tracking-wide relative z-10">Watch on YouTube</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. COMMUNITY */}
        <section id="community" className="py-24 px-6 bg-primary text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl z-0"></div>
          <div className="absolute bottom-10 left-10 z-0 opacity-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 16px)', gap: '8px' }}>
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-4">Community</div>
              <h2 className="font-serif font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">Build With The Process.</h2>
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto font-light">
                I created this space as a hub for traders committed to structure, discipline, and constant improvement. Join the Telegram channel for market insights, updates, and to be the first to know about new educational initiatives.
              </p>
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-12 py-8 font-bold text-xl shadow-xl hover:scale-105 transition-transform"
              >
                Join Telegram <ChevronRight size={24} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 9. QUOTE */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="font-serif text-3xl md:text-4xl italic text-primary leading-tight mb-8 font-medium">
                "Success in trading is not built by predicting markets. It is built through preparation, execution, and consistency."
              </blockquote>
              <div className="text-accent font-bold uppercase tracking-wider text-sm">— Badrinath</div>
            </motion.div>
          </div>
        </section>

        {/* 10. CONTACT */}
        <section id="contact" className="py-24 px-6 bg-secondary">
          <div className="max-w-[600px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-4">Contact</div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-6">Connect.</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                For enquiries, collaborations, or professional correspondence.
              </p>
              <a href="mailto:hello@badrinath.com" className="text-2xl md:text-3xl font-serif font-bold text-primary hover:text-accent transition-colors block mb-12">
                hello@badrinath.com
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {["YouTube", "Telegram", "Instagram"].map((platform) => (
                  <Button 
                    key={platform}
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto min-w-[140px] rounded-full font-semibold"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="py-12 px-6 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="font-serif text-2xl text-primary font-bold mb-2">iteachtrading.com</div>
              <div className="text-muted-foreground text-sm font-medium">A structured approach to trading.</div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {["Home", "About", "Framework", "YouTube", "Contact"].map((label) => (
                <button
                  key={label}
                  onClick={() => scrollTo(label.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} iteachtrading.com
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground/60 text-center max-w-3xl mx-auto leading-relaxed border-t border-border pt-8">
            Content on this page is for educational and informational purposes only. It does not constitute financial advice or investment recommendations. Trading in financial markets involves risk and may not be suitable for all investors.
          </div>
        </div>
      </footer>
    </div>
  );
}
