import { ChangeEvent, useState } from "react";

const SearchPanel = ({
  onSearchFilter,
}: {
  onSearchFilter: (term: string) => void;
}) => {
  const [search, setSearch] = useState<string>("");
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearchFilter(value);
  };

  return (
    <input
      className="form-control col"
      placeholder="search"
      onChange={onSearchChange}
      value={search}
    />
  );
};

export default SearchPanel;
