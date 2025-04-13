import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
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
  // const uID = useParams();
  useEffect(() => {
    // console.log(path, uID);

    if (path === "/users" || path === "/") {
      setContext("View All Users");
      setUser(null);
      // user= null;
    } else {
      const paths = path.split("/");
      const u = models.userModel(paths[2]);
      setUser(u);
      setContext(
        paths[1] === "users"
          ? "User Information"
          : `Photos of ${u.first_name}`
      );
    }
  }, [path]);
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit" flexGrow={1}>
          {context}
        </Typography>
        <Typography variant="h5">
          {user && (
            <Link
              to={`/users/${user._id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {`${user.first_name} ${user.last_name}`}
            </Link>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
