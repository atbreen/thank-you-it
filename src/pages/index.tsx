import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

// markup
const Header = () => (
  <Card
    raised={true}
    sx={{ p: [2, 4], my: 4, mx: "auto", width: "fit-content", borderRadius: 4 }}
  >
    <Typography sx={{ textAlign: "center" }} variant="h2" component="h1">
      Thank you, IT!
    </Typography>
  </Card>
);

const Video = () => {
  return (
    <Card
      raised={true}
      sx={{ p: [2, 4], mx: "auto", maxWidth: "md", borderRadius: 4 }}
    >
      <Box
        sx={{
          position: "relative",
          paddingBottom: "56.25%",
          paddingTop: "30px",
          height: 0,
          overflow: "hidden",
          "& iframe, & object, & embed": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5UT8RkSmN4k?start=3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen"
        ></iframe>
      </Box>
    </Card>
  );
};

const Shpeal = () => {
  return (
    <Card
      raised={true}
      sx={{
        maxWidth: "md",
        p: [2, 4],
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
    <Box component="main" sx={{ mx: [1, 2] }}>
      <title>Thank You TRCC IT Department!</title>
      <Header />
      <Video />
      <Shpeal />
    </Box>
  );
};

export default IndexPage;
