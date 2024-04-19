import s from "./SearchBox.module.css";
import { changeSearchStr } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

function SearchBox({ searchStr }) {
  const dispatch = useDispatch();
  return (
    <div className={s.form}>
      <h2>Find contacts by name</h2>
      <input
        value={searchStr}
        onChange={(e) => dispatch(changeSearchStr(e.target.value))}
        type="text"
        className="input"
        placeholder="Search"
        className={s.input}
      />
      {searchStr && (
        <button className={s.btn} onClick={() => dispatch(changeSearchStr(""))}>
          Reset
        </button>
      )}
    </div>
  );
}

export default SearchBox;
