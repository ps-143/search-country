import { useState, useEffect } from "react";
import "./Country.css";

function Country({ country }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await fetch(
          `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
        );
        if (res.status !== 200) {
          throw new Error(res.statur);
        } else {
          const [d] = await res.json();
          setData(d);
          setLoading(false);
          setError(false);
        }
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };
    getCountry();
  }, [country]);
  if (loading) {
    return (
      <div className="country">
        <h2>Loading...</h2>
      </div>
    );
  } else if (error) {
    return (
      <div className="country">
        <h2>{country} doesn't exists</h2>
      </div>
    );
  } else {
    return (
      <article className="country">
        <img className="flag" src={data.flag} alt={data.name} />
        <div className="country__name">
          <h1 className="name">{data.name}</h1>
          <h4 className="region">{data.region}</h4>
        </div>
        <div className="info__row">
          <div className="info">
            <p className="info__text">
              {(+data.population / 1000000).toFixed(1) + " m"}
            </p>
            <p className="info__heading">Population</p>
          </div>
          <div className="info">
            <p className="info__text">
              {data.languages.map((language) => language.name).join(", ")}
            </p>
            <p className="info__heading">Languages</p>
          </div>
          <div className="info">
            <p className="info__text">{"+" + data.callingCodes}</p>
            <p className="info__heading">Calling Codes</p>
          </div>
        </div>
        <div className="info__row">
          <div className="info">
            <p className="info__text">{data.capital}</p>
            <p className="info__heading">Capital</p>
          </div>
          <div className="info">
            <p className="info__text">
              {data.currencies
                .map((currency) => currency.symbol + " " + currency.name)
                .join(", ")}
            </p>
            <p className="info__heading">Currencies</p>
          </div>
          <div className="info">
            <p className="info__text">{data.timezones.join(", ")}</p>
            <p className="info__heading">Timezones</p>
          </div>
        </div>
      </article>
    );
  }
}

export default Country;
