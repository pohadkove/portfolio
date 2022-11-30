import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import EmailForm from "./EmailForm";

export default function EmailModal() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={handler}>
        Email
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-email"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text h1 id="modal-title" size={30}>
            Email
          </Text>
        </Modal.Header>
        <Modal.Body>
            <EmailForm />
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}
