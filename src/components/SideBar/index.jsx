import React from "react";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import models from "../../modelData/models";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const users = models.userListModel();
  const path = useLocation().pathname.split("/");
  const userId = path[path.length - 1];

  // console.log("Current path:", path);
  console.log("Current userId from URL:", userId);

  return (
    <div>
      <List>
        {users.map((item) => {
          const isSelected = String(item._id) === userId;

          return (
            <React.Fragment key={item._id}>
              <ListItem
                button
                component={Link}
                to={`/users/${item._id}`}
                sx={{
                  padding: "8px 16px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  backgroundColor: isSelected ? "green" : "transparent",
                  color: isSelected ? "white" : "black",
                  borderRadius: "4px",
                  "&:hover": {
                    backgroundColor: isSelected ? "darkgreen" : "#f0f0f0",
                  },
                }}
              >
                <ListItemText
                  primary={`${item.first_name} ${item.last_name}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
}

export default SideBar;
