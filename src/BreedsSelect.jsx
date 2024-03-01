// @ts-check
/**
 * @typedef {Object} Props
 * @property {string[]} breeds
 * @property {(param : string) => void} setSelectedBreedsToParent
 */

/**
 * 犬の画像を表示するコンポーネント
 * @param {Props} props
 * @returns
 */
export const BreedsSelect = ({ breeds, setSelectedBreedsToParent }) => {
  return (
    <>
      <select onChange={(eve) => setSelectedBreedsToParent(eve.target.value)}>
        {breeds.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default BreedsSelect;
