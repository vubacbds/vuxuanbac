import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "antd";

import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";
import img5 from "./image/img5.jpg";

import img6 from "./image/img6.jpg";
import img7 from "./image/img7.jpg";
import img8 from "./image/img8.jpg";

const imgArray0 = [img1, img2, img3, img4, img5];
const imgArray = [img6, img7, img8];

function App() {
  //Hiện model chi tiết quán
  const [visible, setVisible] = useState(false);
  const [imgPhongto, setImgPhongto] = useState();

  return (
    <div>
      <span>Chào bạn! Tôi là: </span>
      <h1 className="name">Vũ Xuân Bắc</h1>
      <div className="img_box">
        {imgArray0.map((item, index) => (
          <img
            className="img"
            src={item}
            key={index}
            onClick={() => {
              setVisible(true);
              setImgPhongto(item);
            }}
            title="Nhấn để phóng to"
          />
        ))}
      </div>
      <Carousel nextIcon="" prevIcon="" className="img_slide_box">
        {imgArray.map((item, index) => (
          <Carousel.Item interval={4000} key={index}>
            <img className="img_slide" src={item} alt="anh-vu-xuan-bac" />
          </Carousel.Item>
        ))}
      </Carousel>

      <ModalImage
        visible={visible}
        setVisible={setVisible}
        imgPhongto={imgPhongto}
      />
    </div>
  );
}

//Modal image
const ModalImage = ({ visible, setVisible, imgPhongto }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        title={`Ảnh phóng to `}
        open={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <img src={imgPhongto} style={{ width: "100%" }} />
      </Modal>
    </>
  );
};

export default App;
