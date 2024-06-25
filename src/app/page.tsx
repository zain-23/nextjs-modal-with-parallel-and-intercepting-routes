import PhotoDisplay from "./photo/[photoId]/photoDisplay";

export type PhotoData = {
  id: number;
  title: string;
  path: string;
};

export default async function Home() {
  const response = await fetch("http://localhost:3500/images", {
    cache: "no-store",
  });

  const images: PhotoData[] = await response.json();

  if (!images.length) {
    return <h1>No images to Display</h1>;
  }
  return (
    <main className="flex flex-col items-center gap-8 pb-8">
      {images.map((data) => (
        <PhotoDisplay key={data.id} photoData={data} />
      ))}
    </main>
  );
}
