import React from "react";

const VideoTutorial = () => {
  return (
    <section className="my-36 text-white">
      <div className="container px-2 mx-auto">
        <h1 className="text-4xl lg:text-6xl text-center font-semibold">
          Master Our Platform in Minutes
        </h1>
        <p className="text-center text-neutral-400">
          Your Ultimate Guide to Success!
        </p>
        <div className="w-full max-w-4xl mx-auto mt-12 relative">
          <video
            className="w-full h-full object-cover rounded-lg border border-gray-700"
            src="/video/how-to-earn.mp4"
            type="video/mp4"
            autoPlay
            muted
            controls={true}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoTutorial;
