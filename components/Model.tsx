import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useEffect, useRef } from "react";

import { Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/stitch.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/stitch.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    //@ts-ignore
    actions["Stitch_Anim"].play().paused = true;
  }, []);
  useFrame(
    () =>
      //@ts-ignore
      (actions["Stitch_Anim"].time =
        //@ts-ignore
        (actions["Stitch_Anim"].getClip().duration * scroll.offset) / 1)
  );
  return (
    <group ref={group} scale={[1.5, 1.5, 1.5]}>
      <primitive object={scene} />
    </group>
  );
}
