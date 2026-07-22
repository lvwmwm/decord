// Module ID: 12981
// Function ID: 98792
// Name: shallowCompare
// Dependencies: [0]

// Module 12981 (shallowCompare)

export default function shallowCompare(props) {
  let tmp = !require(dependencyMap[0])(props.props, arg1);
  if (!tmp) {
    tmp = !require(dependencyMap[0])(props.state, arg2);
  }
  return tmp;
};
