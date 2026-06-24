import { Link } from 'react-router-dom';
import { lessons } from './data/lessons';

function Home() {
  return (
    <div style={{ padding: '20px 0' }}>
      <p style={{ fontSize: '18px', color: '#5a4030' }}>Выберите урок, чтобы начать:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {lessons.map((lesson) => (
          <li key={lesson.id} style={{ margin: '12px 0' }}>
            <Link to={`/lesson/${lesson.id}`} className="lesson-link">
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;