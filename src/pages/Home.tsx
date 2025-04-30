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