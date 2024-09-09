import React from 'react';
import { Fade } from '@mui/material';
import Image from 'next/image';

const ImageWithTransition = ({ src, showImage } : {src: string, showImage: boolean}) => {

    return (
        <Fade in={showImage} timeout={1000}>
            <Image src={src} alt="My Image" />
        </Fade>
    );
};

export default ImageWithTransition;
