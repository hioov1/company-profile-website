import "./globals.css";
import { ReactNode } from "react";
import Menu from "../components/Menu";

export const metadata = {
  title: "Twiscode",
  description: "We Code, We Deliver",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-hidden antialiased">
        <Menu />
        {/* konten Hero/page akan di-render di sini */}
        <main className="mt-0">{children}</main>
      </body>
    </html>
  );
}
