//
import { useState, useRef, MouseEvent } from 'react';
import { IProject, IComment } from '../../commons/types';
import { useAppContext } from '../../hooks/useContext';
import './Reactor.css';

function Reactor(props: Partial<IProject>) {
  const { comments, setComments } = useAppContext();
  const [reactorPosition, setReactorPosition] = useState<[number, number] | null>(null);
  const [reactorValue, setReactorValue] = useState<string>('');
  const reactorRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commentsForThisProject = comments.filter((c) => c.project === props.id);

  const onClick = (e: MouseEvent<HTMLElement>) => {
    const parent = reactorRef.current?.parentElement;
    const target = e.target as HTMLElement;
    const pos = [e.clientX, e.clientY]
    const containerPos = [target.offsetLeft, target.offsetTop];
    setReactorPosition([pos[0] - containerPos[0] + (parent?.scrollLeft || 0), pos[1] - containerPos[1] + (parent?.scrollTop || 0)]);
    setTimeout(() => inputRef.current?.focus(), 200);
  };

  const closeReactor = () => {
    setReactorValue('');
    setReactorPosition(null);
  }

  const sendComment = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const comment: IComment = { project: props.id, text: reactorValue, position: reactorPosition }
    setComments([...comments, comment]);
    closeReactor();
    return false;
  };

  const sendReaction = (reaction: string, e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const comment: IComment = { project: props.id, text: reaction, position: reactorPosition }
    setComments([...comments, comment])
    closeReactor();
    return false;
  };

  return (
    <div className="reactor" onClick={onClick} ref={reactorRef} style={{ backgroundImage: `url(${props.imageUrl})` }}>
      {commentsForThisProject.map((c, i) => (
        <span key={i} style={{ left: `${c.position?.[0]}px`, top: `${c.position?.[1]}px` }}>
          <h3>Anonymous:</h3>
          <h4>{c.text}</h4>
        </span>
      ))}

      {!!reactorPosition && (
        <div className="reactor__action" style={{ left: `${reactorPosition?.[0]}px`, top: `${reactorPosition?.[1]}px` }}>
          <span className="reactor__action--icon" />
          <div className="reactor__action__input">
            <input type="text" name="reactor" value={reactorValue} ref={inputRef} onChange={(e) => setReactorValue(e.target.value)} />
            <button onClick={sendComment}>⬆</button>
          </div>
          <div className="reactor__action--icons">
            <span onClick={(e) => sendReaction('❤️', e)}>❤️</span>
            <span onClick={(e) => sendReaction('👍', e)}>👍</span>
            <span onClick={(e) => sendReaction('👎', e)}>👎</span>
            <span onClick={(e) => sendReaction('😆', e)}>😆</span>
            <span onClick={(e) => sendReaction('🪲', e)}>🪲</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reactor;
