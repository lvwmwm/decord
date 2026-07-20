// Module ID: 12965
// Function ID: 98714
// Name: shallowCompare
// Dependencies: []

// Module 12965 (shallowCompare)

export default function shallowCompare(props) {
  let tmp = !require(dependencyMap[0])(props.props, arg1);
  if (!tmp) {
    tmp = !require(dependencyMap[0])(props.state, arg2);
  }
  return tmp;
};
