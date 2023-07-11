type FilterType = {
  name: string;
  label: string;
};

const filterButtons: FilterType[] = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "done", label: "Done" },
];

const ItemStatusFilter = ({
  filterType,
  onChangeFilter,
}: {
  filterType: string;
  onChangeFilter: (filterType: string) => void;
}) => {
  const onClickFilter = (name: string) => {
    onChangeFilter(name);
  };

  const buttons = filterButtons.map(({ name, label }) => {
    let classNames = "btn";
    if (name === filterType) {
      classNames += " btn-outline-primary active";
    } else {
      classNames += " btn-outline-secondary";
    }

    return (
      <button
        key={name}
        type="button"
        className={classNames}
        onClick={(e) => onClickFilter(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group col" role="group">
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;
