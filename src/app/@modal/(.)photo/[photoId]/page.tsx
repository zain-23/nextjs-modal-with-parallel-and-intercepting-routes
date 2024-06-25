import { PhotoData } from "@/app/page";
import PhotoDisplay from "@/app/photo/[photoId]/photoDisplay";
import Modal from "@/components/modal";

export default async function Photo({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const response = await fetch(`http://localhost:3500/images/${photoId}`, {
    cache: "no-store",
  });
  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
    return <h1>No data found with this details</h1>;
  }
  return (
    <Modal>
      <PhotoDisplay photoData={photoData} />
    </Modal>
  );
}
