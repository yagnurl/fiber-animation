"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Html, ScrollControls, useProgress } from "@react-three/drei";

import Model from "./Model";
import { Suspense } from "react";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 9]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.4} pages={4}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
