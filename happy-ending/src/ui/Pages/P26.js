import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import InsertyPaperTemplate from "../Templates/InsertyPaperTemplate";

import "../../scss/Pages/P26.scss";

function P26() {
  const data = {
    dq_data: {
      h3_data: {
        day: "Day",
      },
      p_data: {
        question: [
          "당신은 지금까지",
          <br />,
          "죽음을 마주하고 삶을 되돌아보는 과정을 통해",
          <br />,
          "당신만의 이야기를 완성했습니다.",
          <br />,
          "이제 당신의 삶으로 돌아가",
          <br />,
          "앞으로 남은 당신의 페이지를 채우세요.",
        ],
      },
    },
  };
  const styleName = {
    template_style: ["center", "P26"],
    dq_style: {
      h3_style: ["normal", "white"],
      p_style: ["white", "line-5"],
    },
    span_style: ["noto", "xs", "dark-gray", "light"],
  };

  return (
    <div className={classNames("P26")}>
      <Link to={"/p27"}>
        <InsertyPaperTemplate data={data} styleName={styleName}></InsertyPaperTemplate>
      </Link>
    </div>
  );
}

export default P26;
