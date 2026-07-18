import { useState, useEffect } from 'react'
import { 
  Menu, X, GraduationCap, MapPin, Clock, 
  ChevronRight, Phone, Mail, Facebook, Twitter, 
  Linkedin, LogIn, Award, BookOpen, Heart, 
  Target, Eye, Sparkles, Calendar, ArrowRight,
  CheckCircle2, Building2, Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    '/images/DJI_0033@1129346556.jpg',
    '/images/DJI_0004@1044382624.jpg',
    '/images/DJI_0031@1127499514.jpg',
    '/images/DJI_0010@1069317691.jpg'
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ]

  const regularCourses = [
    {
      title: 'Diploma in Animal Health and Production',
      duration: '2.5 years (2,905 hours)',
      description: 'Comprehensive training for veterinary paraprofessionals with extensive practical experience.',
      icon: GraduationCap
    },
    {
      title: 'Upgrading to Diploma in Animal Health and Production',
      duration: '1.5 years (1,470 hours)',
      description: 'Advanced program for certificate holders seeking diploma qualification.',
      icon: Award
    },
    {
      title: 'Certificate in Animal Health and Production',
      duration: '2 years (2,125 hours)',
      description: 'Foundation course for frontline extension workers in livestock sector.',
      icon: BookOpen
    }
  ]

  const shortCourses = [
    { title: 'Artificial Insemination in Cattle', duration: '4 weeks (130 hours)', icon: Target },
    { title: 'Upgrading to Artificial Insemination in Goats', duration: '2 weeks (79 hours)', icon: Target },
    { title: 'Feed Formulation and Milling Technology', duration: '5 days', icon: Sparkles },
    { title: 'Poultry Farming', duration: '5 days', icon: Heart },
    { title: 'Bee Farming', duration: '5 days', icon: Sparkles },
    { title: 'Beef Fattening and Feedlot Management', duration: '5 days', icon: Target }
  ]

  const newsItems = [
    {
      date: 'April 3, 2025',
      title: 'President Launches Goat AI Center at AHITI Ndomba',
      excerpt: 'The Centre, located at AHITI Ndomba in Kirinyaga, is the first of its kind in East and Central Africa, marking a significant milestone in livestock development.',
      category: 'Milestone',
      image: '/images/IMG_0588@1362214849.jpg'
    },
    {
      date: 'March 15, 2025',
      title: 'New Intake Admission Now Open',
      excerpt: 'Applications are now being accepted for the September 2025 intake for both Diploma and Certificate programs in Animal Health and Production.',
      category: 'Admission',
      image: '/images/IMG_0712@-1363690268.jpg'
    },
    {
      date: 'February 28, 2025',
      title: 'Short Courses Registration Ongoing',
      excerpt: 'Register now for our practical short courses including Artificial Insemination, Poultry Farming, and Feed Formulation Technology.',
      category: 'Courses',
      image: '/images/IMG_0716-1@-1369504436.jpg'
    }
  ]

  const coreValues = [
    'Professionalism', 'Efficiency', 'Effectiveness', 'Integrity', 'Objectivity',
    'Teamwork', 'Accountability', 'Transparency', 'Impartiality', 'Meritocracy',
    'Gender Equity', 'Commitment'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-ahiti-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-ahiti-secondary" />
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-bold text-lg leading-tight ${scrolled ? 'text-ahiti-primary' : 'text-white'}`}>
                  AHITI NDOMBA
                </h1>
                <p className={`text-xs ${scrolled ? 'text-ahiti-primary/70' : 'text-white/80'}`}>
                  Animal Health Training Institute
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-ahiti-secondary ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={() => setIsLoginOpen(true)}
                className="bg-ahiti-secondary text-ahiti-primary hover:bg-ahiti-secondary/90 font-semibold"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Portal Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-ahiti-primary' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:bg-ahiti-primary/10 hover:text-ahiti-primary rounded-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsLoginOpen(true)
                }}
                className="w-full bg-ahiti-primary text-white hover:bg-ahiti-dark"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Portal Login
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Image Slider */}
        <div className="absolute inset-0 overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`AHITI Ndomba Campus ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-ahiti-primary/90 via-ahiti-primary/70 to-ahiti-primary/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary hover:bg-ahiti-secondary/90">
              Ministry of Agriculture & Livestock Development
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Animal Health & Industry Training Institute
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Nurturing Excellence in Animal Health and Production Training Since 1984. 
              Located in the serene landscapes of Kirinyaga County, Kenya.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-ahiti-secondary text-ahiti-primary hover:bg-ahiti-secondary/90 font-semibold"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Courses
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-ahiti-primary font-semibold"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-ahiti-secondary w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-ahiti-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">40+</div>
              <div className="text-ahiti-primary/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">500+</div>
              <div className="text-ahiti-primary/80">Current Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">480</div>
              <div className="text-ahiti-primary/80">Acres of Land</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-ahiti-primary mb-2">9</div>
              <div className="text-ahiti-primary/80">Programs Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">About Us</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              Center of Excellence in Animal Health Training
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Established in 1984, AHITI Ndomba is a registered Technical and Vocational Training Institute 
              under the State Department for Livestock Development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="/images/DJI_0033@1129346556.jpg"
                alt="AHITI Ndomba Campus"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-ahiti-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">1984</div>
                <div className="text-sm opacity-90">Year Established</div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Located in Mwea East Sub-County, Kirinyaga County, approximately 3 kilometres from Kutus Town, 
                AHITI Ndomba nestles away from the hustles of urban centres on approximately 194.25 hectares 
                (480 acres) of land, providing a serene learning environment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mandate is to train Veterinary Paraprofessionals and other livestock value chain actors, 
                with a view to providing the requisite skilled human resource vital for the realization of 
                growth in the livestock sub-sector.
              </p>
              <div className="flex items-center space-x-4 text-ahiti-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Kirinyaga County, Kenya - 3km from Kutus Town</span>
              </div>
            </div>
          </div>

          {/* Vision, Mission, Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-ahiti-primary to-ahiti-dark rounded-2xl p-8 text-white">
              <div className="w-14 h-14 bg-ahiti-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-ahiti-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To become a center of excellence in Animal Health and Production training for sustainable 
                development of the livestock sub-sector in East and Central Africa.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-ahiti-secondary to-yellow-200 rounded-2xl p-8">
              <div className="w-14 h-14 bg-ahiti-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-ahiti-primary" />
              </div>
              <h3 className="text-xl font-bold text-ahiti-primary mb-4">Our Mission</h3>
              <p className="text-ahiti-primary/80 leading-relaxed">
                To provide quality training of technical personnel in Animal Health and Production for 
                effective performance in the livestock sub-sector, contributing to wealth creation in a 
                sustainable environment.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-ahiti-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-ahiti-primary" />
              </div>
              <h3 className="text-xl font-bold text-ahiti-primary mb-4">Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((value) => (
                  <span
                    key={value}
                    className="px-3 py-1 bg-ahiti-primary/10 text-ahiti-primary text-sm rounded-full"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Our Programs</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              Courses Offered
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              We offer practical-oriented training in three regular courses and six short-duration courses 
              designed to equip you with industry-relevant skills.
            </p>
          </div>

          <Tabs defaultValue="regular" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="regular" className="data-[state=active]:bg-ahiti-primary data-[state=active]:text-white">
                Regular Courses
              </TabsTrigger>
              <TabsTrigger value="short" className="data-[state=active]:bg-ahiti-primary data-[state=active]:text-white">
                Short Courses
              </TabsTrigger>
            </TabsList>

            <TabsContent value="regular">
              <div className="grid md:grid-cols-3 gap-8">
                {regularCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-ahiti-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <course.icon className="w-7 h-7 text-ahiti-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-ahiti-primary mb-3">{course.title}</h3>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <Button variant="outline" className="w-full border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="short">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shortCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-ahiti-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <course.icon className="w-6 h-6 text-ahiti-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-ahiti-primary mb-2">{course.title}</h3>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Latest Updates</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              News & Announcements
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Stay updated with the latest happenings, achievements, and announcements from AHITI Ndomba.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-ahiti-secondary text-ahiti-primary">{news.category}</Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-ahiti-primary mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <Button variant="link" className="p-0 text-ahiti-primary hover:text-ahiti-dark">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-ahiti-primary text-ahiti-primary hover:bg-ahiti-primary hover:text-white">
              View All News
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-20 bg-ahiti-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-ahiti-secondary text-ahiti-primary">Our Commitment</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Quality Policy Statement
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Excellence in Education and Training',
              'Trainee-centered approach in Training',
              'Good governance',
              'Enhanced Research and Innovation',
              'Strict adherence to international quality management standards',
              'Strict adherence to professional ethical practices and integrity',
              'Efficient, effective and friendly delivery of services',
              'Strong Collaborations and partnerships',
              'Enhanced Community engagement and outreach',
              'Continuous improvement of the institute operations'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white/10 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-ahiti-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ahiti-primary/10 text-ahiti-primary">Get In Touch</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-ahiti-primary mb-4">
              Contact Us
            </h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Have questions about our programs? Reach out to us and we'll be happy to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-ahiti-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ahiti-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-ahiti-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">Mwea East Sub-County, Kirinyaga County</p>
                      <p className="text-gray-600">Approximately 3km from Kutus Town</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ahiti-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-ahiti-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+254 7XX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ahiti-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-ahiti-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@ahitindomba.go.ke</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ahiti-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-ahiti-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Website</h4>
                      <p className="text-gray-600">ndomba.ahiti.go.ke</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-ahiti-primary mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://x.com/AhitiNdomba" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-ahiti-primary/10 rounded-lg flex items-center justify-center hover:bg-ahiti-primary hover:text-white transition-colors text-ahiti-primary">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-ahiti-primary/10 rounded-lg flex items-center justify-center hover:bg-ahiti-primary hover:text-white transition-colors text-ahiti-primary">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-ahiti-primary/10 rounded-lg flex items-center justify-center hover:bg-ahiti-primary hover:text-white transition-colors text-ahiti-primary">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-ahiti-primary mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ahiti-primary focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-ahiti-primary text-white hover:bg-ahiti-dark">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ahiti-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo & About */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-ahiti-secondary rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-ahiti-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">AHITI NDOMBA</h3>
                  <p className="text-white/70 text-sm">Animal Health Training Institute</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                A government institution under the Ministry of Agriculture and Livestock Development, 
                committed to training skilled veterinary paraprofessionals for Kenya's livestock sector.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/AhitiNdomba" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ahiti-secondary hover:text-ahiti-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ahiti-secondary hover:text-ahiti-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ahiti-secondary hover:text-ahiti-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white/80 hover:text-ahiti-secondary transition-colors">Home</a></li>
                <li><a href="#about" className="text-white/80 hover:text-ahiti-secondary transition-colors">About Us</a></li>
                <li><a href="#courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Courses</a></li>
                <li><a href="#news" className="text-white/80 hover:text-ahiti-secondary transition-colors">News</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-ahiti-secondary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold text-lg mb-6">Programs</h4>
              <ul className="space-y-3">
                <li><a href="#courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Diploma in Animal Health</a></li>
                <li><a href="#courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Certificate in Animal Health</a></li>
                <li><a href="#courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Artificial Insemination</a></li>
                <li><a href="#courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Poultry Farming</a></li>
                <li><a href="#courses" className="text-white/80 hover:text-ahiti-secondary transition-colors">Bee Farming</a></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-white/20" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 AHITI Ndomba. All rights reserved. Ministry of Agriculture & Livestock Development.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-ahiti-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-ahiti-secondary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Portal Modal */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-ahiti-primary text-2xl">Portal Login</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-ahiti-primary/10 rounded-full flex items-center justify-center">
                <Building2 className="w-10 h-10 text-ahiti-primary" />
              </div>
            </div>
            <div>
              <Label htmlFor="username" className="text-gray-700">Username / Email</Label>
              <Input id="username" placeholder="Enter your username" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="mt-2" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-ahiti-primary focus:ring-ahiti-primary" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-ahiti-primary hover:underline">Forgot password?</a>
            </div>
            <Button className="w-full bg-ahiti-primary text-white hover:bg-ahiti-dark">
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <div className="text-center text-sm text-gray-500">
              <p>Access student portal, course materials, and more.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App
