// Module ID: 13434
// Function ID: 13435
// Name: shallowCompare
// Dependencies: [13435]

// Module 13434 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13435) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13435) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
