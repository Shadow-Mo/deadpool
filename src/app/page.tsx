"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Home() {
  return (
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url(/BACKGROUND.png)' }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Main Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Deadpool World</h1>
          <p className="mt-4 text-lg">Discover the Merc with a Mouth in all his glory!</p>

          {/* Tooltip with Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href="/learn-more">
                  <Button className="mt-6 px-6 py-3 bg-red-600 text-lg hover:bg-red-700 transition duration-300 rounded-lg">
                    Learn More
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to explore more about Deadpool!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Card Component */}
          <Card className="mt-12 w-96 bg-white bg-opacity-10 text-white backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Fun Fact</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Deadpool can break the fourth wall and interact with his audience!</p>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
