import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "./modal";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/mainBanner";
import CalonPasangan from "../components/organisms/calonPasangan";
import WeedingLocation from "../components/organisms/WeedingLocation";
import Maps from "../components/organisms/Maps";
import Footer from "../components/organisms/Footer";
import AddBook from "../components/organisms/Comments/AddBook";
import BooksList from "../components/organisms/Comments/BookList";
import LoveStory from "../components/organisms/lovestory";
import AdabWalimah from "../components/organisms/walimah";
import Amplop from "../components/organisms/amplop";
export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  const [bookId, setBookId] = useState("");

  const [onNewComment] = useState("");

  return (
    <>
      <Modal isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Navbar />
      <MainBanner />
      <CalonPasangan />
      <LoveStory />
      <WeedingLocation />
      <Maps />
      <Container>
        <Row>
          <Col>
            <AddBook
              id={bookId}
              setBookId={setBookId}
              onNewComment={onNewComment}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList />
          </Col>
        </Row>
      </Container>
      <AdabWalimah/>
      <Amplop/>
      <Footer />
    </>
  );
}
