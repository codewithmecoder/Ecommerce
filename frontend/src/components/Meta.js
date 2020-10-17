import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Camstòr",
  description: "We sell the best products for cheap",
  keyword:
    "electronics, buy electronics, cheap eletronics, t-shirts, buy t-shirts, cheap t-shirts,cheap , hoodie, buy hoodie, cheap hoodie,cheap , clothes, buy clothes, cheap clothes,clothes for men, buy clothes for men, cheap clothes for men,clothes for women, buy clothes for women, cheap clothes for women,clothes children, buy clothes children, cheap clothes children",
};

export default Meta;
