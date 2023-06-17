import Button from "react-bootstrap/Button";
import "./IntroContent.css";

function IntroContent() {
  return (
    <div className="intro-body">
      <header className="intro-content">
        <div className="intro-content__header">
          <h1>
            <strong>Here is a Big Title</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <Button>
            <strong>Get Started</strong>
          </Button>
          <Button className="btn btn-light">Information</Button>
        </div>
      </header>
    </div>
  );
}

export default IntroContent;
