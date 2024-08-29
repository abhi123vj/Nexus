import WelcomeLogo from "@/assets/victory.svg";
import SignUpLogo from "@/assets/Cat.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log("Signed Up");
  };
  const handleSignIn = () => {
    console.log("Signed In");
  };
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="h-[80vh] w-[80vw] bg-white text-opacity-90 shadow-2xl md:w-[80vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl"> Welcome</h1>
              <img src={WelcomeLogo} alt="Welcome Logo" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
              Sign in to access the Nexus
            </p>
          </div>
          <div className="flex items-center justify-center w-full  ">
            <Tabs defaultValue="sign-in" className="w-3/4">
              <TabsList className="w-full rounded-none bg-transparent">
                <TabsTrigger
                  value="sign-in"
                  className="w-full text-opacity-20 rounded-none border-b-2 text-black  p-3 transition-all duration-300 data-[state=active]:bg-transparent data-[state=active]:border-b-purple-500 data-[state=active]:font-semibold "
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="sign-up"
                  className="w-full   text-opacity-20  rounded-none border-b-2 text-black  p-3 transition-all duration-300 data-[state=active]:bg-transparent data-[state=active]:border-b-purple-500  data-[state=active]:font-semibold"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="sign-in"
                className="flex flex-col gap-5 mt-10 h-full "
              >
                
                <Input
                  type="email"
                  placeholder="Email"
                  className="p-6"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  className="p-6"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Button className="rounded-full" onClick={handleSignIn}>
                  Sign In
                </Button>
              </TabsContent>
              <TabsContent value="sign-up" className="flex flex-col gap-5">
                <Input
                  type="email"
                  placeholder="Email"
                  className="p-6"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  className="p-6"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="p-6"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                />
                <Button className="rounded-full" onClick={handleSignUp}>
                  Sign Up
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="hidden xl:flex items-center justify-center w-full">
          <img src={SignUpLogo} className=" h-[50%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
