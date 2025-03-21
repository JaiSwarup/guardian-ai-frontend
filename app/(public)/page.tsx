"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Database } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-5xl md:mx-auto lg:col-span-8 lg:text-left">
              <motion.h1  initial={{opacity:0,y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5}} className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-orange-500">
                GuardianAI
                <motion.span  initial={{opacity:0,y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.5}} className="block text-blue-500 w-full">
                  A Community Disaster Resilience Platform (CRDP)
                </motion.span>
              </motion.h1>
              <motion.p  initial={{opacity:0,y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.5}} className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                GuardianAI aims to revolutionize disaster management by leveraging real-time risk prediction, NLP-based crisis detection from social media and emergency reports, reinforcement learning for optimal evacuation planning, and intelligent relief resource allocation.
              </motion.p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <motion.div  initial={{opacity:0,x:-30}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.5,delay:0.75}}>
                <Button
                  className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center"
                  asChild
                >
                  <Link  href="/signup" target="_blank">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                  </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <motion.div initial={{opacity:0,x:-30}}
             animate={{opacity:1,x:0}} transition={{duration:0.5,delay:1}} >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Database className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">Disaster Risk Prediction</h2>
                <p className="mt-2 text-base text-gray-400">
                  Leverages deep learning on satellite imagery to detect floods, wildfires, and hurricanes. Integrates LSTMs & Transformer-based time-series models to predict disasters days in advance. Outputs real-time risk heatmaps to guide emergency planning.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,x:-30}}
             animate={{opacity:1,x:0}} transition={{duration:0.5,delay:1}} className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">Social Media & Emergency Signal Detection</h2>
                <p className="mt-2 text-base text-gray-400">
                Analyzes crisis signals from Twitter, news reports, emergency
                  calls using NLP. Detects distress messages in real-time,
                  prioritizing evacuation assistance accordingly. Filters
                  misinformation using Transformer-based fake news detection
                  models.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,x:-30}}
            animate={{opacity:1,x:0}} transition={{duration:0.5,delay:1}} className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">Personalized AI Early Warning System</h2>
                <p className="mt-2 text-base text-gray-400">
                  Uses real-time data analysis and AI-driven risk assessment to deliver personalized early warnings. Alerts are tailored to individual needs based on location, vulnerability, and risk factors, ensuring timely and effective emergency responses.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{opacity:0,x:-30}}
             animate={{opacity:1,x:0}} transition={{duration:0.5,delay:1}} className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-white">AI-Powered Evacuation Route Optimization</h2>
                <p className="mt-2 text-base text-gray-400">
                  Dynamically recommends safest, congestion-free evacuation routes using Graph Neural Networks (GNNs). Considers real-time traffic, infrastructure damage, and disaster impact zones. Ensures smooth and efficient evacuations with RL-based optimization.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Become a volunteer</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-400">
                Join our team and make a difference in the community by volunteering.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="https://github.com/nextjs/saas-starter" target="_blank">
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                  Sign Up
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
