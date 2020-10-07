import React from "react";
import classNames from "classnames";
import VideoTemplate from "../Templates/VideoTemplate";
import P9Video from "../../assets/videos/9-D-4.mp4";

import "../../scss/pages.scss";

function P9_2({ history }) {
  const goTo = () => {
    history.push("/p11");
  };

  return (
    <div className={classNames("Page", "P9-2", "bg-video")}>
      <VideoTemplate video={P9Video} to={goTo}></VideoTemplate>
    </div>
  );
}

export default P9_2;
