import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ReactHlsPlayer from "react-hls-player";
import ReactPlayer from 'react-player';
import IconButton from '@mui/material/IconButton';
import {BsCameraVideoFill} from "react-icons/bs";
import {TbLiveView} from "react-icons/tb";
import {AiOutlineSecurityScan} from "react-icons/ai";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';

import { alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useNavigate } from 'react-router-dom';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function VideoCard(props) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);
    const [checked, setChecked] = React.useState(['model-1']);
    const activeRtsp = props.rtsp
    const camid =props.camid;
    
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    function handleRemove (camid){
      const saved = JSON.parse(localStorage.getItem("cameraList"));
      console.log("before")
      console.log(saved)

      console.log("after")
      saved.splice(camid,1);
      console.log(saved)
      localStorage.setItem("cameraList",JSON.stringify(saved));
      handleClose();
      window.location.reload();
    }

    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
        newChecked.push(value);
    } else {
        newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <Card sx={{ maxWidth: 345, height: "auto"}} >
      <CardHeader
        action={
          <IconButton 
            aria-label="settings"
            onClick={handleClick}
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.location}
        titleTypographyProps={{variant:'button' }}
        subheaderTypographyProps={{variant:'caption' }}
        sx= {{padding: "10px"}}
      />

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={() => handleRemove(props.camid)} disableRipple>
          <DeleteIcon />
          Delete
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ShareIcon />
          Share
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>

      {
        activeRtsp ? (
          <ReactHlsPlayer
            src={props.src}
            autoPlay={true}
            controls={false}
            muted={true}
            width="100%"
            height="180px"
            onClick={() => navigate('/camera/'+String(props.camid))}
          />
        ) : (
          <ReactPlayer 
          url='https://www.youtube.com/watch?v=9xwazD5SyVg&ab_channel=MaximilianMustermann'
          autoPlay={true}
          light={true}
          loop={false}
          controls={false}
          muted={true}
          width="100%"
          height="180px"
          onClick={() => navigate('/camera/'+String(props.camid))}
          />
        )
      }
      
     

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <BsCameraVideoFill />
        </IconButton>
        <IconButton aria-label="share">
          <TbLiveView />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{paddingLeft: "5px"}}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader>Model Settings</ListSubheader>}>
                    <ListItem>
                        <ListItemIcon sx={{fontSize: "30px"}}>
                            <AiOutlineSecurityScan/>
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-model-1" primary="Model 1" />
                        <Switch
                        edge="end"
                        onChange={handleToggle('model-1')}
                        checked={checked.indexOf('model-1') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-model-1',
                        }}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{fontSize: "30px"}}>
                        <AiOutlineSecurityScan />
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-model-1" primary="Model 2" />
                        <Switch
                        edge="end"
                        onChange={handleToggle('model-2')}
                        checked={checked.indexOf('model-2') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-model-2',
                        }}
                        />
                    </ListItem>
                    </List>
            </CardContent>
        </Collapse>
    </Card>
  );
}