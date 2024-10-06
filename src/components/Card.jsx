export default function Card({ blog }) {
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover "
        src={blog.image}
        alt={blog.title}
      />

      {/* Card Content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog.title}</div>
        <p className="text-gray-700 text-base min-h-14">{blog.content}</p>
      </div>

      <div>
        {/* Author Section */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-600">
            <p className="px-2 py-2">
              <b>{blog.author}</b>
            </p>
          </div>
          <div className="text-sm text-gray-600">
            <p className="px-2 py-2">
              <b>{blog.date}</b>
            </p>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      <div className="px-4 py-2 flex flex-wrap">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="text-gray-600 text-xs mr-2 mb-1 px-2 py-1 border border-gray-300 rounded-lg bg-gray-100"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
