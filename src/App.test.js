{/*import React from 'react';
import App from './App'
import renderer from 'react-test-renderer';

test('State must update', () => {
const component = renderer.create(
      <App page="Hello World"> Hello all</App>
    );

let tree = component.toJSON();
expect(tree).toMatchSnapshot();

tree.props.showText();
 tree = component.toJSON();
expect(tree).toMatchSnapshot();

}
)  */}
import React from 'react';
import { shallow } from 'enzyme';
import App from './App'


describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });
});