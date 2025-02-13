import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Code, Globe, Cloud, Bot, ArrowRight, Server, Database, Image, MessageSquare, Sparkles } from 'lucide-react';
import CodeMatrix from '../components/CodeMatrix';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <CodeMatrix />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default function IT() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <Scene />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Code className="w-16 h-16 mb-6 mx-auto text-green-500" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Advanced IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Empowering businesses with cutting-edge technology and innovative solutions
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Web Development */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-3xl blur-3xl" />
            <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <Globe className="w-16 h-16 text-green-500 mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Web Development</h2>
                  <p className="text-gray-400 mb-6">
                    Create powerful web applications with modern technologies and frameworks.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-green-400">Frontend</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300 text-sm">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                          React.js
                        </li>
                        <li className="flex items-center text-gray-300 text-sm">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                          Next.js
                        </li>
                        <li className="flex items-center text-gray-300 text-sm">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                          Vue.js
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-green-400">Backend</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-300 text-sm">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                          Node.js
                        </li>
                        <li className="flex items-center text-gray-300 text-sm">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                          Python
                        </li>
                        <li className="flex items-center text-gray-300 text-sm">
                          <ArrowRight className="w-4 h-4 text-green-500 mr-2" />
                          Java
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-xl" />
                  <img
                    src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800"
                    alt="Web Development"
                    className="rounded-lg shadow-xl relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cloud Solutions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl backdrop-blur-sm">
                <Server className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-400 text-sm">
                  Scalable and secure cloud infrastructure solutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl backdrop-blur-sm mt-8">
                <Database className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Database Management</h3>
                <p className="text-gray-400 text-sm">
                  Efficient database solutions and optimization.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl backdrop-blur-sm">
                <Cloud className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cloud Migration</h3>
                <p className="text-gray-400 text-sm">
                  Seamless migration to cloud platforms.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-6 rounded-xl backdrop-blur-sm mt-8">
                <Bot className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
                <p className="text-gray-400 text-sm">
                  Smart AI solutions for your business.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Cloud className="w-16 h-16 text-green-500" />
              <h2 className="text-3xl font-bold">Cloud Solutions</h2>
              <p className="text-gray-400">
                Comprehensive cloud services to modernize your infrastructure and optimize 
                operations. We provide end-to-end cloud solutions tailored to your needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                  AWS & Azure Expertise
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                  Hybrid Cloud Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                  24/7 Monitoring
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* AI Chatbot Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-3xl blur-3xl" />
          <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <Bot className="w-16 h-16 text-green-500 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Custom AI Chatbot</h2>
                <p className="text-gray-400 mb-6">
                  Transform your customer experience with our advanced AI chatbot solutions. 
                  We create intelligent, conversational agents that can understand, respond, 
                  and generate images on demand.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <MessageSquare className="w-5 h-5 text-green-500 mr-2" />
                      Natural Language Processing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Image className="w-5 h-5 text-green-500 mr-2" />
                      Image Generation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Sparkles className="w-5 h-5 text-green-500 mr-2" />
                      Custom AI Training
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      24/7 Availability
                    </li>
                    <li className="flex items-center text-gray-300">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      Multi-platform Support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <ArrowRight className="w-5 h-5 text-green-500 mr-2" />
                      Analytics Dashboard
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-green-400">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Image Generation</h4>
                      <p className="text-sm text-gray-400">
                        Generate custom images, artwork, and designs through natural language prompts
                      </p>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Smart Responses</h4>
                      <p className="text-sm text-gray-400">
                        Context-aware conversations with memory and learning capabilities
                      </p>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Brand Alignment</h4>
                      <p className="text-sm text-gray-400">
                        Customized to match your brand voice and communication style
                      </p>
                    </div>
                    <div className="bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Integration Ready</h4>
                      <p className="text-sm text-gray-400">
                        Seamlessly connects with your existing systems and platforms
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-lg blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
                  alt="AI Chatbot Interface"
                  className="rounded-lg shadow-xl relative w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}