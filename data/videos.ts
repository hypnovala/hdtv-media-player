export type VideoItem = {
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  duration: string;
  locked: boolean;
};

export const videos: VideoItem[] = [
  {
    title: "Neon Skyline Drift",
    description: "A vertical city glide through midnight lights.",
    videoSrc: "/videos/neon-skyline.mp4",
    posterSrc: "https://grok.com/imagine/post/800eacd9-fe49-43c9-a1fa-ca8b15093683",
    duration: "00:42",
    locked: false
  },
  {
    title: "Coastal Dawn",
    description: "Soft sunrise waves with cinematic color grading.",
    videoSrc: "/videos/coastal-dawn.mp4",
    posterSrc: "/thumbnails/coastal-dawn.jpg",
    duration: "01:10",
    locked: false
  },
  {
    title: "Vault Sequence",
    description: "High contrast abstract sequence from the private archive.",
    videoSrc: "/videos/vault-sequence.mp4",
    posterSrc: "/thumbnails/vault-sequence.jpg",
    duration: "00:58",
    locked: true
  },
  {
    title: "Golden Corridor",
    description: "Luxury interiors in motion with dramatic shadow play.",
    videoSrc: "/videos/golden-corridor.mp4",
    posterSrc: "/thumbnails/golden-corridor.jpg",
    duration: "01:24",
    locked: false
  }
];
