// Module ID: 13313
// Function ID: 13314
// Name: shallowCompare
// Dependencies: [13314]

// Module 13313 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13314) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13314) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
