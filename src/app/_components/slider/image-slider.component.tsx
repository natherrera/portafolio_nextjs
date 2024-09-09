import ImageWithTransition from "./image-with-transition.component";
import Error from "@/app/(pages)/error/page";

interface ImageProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageProps) {
    return (
      <div>
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <ImageWithTransition
              key={index}
              src={`${image}`}
              showImage={true}
            />
          ))
        ) : (
          <Error error={{ message: "no hay imágenes", name: "Image Slider Error" }}/>
        )}
      </div>
    );
  }


