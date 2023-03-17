//
import { IProject } from '../../commons/types';
import { useAppContext } from '../../hooks/useContext';
import Reactor from './Reactor';
import './Project.css';

function Project(props: Partial<IProject>) {
  const { setSelectedProject } = useAppContext();

  return (
    <main className="project__wrapper">
      <header>
        <button onClick={() => setSelectedProject(null)}>← back</button>
        <h1>Project: {props.name}</h1>
      </header>
      <section className="project__content">
        <Reactor {...props} />
      </section>
    </main>
  )
}

export default Project;
