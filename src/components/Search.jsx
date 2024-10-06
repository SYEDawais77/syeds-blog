export default function Search({ query, setQuery }) {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="p-4">
      <div className="w-full sm:w-[300px] ">
        <input
          type="text"
          placeholder="Search posts about your interest"
          value={query}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg px-4 py-1 w-full max-w-xs md:max-w-3xl lg:max-w-lg focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
