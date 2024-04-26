import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import backgroundImage from "/farm-produce.jpg";

function Hero() {
  return (
    <>
      <section className="text-white" id="hero">
        <div
          className="bg-cover bg-center h-[85%] lg:h-[100%]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/farm-produce.jpg")`,
          }}
        >
          <div className="mx-auto md:max-w-3xl py-24 lg:py-32">
            {/* Main text content */}
            <div className="text-center px-2.5">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight transform">
                Transforming farm produce into market-ready food products
              </h1>
              <p className="mt-6 text-lg leading-8 max-w-4xl">
                We connect farmers directly with consumers, ensuring a seamless
                supply of healthy goods.
              </p>
              {/* Call to action buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button>Get Started</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <a
                      href="#"
                      className="flex gap-1 text-sm font-semibold leading-6"
                    >
                      Sections{" "}
                      <span className="h-6 w-6" aria-hidden="true">
                        <ArrowDown />
                      </span>
                    </a>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-primary text-white">
                    <DropdownMenuLabel>Browse Sections</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Production</DropdownMenuItem>
                    <DropdownMenuItem>Aggregation</DropdownMenuItem>
                    <DropdownMenuItem>Manufacturing</DropdownMenuItem>
                    <DropdownMenuItem>Procurement</DropdownMenuItem>
                    <DropdownMenuItem>Distribution</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
