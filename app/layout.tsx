import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NshIS",
  description: "NshIS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-gray-900 lg:w-1/2 mx-auto text-white"}>
        <Navbar />
        <div className={"p-2.5"}>
            {children}
        </div>


      </body>
    </html>
  );
}

function Navbar() {
  return (
    <div className={"w-full h-16 bg-gray-800 flex items-center justify-between p-2.5"}>
        <a href={"/"} className={"text-2xl"}>NshIS</a>
        <a href={"https://github.com/NazarShuk"} className={"text-2xl"}>GitHub</a>
    </div>
  );
}
