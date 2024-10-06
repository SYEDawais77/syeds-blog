export default function About() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {`Welcome to Syed's Blog! Our goal is to share knowledge, insights, and
          updates on a wide range of topics that interest our community. Whether
          you're passionate about technology, lifestyle, or any other subject,
          we are here to provide valuable content that engages and inspires.`}
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our mission is to create a platform where knowledge flows freely and
          ideas are shared openly. We strive to provide high-quality articles,
          tutorials, and resources to our readers, helping them stay informed
          and connected.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions, suggestions, or feedback, feel free to
          reach out to us via our{" "}
          <a href="/contact" className="text-blue-500 underline">
            Contact Page
          </a>
          . We&#39;re always happy to hear from our readers and improve our
          content to serve you better.
        </p>
      </div>
    </div>
  );
}
