import { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Country from "./Country";
function App() {
  const [country, setCountry] = useState("");
  return (
    <>
      <Logo />
      <Search searchSubmit={(name) => setCountry(name)} />
      {country === "" ? "" : <Country country={country} />}
    </>
  );
}

export default App;
