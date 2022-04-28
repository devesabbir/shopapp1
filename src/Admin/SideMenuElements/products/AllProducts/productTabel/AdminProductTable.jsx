import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonGroup, Table, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

const AdminProductTable = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [productload, setProductLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:5000/products").then((res) => {
        setAllProduct(res.data);
        setProductLoad(false);
      });
    }, 1000);
  }, []);
  return (
    <>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Price</th>
            <th>Status</th>
            <th>Type</th>
            <th>Feathered</th>
            <th>Control</th>
          </tr>
        </thead>
        {productload === true ? (
          <tbody>
            {/* Skeletor start */}
            {[...Array(2)].map((x, i) => (
              <tr style={{ verticalAlign: "middle" }}>
                <td>{<Skeleton highlightColor={"crimson"} />}</td>
                <td>
                  <Skeleton highlightColor={"yellow"} />
                </td>
                <td>
                  <Skeleton highlightColor={"crimson"} />
                </td>
                <td>
                  <Skeleton highlightColor={"yellow"} />
                </td>
                <td>
                  <Skeleton highlightColor={"crimson"} />
                </td>
                <td>
                  <Skeleton highlightColor={"crimson"} />
                </td>
                <td>
                  <Skeleton highlightColor={"yellow"} />
                </td>
                <td>
                  <Skeleton highlightColor={"crimson"} />
                </td>
              </tr>
            ))}
            {/* Skeletor end */}
          </tbody>
        ) : (
          <tbody>
            {allProduct.map((singleProduct, index) => (
              <tr style={{ verticalAlign: "middle" }}>
                <td>{index}</td>
                <td title={singleProduct.name}>
                  {singleProduct.name.length >= 20
                    ? singleProduct.name.slice(0, 15) + "..."
                    : singleProduct.name}
                </td>
                <td title={singleProduct.slug}>
                  {singleProduct.slug.length >= 20
                    ? singleProduct.slug.slice(0, 15) + "..."
                    : singleProduct.slug}
                </td>
                <td>
                  {singleProduct.oldPrice === false
                    ? singleProduct.nowPrice
                    : `Sell- ${singleProduct.nowPrice} / Reg- ${singleProduct.oldPrice}`}
                </td>
                <td>{singleProduct.status}</td>
                <td>{singleProduct.type}</td>
                <td>
                  {singleProduct.Feathered === true ? (
                    <i
                      style={{
                        fontSize: "20px",
                        color: "var(--orange)",
                        cursor: "pointer",
                      }}
                      class="bx bxs-star"
                    ></i>
                  ) : (
                    <i
                      style={{ fontSize: "20px", cursor: "pointer" }}
                      class="bx bx-star"
                    ></i>
                  )}
                </td>
                <td>
                  <ButtonGroup size="sm">
                    <Button variant="success">View</Button>
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </>
  );
};

export default AdminProductTable;
