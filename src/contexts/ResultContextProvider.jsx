import React, { useContext, createContext, useState } from "react";

const ResultContext = createContext();

const apiURLs = {
  web: "https://web-search24.p.rapidapi.com",
  news: "https://real-time-news-data.p.rapidapi.com/search",
  image: "https://real-time-image-search.p.rapidapi.com/search",
  videos: "https://joj-web-search.p.rapidapi.com",
};

// const apiURL = apiURLs.web;

// console.log(apiURL);

// export const ResultContextProvider = ({ children }) => {
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("Google");
//   // const [error, setError] = useState();

//   const fetchResults = async (type) => {
//     setIsLoading(true);

//     const response = await fetch(`${baseURL}${type}`, {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "627962f4b2msha70ad00fe1f80dfp172056jsne0724be3692b",
//         "x-rapidapi-host": "joj-web-search.p.rapidapi.com",
//       },
//     });
//     const data = await response.json();
//     console.log(data);

//     setResults(data);
//     setIsLoading(false);
//   };
//   return (
//     <ResultContext.Provider
//       value={{ results, isLoading, searchTerm, setSearchTerm, fetchResults }}
//     >
//       {children}
//     </ResultContext.Provider>
//   );
// };

export const ResultContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Al Pacino");

  const fetchResults = async (type) => {
    setIsLoading(true);

    const baseURL = apiURLs[type];

    const response = await fetch(`${baseURL}?query=${searchTerm}&limit=20`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "627962f4b2msha70ad00fe1f80dfp172056jsne0724be3692b",
        // "x-rapidapi-host": baseURL.replace(/^https:\/\/|\/.*$/g, ""),
        "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
      },
    });
    const data = await response.json();
    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ isLoading, results, searchTerm, setSearchTerm, fetchResults }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
