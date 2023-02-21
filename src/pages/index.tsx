import { Inter } from "@next/font/google";
import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";

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
      {/* <shaderMaterial /> */}
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
        <color attach="background" args={[0, 0, 0]} />
        <Image url="/logo_typo_transparent_1000x1000.png" />
      </Canvas>
    </div>
  );
}
