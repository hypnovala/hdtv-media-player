"use client";

import { useRef, useState } from "react";
import VideoCard from "@/components/VideoCard";
import FeaturedVideoPlayer from "@/components/FeaturedVideoPlayer";
import { videos } from "@/data/videos";
import type { VideoItem } from "@/data/videos";

export default function VideoGallery() {
  const [featured, setFeatured] = useState<VideoItem | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);

  const handlePlay = (video: VideoItem) => {
    setFeatured(video);
    setTimeout(() => {
      playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <section className="space-y-6 md:space-y-8">
      {featured && (
        <div ref={playerRef}>
          <FeaturedVideoPlayer video={featured} />
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {videos.map((video) => (
          <VideoCard key={video.videoSrc} video={video} onPlay={() => handlePlay(video)} />
        ))}
      </div>
    </section>
  );
}
