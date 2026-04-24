import type { VideoItem } from "@/data/videos";

type VideoCardProps = {
  video: VideoItem;
  isActive: boolean;
  onSelect: (video: VideoItem) => void;
};

export default function VideoCard({ video, isActive, onSelect }: VideoCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(video)}
      className={`group relative overflow-hidden rounded-2xl border text-left shadow-cinematic transition-all duration-300 ${
        isActive
          ? "border-glow/80 ring-2 ring-glow/30"
          : "border-white/10 hover:-translate-y-0.5 hover:border-glow/60"
      }`}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <img
          src={video.posterSrc}
          alt={`${video.title} preview thumbnail`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-white/30 bg-black/45 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition group-hover:scale-105">
            ▶ Play
          </span>
        </div>
        <span
          className={`absolute right-2 top-2 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${
            video.locked ? "bg-rose-500/80 text-white" : "bg-emerald-500/80 text-white"
          }`}
        >
          {video.locked ? "Locked" : "Unlocked"}
        </span>
      </div>
      <div className="space-y-1.5 bg-slate/60 p-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="line-clamp-1 text-sm font-semibold text-white">{video.title}</h3>
        </div>
        <p className="line-clamp-2 text-xs leading-relaxed text-slate-300">{video.description}</p>
      </div>
    </button>
  );
}
