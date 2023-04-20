import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id, author, total_view, rating } = news;

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
      <Image style={{height: '40px'}} src={author?.img} roundedCircle />
      <div className="ps-2 flex-grow-1">
        <h5>{author.name}</h5>
        <p><small>{moment(author.published_date).format('yyyy-MM-D')} {}</small></p>
      </div>

      <div>
        <FaRegBookmark className="me-2"/>
        <FaShareAlt/>
      </div>

      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
            {details.length < 250 ? <>{details}</> : 
            <>{details.slice(0, 250)}.... <Link to={`/news/${_id}`}>Read More</Link> </>
        }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 align-items-center">
            <Rating placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar/>}
            placeholderSymbol={<FaStar className="text-warning"/>}
            fullSymbol={<FaStar/>}></Rating>
            <span className="ms-2">{rating.number}</span>
        </div>
        <div>
        <FaEye className="me-2"/>
        {total_view}
        </div>
      
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;