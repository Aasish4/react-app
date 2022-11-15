import "./insights.css";
import Breadcrumb from "../../components/breadcrump/Breadcrumb";
import React from 'react'
import {useLocation,useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyIcon from '@mui/icons-material/Reply';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReactPlayer from 'react-player';
import Grid from '@mui/material/Grid';

export default function Insights() {
  let currentRoute = useLocation().pathname.toLowerCase();
  const camid = currentRoute.split("/").pop();
  console.log(camid)
  const navigate = useNavigate();
  var camList = JSON.parse(localStorage.getItem("cameraList"))[camid];
  console.log(camList)
  return (
    <div className="insights-container">
        <div className="insight-head-container">
          <div className="insight-head-breadcrumb">
            <Breadcrumb options={[
                      {
                          title: 'Home',
                          route: '/camera'
                      },
                      {
                        title: 'Camera',
                        route: '/camera'
                    }
                      ]} 
                      top="Camera Insights" />
          </div>
          <div className="insights-head">
            <div className="insights-title">Camera details</div>
            <div className="insights-button-more">
              <Button variant="text" startIcon={<ReplyIcon />} disableElevation onClick={() => navigate("/camera")}>
                Back
              </Button>
              <Button variant="contained" disableElevation size="small">Screenshoot</Button>
              <Button variant="outlined" size="small">Record Video</Button>
              <IconButton aria-label="delete">
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="insights-description">
            View the insights of the camera here
          </div>
        </div>
        <div className="insights-body">
          <div className="insights-video-container">
            <div className="insights-video-info">
              <Card sx={{ minWidth: 275, height: "100%" }}>
                <CardContent>
                  <Grid container spacing={2}>
                  <Grid item xs={6}>
                    test
                  </Grid>
                  <Grid item xs={6}>
                    test
                  </Grid>
                  </Grid>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </div>
            <div className="insights-video">
              <ReactPlayer 
                url='https://www.youtube.com/watch?v=9xwazD5SyVg&ab_channel=MaximilianMustermann'
                autoPlay={true}
                light={true}
                loop={false}
                controls={false}
                muted={true}
                width="100%"
                height="100%"
                sx={{borderRadius: "10px"}}
                />
              
            </div>
          </div>
        </div>
    </div>
  )
}
