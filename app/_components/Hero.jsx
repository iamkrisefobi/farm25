import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import backgroundImage from "/farm-produce.jpg";

function Hero() {
  return (
    <>
      <section className="text-white" id="hero">
        <div
          className="bg-cover bg-center h-[85%]"
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
                <a href="#" className="text-sm font-semibold leading-6">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
