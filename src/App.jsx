import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contect";
import { useState } from "react";
export default function App() {
  const [query, setQuery] = useState("");

  const data = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      author: "Alice Thompson",
      date: "2023-09-01",
      tags: ["AI", "Technology", "Future"],
      content:
        "Artificial Intelligence continues to shape our world. In this post, we explore the advancements and ethical implications of AI.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // AI and Technology
    },
    {
      id: 2,
      title: "10 Healthy Recipes for Busy People",
      author: "John Doe",
      date: "2023-08-25",
      tags: ["Health", "Food", "Lifestyle"],
      content:
        "Cooking healthy meals doesn't have to be time-consuming. Here are 10 quick and healthy recipes for people on the go.",
      image:
        "https://www.eatingwell.com/thmb/YxkWBfh2AvNYrDKoHukRdmRvD5U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg" // Healthy Food
    },
    {
      id: 3,
      title: "The Best Hiking Trails in the World",
      author: "Jane Smith",
      date: "2023-08-20",
      tags: ["Travel", "Adventure", "Nature"],
      content:
        "If you're a hiking enthusiast, these are the top 10 trails you should explore. From mountains to beaches, the world offers endless beauty.",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Hiking Trails
    },
    {
      id: 4,
      title: "A Beginner’s Guide to Investing in Stocks",
      author: "Michael Brown",
      date: "2023-07-30",
      tags: ["Finance", "Investing", "Money"],
      content:
        "New to investing? Here's a beginner-friendly guide on how to get started with stock market investments.",
      image:
        "https://www.publicfinanceinternational.org/wp-content/uploads/A-Beginners-Guide-To-Investing-In-Stocks.jpg" // Investing
    },
    {
      id: 5,
      title: "How to Stay Productive While Working from Home",
      author: "Lisa Green",
      date: "2023-07-22",
      tags: ["Productivity", "Remote Work", "Lifestyle"],
      content:
        "With more people working from home, staying productive can be challenging. In this post, we share tips on how to make the most of your remote workday.",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240219171757/Work-From-Home.webp" // Work from Home
    },
    {
      id: 6,
      title: "Exploring the History of Jazz Music",
      author: "Samuel Davis",
      date: "2023-07-10",
      tags: ["Music", "History", "Jazz"],
      content:
        "Jazz is a genre that has influenced many other musical styles. In this post, we delve into the rich history and evolution of jazz.",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Jazz Music
    },
    {
      id: 7,
      title: "Top 5 Tips for Maintaining Mental Health",
      author: "Karen White",
      date: "2023-06-30",
      tags: ["Health", "Mental Health", "Wellness"],
      content:
        "Mental health is just as important as physical health. Here are five simple strategies to help you maintain mental well-being.",
      image:
        "https://images.unsplash.com/photo-1512539031390-9deae9f1a3a8?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Mental Health
    },
    {
      id: 8,
      title: "The Ultimate Guide to Digital Marketing",
      author: "David Lee",
      date: "2023-06-15",
      tags: ["Marketing", "Business", "Digital"],
      content:
        "Digital marketing has become essential for businesses of all sizes. This guide covers the basics of digital marketing strategies and tools.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Digital Marketing
    },
    {
      id: 9,
      title: "Understanding Climate Change and Its Impact",
      author: "Sarah Connor",
      date: "2023-06-05",
      tags: ["Environment", "Climate Change", "Science"],
      content:
        "Climate change is one of the most pressing issues of our time. This post explains the science behind it and what we can do to combat its effects.",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1a123a5c7?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Climate Change
    },
    {
      id: 10,
      title: "How to Learn a New Language Quickly",
      author: "Chris Evans",
      date: "2023-05-25",
      tags: ["Education", "Languages", "Learning"],
      content:
        "Learning a new language can be fun and rewarding. Here are some tips and tools to help you master a new language in no time.",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d71?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Learning Languages
    },
    {
      id: 11,
      title: "Building a Personal Brand on Social Media",
      author: "Jessica Miller",
      date: "2023-05-10",
      tags: ["Social Media", "Branding", "Marketing"],
      content:
        "Social media offers a powerful platform to build a personal brand. Learn how to effectively establish your presence and connect with your audience.",
      image:
        "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Personal Branding
    },
    {
      id: 12,
      title: "The Benefits of Yoga for Mind and Body",
      author: "Sophia Garcia",
      date: "2023-04-28",
      tags: ["Health", "Yoga", "Wellness"],
      content:
        "Yoga has many benefits, from reducing stress to improving flexibility. In this post, we explore how yoga can enhance both your mental and physical health.",
      image:
        "https://images.unsplash.com/photo-1515847049296-a281d6401047?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Yoga
    },
    {
      id: 13,
      title: "How to Start a Successful Blog in 2023",
      author: "Emily Johnson",
      date: "2023-04-15",
      tags: ["Blogging", "Content Creation", "Marketing"],
      content:
        "Starting a blog is easier than ever, but building a successful one requires strategy. Here’s how to get started and grow your audience.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Blogging
    },
    {
      id: 14,
      title: "Exploring the Latest Web Development Trends",
      author: "Alex Wilson",
      date: "2023-03-25",
      tags: ["Web Development", "Technology", "Trends"],
      content:
        "Web development is constantly evolving. In this post, we explore the latest trends and technologies shaping the industry in 2023.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Web Development
    },
    {
      id: 15,
      title: "How to Create a Strong Resume",
      author: "Robert Lewis",
      date: "2023-03-10",
      tags: ["Career", "Job Search", "Resumes"],
      content:
        "A strong resume is essential for landing your dream job. Learn how to create a compelling resume that stands out to employers.",
      image:
        "https://images.unsplash.com/photo-1557425493-9f6d3ff2b490?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Resume Creation
    },
    {
      id: 16,
      title: "Traveling the World on a Budget",
      author: "Nancy Adams",
      date: "2023-02-25",
      tags: ["Travel", "Budget", "Adventure"],
      content:
        "You don't need to break the bank to see the world. These budget-friendly travel tips will help you explore the globe without spending a fortune.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Budget Travel
    },
    {
      id: 17,
      title: "Mastering the Art of Public Speaking",
      author: "James Carter",
      date: "2023-02-10",
      tags: ["Public Speaking", "Communication", "Skills"],
      content:
        "Public speaking can be intimidating, but with the right techniques, anyone can become a confident speaker. Here are some tips to get you started.",
      image:
        "https://images.unsplash.com/photo-1566740933430-7aad96c5bc4b?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Public Speaking
    },
    {
      id: 18,
      title: "The Importance of Time Management",
      author: "Olivia Hall",
      date: "2023-01-30",
      tags: ["Productivity", "Time Management", "Lifestyle"],
      content:
        "Effective time management is key to achieving success. Learn how to manage your time efficiently with these proven strategies.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Time Management
    },
    {
      id: 19,
      title: "The Rise of Electric Vehicles",
      author: "Benjamin Scott",
      date: "2023-01-15",
      tags: ["Technology", "Electric Vehicles", "Environment"],
      content:
        "Electric vehicles are gaining popularity due to their environmental benefits and advancements in technology. This post explores the rise of EVs and their future.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f5b04b?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Electric Vehicles
    },
    {
      id: 20,
      title: "How to Build a Morning Routine That Works",
      author: "Megan Collins",
      date: "2023-01-05",
      tags: ["Productivity", "Lifestyle", "Wellness"],
      content:
        "A solid morning routine sets the tone for the day. Here’s how to build a morning routine that will boost your productivity and well-being.",
      image:
        "https://images.unsplash.com/photo-1527236438218-d82077ae1f85?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" // Morning Routine
    }
  ];

  const filteredData = data.filter((post) =>
    post.tags.toString().toLowerCase().includes(query.toLowerCase())
  );

  const filteredDataByTitle = data.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  const combineFilteredData = filteredData.concat(filteredDataByTitle);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<AppLayout data={data} query={query} setQuery={setQuery} />}
        >
          <Route
            path="/"
            element={
              <Home
                data={data}
                combineFilteredData={combineFilteredData}
                query={query}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
