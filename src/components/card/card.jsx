/* eslint-disable react/prop-types */
import "./card.css";
export default function MakeCard({ pokemon, onClickFn }) {
  const altText = `Artwork of ${pokemon.name}`;
  function setBackground(img) {
    return `url(${img})`;
  }
  return (
    <div className="card bg-gradient" onClick={onClickFn}>
      <div>
        <div
          className="backlight"
          style={{
            width: "100%",
            height: "inherit",
            background: setBackground(pokemon.img),
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            position: "absolute",
          }}
        ></div>
        <img src={pokemon.img} alt={altText} />
      </div>

      <h2 className="bg-gradient">{pokemon.name.toUpperCase()}</h2>
    </div>
  );
}
