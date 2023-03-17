//
import { useAppContext } from '../../hooks/useContext';
import Project from './Project';
import './Recents.css';

function Recents() {
  const {projects} = useAppContext();

  return (
    <section className="home__recents">
      <h1>Recent projects</h1>

      <div className="home__recents__list">
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Recents;
