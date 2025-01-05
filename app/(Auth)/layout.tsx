import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main className="bg-background min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex items-center justify-between">
                    <Image
                        src="/logo.svg"
                        height={48}
                        width={100}
                        alt="Bipolar"
                    />
                    <Button variant="secondary">Register</Button>
                </nav>
                <div className="flex items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;
