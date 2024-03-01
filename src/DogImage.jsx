// @ts-check
import "./App.css";

/**
 * @typedef {Object} Props
 * @property {string} imageUrl
 */

/**
 * 犬の画像を表示するコンポーネント
 * @param {Props} imageUrl
 * @returns
 */
export const DogImage = ({ imageUrl }) => {
  return (
    <>
      <div className="dogImgBox">
        <img src={imageUrl} alt="犬の画像" className="dogImg" />
      </div>
    </>
  );
};

export default DogImage;
