import { IconButton } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InfoIcon from "@mui/icons-material/Info";

interface IProps {
  imageInfo: {
    img: string;
    title: string;
    author: string;
  };
}

const TitleBarImage = ({ imageInfo }: IProps) => {
  return (
    <ImageListItem>
      <img
        srcSet={`${imageInfo.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        src={`${imageInfo.img}?w=248&fit=crop&auto=format`}
        alt={imageInfo.title}
        loading="lazy"
      />
      <ImageListItemBar
        title={imageInfo.title}
        subtitle={imageInfo.author}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
            aria-label={`info about ${imageInfo.title}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default TitleBarImage;
