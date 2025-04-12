import React, {useEffect, useState} from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {Link, useParams} from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    const {userId} = useParams();

    const [user, setUser] = useState({});

    useEffect(() => { setUser(models.userModel(userId)); });
    
    return (
        <div id='user-detail-container'>
          <span style={{fontSize: "40px", fontWeight: "bold"}}>
            {user.first_name} {user.last_name}
          </span>
          <span>
            <Link to={`/photos/${userId}`} id="link-to-user-photos">
                View {user.first_name}'s photos
            </Link>
          </span>
          <div style={{fontSize: "14px", display: "flex", gap: "30px"}}>
            <div>
              {/* <img /> */}
              {user.location}
            </div>
            <div>
              {/* <img /> */}
              {user.occupation}
            </div>
          </div>

          <div style={{fontSize: "12px", fontStyle: "italic"}}>"{user.description}"</div>
        </div>
    );
}

export default UserDetail;
