/* global React ReactDOM */

var ce = React.createElement;

var MyTitle = function (props) {
  return (
    ce('div', null,
      ce('h1', null, props.title)
    )
  );
};

var MyFirstComponent = function () {
  return (
    ce('h1', {style: {color: props.color}}, props.title)

// change MyFirstComponent inside div
ce(MyTitle, {color: 'rebeccapurple', title: 'CHTML'}),
ce(MyTitle, {color: 'peru', title: 'Center for the History of Music Theory and Literature'})
};

ReactDOM.render(
  ce(MyFirstComponent),
  document.getElementById("app")
);