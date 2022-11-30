import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

export default function Nav() {
  
  return (
      <Navbar  style={{boxSizing: "border-box", backgroundColor:"transparent", backdropFilter:"saturate(100%) blur(0px)" }} variant="sticky" >
        <Navbar.Content>
        <Text b color="inherit">
          <a style={{color:"white", fontSize:"2.5em", fontFamily: "'Dancing Script', cursive"}}  href="/">Pohadkove</a>
          </Text>
        </Navbar.Content>
        <Navbar.Content hideIn="xs">
         {/* <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>*/}
        </Navbar.Content>
        <Navbar.Content>
        {/*  <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>*/}
          <Navbar.Item>
            <Button auto ghost as={Link} href="#contact">
              Contact
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}
