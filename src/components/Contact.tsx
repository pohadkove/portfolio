import { Card, Text, Button, Spacer } from "@nextui-org/react";
import EmailModal from './EmailModal'
export default function Contact() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <Card className="contactCard">
      <Card.Body>
        <Text h1 style={{textAlign:"center"}}>Contact</Text>
        <EmailModal />
        <Spacer />
        <Button onClick={() => openInNewTab('https://github.com/pohadkove')} flat bordered>Github</Button>
      </Card.Body>
    </Card>
  );
}