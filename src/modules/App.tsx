//
import { useState } from 'react';
import { IProject, IComment } from '../commons/types';
import { PROJECTS } from '../commons/api';
import ContextProvider from '../hooks/useContext';
import Home from './home/Home'
import Project from './project/Project';

function App() {
  //
  const projects = PROJECTS; // mocked projects
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [comments, setComments] = useState<IComment[]>([])

  return (
    <ContextProvider value={{ projects, setSelectedProject, comments, setComments }}>
      {!selectedProject ?
        <Home />:
        <Project {...selectedProject} />
      }
    </ContextProvider>
  );
}

export default App;
