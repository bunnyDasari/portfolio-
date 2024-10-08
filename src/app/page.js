"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "../components/ui/3d-pin";
import "./index.css"
import FloatingDockDemo from "@/components/example/floating-dock-demo";
import BackgroundLinesDemo from "@/components/example/background-lines-demo";
import { SparklesCore } from "../components/ui/sparkles";
import { CardSpotlight } from "../components/ui/card-spotlight";
import Image from "next/image";
export default function AnimatedPinDemo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="bg">

      <BackgroundLinesDemo />
      (<div
        className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1
          className="md:text-3xl text-1xl lg:text-3xl font-bold text-center text-white relative">
          Projects
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF" />

          {/* Radial Gradient to prevent sharp edges */}
          <div
            className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>)
      {isMounted && (<div className="bg h-[40rem] w-full flex items-center justify-center m-30">
        <PinContainer title="Patient smart card" href="">
          <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Patient smart card (ongoing Project)
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                digital health card that securely stores your medical records, enabling easy access to your health data anytime, anywhere.
              </span>
            </div>
            <img src="https://c8.alamy.com/comp/2PWX743/conceptual-caption-healthcare-smart-card-conceptual-photo-a-card-that-has-basics-of-a-patient-s-is-health-records-2PWX743.jpg" className="flex flex-1 w-full rounded-lg mt-4 width-auto" />
          </div>
        </PinContainer>
        <PinContainer title="YouTube Clone" href="https://ytclonebunny.ccbp.tech/login">
          <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              YouTube Clone
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Enjoy seamless video playback Perfect for content creators and viewers alike!.
              </span>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s" className="flex flex-1 w-full rounded-lg mt-4 " />
          </div>
        </PinContainer>
        <PinContainer title="Jobby app" href="https://jobwebapptech.ccbp.tech/login">
          <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Jobby App
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Browse thousands of job listings, customize your profile, and submit applications directly to company.
              </span>
            </div>
            <img src="https://themewagon.com/wp-content/uploads/2020/05/jobboard-1.jpg" className="flex flex-1 w-full rounded-lg mt-4 " />
          </div>
        </PinContainer>

      </div>)}
      (<div
        className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1
          className="md:text-3xl text-1xl lg:text-3xl font-bold text-center text-white relative">
          Work Experience
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF" />

          {/* Radial Gradient to prevent sharp edges */}
          <div
            className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>)
      <div className="flex items-center justify-center">
        (<CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Company : Rablo
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Role : Frontend Developer

          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Working closely with our design and backend teams to implement high-quality, responsive user interfaces
            and optimize performance across various devices and platforms.
            Integrate APIs and work with backend developers to ensure seamless data flow and functionality.
            Troubleshoot and debug issues across multiple browsers and devices
          </p>
        </CardSpotlight>)
        (<CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Open Source Contributor
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Project-stack : MERN and Python

          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            I actively contribute to open source projects that drive innovation and collaboration in the tech community. By participating in these projects, I aim to enhance my coding skills, learn from others, and give back by helping to build robust, scalable applications.
          </p>
        </CardSpotlight>)
      </div>

      (<div
        className="h-[10rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1
          className="md:text-3xl text-1xl lg:text-3xl font-bold text-center text-white relative">
          Contact Me
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div
            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div
            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF" />

          {/* Radial Gradient to prevent sharp edges */}
          <div
            className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>)

      <FloatingDockDemo />
    </div>
  );
}
