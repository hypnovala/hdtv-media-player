import type { VideoItem } from "@/data/videos";

type FeaturedVideoPlayerProps = {
  video: VideoItem;
};

export default function FeaturedVideoPlayer({ video }: FeaturedVideoPlayerProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate/80 p-3 shadow-cinematic md:p-5">
      <div className="grid gap-4 md:grid-cols-[minmax(0,360px)_1fr] md:items-center">
        <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-black">
          <div className="aspect-[9/16] w-full">
            <video
              key={video.videoSrc}
              className="h-full w-full object-cover"
              src={video.videoSrc}
              poster={video.posterSrc}
              controls
              playsInline
              preload="metadata"
              autoPlay
            />
          </div>
        </div>
        <div className="space-y-3 px-1 pb-2 pt-1 md:px-2">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                video.locked ? "bg-rose-500/20 text-rose-300" : "bg-emerald-500/20 text-emerald-300"
              }`}
            >
              {video.locked ? "Locked" : "Unlocked"}
            </span>
            <span className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-slate-300">{video.duration}</span>
          </div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{video.title}</h2>
          <p className="max-w-prose text-sm leading-relaxed text-slate-300 md:text-base">{video.description}</p>
        </div>
      </div>
    </section>
  );
}
