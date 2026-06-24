import { Link } from 'react-router-dom';
import { lessons } from '../data/lessons';

export default function Home() {
  return (
    <div>
      <h1>Интерактивный учебник по Python</h1>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>
            <Link to={`/lesson/${lesson.id}`}>{lesson.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}