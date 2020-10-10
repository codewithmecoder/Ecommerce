import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);

  let valueNumReviews = "";
  if (product.numReviews >= 1000 && product.numReviews <= 10000) {
    valueNumReviews = `${product.numReviews
      .toString()
      .substring(0, 1)}.${product.numReviews.toString().substring(1, 2)}K`;
  }
  if (product.numReviews >= 10000 && product.numReviews <= 100000) {
    valueNumReviews = `${product.numReviews
      .toString()
      .substring(0, 2)}.${product.numReviews.toString().substring(1, 2)}K`;
  }
  if (product.numReviews >= 100000 && product.numReviews <= 1000000) {
    valueNumReviews = `${product.numReviews
      .toString()
      .substring(0, 3)}.${product.numReviews.toString().substring(1, 2)}K`;
  }
  if (product.numReviews >= 1000000) {
    valueNumReviews = `${product.numReviews
      .toString()
      .substring(0, 1)}.${product.numReviews.toString().substring(1, 3)}M`;
  }
  if (product.numReviews <= 1000 && product.numReviews > 0) {
    valueNumReviews = product.numReviews;
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [match]);
  return (
    <>
      <Link className="btn btn-ligth my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item>
            <Rating
              value={product.rating}
              text={`${valueNumReviews} reviews`}
            />
          </ListGroup.Item>
          <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
          <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
