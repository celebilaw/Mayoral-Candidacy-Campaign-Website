import "../css/Gallery.css";
import Image1 from "./gallery-pics/img1.webp";
import Image2 from "./gallery-pics/img2.webp";
import Image3 from "./gallery-pics/img3.webp";
import Image4 from "./gallery-pics/img4.webp";
import Image5 from "./gallery-pics/img5.webp";
import Image6 from "./gallery-pics/img6.webp";
import Image7 from "./gallery-pics/img7.webp";
import Image8 from "./gallery-pics/img8.webp";
import Image9 from "./gallery-pics/img9.webp";
import Image10 from "./gallery-pics/img10.webp";
import Image11 from "./gallery-pics/img11.webp";
import Image12 from "./gallery-pics/img12.webp";
import Image13 from "./gallery-pics/img13.webp";
import Image14 from "./gallery-pics/img14.webp";
import Image15 from "./gallery-pics/img15.webp";
import Image16 from "./gallery-pics/img16.webp";
import Image17 from "./gallery-pics/img17.webp";
import Image18 from "./gallery-pics/img18.webp";
import Image19 from "./gallery-pics/img19.webp";
import Image20 from "./gallery-pics/img20.webp";
import Image21 from "./gallery-pics/img21.webp";
import Image22 from "./gallery-pics/img22.webp";
import Image23 from "./gallery-pics/img23.webp";
import { Box, ImageList, ImageListItem, useMediaQuery } from '@mui/material';

function ImageGallery() {
    const columns = useMediaQuery('(max-width: 1000px)');
    return (
        <Box className="gallery">
            <ImageList variant="masonry" cols={columns ? 2 : 3} gap={8}>
                {images.map((image) => (
                    <ImageListItem key={image.webUrl}>
                        <img src={image.webUrl} alt={image.title} loading="lazy"/>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

const images = [
  {
    webUrl: Image3,
    title: 'img3',
  },
  {
    webUrl: Image1,
    title: 'img1',
  },
  {
    webUrl: Image12,
    title: 'img12',
  },
  {
    webUrl: Image17,
    title: 'img17',
  },
  {
    webUrl: Image5,
    title: 'img5',
  },
  {
    webUrl: Image6,
    title: 'img6',
  },
  {
    webUrl: Image7,
    title: 'img7',
  },
  {
    webUrl: Image8,
    title: 'img8',
  },
  {
    webUrl: Image9,
    title: 'img9',
  },
  {
    webUrl: Image10,
    title: 'img10',
  },
  {
    webUrl: Image18,
    title: 'img18',
  },
  {
    webUrl: Image4,
    title: 'img4',
  },
  {
    webUrl: Image13,
    title: 'img13',
  },
  {
    webUrl: Image14,
    title: 'img14',
  },
  {
    webUrl: Image15,
    title: 'img15',
  },
  {
    webUrl: Image20,
    title: 'img20',
  },
  {
    webUrl: Image2,
    title: 'img2',
  },
  {
    webUrl: Image11,
    title: 'img11',
  },
  {
    webUrl: Image19,
    title: 'img19',
  },
  {
    webUrl: Image16,
    title: 'img16',
  },
  {
    webUrl: Image21,
    title: 'img21',
  },
  {
    webUrl: Image22,
    title: 'img22',
  },
  {
    webUrl: Image23,
    title: 'img23',
  },
];

const Gallery = () => {
    return (
        <ImageGallery />
    )
}

export default Gallery;