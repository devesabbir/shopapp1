import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import swal from "@sweetalert/with-react";
import "./EditForm.css";

const AddEditForm = () => {
  /*
   * Category Menagement start here
   * ======================================================
   */
  //   This state for load all category from server
  const [allcatName, setAllCatName] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/category").then((res) => {
      let allName = [];
      res.data.map((singleCat) => allName.push(singleCat.name));
      setAllCatName(allName);
    });
  }, []);
  //   this state for final storage
  const [inputCat, setInputCat] = useState([]);
  //   this function for splice a data
  const spliceCat = (index) => {
    setInputCat(inputCat.filter((item) => item !== inputCat[index]));
  };
  //   this storage for get the cat key value
  const [catVal, setCatVal] = useState("");
  //   Key Down Menagement
  //   suggestion Mode Menage script
  const [sujessionMode, setSujessionMode] = useState(false);
  const [suggestions, setsuggestions] = useState([]);
  //   This Functions for add suggestions to main state
  const handlesuggestion = (item) => {
    setInputCat([...inputCat, item]);
    setSujessionMode(false);
    setCatVal("");
  };
  const catkeyDown = (e) => {
    // filtering suggestion
    setsuggestions(
      allcatName.filter((data) =>
        new RegExp(`^${e.target.value}`, "i").test(data)
      )
    );
    if (e.target.value === "" || e.target.value === " ") {
      setSujessionMode(false);
    } else {
      if (e.key === "Enter") {
        if (suggestions.length === 1) {
          setInputCat([...inputCat, suggestions]);
          setCatVal("");
          setSujessionMode(false);
        } else if (suggestions.length >= 1) {
          swal(<h4>Please select one from Suggestion</h4>);
        } else {
          swal(
            <div>
              <h4>Please Add This Category fast</h4>
              <span>
                <a style={{ color: "red" }} href={"/admin/products/categories"}>
                  Click Here
                </a>{" "}
                For Category State
              </span>
            </div>
          );
        }
      } else {
        if (e.target.value.length >= 2) {
          setSujessionMode(true);
        } else {
          setSujessionMode(false);
        }
      }
    }
  };
  /*
   * Category Menagement End here
   * ======================================================
   */

  /*
   * Tag Menagement start here
   * ======================================================
   */
  //   This state for load all Tag from server
  const [allTagName, setAllTagName] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/tags").then((res) => {
      let allName = [];
      res.data.map((singleTag) => allName.push(singleTag.name));
      setAllTagName(allName);
    });
  }, []);
  //   this state for final storage
  const [inputTag, setInputTag] = useState([]);
  //   this function for splice a data
  const spliceTag = (index) => {
    setInputTag(inputTag.filter((item) => item !== inputTag[index]));
  };
  //   this storage for get the Tag key value
  const [tagVal, setTagVal] = useState("");
  //   Key Down Menagement
  //   suggestion Mode Menage script
  const [tagsujessionMode, setTagSujessionMode] = useState(false);
  const [tagsuggestions, setTagsuggestions] = useState([]);
  //   This Functions for add tagsuggestions to main state
  const handleTagsuggestion = (item) => {
    setInputTag([...inputTag, item]);
    setTagSujessionMode(false);
    setTagVal("");
  };
  const tagkeyDown = (e) => {
    // filtering suggestion
    setTagsuggestions(
      allTagName.filter((data) =>
        new RegExp(`^${e.target.value}`, "i").test(data)
      )
    );
    if (e.target.value === "" || e.target.value === " ") {
      setTagSujessionMode(false);
    } else {
      if (e.key === "Enter") {
        if (tagsuggestions.length === 1) {
          setInputTag([...inputTag, tagsuggestions]);
          setTagVal("");
          setTagSujessionMode(false);
        } else if (tagsuggestions.length >= 1) {
          swal(<h4>Please select one from Suggestion</h4>);
        } else {
          swal(
            <div>
              <h4>Please Add This Tagegory fast</h4>
              <span>
                <a style={{ color: "red" }} href={"/admin/products/Tagegories"}>
                  Click Here
                </a>{" "}
                For Tagegory State
              </span>
            </div>
          );
        }
      } else {
        if (e.target.value.length >= 2) {
          setTagSujessionMode(true);
        } else {
          setTagSujessionMode(false);
        }
      }
    }
  };
  /*
   * Tagegory Menagement End here
   * ======================================================
   */

  return (
    <>
      <Form>
        <Row>
          <Col md={"4"}>
            <Card>
              <Card.Body>
                <fieldset>
                  <legend>Name Section</legend>
                  <div className="p_name my-2">
                    <label htmlFor="pName">Input Product Name</label>
                    <Form.Control
                      id="pName"
                      type="text"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="p_slug my-2">
                    <label htmlFor="pSlug">Input Product slug</label>
                    <Form.Control
                      id="pSlug"
                      type="text"
                      placeholder="Product Name"
                    />
                  </div>
                </fieldset>
                <fieldset className="my-2">
                  <legend>Price Section</legend>
                  <div className="p_regular_price my-2">
                    <label htmlFor="pRegularPrice">Input Regular Price</label>
                    <Form.Control
                      id="pRegularPrice"
                      type="number"
                      placeholder="Product Regular Price"
                    />
                  </div>
                  <div className="p_sell_price my-2">
                    <label htmlFor="pSellPrice">Input Sell Price</label>
                    <Form.Control
                      id="pSellPrice"
                      type="number"
                      placeholder="Product Sell Price"
                    />
                  </div>
                </fieldset>
              </Card.Body>
            </Card>
          </Col>
          <Col md={"5"}>
            <Card>
              <Card.Body>
                <fieldset className="my-2">
                  <legend>Taxonomy Section</legend>
                  {/* Category Menagement Start Here */}
                  <div className="p_category my-2">
                    <label htmlFor="pCategory">
                      Input Your Category{" "}
                      <span
                        toltipdata="Input 3 character for suggestion"
                        className="cssTolTips"
                      >
                        ?
                      </span>
                    </label>
                    <div className="inputCategory">
                      {inputCat.map((res, index) => (
                        <div className="appinputinstantdata">
                          {res}
                          <span onClick={() => spliceCat(index)}>
                            <i class="bx bx-x"></i>
                          </span>
                        </div>
                      ))}
                      <div className="inputdatafild">
                        <div className="sujjeioncontainer">
                          {sujessionMode === true
                            ? suggestions.map((item) => (
                                <div
                                  className="suggestion"
                                  onClick={() => handlesuggestion(item)}
                                >
                                  {item}
                                </div>
                              ))
                            : ""}
                        </div>
                        <input
                          value={catVal}
                          onKeyDown={(e) => catkeyDown(e)}
                          onChange={(e) => setCatVal(e.target.value)}
                          className="inputcatfield"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Category Menagement End Here */}
                  {/* Tags Menagement Start Here */}
                  <div className="p_tags my-2">
                    <label htmlFor="pTags">
                      Input Your Tags{" "}
                      <span
                        toltipdata="Input 3 character for suggestion"
                        className="cssTolTips"
                      >
                        ?
                      </span>
                    </label>
                    <div className="inputCategory">
                      {inputTag.map((res, index) => (
                        <div className="appinputinstantdata">
                          {res}
                          <span onClick={() => spliceTag(index)}>
                            <i class="bx bx-x"></i>
                          </span>
                        </div>
                      ))}
                      <div className="inputdatafild">
                        <div className="sujjeioncontainer">
                          {tagsujessionMode === true
                            ? tagsuggestions.map((item) => (
                                <div
                                  className="suggestion"
                                  onClick={() => handleTagsuggestion(item)}
                                >
                                  {item}
                                </div>
                              ))
                            : ""}
                        </div>
                        <input
                          value={tagVal}
                          onKeyDown={(e) => tagkeyDown(e)}
                          onChange={(e) => setTagVal(e.target.value)}
                          className="inputcatfield"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Tags Menagement End Here */}
                </fieldset>
              </Card.Body>
            </Card>
          </Col>
          <Col md={"3"}>
            <Card>
              <Card.Body className="px-2">
                <h2>Part 3</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddEditForm;
