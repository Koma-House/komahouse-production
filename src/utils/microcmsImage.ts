type ImageOptions = {
  width?: number;
  quality?: number;
};

export function microcmsImage(src: string | undefined, options: ImageOptions = {}): string {
  if (!src) return "";
  const { width = 1920, quality = 80 } = options;
  const url = new URL(src);
  if (url.hostname !== "images.microcms-assets.io") {
    return src;
  }
  if (width) {
    url.searchParams.set("w", String(width));
  }
  url.searchParams.set("q", String(quality));
  return url.toString();
}
