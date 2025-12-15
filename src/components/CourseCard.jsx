const domainEmoji = {
  "Web Development": "🌐",
  "Programming": "💻",
  "Computer Science": "🧠",
  "AI & Data": "🤖",
  "Design": "🎨",
  "Security": "🔐",
  "Cloud & DevOps": "☁️",
  "Mobile Development": "📱",
  "Blockchain": "⛓️"
};

const levelColor = {
  Basic: "#22c55e",
  Intermediate: "#f59e0b",
  Advanced: "#ef4444"
};

const CourseCard = ({ course }) => {
  return (
    <div className="card">
      <h3>
        <span className="emoji">
          {domainEmoji[course.category] || "📘"}
        </span>
        {course.name}
      </h3>

      <p>{course.category}</p>

      <span
        className="level-badge"
        style={{ backgroundColor: levelColor[course.level] }}
      >
        {course.level}
      </span>
    </div>
  );
};

export default CourseCard;
