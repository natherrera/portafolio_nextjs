import React from "react";
import { Slide } from "@mui/material";
import Image from "next/image";

type Direction = "left" | "right" | "up" | "down" | undefined;

const ImageWithTransition = ({
  src,
  showImage,
  direction = "left",
}: {
  src: string;
  showImage: boolean;
  direction: Direction;
}) => {
  return (
    <Slide direction={direction} in={showImage} mountOnEnter>
      <Image src={src} alt="My Image" layout="fill" objectFit="cover" />
    </Slide>
  );
};

export default ImageWithTransition;
