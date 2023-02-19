import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import * as selectEvents from "./api/selectEvents";

jest.mock('./api/selectEvents');
const selectEventsMock = selectEvents as jest.Mocked<typeof selectEvents>;
describe('App', () => {
    it('should be rendered and match the snapshot', async () => {
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
        selectEventsMock.default.mockResolvedValue(expectedValues);

        const rendered = renderer
            .create(<App></App>)
            .toJSON();

        expect(rendered).toMatchSnapshot();
    });
})
