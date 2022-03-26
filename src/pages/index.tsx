import { Card, Typography } from "@mui/material";
import * as React from "react";

// markup
const Video = () => {
  return (
    <Card
      raised={true}
      sx={{ p: 6, mx: "auto", width: "fit-content", borderRadius: 4 }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rksCTVFtjM4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Card>
  );
};

const Shpeal = () => {
  return (
    <Card
      raised={true}
      sx={{
        maxWidth: "md",
        p: 4,
        mx: "auto",
        width: "fit-content",
        borderRadius: 4,
        my: 4,
      }}
    >
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
        turpis et nunc viverra vestibulum ac et lorem. Aenean gravida lorem eget
        malesuada tincidunt. Pellentesque mollis sagittis nunc finibus
        vulputate. Maecenas malesuada id est ut pharetra. Integer imperdiet ex
        sed ante consequat, a egestas diam sollicitudin. Suspendisse eros nunc,
        bibendum vitae commodo viverra, pulvinar vulputate nisl. Aenean suscipit
        tristique diam, nec pellentesque urna. Phasellus faucibus dui sem,
        commodo mollis arcu semper ac. Nulla vehicula laoreet erat, sed commodo
        leo varius non. Nam ac dui vulputate, placerat lacus vel, maximus nisi.
      </Typography>
    </Card>
  );
};

const IndexPage = () => {
  return (
    <main>
      <title>Thank You TRCC IT Department!</title>
      <Typography
        sx={{ textAlign: "center", mt: 4, mb: 4 }}
        variant="h2"
        component="h1"
      >
        Thank you, IT!
      </Typography>
      <Video />
      <Shpeal />
    </main>
  );
};

export default IndexPage;
