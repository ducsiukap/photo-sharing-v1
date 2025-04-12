import React, { useEffect, useState } from "react";
import { List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
// import { green } from "@mui/material/colors";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState();
  useEffect(() => {
    const { first_name, last_name } = models.userModel(userId);
    setName(first_name + " " + last_name);
    setPhotos(models.photoOfUserModel(userId));

    // console.log(photo)
  }, []);
  return (
    <>
      <h3 style={{}}>{name}'s Photos:</h3>
      <div>
        {photos.map((item) => (
          <div
            className="user-photo-container"
            key={item._id}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div className="photo-info">
              <img src={`/images/${item.file_name}`} alt="" />
              <span style={{ fontSize: "12px", fontStyle: "italic" }}>
                Ngày đăng: {item.date_time}
              </span>
            </div>

            <div className="comments">
              <List>
                {item.comments &&
                  item.comments.map((cmt) => (
                    <ListItem
                      sx={{display: "grid", gap: "5px", padding: "0px"}}
                      key={cmt._id}
                    >
                      <div className="cmt-title" style={{ display: "flex", gap: "10px", fontSize: "12px" }}>
                        <span style={{ fontWeight: "bold" }}>
                          <Link
                            to={`/users/${cmt.user._id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            {cmt.user.first_name + " " + cmt.user.last_name}
                          </Link>
                        </span>
                        <span>{cmt.date_time}</span>
                      </div>

                      <div className="cmt-content">{cmt.comment}</div>
                    </ListItem>
                  ))}
              </List>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserPhotos;
