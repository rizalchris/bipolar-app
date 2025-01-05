import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Bipolar",
    description: "Bipolar Project Management",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    plusJakartaSans.className,
                    "antialiased min-h-screen"
                )}
            >
                {children}
            </body>
        </html>
    );
}
