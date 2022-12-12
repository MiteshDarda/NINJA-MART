import ReactDOM from "react-dom";
// import { ReactDOM } from "react";
import React from "react";

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  let flag = props.flag;

  function canselHandler() {
    props.setShowModal(false);
  }

  return (
    // <React.Fragment>
    <>
      {flag &&
        ReactDOM.createPortal(
          <div>
            <div className="backdrop" onClick={canselHandler} />
            <div className="modal">
              <div className="flex-row x" onClick={canselHandler}>
                X
              </div>
              <br />
              {props.children}
            </div>
          </div>,
          portalElement
        )}
    </>
    // </React.Fragment>
  );
}

export default Modal;
