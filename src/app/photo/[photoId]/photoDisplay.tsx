import { PhotoData } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

export default function PhotoDisplay({ photoData }: { photoData: PhotoData }) {
  return (
    <div className="flex flex-col gap-4 w-64 mx-auto">
      <h1 className="text-3xl text-center">{photoData.title}</h1>
      <Link href={`/photo/${photoData.id}`}>
        <div className="border-2 rounded-xl overflow-hidden w-64 h-64 relative">
          <Image
            src={photoData.path}
            alt={photoData.title}
            sizes="256px"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </Link>
    </div>
  );
}
