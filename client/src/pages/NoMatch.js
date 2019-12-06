import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Headline from "../components/Headline";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Headline>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Sorry, No Results">
                Sorry, No Results
              </span>
            </h1>
          </Headline>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
