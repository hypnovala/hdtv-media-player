import Image from "next/image";
import VideoGallery from "@/components/VideoGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink bg-[radial-gradient(circle_at_top,#222d4f_0%,#0d1424_35%,#05070f_70%)] px-4 py-8 text-slate-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 space-y-3 text-center md:mb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold/80">Curated Showcase</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">HDTV Hidden Exclusives</h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base">
            Step inside a curated stream of cinematic hypnosis experiences designed to pull your focus deeper and keep your attention exactly where it belongs…
          </p>
          <div className="relative mx-auto mt-4 w-full overflow-hidden rounded-xl border border-white/10" style={{ aspectRatio: "2560 / 423" }}>
            <Image
              src="/banner_hdtv.png"
              alt="HDTV Hidden Exclusives Banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>
        <VideoGallery />
      </div>
    </main>
  );
}
