import React, { useState } from "react";
import { Card, Col, Row, Button, Form, InputGroup } from "react-bootstrap";
import AddEditForm from "./addEditForm/AddEditForm";
import "./AllProductStyle.css";
import AdminProductTable from "./productTabel/AdminProductTable";

const AllProduct = () => {
  // Product Add Script Start Here
  const [addMode, setAddMode] = useState(false);

  return (
    <>
      <Row>
        <Col>
          <Card className="my-2">
            <Card.Header>
              <Row>
                <Col md={"4"}>
                  <h3>{addMode ? "Add Product" : "All Products"}</h3>
                </Col>
                <Col md={"4"}>
                  <InputGroup className="rounded">
                    <InputGroup.Text id="productSearch">
                      <i class="bx bx-search-alt-2"></i>
                    </InputGroup.Text>
                    <Form.Control
                      className="productSearch"
                      aria-describedby="productSearch"
                      type="text"
                      placeholder="Search Products"
                    />
                  </InputGroup>
                </Col>
                <Col md={"4"} className="d-flex justify-content-end">
                  <Button onClick={() => setAddMode(!addMode)}>
                    {addMode ? "Hide Form" : "Add Products"}
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              {addMode ? <AddEditForm /> : <AdminProductTable />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AllProduct;
