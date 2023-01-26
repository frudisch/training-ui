import React, {useEffect, useState} from 'react';
import './App.css';
import EventList, {EventTyp} from "./event-list/EventList";
import selectEvents from "./api/selectEvents";

const App = () => {
    const [events, setEvents] = useState<EventTyp[]>();
    useEffect(() => {
        const getEvents = async () => {
            const selectedEvents = await selectEvents();
            console.log(selectedEvents);
            setEvents(selectedEvents);
        }

        if(!events) {
            getEvents();
        }
    }, [events]);
    return (
        <div className="App">
            <header className="App-header">
                <EventList eventList={events}/>
            </header>
        </div>
    );
}

export default App;
