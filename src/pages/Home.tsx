import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Play, Rocket, Code, Camera, ChevronDown, Trophy, Users, 
  Target, Zap, ExternalLink, Palette, Layout, Smartphone, 
  Database, Send, Mail, User, Phone, MessageSquare, Sparkles,
  Bot, Image, Wand2, BrainCircuit
} from 'lucide-react';
import HeroScene from '../components/HeroScene';
import digitalmarketing from '../../public/digital-marketing-picture.png';
import videoediting from '../../public/graphic-video-editing-team-.png';
import softwareimage from '../../public/it-software-related-image.png';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

function ProjectCard({ image, title, category, description, index }:any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <button className="px-6 py-2 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
            Learn More <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
      <div className="p-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-3">
            {category}
          </span>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ icon: Icon, title, description, skills, color, index }:any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className={`absolute inset-0 ${color}/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 h-full border border-gray-800 group-hover:border-gray-700 transition-colors">
        <div className="mb-6 relative">
          <div className={`absolute inset-0 ${color}/20 rounded-full blur-lg`} />
          <div className={`relative w-16 h-16 ${color} rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="space-y-3">
          {skills.map((skill:any, i:any) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className={`w-1.5 h-1.5 rounded-full ${color}`} />
              <span className="text-gray-300">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto w-full px-4"
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg transition-opacity opacity-0 group-focus-within:opacity-100" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="block w-full pl-10 pr-3 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-white transition-all"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg transition-opacity opacity-0 group-focus-within:opacity-100" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="block w-full pl-10 pr-3 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-white transition-all"
                required
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg transition-opacity opacity-0 group-focus-within:opacity-100" />
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="block w-full pl-10 pr-3 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-white transition-all"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg transition-opacity opacity-0 group-focus-within:opacity-100" />
          <div className="relative">
            <div className="absolute top-3 left-3">
              <MessageSquare className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your project"
              className="block w-full pl-10 pr-3 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-white transition-all resize-none"
              required
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2 mx-auto"
          >
            Send Message <Send className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}

function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Scene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We blend creativity, technology, and strategy to elevate your brand in the digital landscape
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold hover:bg-white/20 transition-all"
              >
                Our Work
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-white/50" />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-500">10+</div>
                <div className="text-sm text-gray-400">Clients Worldwide</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-500">9+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-pink-500">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-indigo-500">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover our comprehensive range of services designed to elevate your digital presence
                and drive business growth
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              index={0}
              image={digitalmarketing}
              title="Digital Marketing"
              category="Marketing"
              description="Strategic digital marketing solutions to boost your online presence and drive growth"
            />
            <ProjectCard
              index={1}
              image={videoediting}
              title="Media Production"
              category="Media"
              description="Professional media production services for impactful visual content"
            />
            <ProjectCard
              index={2}
              image={softwareimage}
              title="IT Solutions"
              category="Technology"
              description="Cutting-edge IT solutions and custom software development"
            />
          </div>
        </div>
      </div>

      {/* Popular Services Section */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Popular Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elevate your digital presence with our comprehensive range of professional services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            index={0}
            icon={Palette}
            title="Graphic Design"
            color="bg-pink-500"
            description="Transform your ideas into stunning visuals that capture attention and communicate your message effectively."
            skills={[
              "Brand Identity Design",
              "Print & Digital Media",
              "Illustration",
              "Motion Graphics"
            ]}
          />
          <ServiceCard
            index={1}
            icon={Layout}
            title="UI/UX Design"
            color="bg-purple-500"
            description="Create intuitive and engaging user experiences that delight your customers and drive conversions."
            skills={[
              "User Interface Design",
              "User Experience Design",
              "Wireframing & Prototyping",
              "Design Systems"
            ]}
          />
          <ServiceCard
            index={2}
            icon={Code}
            title="Web Development"
            color="bg-blue-500"
            description="Build powerful, scalable web applications using cutting-edge technologies and best practices."
            skills={[
              "Frontend Development",
              "Backend Development",
              "E-commerce Solutions",
              "Progressive Web Apps"
            ]}
          />
        </div>
      </div>

      {/* AI Capabilities Section */}
      <div className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-grid-8" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <BrainCircuit className="w-16 h-16 mx-auto text-purple-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of digital creation with our proprietary AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <Image className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Image Generation</h3>
                <p className="text-gray-400">
                  Create stunning visuals from text descriptions. Perfect for marketing materials, 
                  social media content, and creative projects.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8">
                <Wand2 className="w-12 h-12 text-pink-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Image Editing</h3>
                <p className="text-gray-400">
                  Advanced AI-powered editing tools for professional-grade image manipulation, 
                  enhancement, and transformation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                <Bot className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI Assistant</h3>
                <p className="text-gray-400">
                  Intelligent automation for content creation, analysis, and optimization. 
                  Let AI streamline your workflow.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-red-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Experience the Power of AI</h3>
                <p className="text-gray-300 mb-6">
                  Our custom-built AI technology combines cutting-edge machine learning with 
                  intuitive design to deliver exceptional results for your creative and business needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    State-of-the-art image generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                    Advanced editing capabilities
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    Intelligent automation tools
                  </li>
                </ul>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2">
                  Try it Now <Sparkles className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800"
                  alt="AI Technology"
                  className="rounded-2xl shadow-2xl relative"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
            <p className="text-xl text-gray-300 mb-12">Let's create something amazing together</p>
            
            {/* Contact Form */}
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;