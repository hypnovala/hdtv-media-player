"use client";

import { useMemo, useState } from "react";
import FeaturedVideoPlayer from "@/components/FeaturedVideoPlayer";
import VideoCard from "@/components/VideoCard";
import { videos, type VideoItem } from "@/data/videos";

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);

  const orderedVideos = useMemo(
    () => [activeVideo, ...videos.filter((video) => video.videoSrc !== activeVideo.videoSrc)],
    [activeVideo]
  );

  return (
    <section className="space-y-6 md:space-y-8">
      <FeaturedVideoPlayer video={activeVideo} />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
        {orderedVideos.map((video) => (
          <VideoCard
            key={video.videoSrc}
            video={video}
            isActive={video.videoSrc === activeVideo.videoSrc}
            onSelect={setActiveVideo}
          />
        ))}
      </div>
    </section>
  );
}
