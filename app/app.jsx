var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name : 'adam',
  'location' : 'maldives'
};

var objTwo = {
  age : 25,
  ...objOne
}

console.log(objTwo);



ReactDOM.render(
  <h1>Hello</h1>,
  document.getElementById('app')
);
