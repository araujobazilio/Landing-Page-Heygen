import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Star, 
  Users, 
  Zap, 
  Globe, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Video,
  Mic,
  Languages,
  Sparkles,
  TrendingUp,
  Shield,
  Award,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Target,
  Rocket,
  BarChart3,
  MessageSquare,
  Camera,
  Edit3,
  Download,
  Share2
} from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPriceComparison, setShowPriceComparison] = useState(false);

  const affiliateLink = "https://heygen.com/?sid=rewardful&via=rafael-bazilio";

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      text: "HeyGen transformed our content strategy. We're creating 10x more video content in half the time.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Course Creator",
      company: "EduMaster",
      text: "I went from spending $5000/month on video production to creating everything myself with HeyGen.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Social Media Manager",
      company: "BrandBoost",
      text: "Our engagement rates increased by 340% after switching to HeyGen's AI avatars.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How realistic are the AI avatars?",
      answer: "HeyGen's avatars are incredibly lifelike, using advanced AI technology that creates natural movements, expressions, and speech patterns indistinguishable from real humans."
    },
    {
      question: "Can I use my own voice?",
      answer: "Yes! You can clone your own voice or choose from over 300 premium voices in 40+ languages. The voice cloning process takes just minutes."
    },
    {
      question: "What languages are supported?",
      answer: "HeyGen supports 40+ languages including English, Spanish, French, German, Chinese, Japanese, and many more. Perfect for global content creation."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! HeyGen offers a free trial so you can experience the platform risk-free before committing to a paid plan."
    },
    {
      question: "How long does it take to create a video?",
      answer: "Most videos are generated in under 5 minutes. Simply input your script, choose your avatar and voice, and HeyGen handles the rest."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section - ATTENTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            {/* Limited Time Offer Banner */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <Clock className="w-4 h-4 mr-2" />
              Limited Time: Save 50% - Ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Create <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Videos</span> in Minutes, Not Days
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop wasting thousands on video production. Generate studio-quality videos with AI avatars 
              that speak 40+ languages - no camera, no crew, no hassle.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href={affiliateLink}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Creating Now - 50% OFF
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="flex items-center text-white hover:text-purple-300 transition-colors">
                <Play className="w-8 h-8 mr-3 bg-white/20 rounded-full p-2" />
                <span className="text-lg">Watch Demo Video</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                1M+ Happy Users
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                4.9/5 Rating
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Security
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                AI Innovation Award 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - INTEREST */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tired of These <span className="text-red-400">Expensive</span> Video Problems?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Weeks of Production Time</h3>
                  <p className="text-gray-300">Hiring actors, booking studios, multiple takes, editing... The traditional process takes forever.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Skyrocketing Costs</h3>
                  <p className="text-gray-300">$5,000-$50,000 per video for professional quality. Your budget disappears faster than your content gets made.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-500/20 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Limited to One Language</h3>
                  <p className="text-gray-300">Want to reach global audiences? That means hiring multiple actors and starting from scratch for each language.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">The Real Cost of Traditional Video:</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Professional Actor:</span>
                  <span className="text-red-400">$2,000-$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Studio Rental:</span>
                  <span className="text-red-400">$500-$2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Equipment & Crew:</span>
                  <span className="text-red-400">$1,500-$8,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Post-Production:</span>
                  <span className="text-red-400">$1,000-$5,000</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total per video:</span>
                  <span className="text-red-400">$5,000-$20,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - INTEREST & DESIRE */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Introducing <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">HeyGen</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The revolutionary AI platform that creates professional videos with lifelike avatars in minutes, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Avatars</h3>
              <p className="text-gray-300 mb-6">Choose from 100+ ultra-realistic avatars or create your own. Each one moves and speaks naturally, indistinguishable from real humans.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> 100+ Premium Avatars</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Custom Avatar Creation</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Natural Expressions</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Voice Cloning</h3>
              <p className="text-gray-300 mb-6">Clone your own voice or choose from 300+ premium voices. Your avatar will speak in your exact tone and style.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Personal Voice Cloning</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> 300+ Premium Voices</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Emotional Expressions</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-fit mb-6">
                <Languages className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">40+ Languages</h3>
              <p className="text-gray-300 mb-6">Reach global audiences instantly. One script becomes videos in dozens of languages with perfect pronunciation.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> 40+ Languages</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Native Pronunciation</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Cultural Accuracy</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a 
              href={affiliateLink}
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Zap className="w-5 h-5 mr-2" />
              Try HeyGen Free Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section - DESIRE */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join 1M+ Creators Already Using HeyGen
            </h2>
            <p className="text-xl text-gray-300">See what industry leaders are saying about HeyGen</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50M+</div>
              <div className="text-gray-300">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9★</div>
              <div className="text-gray-300">User Rating</div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="bg-slate-800/80 p-8 rounded-2xl border border-purple-500/30">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - DESIRE */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Limited Time: <span className="text-green-400">50% OFF</span> All Plans
            </h2>
            <p className="text-xl text-gray-300">Transform your content creation today</p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border-2 border-purple-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-sm font-semibold">
              BEST VALUE
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">HeyGen Pro</h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-4xl text-gray-400 line-through">$59</span>
                <span className="text-6xl font-bold text-white">$29</span>
                <span className="text-gray-300">/month</span>
              </div>
              <p className="text-purple-300 font-semibold">Save $360/year with this exclusive offer</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">Unlimited AI avatars</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">Voice cloning included</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">40+ languages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">HD video exports</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">Custom avatars</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">Priority support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">Commercial license</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-white">30-day money back</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href={affiliateLink}
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Sparkles className="w-6 h-6 mr-3" />
                Claim 50% Discount Now
                <ArrowRight className="w-6 h-6 ml-3" />
              </a>
              <p className="text-sm text-gray-400 mt-4">
                ⏰ Offer expires in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Everything you need to know about HeyGen</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/80 rounded-xl border border-purple-500/30">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - ACTION */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Video Creation?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join over 1 million creators who've already revolutionized their content with HeyGen. 
            Start your free trial today and see the difference AI can make.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href={affiliateLink}
              className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Start Free Trial - 50% OFF
            </a>
            <div className="text-purple-200 text-sm">
              <div className="font-semibold">🔥 BONUS: First 100 customers get:</div>
              <div>• Premium avatar collection ($200 value)</div>
              <div>• Advanced voice effects ($150 value)</div>
              <div>• Priority customer support ($100 value)</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-purple-200 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              No Credit Card Required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              30-Day Money Back Guarantee
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Cancel Anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 HeyGen. All rights reserved. Transform your content creation today.
            </p>
            <p className="text-sm text-gray-500">
              This is an independent review and recommendation. Results may vary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;