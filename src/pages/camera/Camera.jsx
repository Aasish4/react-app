import "./camera.css";
import Breadcrumb from "../../components/breadcrump/Breadcrumb";
import Button from '@mui/material/Button';
import {BsFillCameraVideoFill} from "react-icons/bs";
import FormPropsTextFields from "../../components/search/Search"
import VideoCard from "../../components/cards/RtspCard.jsx";

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Camera = () => {
    const [open, setOpen] = React.useState(false);
    const [camera, setCamera] = React.useState(false);
    const [theArray, setTheArray] = React.useState([]);
    const [values, setValues] = React.useState({
        cameraName: "",
        cameraTag: "",
        rtspLink: "",
        region: "",
        location: "",
    
    })
    

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const handleInputChange = (e) => {
        setValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        theArray.push(values);
        console.log(theArray);
        localStorage.setItem('cameraList', JSON.stringify(theArray))
        setCamera(true);
        handleClose();
    }

    var camList = JSON.parse(localStorage.getItem("cameraList"));
    // console.log(localStorage.hasOwnProperty('cameraList'))



    return (
        <div className="camera-container">
            <div className="camera-head-container">
                <div className="camera-head-breadcrumb">
                <Breadcrumb options={[
                    {
                        title: 'Home',
                        route: '/camera'
                    },
                    ]}
                    top={"camera"}/>
                </div>
                <div className="camera-head">
                    <div className="camera-title">Camera</div>
                    <div className="camera-add-search">
                        <Button variant="contained" startIcon={<BsFillCameraVideoFill />} size="small" onClick={handleClickOpen}>Add Camera</Button>
                        <FormPropsTextFields />
                    </div>

                    <Dialog open={open} onClose={handleClose} PaperProps={{
                                                                sx: {
                                                                width: "100%",
                                                                maxWidth: "720px!important",
                                                                borderRadius: "10px"
                                                                },
                                                            }}>
                        <DialogTitle>Add Camera</DialogTitle>
                        <DialogContent>
                            <Grid container sx={{paddingBottom: "20px"}}>
                                <Grid item xs={6} sx={{paddingRight: "20px"}}>
                                    <Typography variant="subtitle2" gutterBottom sx={{fontWeight: "600"}}>Camera Name</Typography>
                                    <TextField
                                        variant="outlined"
                                        placeholder="ex. Camera name"
                                        value={values.cameraName}
                                        type={"text"}
                                        name="cameraName"
                                        size="small"
                                        fullWidth
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" gutterBottom sx={{fontWeight: "600"}}>Camera Tag</Typography>
                                    <TextField
                                        variant="outlined"
                                        placeholder="ex. #security"
                                        value={values.cameraTag}
                                        name="cameraTag"
                                        size="small"
                                        fullWidth
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                            </Grid>
                            <Typography variant="subtitle2" gutterBottom sx={{fontWeight: "600"}}>Public RTSP URL</Typography>
                            <TextField
                                        variant="outlined"
                                        placeholder="Enter the public RTSP URL"
                                        value={values.rtspLink}
                                        name="rtspLink"
                                        size="small"
                                        fullWidth
                                        onChange={handleInputChange}
                                    />

                            <Grid container sx={{paddingTop: "20px"}}>
                                <Grid item xs={6} sx={{paddingRight: "20px"}}>
                                    <Typography variant="subtitle2" gutterBottom sx={{fontWeight: "600"}}>Region & city</Typography>
                                    <TextField
                                        variant="outlined"
                                        placeholder="Select..."
                                        value={values.region}
                                        type={"text"}
                                        name="region"
                                        size="small"
                                        fullWidth
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle2" gutterBottom sx={{fontWeight: "600"}}>Location</Typography>
                                    <TextField
                                        variant="outlined"
                                        placeholder="Select..."
                                        value={values.location}
                                        type={"text"}
                                        name="location"
                                        size="small"
                                        fullWidth
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions sx={{padding: "20px"}}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit} variant="contained" type="submit">Submit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="camera-description">
                    Onboard and manage your camera here
                </div>
            </div>
            <div className="camera-body">
                {/* <MediaCard url="http://localhost:8083/stream/demo1/channel/0/hls/live/index.m3u8"/> */}
                {/* https://www.youtube.com/watch?v=RzVvThhjAKw&ab_channel=RelaxationFilm */}
                {/* <VideoCard title={theArray[i].cameraName} location={theArray[i].location} src={theArray[i].rtspLink} rtsp={false}/> */}

                

                {
                    localStorage.hasOwnProperty('cameraList') ?
                    camList.map((value, index) => {
                    return <VideoCard key={index} title={value.cameraName} location={value.location} src={value.rtspLink} rtsp={false} camid={index}/>
                    }): null
                }

            </div>
        </div>
    )
}

export default Camera;