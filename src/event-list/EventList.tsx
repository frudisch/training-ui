import Game, {isGame} from "./Game";
import Training, {isTraining} from "./Training";
import './EventList.css'

export type EventTyp = Game | Training;

export type EventListProps = {
    eventList: EventTyp[] | undefined
}

export default (props: EventListProps) => {
    return (
        <div>
            {props.eventList?.map(event => {
                if(isGame(event)) {
                    return (<div className="List-element" key={'game-' + event.enemy}>
                        <p>Spiel:</p>
                        <p>{event.date}</p>
                        <p>{event.start} - {event.end}</p>
                        <p>{event.enemy}</p>
                    </div>)
                } else if(isTraining(event)) {
                    return (<div className="List-element" key={'training-' + event.date}>
                        <p>Training:</p>
                        <p>{event.date}</p>
                        <p>{event.start} - {event.end}</p>
                    </div>)
                }
                return (<div />);
            })}
        </div>
    );
}