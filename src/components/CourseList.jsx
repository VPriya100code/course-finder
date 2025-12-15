import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  const groupedCourses = courses.reduce((acc, course) => {
    acc[course.category] = acc[course.category] || [];
    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <>
      {Object.keys(groupedCourses).map(category => (
        <div key={category}>
          <h2 className="domain-title">{category}</h2>
          <div className="grid">
            {groupedCourses[category].map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseList;
