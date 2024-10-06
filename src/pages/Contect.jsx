export default function Contact() {
  return (
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="bg-[#3a4660] shadow-md rounded-lg p-4 text-center">
        <p className="text-lg mb-4 text-white">
          For any inquiries, feel free to reach out to us:
        </p>

        <p className="text-xl font-semibold mb-2 text-white">
          Email:{" "}
          <a
            href="mailto:shah.syedawais77@yahoo.com"
            className="text-blue-500 underline"
          >
            shah.syedawais77@yahoo.com
          </a>
        </p>

        <p className="text-xl font-semibold text-white">
          WhatsApp:{" "}
          <a
            href="https://wa.me/923127415089"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            +923127415089
          </a>
        </p>
      </div>
    </div>
  );
}
