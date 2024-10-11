import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useResultContext } from "../contexts/ResultContextProvider";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, isLoading, fetchResults, searchTerm } = useResultContext();
  const location = useLocation();

  // useEffect(() => {
  //   if (searchTerm) {
  //     if (location.pathname === "/web") {
  //       fetchResults(`${location.pathname}?q=${searchTerm}&num=20`);
  //     } else if (location.pathname === "/image") {
  //       fetchResults(`${location.pathname}?q=${searchTerm}&num=20`);
  //     }
  //   }
  // }, [searchTerm, location.pathname]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     fetchResults(?q=${searchTerm}&num=20);
  //   }
  // }, [searchTerm, location.pathname]);

  // useEffect(() => {
  //   if (searchTerm) {
  //     switch (location.pathname) {
  //       case "/web":
  //         fetchResults("web"); // Calls API1 for web search
  //         break;
  //       case "/image":
  //         fetchResults("image"); // Calls API2 for image search
  //         break;
  //       case "/news":
  //         fetchResults("news"); // Calls API3 for news search
  //         break;
  //       case "/videos":
  //         fetchResults("videos"); // Calls API4 for video search
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />;

  console.log(results);

  console.log(location.pathname);

  switch (location.pathname) {
    case "/web":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ url, title, description }, i) => (
            <div key={i} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-p1 text-p1">
                  {title}
                </p>
                <p>{description}</p>
              </a>
            </div>
          ))}
        </div>
      );

    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center">
          {results?.data?.map(
            ({ title, source, thumbnail_url, source_url }, i) => (
              <a
                className="sm:p-3 p-5 card m-4 h-64 w-72 hover:scale-105 duration-300"
                href={source_url}
                key={i}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="object-cover w-48 h-32 w-full"
                  src={thumbnail_url}
                  alt={title}
                  loading="lazy"
                />
                <p>{source}</p>
                <p className="w-full break-words text-sm mt-2 dark:text-gray-900 hover:underline">
                  {title}
                </p>
              </a>
            )
          )}

          {/* {results?.knowledge_panel && (
            <a
              className="sm:p-3 p-5 card m-4"
              href={results.knowledge_panel.description.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="object-cover w-48 h-32"
                src={results.knowledge_panel.image.url}
                alt={results.knowledge_panel.name}
                loading="lazy"
              />
              <p className="w-36 break-words text-sm mt-2 dark:text-gray-900 hover:underline">
                {results.knowledge_panel.name}
              </p>
              <p className="w-36 break-words text-sm mt-2 dark:text-gray-900 hover:underline">
                {results.knowledge_panel.description.text}
              </p>
            </a>
          )} */}
        </div>
      );

    case "/videos":
      return (
        <div>
          {results?.videos?.map(
            ({ title, video_id, channel_id, thumbnails: { url } }, i) => (
              <a
                key={i}
                href={`https://\${www.youtube.com/watch?v=${video_id}&list=${channel_id}}`}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <img src={url} alt={title} />
                  <p>{title}</p>
                </div>
              </a>
            )
          )}
        </div>
      );

    case "/news":
      return (
        <div className="px-56">
          {results?.data?.map(({ title, link, snippet, photo_url }, i) => (
            <a
              className="card p-5 m-5 flex h-64 items-center justify-center"
              key={i}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex gap-4">
                <img
                  className="h-32 w-32 object-cover rounded-lg"
                  src={photo_url}
                  alt={title}
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <p className="mb-4 font-bold w-96 dark:text-gray-900">
                    {title}
                  </p>
                  <p className="break-words text-sm w-96 text-p1">{snippet}</p>
                  <a
                    href={link}
                    className="text-sm text-right text-p1 hover:underline self-end"
                  >
                    Continue reading...
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      );

    default:
      <div>error</div>;
  }
};
