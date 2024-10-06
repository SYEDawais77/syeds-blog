export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {currentYear} Syed&#39;s Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
