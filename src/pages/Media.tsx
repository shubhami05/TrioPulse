import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Camera, Film, Image, Video, ArrowRight, Play, Sparkles, Wand2 } from 'lucide-react';
import MediaSpheres from '../components/MediaSpheres';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <MediaSpheres />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default function Media() {
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
              <Camera className="w-16 h-16 mb-6 mx-auto text-purple-500" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                Creative Media Production
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Bringing your vision to life through stunning visuals and compelling storytelling
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Video Production */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur-2xl opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800"
                alt="Video Production"
                className="rounded-2xl shadow-2xl relative"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            <div>
              <Video className="w-16 h-16 text-purple-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Video Production</h2>
              <p className="text-gray-400 mb-6">
                Create stunning visual content that captivates your audience. From commercials 
                to corporate videos, we bring your story to life with professional production.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                  Commercial Production
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                  Corporate Videos
                </li>
                <li className="flex items-center text-gray-300">
                  <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                  Event Coverage
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-3xl blur-3xl opacity-75" />
            <div className="relative bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <Film className="w-16 h-16 text-purple-500 mb-6" />
                  <h2 className="text-3xl font-bold mb-4">Animation Studio</h2>
                  <p className="text-gray-300 mb-6">
                    Transform ideas into captivating animated content with our state-of-the-art 
                    animation studio. We specialize in creating immersive experiences that tell 
                    your story in unique and engaging ways.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-purple-900/30 p-4 rounded-xl">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Wand2 className="w-5 h-5 mr-2 text-purple-400" />
                        2D Animation
                      </h3>
                      <p className="text-sm text-gray-400">
                        Traditional and digital 2D animation for versatile storytelling
                      </p>
                    </div>
                    <div className="bg-purple-900/30 p-4 rounded-xl">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                        3D Animation
                      </h3>
                      <p className="text-sm text-gray-400">
                        Cutting-edge 3D animation for immersive experiences
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                      Character Animation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                      Motion Graphics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                      Visual Effects
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
                  <img
                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=800"
                    alt="3D Animation"
                    className="rounded-2xl shadow-2xl relative w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-purple-200">Powered by Advanced 3D Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photography */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800"
                alt="Photography 1"
                className="rounded-lg shadow-xl relative"
              />
            </div>
            <div className="relative mt-8">
              <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80&w=800"
                alt="Photography 2"
                className="rounded-lg shadow-xl relative"
              />
            </div>
          </div>
          <div>
            <Image className="w-16 h-16 text-purple-500 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Photography</h2>
            <p className="text-gray-400 mb-6">
              Capture moments that matter with our professional photography services.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                Product Photography
              </li>
              <li className="flex items-center text-gray-300">
                <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                Event Photography
              </li>
              <li className="flex items-center text-gray-300">
                <ArrowRight className="w-5 h-5 text-purple-500 mr-2" />
                Corporate Portraits
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}