import React from "react";

export const HeroComponent = () => {
  return (
    <section
      className="hero min-h-screen snap-start"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,.7) 40%,  rgba(0,0,0,.6) ),linear-gradient(to bottom,rgba(0,0,0,0.2),rgba(0, 0, 0, 0.2)),url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cliPath: "ellipse(220% 200% at 50% 175%);",
      }}
    >
      <div class="h-full w-full flex justify-start pt-5 items-center flex-col">
        <h1
          className="font-sans font-bold text-4xl md:text-5xl text-center drop-shadow-xl"
          style={{ textShadow: "1px 1px 2px black;" }}
        >
          Finca La Candelaria
        </h1>
        <p className="font-light mb-5 md:mb-0" style={{ textShadow: "1px 1px 2px black;" }}>
          Monte grande, Buenos Aires.
        </p>
        <div className="flex flex-col justify-start items-center w-11/12 md:w-8/12">
          <video
            src="/video-horizontal.mp4"
            autoPlay
            muted
            controls
            playsInline
            loop
            className="rounded-xl drop-shadow-2xl hidden md:block"
          />
          <video
            src="/video-vertical.mp4"
            autoPlay
            muted
            playsInline
            controls
            loop
            className="rounded-xl drop-shadow-2xl  md:hidden h-5/6 max-h-screen"
          />
        </div>
        <div className="flex  flex-col justify-center items-cente my-2 md:my-5 ">
          <p
            className="text-center font-sans font-semibold"
            style={{ textShadow: "1px 1px 2px black;" }}
          >
            Conocenos más
          </p>
          <div className="flex justify-center">
            <span class="loader mt-2 "></span>
          </div>
        </div>
      </div>
    </section>
  );
};
