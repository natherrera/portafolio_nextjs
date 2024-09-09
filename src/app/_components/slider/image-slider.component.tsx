import ImageWithTransition from "./image-with-transition.component";
import path from "path";
import fs from "fs";
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
              src={`/images/${image}`}
              showImage={true}
            />
          ))
        ) : (
          <Error error={{ message: "no hay imágenes", name: "Image Slider Error" }}/>
        )}
      </div>
    );
  }
  

export async function getStaticProps() {
  try {
    const directoryPath = path.join(process.cwd(), "public/images"); // Ajusta la ruta si es necesario
    const imageFiles = fs.readdirSync(directoryPath);
    console.log("AKIII");
    return {
      props: {
        images: imageFiles,
      },
    };
  } catch (error) {
    console.error("----------------Error al leer las imágenes:", error);
    return {
      props: {
        images: [], // O un array vacío si no hay imágenes
      },
    };
  }
}

