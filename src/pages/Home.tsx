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

function ProjectCard({ image, title, category, description, index }) {
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

function ServiceCard({ icon: Icon, title, description, skills, color, index }) {
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
          {skills.map((skill, i) => (
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
      Hello
    </div>
  );
}

export default Home;