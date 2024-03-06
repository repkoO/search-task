import { useState } from "react";
import "./styles.css";

export function SearchForm() {
  const [value, setValue] = useState('')

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="searchForm">
      <form>
        <input
          onChange={handleChange}
          type="text"
          value={value} />
      </form>
    </div>
  );
}
