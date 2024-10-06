import Card from "../components/Card";

export default function Home({ query, data, combineFilteredData }) {
  if (!query) {
    data;
  } else if (query) {
    if (combineFilteredData.length > 0) {
      data = combineFilteredData;
    } else {
      return (
        <div className="container mx-auto my-auto p-2 md:p-6 lg:p-8 ">
          <h1 className="text-4xl text-center font-bold mb-20 align-middle">
            {`No results found for "${query}". Please try a different search term.`}
          </h1>
        </div>
      );
    }
  }

  return (
    <div
      className="bg-cover "
      style={{ backgroundImage: 'url("../../src/assets/images/mainbg.png")' }}
    >
      <div className="container mx-auto my-auto p-2 md:p-6 lg:p-8 ">
        <h1 className="text-5xl text-center font-bold mb-20 align-middle">
          Welcome to Syed&#39;s Blog
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 mt-14">
        {data.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
