import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [userData, setUserData] = useState([]);
  const [searched, setSearched] = useState("");
  const [flag, setFlag] = useState(true);
  let count = 0;

  async function fetchingUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUserData(data);
  }
  useEffect(() => {
    fetchingUsers();
  }, []);

  function handleChange(e) {
    // e.preventDefault();
    setSearched(e.target.value);
  }

  return (
    <div className="flex flex-col items-center h-[110dvh]">
      <header className="h-[15dvh] sm:h-[20dvh] flex justify-center items-center w-full bg-linear-to-r from-[#db9bc7] to-[#116781] ">
        <h1 className="monster-h1 font-[font-PermanentMarker] text-3xl sm:text-4xl">
          MONSTERS
        </h1>
      </header>
      <main className="h-[85dvh] sm:h-[80dvh] w-full bg-linear-to-r from-[#dd9c25] to-[#febfc7]">
        <div className="flex flex-col items-center justify-center h-[18%] sm:h-[25%] gap-2">
          <h3 className="font-semibold text-lg">Search Monster</h3>
          <input
            onChange={handleChange}
            className="border-2 rounded-md text-center placeholder:text-center bg-white focus:outline-none h-8 w-35 sm:h-10 sm:w-40"
            type="search"
            name="search"
            id="search"
            placeholder="Monster"
          />
        </div>
        <div className="cards flex justify-center gap-5 sm:gap-10 flex-wrap h-[75%] overflow-y-auto m-auto px-5 sm:px-30 py-4">
          {userData
            .filter((user) => {
              if (
                user.name.toLowerCase().includes(searched.toLowerCase()) ||
                user.username.toLowerCase().includes(searched.toLowerCase()) ||
                user.email.toLowerCase().includes(searched.toLowerCase())
              )
                return user;
                else count++;
            })
            .map((user) => (
              <Cards
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                username={user.username}
              />
            ))}

            {count === 10 ? <span className="text-center text-lg">This monster doesn't exit! <br/> Please search another!!!</span> : null}
        </div>
      </main>
      <footer className="w-full h-[10dvh] bg-linear-to-r from-[#dd9c25] to-[#febfc7]"></footer>
    </div>
  );
}

export default App;
