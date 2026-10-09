import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useParams
} from "react-router-dom";

// Home Page
function Home() {
  return <h2>Home Page</h2>;
}

// Products Page
function Products() {
  return (
    <div>
      <h2>Products Page</h2>
      <p>Product 101 - Laptop</p>
      <p>Product 102 - Mobile</p>
    </div>
  );
}

// Product Details - Dynamic Route
function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

// Contact Page
function Contact() {
  return <h2>Contact Page</h2>;
}

// Login Page
function Login({ setLoggedIn }) {
  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

// Cart Page
function Cart() {
  return <h2>Cart Page</h2>;
}

// Protected Route
function ProtectedRoute({ loggedIn, children }) {
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

// 404 Page
function NotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <p>Invalid URL</p>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/products/101">Product Details</Link> |{" "}
        <Link to="/cart">Cart</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        {/* Dynamic Route */}
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} />}
        />

        {/* Protected Route */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;