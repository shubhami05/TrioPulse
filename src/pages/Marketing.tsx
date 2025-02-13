import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Target, BarChart, ArrowRight, Users } from 'lucide-react';
import WaveField from '../components/WaveField';
import influencer from '../../public/social-media-influencer-marketing.png';
import post from '../../public/social-media-design-post.png'
import seomgt from '../../public/strategic-social-media-management--.png'

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Float
          speed={4}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <mesh>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#3b82f6"
              wireframe
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
        <WaveField />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default function Marketing() {
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
              <Rocket className="w-16 h-16 mb-6 mx-auto text-blue-500" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Strategic Digital Marketing
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Elevate your brand with data-driven strategies and innovative campaigns
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-24">
          {/* Influencer Marketing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <Users className="w-16 h-16 text-blue-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Influencer Marketing</h2>
              <p className="text-gray-400 mb-6">
                Connect with your target audience through authentic partnerships with influential creators. 
                Our influencer marketing strategies help you build trust, increase brand awareness, and 
                drive meaningful engagement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Influencer Discovery & Vetting
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Campaign Strategy & Management
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Performance Analytics & ROI Tracking
                </li>
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-2xl opacity-20" />
              <img
                src={influencer}
                alt="Influencer Marketing"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse items-center gap-12"
          >
            <div className="flex-1">
              <Target className="w-16 h-16 text-blue-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Social Media</h2>
              <p className="text-gray-400 mb-6">
                Build meaningful connections with your audience through strategic social media 
                management. We create engaging content that resonates with your target market 
                and drives engagement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Content Creation & Curation
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Community Management
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Social Media Analytics
                </li>
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20" />
              <img
                src={post}
                alt="Social Media"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* SEO */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <BarChart className="w-16 h-16 text-blue-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">SEO</h2>
              <p className="text-gray-400 mb-6">
                Improve your search engine rankings and drive organic traffic with our 
                comprehensive SEO services. We use data-driven strategies to enhance your 
                online visibility.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Technical SEO Optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Content Strategy
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                  Link Building
                </li>
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 rounded-2xl blur-2xl opacity-20" />
              <img
                src={seomgt}
                alt="SEO"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}