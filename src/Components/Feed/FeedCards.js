import React from "react";
import { PHOTOS_GET } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import styles from "./FeedPhotos.module.css";
import characters from "../../Json/Photos.json";
import FeedCardItem from "./FeedCardItem";

const FeedCards = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET();
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  return (
    <ul className={styles.cards}>
      {characters.map((char) => (
        <FeedCardItem
          key={char.id}
          name={char.name}
          img={char.img}
          tribe={char.tribe}
          theme={char.theme}
          info={char.info}
          brand={char.brand}
        />
      ))}
    </ul>
  );
};

export default FeedCards;
