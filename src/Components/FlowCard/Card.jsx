import "./Card.scss";

const Card = ({ title, subTitle, result, description }) => {
  return (
    <div className="card">
      <div className="round">
        <span className="span1">
          <span className="span2"></span>
        </span>
      </div>

      <div className="cardItem">
        <div className="upper">
          <div className="text">
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </div>
          <div className="result">
            {result}
          </div>
        </div>

        <div className="lower">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
