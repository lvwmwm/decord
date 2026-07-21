// Module ID: 12974
// Function ID: 98759
// Name: shallowCompare
// Dependencies: [0]

// Module 12974 (shallowCompare)

export default function shallowCompare(props) {
  let tmp = !require(dependencyMap[0])(props.props, arg1);
  if (!tmp) {
    tmp = !require(dependencyMap[0])(props.state, arg2);
  }
  return tmp;
};
