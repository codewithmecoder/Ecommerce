import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
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

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${valueNumReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
