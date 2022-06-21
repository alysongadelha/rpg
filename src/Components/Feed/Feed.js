import { Pagination } from "@mui/material";
import React from "react";
import FeedCards from "./FeedCards";

const Feed = () => {
  const [page, setPage] = React.useState(1);

  function handleChange(e, p) {
    setPage(p);
    console.log(e);
    console.log(p);
    console.log(page);
  }

  return (
    <div className="animeLeft">
      <FeedCards />
      <div>
        <div
          style={{
            margin: "0 auto",
            width: "400px",
            background: "rgba(238, 238, 238, .5)",
            borderRadius: "3rem",
          }}
        >
          <Pagination
            count={10}
            size="small"
            page={page}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
