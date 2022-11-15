import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from "react-router-dom"
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumb(props) {
  let bread = props.options;

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{fontSize: "12px"}}>
        {
          bread.map((item, index) =>{
            return <Link underline="hover" color="inherit" to={item.route} key={index} style={{ textDecoration: 'none' }}>
                      {item.title}
                    </Link>;
          })
        }
        <Typography color="text.primary" sx={{fontSize: "12px"}}>{props.top}</Typography>
      </Breadcrumbs>
    </div>
  );
}


{/* <Link underline="hover" color="inherit" href="/home">
  Home
</Link>
<Link underline="hover" color="inherit" href="/analytics">
  Analytics
</Link> */}