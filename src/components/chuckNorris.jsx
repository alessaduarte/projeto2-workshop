import { useEffect, useState } from "react";

function ChuckNorris() {
  const [chuck, setChuck] = useState("Facts");

  useEffect(() => {
    setChuck();
  }, []);

  const getChuck = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      method: 'GET',
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setChuck(data.value);
  };

  return (
    <div className='container'>
      <h1>Chuck Norris Facts</h1>
      <p className="joke">{chuck}</p>
      <button className="btn" onClick={getChuck}>Get Another Fact</button>
    </div>
  );
}

export default ChuckNorris;
