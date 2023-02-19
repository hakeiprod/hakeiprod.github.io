import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src="logo_typo_transparent_1000x1000.png"
        alt=""
        style={{ height: "100%" }}
      />
    </div>
  );
}
