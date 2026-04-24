import VideoGallery from "@/components/VideoGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink bg-[radial-gradient(circle_at_top,#222d4f_0%,#0d1424_35%,#05070f_70%)] px-4 py-8 text-slate-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 space-y-3 text-center md:mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Curated Showcase</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">Vertical Media Theater</h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base">
            Auto-paired library using video_01.mp4 ↔ preview_01.png naming for a smooth, cinematic mobile-first feed.
          </p>
        </header>
        <VideoGallery />
      </div>
    </main>
  );
}
