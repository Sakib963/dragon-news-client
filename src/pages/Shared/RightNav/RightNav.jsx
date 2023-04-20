import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div className="w-100">
      <h4>Login With</h4>
      <div className="my-2 w-100">
        <Button variant="outline-primary" className="mb-2 w-100">
          Login with Google <FcGoogle />
        </Button>
        <Button variant="outline-secondary" className="w-100">
          Login with GitHub <FaGithub className="text-black" />
        </Button>
      </div>

      <div className="mt-4">
        <h4>Find us On</h4>
        <ListGroup>
          <ListGroup.Item className="p-3 text-secondary"><FaFacebook className="me-2 text-black"/> Facebook</ListGroup.Item>
          <ListGroup.Item className="p-3 text-secondary"><FaTwitter className="me-2 text-black"/> Twitter</ListGroup.Item>
          <ListGroup.Item className="p-3 text-secondary"><FaInstagram className="me-2 text-black"/> Instagram</ListGroup.Item>
          
        </ListGroup>
      </div>
      <QZone></QZone>

      <div className="text-center">
        <div className="">
            <img className="w-100" src={bg} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default RightNav;
