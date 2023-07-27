import React from "react";
import { Link } from "react-router-dom";
import List  from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import { ListItemButton } from "@mui/material";

const ListView = () => {
    return (
        <div className="listview">
            <div className="info">

            </div>
            <List>
                <ListItemButton component={Link} to="/Home">
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItemButton>
                <ListItemButton component={Link} to="/Explore">
                    <ListItemIcon>
                        <ExploreIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Explore"/>
                </ListItemButton>
                <ListItemButton component={Link} to="/Notifications">
                    <ListItemIcon>
                        <NotificationsIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Notifications"/>
                </ListItemButton>
                <ListItemButton component={Link} to="/Messages">
                    <ListItemIcon>
                        <MessageIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Messages"/>
                </ListItemButton>
            </List>
        </div>
    );
};

export default ListView;