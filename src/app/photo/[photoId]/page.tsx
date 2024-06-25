import { PhotoData } from "@/app/page";
import React from "react";
import PhotoDisplay from "./photoDisplay";

const Page = async ({
  params: { photoId },
}: {
  params: { photoId: string };
}) => {
  const response = await fetch(`http://localhost:3500/images/${photoId}`, {
    cache: "no-store",
  });
  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
    return <h1>No data found with this details</h1>;
  }
  return (
    <div className="mt-2 grid place-items-center">
      <PhotoDisplay photoData={photoData} />
    </div>
  );
};

export default Page;
