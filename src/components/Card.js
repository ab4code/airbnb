import "./Card.scss";
import star from "../assets/star.png";

const Card = ({ lady, title, info, subinfo }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={lady} alt="Lady" className="hero" />
        <div className="rate">
          <img src={star} alt="star" />
          <p className="title">{title}</p>
        </div>
        <p className="info">{info}</p>
        <p className="subinfo">
          <b>{subinfo}</b>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
