import { createContext, useContext, SetStateAction } from 'react'
import { IComment, IProject } from '../commons/types'

interface IContext {
  projects: IProject[];
  setSelectedProject: (project: IProject | null) => void;
  comments: IComment[];
  setComments: (comment: SetStateAction<IComment[]>) => void;
}

const AppContext = createContext<IContext>({ projects: [], setSelectedProject: (p) => {}, comments: [], setComments: (c) => {} });

interface RootProps {
  value: IContext;
  children: React.ReactNode;
}

export default function ContextProvider({ children, value }: RootProps) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);
