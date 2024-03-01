// @ts-check
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { BreedsSelect } from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([""]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [imgUrlArray, setImgUrlArray] = useState([""]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const breedsArray = Object.keys(data.message);
        console.log(breedsArray);
        setBreeds((breeds) => breedsArray);
        setSelectedBreed((selectedBreed) => breedsArray[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /**
   * BreedSelectから選択された犬種を受け取る．
   * @param {String} newSelectedBreed
   * @returns
   */
  const setSelectedBreedsToParent = (newSelectedBreed) => {
    setSelectedBreed(newSelectedBreed);
  };

  const chatchImgUrlList = () => {
    const getImgUrlNum = 3;
    const apiUrl =
      "https://dog.ceo/api/breed/" +
      selectedBreed +
      "/images/random/" +
      String(getImgUrlNum);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setImgUrlArray(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * apiから取得したURLの画像のリストを作成する．
   * @param {String[]} newImgUrlArray
   * @returns
   */
  const createImgList = (newImgUrlArray) => {
    return newImgUrlArray.map((newImgUrl) => <img src={newImgUrl} />);
  };

  return (
    <>
      <div className="DogListContainer">
        <BreedsSelect
          breeds={breeds}
          setSelectedBreedsToParent={setSelectedBreedsToParent}
        ></BreedsSelect>
        <button onClick={chatchImgUrlList}>表示</button>
        <div className="DogList">{createImgList(imgUrlArray)}</div>
      </div>
    </>
  );
};

export default DogListContainer;
