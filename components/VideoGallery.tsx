"use client";

import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export default function VideoGallery() {
  return (
    <section className="space-y-6 md:space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {videos.map((video) => (
          <VideoCard key={video.videoSrc} video={video} />
        ))}
      </div>
    </section>
  );
}
