//
import { IProject } from '../../commons/types';
import { useAppContext } from '../../hooks/useContext';
import './Project.css';

function Project(props: IProject) {
  const { setSelectedProject } = useAppContext();

  return (
    <article className="home__recents__project" onClick={() => setSelectedProject(props)}>
      <div className="home__recents__project--img">
        <img alt={props.name} src={props.imageUrl} />
        <span />
      </div>
      <h2>{props.name}</h2>
    </article>
  )
}

export default Project;
