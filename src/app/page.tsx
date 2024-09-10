import { Suspense } from "react";
import Box from "./_components/box.component";
import Button from "./_components/button.component";
import ImageSlider from "./_experimental/slider/image-slider.component";
import img1 from "../../public/images/img1.jpg";
import img2 from "../../public/images/img2.png";

export default function Home() {
  const images = [img1.src, img2.src];
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ImageSlider images={images} />
        </Suspense>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Box></Box>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Button></Button>
            <Button></Button>
          </div>
        </main>
      </div>
    </div>
  );
}
