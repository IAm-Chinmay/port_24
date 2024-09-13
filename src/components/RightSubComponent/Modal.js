// import "node_modules/react-modal-video/scss/modal-video.scss";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Modal = ({ open, id, setOpen }) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={open}
        videoId={id}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Modal;
