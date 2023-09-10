import { useState, useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password); // copying password to the clipboard
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }

    if (character) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen flex items-center">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">
          <h1 className="my-3 text-4xl text-center text-red-500">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 text-black"
              placeholder="Password"
              ref={passwordRef}
              readOnly
            ></input>
            <button
              className="outline-none bg-blue-600 font-medium text-white px-3 py-0.5 shrink-0 hover:scale-110 hover:bg-blue-800"
              onClick={copyPassword}
            >
              <FontAwesomeIcon icon={faClipboard} className="mx-1" />
              Copy
            </button>
          </div>

          <div className="flex justify-evenly gap-x-2">
            <div className="flex text-center gap-x-1">
              <input
                type="range"
                name="password"
                min={6}
                max={50}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              ></input>
              <label>Length {length} </label>
            </div>
            <div className="flex text-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={number}
                id="number"
                onClick={() => {
                  setNumber((previous) => !previous); // reverses the previous value
                }}
              ></input>
              <label>Numbers</label>
            </div>
            <div className="flex text-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={character}
                id="characterInput"
                onClick={() => {
                  setCharacter((previous) => !previous); // reverses the previous value
                }}
              ></input>
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
