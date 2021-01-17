import { useState } from "react";
import "./Search.css";
import searchIcon from "./assets/search.png";
import go from "./assets/arrow_right_alt.png";

function Search({ searchSubmit }) {
  const [value, setValue] = useState("");
  return (
    <div className="search-bar">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          searchSubmit(value);
        }}
      >
        <label className="search-icon" htmlFor="search">
          <img src={searchIcon} alt="search icon" />
        </label>
        <input
          className="search-text"
          type="text"
          placeholder="India"
          id="search"
          name="search"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          <img src={go} alt="seach icon" />
        </button>
      </form>
    </div>
  );
}

export default Search;
