import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Admin/adminRedirect/Admin";
import AdminDashbord from "../Admin/SideMenuElements/dashbord/Admin_Dashbord";
import AdminLogin from "../Admin/loginOrReg/Admin_Login";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Shop from "../pages/shop/Shop";
import ProductTags from "../Admin/SideMenuElements/products/Tags/ProductTags";
import AllProduct from "../Admin/SideMenuElements/products/AllProducts/AllProduct";
import ProductCategories from "../Admin/SideMenuElements/products/Categories/ProductCategories";
import AllPost from "../Admin/SideMenuElements/post/AllPost/AllPost";
import PostTags from "../Admin/SideMenuElements/post/PostTags/PostTags";
import PostCategories from "../Admin/SideMenuElements/post/Categories/PostCategories";
import AllUsers from "../Admin/SideMenuElements/users/AllUsers/AllUsers";
import AllComments from "../Admin/SideMenuElements/comments/AllComments/AllComments";

const Routs = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/dashbord" element={<AdminDashbord />} />
          <Route path="/admin/post" element={<AllPost />} />
          <Route path="/admin/post/allpost" element={<AllPost />} />
          <Route path="/admin/post/tag" element={<PostTags />} />
          <Route path="/admin/post/categories" element={<PostCategories />} />
          <Route path="/admin/comments" element={<AllComments />} />
          <Route path="/admin/products" element={<AllProduct />} />
          <Route path="/admin/products/allproduct" element={<AllProduct />} />
          <Route path="/admin/products/tags" element={<ProductTags />} />
          <Route
            path="/admin/products/categories"
            element={<ProductCategories />}
          />
          <Route path="/admin/users" element={<AllUsers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routs;
