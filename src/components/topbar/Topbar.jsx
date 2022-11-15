import "./topbar.css"
import AccountMenu from "./ProfileDropdown"
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import {IoNotifications} from "react-icons/io5";

const topbar = () => {
    return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">Admin Portal</div>
            <div className="topRight">

            <Button variant="contained" sx={{ height: "35px" ,width: "130px", marginRight: "20px"}} >Contact Us</Button>
            <Badge color="secondary" badgeContent={2} showZero>
                <IoNotifications />
            </Badge>
            <AccountMenu/>
            </div>
        </div>
    </div>
    )
  }
  
  export default topbar;