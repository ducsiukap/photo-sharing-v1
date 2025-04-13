import React, { useEffect, useState } from "react";
import { List, ListItem } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState();
  useEffect(() => {
    const { first_name, last_name } = models.userModel(userId);
    setName(first_name + " " + last_name);
    setPhotos(models.photoOfUserModel(userId));

    // console.log(photo)
  }, [userId]);
  return (
    <>
      <Link
        to={`/users/${userId}`}
        style={{ textDecoration: "none", fontWeight: "bold", color: "darkred" }}
      >
        &lt; Back
      </Link>
      <h3>{name}'s Photos:</h3>
      <div className="all-photos">
        {photos.map((item) => (
          <div className="user-photo-container" key={item._id}>
            <div className="photo-info">
              <img src={`/images/${item.file_name}`} alt="" />
              <div
                style={{
                  display: "flex",
                  fontSize: "10px",
                  fontStyle: "italic",
                  opacity: "50%",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Ngày đăng: {item.date_time}
              </div>
            </div>
            <br />
            <div className="comment-container">
              {item.comments &&
                item.comments.map((cmt) => (
                  <div className="comment">
                    <Link
                      to={`/users/${cmt.user._id}`}
                      style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {cmt.user.first_name + " " + cmt.user.last_name}
                    </Link>
                    &nbsp;
                    <span
                      style={{
                        opacity: "50%",
                        fontSize: "10px",
                      }}
                    >
                      {cmt.date_time}
                    </span>
                    <div>{cmt.comment}</div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserPhotos;
