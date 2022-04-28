import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

import "./admin.css";

const Admin = () => {
  const [productSub, setProductSub] = useState(false);
  const [postSub, setPostSub] = useState(false);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Card className="bg-dark" style={{ minHeight: "100vh" }}>
              <Card.Header>
                <h3 className="text-center text-light">E-Commerce</h3>
              </Card.Header>
              <Card.Body>
                <ul className="admin-sidebar-menu">
                  <li key={"/admin/dashbord"}>
                    <NavLink
                      onClick={() => {
                        setProductSub(false);
                        setPostSub(false);
                      }}
                      to={"/admin/dashbord"}
                    >
                      Dashbord
                    </NavLink>
                  </li>
                  <li key={"/admin/post"}>
                    <NavLink
                      onClick={() => {
                        setPostSub(!postSub);
                        setProductSub(false);
                      }}
                      to={"/admin/post"}
                    >
                      Post
                    </NavLink>
                    <ul className={postSub === true ? "active" : ""}>
                      <li key={"/admin/post/allpost"}>
                        <NavLink to={"/admin/post/allpost"}>All Post</NavLink>
                      </li>
                      <li key={"/admin/post/categories"}>
                        <NavLink to={"/admin/post/categories"}>
                          Categories
                        </NavLink>
                      </li>
                      <li key={"/admin/post/tag"}>
                        <NavLink to={"/admin/post/tag"}>Tags</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li key={"/admin/comments"}>
                    <NavLink
                      onClick={() => {
                        setProductSub(false);
                        setPostSub(false);
                      }}
                      to={"/admin/comments"}
                    >
                      Comments
                    </NavLink>
                  </li>
                  <li key={"/admin/products"}>
                    <NavLink
                      onClick={() => {
                        setProductSub(!productSub);
                        setPostSub(false);
                      }}
                      to={"/admin/products"}
                    >
                      Products
                    </NavLink>
                    <ul className={productSub === true ? "active" : ""}>
                      <li key={"/admin/products/allproduct"}>
                        <NavLink to={"/admin/products/allproduct"}>
                          All Product
                        </NavLink>
                      </li>
                      <li key={"/admin/products/categories"}>
                        <NavLink to={"/admin/products/categories"}>
                          Categories
                        </NavLink>
                      </li>
                      <li key={"/admin/products/tags"}>
                        <NavLink to={"/admin/products/tags"}>Tags</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li key={"/admin/users"}>
                    <NavLink
                      onClick={() => {
                        setProductSub(false);
                        setPostSub(false);
                      }}
                      to={"/admin/users"}
                    >
                      Users
                    </NavLink>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
