/* eslint-disable react/prop-types */
import "./scoreboard.css";
export default function MakeScoreBoard({ scores }) {
  return (
    <div className="scores-container bg-gradient">
      <div className="score">Current score: {scores.current}</div>
      <div className="best-score">Best score: {scores.best}</div>
    </div>
  );
}
