import React from "react";
import products from "../products";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
