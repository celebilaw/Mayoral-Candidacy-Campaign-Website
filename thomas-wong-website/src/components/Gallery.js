import "../css/Gallery.css";
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
    webUrl: "https://drive.google.com/uc?export=view&id=142IC2nqJ_gdutVYD4IVYtdGlDW-yMY8w",
    title: 'img1',
  },
  {
    webUrl: "https://drive.google.com/uc?export=view&id=1Qgk0PLXYfcRWf2b3HD3_Xh41e8azIala",
    title: 'img2',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=18l-4C6hyAGj--3069Nz9ZGba7rlvnVC5',
    title: 'img3',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1cFI6A0roT0lI2ev7WX-UPRHBhLz6q-R3',
    title: 'img4',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1u3o0h3r-yQOEq_9l2bkzsupJOOCG0v_u',
    title: 'img5',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1KNLUV_nfExSfV5RF0AGTybyY0TA3Ya3L',
    title: 'img6',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1wcBC9zG73AR8q2TPYvNd9B8w2pxKUNss',
    title: 'img7',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1j_hyQo61MbZTF_IIH2hovD2FUcKY9Blx',
    title: 'img8',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1PCcLvUJWouCrDMGaku8_75wAbJExO3E1',
    title: 'img9',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1QTjsowZj7yquY5zHgPIjN3vPRMKCV7Be',
    title: 'img10',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=11hSte17wgSObs0MFIF4GCMp-CQu0tiJ5',
    title: 'img11',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1_hwxgKYecuD_xSHbiuitrI9dLYrDxcLi',
    title: 'img12',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1XDBEz1lQ4DLVlUDrwGaZ1jHxCTEEg--_',
    title: 'img13',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1LBj9g5LnQYf1tUVxdqSDsaRqexLIQ5H7',
    title: 'img14',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1tfoQihym_0eJU9q2N_9xBDOPGNJ5Gzap',
    title: 'img15',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=1VEJwb9iw-0nNjLG2pL99X6Tsg5APWjhE',
    title: 'img16',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=17IWkN5ZDxxLmKAUJp3ydQUsmgIqphCbl',
    title: 'img17',
  },
  {
    webUrl: 'https://drive.google.com/uc?export=view&id=17ewzlqLo9x9BLlbN236ktR1DkX23cVI_',
    title: 'img18',
  },
];

const Gallery = () => {
    return (
        <ImageGallery />
    )
}

export default Gallery;