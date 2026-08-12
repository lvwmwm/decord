// Module ID: 13501
// Function ID: 13502
// Name: shallowCompare
// Dependencies: [13502]

// Module 13501 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13502) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13502) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
