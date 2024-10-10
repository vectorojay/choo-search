import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <MagnifyingGlass
        visible={true}
        height="50"
        width="50"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#ab4747"
      />
    </div>
  );
};

// export default Loading;
