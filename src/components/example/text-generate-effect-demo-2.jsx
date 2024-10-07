"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `I'm Rohan,
Passionate MERN Stack Developer`
export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={3} filter={false} words={words} />;
}
