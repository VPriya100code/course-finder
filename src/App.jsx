import { useState } from "react";
import coursesData from "./data/courses";
import SearchBar from "./components/SearchBar";
import CourseList from "./components/CourseList";
import Quote from "./components/Quote";

function App() {
  const [search, setSearch] = useState("");

  const filteredCourses = coursesData.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>
  <span className="title-emoji">🎓</span> Course Finder
</h1>

      <Quote />

      <SearchBar search={search} setSearch={setSearch} />

      <CourseList courses={filteredCourses} />
    </div>
  );
}

export default App;
