import type { VideoItem } from "@/data/videos";

type FeaturedVideoPlayerProps = {
  video: VideoItem;
};

export default function FeaturedVideoPlayer({ video }: FeaturedVideoPlayerProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate/80 p-3 shadow-cinematic transition-all duration-300 md:p-5">
      <div className="grid gap-4 md:grid-cols-[minmax(0,360px)_1fr] md:items-center">
        <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-black">
          <div className="w-full aspect-[9/16]">
            <video
              key={video.videoSrc}
              className="h-full w-full object-cover"
              src={video.videoSrc}
              poster={video.posterSrc}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
        <div className="space-y-3 px-1 pb-2 pt-1 md:px-2">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/70">Featured Playback</p>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{video.title}</h2>
          <p className="max-w-prose text-sm leading-relaxed text-slate-300 md:text-base">{video.description}</p>
        </div>
      </div>
    </section>
  );
}
