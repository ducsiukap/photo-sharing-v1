import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";

import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(models.userModel(userId));
    // console.log("hi");
  });

  return (
    <div className="user-detail-container">
      <span style={{ fontSize: "40px", fontWeight: "bold" }}>
        {user.first_name} {user.last_name}
      </span>
      <div
        style={{ fontSize: "12px", display: "flex", gap: "30px", opacity: 0.5 }}
      >
        <div>
          <img src="/icon/loc.jpg" height="12px" />
          &nbsp;{user.location}
        </div>
        <div>
          <img src="/icon/job.png" height="10px" />
          &nbsp;{user.occupation}
        </div>
      </div>
      <br />
      <div style={{ fontSize: "20px" }}>"{user.description}"</div>
      <br />
      <button onClick={() => navigate(`/photos/${user._id}`)}>
        View {user.first_name}'s photos
      </button>
    </div>
  );
}

export default UserDetail;
