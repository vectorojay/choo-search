import React from "react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import Links from "./Links";

export const Search = () => {
  return (
    <div>
      Search
      <Links />
    </div>
  );
};
