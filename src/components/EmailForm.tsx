import { Input, Spacer, Textarea, Button } from "@nextui-org/react";

export default function EmailForm() {
  return (
    <>
      <form
        target="_blank"
        action="https://formsubmit.co/d62e5353edc906a7b7d9ef757cfd5f9a"
        method="POST"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Input
          required
          clearable
          bordered
          type="text"
          name="name"
          className="form-control"
          placeholder="Full Name"
        />

        <Spacer />
        <Input
          clearable
          bordered
          type="email"
          name="email"
          className="form-control"
          placeholder="Email Address"
          required
        />

        <Spacer />
        <Textarea
          bordered
          placeholder="Your Message"
          className="form-control"
          name="message"
          rows={10}
          required
          defaultValue={""}
        />
        <Spacer />
        <Button type="submit" className="btn btn-lg btn-dark btn-block">
          Submit Form
        </Button>
      </form>
    </>
  );
}
