import { Card, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import ghLogo from "../images/github.svg";
import liLogo from "../images/linkedin.svg";
import gLogo from "../images/icon.png";
import fire from "../images/restofthefire.png";
import Helmet from "react-helmet";
import * as React from "react";
import { Link } from "@mui/material";

const Header = () => (
  <Card
    raised={true}
    sx={{
      p: [2, 2],
      my: 2,
      mx: "auto",
      width: "fit-content",
      borderRadius: 4,
    }}
  >
    <Typography sx={{ textAlign: "center" }} variant="h2" component="h1">
      Thank you to my IT Crowd!
    </Typography>
    <Box
      sx={{
        textAlign: "center",
        mt: 2,
      }}
    >
      <img style={{ borderRadius: "16px" }} src={fire} />
    </Box>
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
        p: [2, 2],
        mx: "auto",
        width: "fit-content",
        borderRadius: 4,
        my: 2,
      }}
    >
      <Typography component="div" textAlign="center" fontSize={"large"}>
        <strong>
          <h2>Skye, Wayne, Terry, Ruben, Andy, Olan, Melissa and Raul,</h2>
        </strong>
        All jokes aside, I just wanted to take a moment to thank you all for
        making <br />
        my experience as an IT Student worker at TRCC a fun and beneficial
        learning adventure.
        <br />
        I enjoyed working with each and every one of you and appreciate the
        culture and environment
        <br />
        that this department creates. You made my final year at TRCC
        significantly better than it would <br />
        have been otherwise. I learned a lot during my time here and appreciate
        you all very much. <br />
        I hope your next student workers are as cool as I am &#128539;.
        <br />
        I will miss you guys and will always cherish my time at this job.
        <br />
        <br />
        Sincerely,
        <h2>
          <i>~ April Breen</i>
        </h2>
        p.s. I hope the IT Crowd references are not lost on you all, and if they
        are, I highly recommend watching the show &#128578;
      </Typography>
    </Card>
  );
};

const LogoAndLink = ({
  imgUrl,
  linkUrl,
  linkText,
}: {
  imgUrl: string;
  linkUrl: string;
  linkText: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      &nbsp;
      <img style={{ height: 24, width: 24 }} src={imgUrl} />
      &nbsp;
      <Link
        sx={{
          fontSize: "large",
        }}
        href={linkUrl}
      >
        {linkText}
      </Link>
    </Box>
  );
};

const Footer = () => {
  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: "auto",
        p: [1, 1],
        mx: "auto",
        width: "fit-content",
        borderRadius: 4,
        my: 2,
      }}
    >
      <Typography
        component={"div"}
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          p: 0,
        }}
      >
        <LogoAndLink
          imgUrl={ghLogo}
          linkUrl="https://github.com/atbreen"
          linkText="@atBreen"
        />
        &nbsp;
        <LogoAndLink
          imgUrl={liLogo}
          linkUrl="https://www.linkedin.com/in/apriltbreen/"
          linkText="@AprilTBreen"
        />
        <br />
        <br />
      </Typography>

      <Typography
        component={"div"}
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          mb: 1,
          fontSize: "large",
        }}
      >
        This site was created with
        <LogoAndLink
          imgUrl={gLogo}
          linkUrl="https://www.gatsbyjs.com/"
          linkText="Gatsby"
        />
      </Typography>
    </Card>
  );
};

const IndexPage = () => {
  return (
    <Box component="main" sx={{ mx: [1, 2] }}>
      <Helmet>
        <title>Thank You TRCC IT Department!</title>
      </Helmet>
      <Header />
      <Video />
      <Shpeal />
      <Footer />
    </Box>
  );
};

export default IndexPage;
