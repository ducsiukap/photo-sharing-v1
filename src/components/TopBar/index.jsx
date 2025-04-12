import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const [context, setContext] = React.useState("Home");
  const [user, setUser] = React.useState(null);
  const path = useLocation().pathname;
  useEffect(() => {
    console.log(path);

    if (path === "/users" || path === "/") {
      setContext("View All Users");
      setUser(null);
      // user= null;
    } else {
      const paths = path.split("/");
      setUser(models.userModel(paths[2]));
      setContext(
        paths[1] === "users"
          ? "User Information"
          : `Photos of ${user.first_name}`
      );
    }
  }, [path]);
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit" flexGrow={1}>
          {context}
        </Typography>
        <Typography
          variant="h5"
          color="inherit"
          component={Link}
          to={`/users/${user._id}`}
          sx={{textDecoration: "none"}}>
          {user && `${user.first_name} ${user.last_name}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
