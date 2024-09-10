"use client";
import { Box, FormControlLabel } from "@mui/material";
import ImageWithTransition from "./image-with-transition.component";
import Error from "@/app/(pages)/error/page";
import { useState } from "react";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

interface ImageProps {
  images: string[];
}

type Direction = "left" | "right" | "up" | "down" | undefined;

export default function ImageSlider({ images }: ImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [directionIn, setDirectionIn] = useState<Direction>();
  const [directionOut, setDirectionOut] = useState<Direction>();

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setDirectionIn("left");
    setDirectionOut("right");
  };
  const handleNextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setDirectionIn("right");
    setDirectionOut("left");
  };
  return (
    <div>
      <Box sx={{ height: "50vh", width: "100%", position: "relative" }}>
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <ImageWithTransition
              key={index}
              src={images[currentIndex]}
              showImage={image === images[currentIndex]}
              direction={
                image === images[currentIndex] ? directionIn : directionOut
              }
            />
          ))
        ) : (
          <Error
            error={{ message: "no hay imágenes", name: "Image Slider Error" }}
          />
        )}
      </Box>
      <Box textAlign={"center"}>
        <FormControlLabel
          control={<ArrowBackIos onClick={handlePrevImage} />}
          label=""
          disabled={currentIndex === 0}
        />
        <FormControlLabel
          control={<ArrowForwardIos onClick={handleNextImage} />}
          label=""
          disabled={currentIndex === images.length - 1}
        />
      </Box>
    </div>
  );
}
