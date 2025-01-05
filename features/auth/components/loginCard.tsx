import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DottedSeparator } from "@/components/ui/dotted-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export const LoginCard = () => {
    return (
        <Card className="w-full md:w-[500px] rounded-xl border bg-card text-card-foreground">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
                <form className="space-y-4">
                    <Input
                        required
                        type="email"
                        placeholder="Email"
                        value={""}
                        onChange={() => {}}
                        disabled={false}
                    />
                    <Input
                        required
                        type="password"
                        placeholder="Password"
                        value={""}
                        onChange={() => {}}
                        disabled={false}
                        min={8}
                        max={20}
                    />
                    <Button disabled={false} size="lg" className="w-full">
                        Login
                    </Button>
                </form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full"
                >
                    <FcGoogle className="mr-2" />
                    Login with Google
                </Button>
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className="w-full"
                >
                    <FaFacebook className="mr-2" />
                    Login with Facebook
                </Button>
            </CardContent>
        </Card>
    );
};
