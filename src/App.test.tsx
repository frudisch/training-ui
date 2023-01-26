import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('should render the App and match the snapshot', () => {
  const rendered = renderer
      .create(<App></App>)
      .toJSON();
  expect(rendered).toMatchSnapshot();
});
