export type VideoItem = {
  index: string;
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
};

const TOTAL_VIDEOS = 10;

export const videos: VideoItem[] = Array.from({ length: TOTAL_VIDEOS }, (_, i) => {
  const index = String(i + 1).padStart(2, "0");

  return {
    index,
    title: `Video ${index}`,
    description: `Vertical preview + playback pair for video_${index}.mp4 and preview_${index}.png.`,
    videoSrc: `/videos/video_${index}.mp4`,
    posterSrc: `/previews/preview_${index}.png`
  };
});
