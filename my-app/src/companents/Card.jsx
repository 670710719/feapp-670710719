function Card({ title, children }) {
  return (
    <div className="Card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default Card;