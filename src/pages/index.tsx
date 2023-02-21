import { Inter } from "@next/font/google";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { EffectComposer, Glitch, Noise } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { Vector2 } from "three";

const inter = Inter({ subsets: ["latin"] });

const Texture = ({ texture }: { texture: THREE.Texture }) => (
  <>
    <mesh>
      <planeGeometry attach="geometry" args={[10, 10, 10, 10]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  </>
);

const Image = ({ url }: { url: string }) => {
  const texture = useLoader(THREE.TextureLoader, url);
  return (
    <sprite scale={7}>
      <spriteMaterial map={texture} />
      <EffectComposer>
        <Glitch
          delay={new Vector2(1, 3)}
          duration={new Vector2(0, 0.1)}
          strength={new Vector2(0, 0.2)}
          mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
          active // toggle on/off
          ratio={0.1}
        />
        <Noise opacity={0.2} />
      </EffectComposer>
    </sprite>
  );
};

export default function Home() {
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [devicePixelRatio, setDevicePixelRatio] = useState(0);
  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);
    setDevicePixelRatio(window.devicePixelRatio);
  }, []);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ aspect: innerWidth / innerHeight }}
        dpr={devicePixelRatio}
        flat
      >
        <color attach="background" args={[0.001, 0.001, 0.001]} />
        <Image url="/logo_typo_transparent_1000x1000.png" />
      </Canvas>
    </div>
  );
}
