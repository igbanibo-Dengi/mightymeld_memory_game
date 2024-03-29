import { Inter } from "next/font/google";
import "./globals.css";
import {
  GiBeachBall,
  GiCube,
  GiDiceSixFacesFive,
  GiDragonfly,
  GiFlowerEmblem,
  GiHearts,
  GiHummingbird,
  GiOpenBook,
  GiUmbrella,
  GiWaterDrop,
} from "react-icons/gi";
import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mighty Meld",
  description: "may the force be with you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className=" container flex flex-col items-center justify-center  gap-10 h-screen w-screen">
            <span className="w-full flex justify-end max-w-screen">
              <ModeToggle />
            </span>
            {children}
          </main>
          {/* Floating Icons */}
          <div>
            <ul className="circles w-full h-full top-0 left-0  absolute overflow-hidden z-0">
              <li className="text-pink-500 flex items-center justify-center">
                <GiCube size={60} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiHearts size={36} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiUmbrella size={36} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiWaterDrop size={40} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiBeachBall size={90} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiOpenBook size={86} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiDragonfly size={36} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiDiceSixFacesFive size={36} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiHummingbird size={46} />
              </li>
              <li className="text-pink-500 flex items-center justify-center">
                <GiFlowerEmblem size={130} />
              </li>
            </ul>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
