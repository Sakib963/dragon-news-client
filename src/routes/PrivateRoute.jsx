import React from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("User in Private Route", user);

  if(loading){
    return <Spinner animation="grow" variant="warning" />
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

/**
 * ----------------
 * STEPS
 * ----------------
 * 1. Check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. else redirect the user to login page
 * 4. setup the private router
 * 5. Handle Loading
 *  */
