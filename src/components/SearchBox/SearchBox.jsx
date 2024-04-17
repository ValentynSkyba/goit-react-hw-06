import s from "./SearchBox.module.css";

const SearchBox = ({ searchStr, onSearch }) => {
  return (
    <div className={s.form}>
      <h2>Find contacts by name</h2>
      <input
        value={searchStr}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        className="input"
        placeholder="Search"
        className={s.input}
      />
      {searchStr && (
        <button className={s.btn} onClick={() => onSearch("")}>
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchBox;
