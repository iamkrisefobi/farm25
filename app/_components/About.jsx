import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import about1 from ".../"

function About() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex justify-between p-8 my-0 md:my-8 flex-col lg:flex-row space-y-20 space-x-8">
        <div className="order-2 lg:order-1 lg:w-1/2 h-3/4 relative sm:mt-12">
          <img
            src="/farmAbout1.jpg"
            alt="aboutImg1"
            // width="100%"
            // height={50}
            className="w-3/5 rounded-lg shadow-2xl"
          />
          <img
            src="/farmAbout2.jpg"
            alt="aboutImg1"
            // width="100%"
            // height={50}
            className="absolute w-3/5 md:h-4/5 rounded-lg shadow-2xl right-0 top-1/3 border-8 border-white"
          />
        </div>
        <div className="order-1 lg:order-2 lg:w-1/2 items-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">About Us</h2>
          <h3 className="text-5xl font-bold text-secondary">
            Next big thing in Agriculture
          </h3>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button className="cursor-pointer mb-4">Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default About;
