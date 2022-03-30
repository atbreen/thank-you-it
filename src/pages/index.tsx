import { Card, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import ghLogo from "../images/github.svg";
import liLogo from "../images/linkedin.svg";
import gLogo from "../images/icon.png"
import * as React from "react";
import { Link } from "@mui/material";

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
      <Typography component='div' textAlign='center'>
      <strong><h1>Skye, Wayne, Terry, Ruben, Andy, Olan, Melissa and Raul,</h1></strong>
        <h2>
        I just wanted to take a moment to thank you 
        all for making my experience as an IT Student worker at TRCC 
        a fun and beneficial learning experience. I enjoyed working 
        with each and every one of you and appreciate the culture and 
        environment this department creates. You made my final year at 
        TRCC significantly better than it would have been otherwise. 
        I learned a lot during my time here and appreciate you all very much. 
        I hope your next student workers are as cool as I am :-P. 
        I will miss you guys and always cherish my time at this job.
        <br/>
        <br/>
        Sincerely,<br/>
        </h2>
        <h1><i>~ April Breen</i></h1>

      </Typography>
    </Card>
  );
};


const LogoAndLink =({imgUrl, linkUrl, linkText}: {imgUrl: string, linkUrl: string, linkText: string}) => {
 return (
   <Box
   sx={{
     display: 'flex',
     alignItems: 'center',
    }}>&nbsp;
      <img style={{height: 24, width: 24}} src={imgUrl}/>&nbsp;<Link href={linkUrl}><h2>{linkText}</h2></Link>
    </Box>
    )
  }

const Footer = () => {
  return (
    <Card sx={{
      position: 'relative',
      maxWidth: "auto",
      p: [2, 2],
      mx: "auto",
      width: "fit-content",
      borderRadius: 4,
      my: 2,
    }}>
        
         <Typography component={'div'}
          sx={{
            display:'flex', 
            alignItems:'center', 
            flexWrap:'wrap', 
            justifyContent: 'center',
            p: 0
          }}> 
          <LogoAndLink imgUrl={ghLogo} linkUrl="https://github.com/atbreen" linkText="@atBreen"/>&nbsp;
          <LogoAndLink imgUrl={liLogo} linkUrl="https://www.linkedin.com/in/apriltbreen/" linkText="@AprilTBreen"/>
        </Typography>

        <Typography component={'div'}
          sx={{
            display:'flex', 
            alignItems:'center', 
            flexWrap:'wrap',
            justifyContent: 'center',
            mb: 1
          }}>
          <h2>This site was created with </h2>
          <LogoAndLink imgUrl={gLogo} linkUrl="https://www.gatsbyjs.com/" linkText="Gatsby"/>
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
      <Footer/>
    </Box>
  );
};

export default IndexPage;