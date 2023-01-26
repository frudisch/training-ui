import {EventTyp} from "../event-list/EventList";
import axios from "axios";
import sut from './selectEvents';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('Event selection', () => {
    it('should select the events and return them', async () => {
        const expectedValues = [{
            date: '03.01.2023',
            end: '20:00',
            start: '18:00',
        }, {
            date: '07.01.2023',
            end: '20:00',
            start: '18:00',
            enemy: 'Füchse Berlin'
        }];
        axiosMock.get.mockResolvedValue(expectedValues);

        const result = await sut();

        expect(result).toBe(expectedValues)
    });
})