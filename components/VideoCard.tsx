"use client";

import { useRef } from "react";
import type { VideoItem } from "@/data/videos";

type VideoCardProps = {
  video: VideoItem;
  isActive: boolean;
  onSelect: (video: VideoItem) => void;
};

export default function VideoCard({ video, isActive, onSelect }: VideoCardProps) {
  const previewRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    previewRef.current
      ?.play()
      .catch(() => {
        // Ignore autoplay restrictions for hover preview.
      });
  };

  const handleMouseLeave = () => {
    if (!previewRef.current) {
      return;
    }

    previewRef.current.pause();
    previewRef.current.currentTime = 0;
  };

  return (
    <button
      type="button"
      onClick={() => onSelect(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border text-left shadow-cinematic transition-all duration-300 ${
        isActive
          ? "border-glow/80 ring-2 ring-glow/30"
          : "border-white/10 hover:-translate-y-0.5 hover:border-glow/60"
      }`}
    >
      <div className="relative w-full aspect-[9/16] overflow-hidden bg-black">
        <video
          ref={previewRef}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={video.videoSrc}
          poster={video.posterSrc}
          preload="metadata"
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/30 bg-black/45 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition group-hover:scale-105">
            ▶ Play
          </span>
        </div>
      </div>
      <div className="space-y-1.5 bg-slate/60 p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-white">{video.title}</h3>
        <p className="line-clamp-2 text-xs leading-relaxed text-slate-300">{video.description}</p>
      </div>
    </button>
  );
}
