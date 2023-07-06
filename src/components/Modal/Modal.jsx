import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputForm from "./InputForm";

function Modal(props) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const getDataByForm = (evt) => {
    toggleShow();
    props.onCheckout(userData);

  };

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
  });

  function onInputChange(evt) {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...userData };
   
    newState[inputName] = value;
    setUserData(newState);
  }
  function onSubmit(evt) {
    evt.preventDefault();
  }

  function formIsInvalid() {
    return !(
      userData.name !== "" &&
      userData.phone !== "" &&
      userData.email !== "" &&
      userData.address !== "" &&
      userData.city !== ""
    );
  }
  return (
    <>
      <ButtonComponent
        text="Comprar"
        handlerOnclick={toggleShow}
        className="btn-clear"
      />
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent style={{ color: "white" }}>
            <MDBModalHeader className=" bg-secondary">
              <MDBModalTitle> 🛒 Finalizar Compra </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={onSubmit}>
                <InputForm
                  value={userData.name}
                  name="name"
                  onChange={onInputChange}
                  label="Nombre"
                  userData={userData}
                />
                <InputForm
                  value={userData.phone}
                  name="phone"
                  onChange={onInputChange}
                  label="telefono"
                  userData={userData}
                />
                <InputForm
                  value={userData.email}
                  name="email"
                  onChange={onInputChange}
                  label="email"
                  userData={userData}
                />
                <InputForm
                  value={userData.address}
                  name="address"
                  onChange={onInputChange}
                  label="Dirección"
                  userData={userData}
                />
                <InputForm
                  value={userData.city}
                  name="city"
                  onChange={onInputChange}
                  label="Ciudad"
                  userData={userData}
                />
              </form>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() =>
                  setUserData({ name: "", email: "", phone: "", address: "" })
                }
              >
                Borrar
              </MDBBtn>
              <MDBBtn
                className="bg-primary"
                onClick={getDataByForm}
                disabled={formIsInvalid()}
                type="submit"
              >
                Comprar
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Modal;
