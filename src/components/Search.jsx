import React from "react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import Links from "./Links";

export const Search = () => {
  const [text, setText] = useState("Al Pacino");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    debouncedValue && setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="flex flex-wrap relative justify-start justify-between mb-2 align-center p- sm:mt-10 mt-3">
      <input
        type="text"
        value={text}
        className="w-5/12 h-10 dark:bg-gray-200 border rounded-lg shadow-sm outline-none p-5 text-black hover:shadow-lg"
        placeholder="Chọọ anything here..."
        onChange={(e) => setText(e.target.value)}
      />
      {!text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => {
            setText("");
          }}
        >
          X
        </button>
      )}
      <Links />
    </div>
  );
};
