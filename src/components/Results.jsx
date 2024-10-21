import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useResultContext } from "../contexts/ResultContextProvider";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { FaPlayCircle } from "react-icons/fa";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, isLoading, fetchResults, searchTerm } = useResultContext();
  const location = useLocation();

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
                className="m-4 h-64 w-72 hover:scale-105 duration-300"
                href={source_url}
                key={i}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="object-cover h-48 w-full rounded-xl"
                  src={thumbnail_url}
                  alt={title}
                  loading="lazy"
                />
                <p>{source}</p>
                <p className="w-full break-words text-sm mt-2 text-p1 hover:underline">
                  {title}
                </p>
              </a>
            )
          )}
        </div>
      );

    case "/videos":
      return (
        <div className="grid grid-cols-4 gap-2 justify-center items-center">
          {results?.videos?.map(
            (
              {
                title,
                author,
                video_id,
                channel_id,
                thumbnails,
                number_of_views,
                published_time,
              },
              i
            ) => (
              <a
                className="sm:p-3 p-5 card h-82 w-82 m-4 hover:scale-105 duration-300 dark:bg-slate-800"
                key={i}
                href={`https://www.youtube.com/watch?v=${video_id}&list=${channel_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative">
                  <img
                    className="object-cover h-32 w-full rounded"
                    src={thumbnails[0]?.url}
                    alt={title}
                  />
                  {/* Play Button Overlay */}
                  <FaPlayCircle
                    className="absolute inset-0 m-auto text-white text-6xl opacity-80"
                    style={{
                      // top: "50%",
                      left: "20%",
                      transform: "translate(-50%, -50%)",
                      cursor: "pointer",
                    }}
                  />
                  <p className="font-bold text-sm mb-5 dark:text-gray-100 py-3">
                    {title.length > 30 ? title.substring(0, 40) : title}
                  </p>
                  <div className="flex">
                    <span className="text-xs mr-2 text-p1">
                      {number_of_views} views
                    </span>{" "}
                    <span className="text-xs text-p1">{published_time}</span>
                  </div>
                  <p className="text-xs text-p1">Youtube | {author}</p>
                </div>
              </a>

              // <ReactPlayer
              //   className="sm:p-3 p-5 card m-4 h-82 w-96 hover:scale-105 duration-300"
              //   width="355px"
              //   height="200px"
              //   key={i}
              //   url={`https://www.youtube.com/watch?v=${video_id}&list=${channel_id}`}
              //   controls
              //   target="_blank"
              //   rel="noreferrer"
              // />
            )
          )}
        </div>
      );

    case "/news":
      return (
        <div className="px-56">
          {results?.data?.map(({ title, link, snippet, photo_url }, i) => (
            <a
              className="card p-5 m-5 flex h-64 items-center justify-center dark:bg-slate-800"
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
                  <p className="mb-4 font-bold w-96 dark:text-gray-100">
                    {title}
                  </p>
                  <p className="break-words text-sm w-96 text-p1">{snippet}</p>
                  <a
                    href={link}
                    target="_blank"
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
