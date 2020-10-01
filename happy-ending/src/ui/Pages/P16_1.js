import React from "react";
import SeparatedTemplate16_1 from "../Templates/SeparatedTemplate16_1";
import "../../scss/Pages/P16_1.scss";

function P16_1() {
  const data = {
    p_data: {
      text: ["정면에 있는 카메라를 보세요.", <br />, "버튼을 누르면 3초 뒤에 사진이 찍힙니다."],
    },
    retry_btn_data: "다시찍기",
    check_btn_data: "확인",
  };
  const styleName = {
    p_style: ["white"],
    btn_style: ["circle", "light-brown"],
    retry_btn_style: ["xs", "beige"],
    check_btn_style: ["xs", "light-brown"],
  };

  return (
    <div className={"P16_1"}>
      <SeparatedTemplate16_1 data={data} styleName={styleName}></SeparatedTemplate16_1>
    </div>
  );
}

export default P16_1;
