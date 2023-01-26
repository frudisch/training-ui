import {EventTyp} from "../event-list/EventList";
import axios from "axios";
import configuration from "../configuration";

export default async (): Promise<EventTyp[]> => {
    const response = await axios.get<EventTyp[]>(`${configuration.backendURL}/event/`);
    console.log('got response ')
    console.log(response)
    return response.data;
}