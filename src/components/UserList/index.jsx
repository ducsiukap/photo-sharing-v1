import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const users = models.userListModel();

  const [selectedUser, setSelectedUser] = React.useState(null);

  return (
    <div>
      <List>
        {users.map((item) => (
          <>
            <ListItem
              button
              component={Link}
              to={`/users/${item._id}`}
              key={item._id}
            >
              <ListItemText primary={item.first_name + " " + item.last_name} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
}

export default UserList;
