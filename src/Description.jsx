// @ts-check

import { useState } from "react";
import "./App.css";
import DogImage from "./DogImage";

/**
 * @type {() => JSX.Element}
 */

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg",
  );

  const changeImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setDogUrl(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl}></DogImage>
      <button onClick={changeImg} className="changeButton">
        更新
      </button>
    </>
  );
};

export default Description;
