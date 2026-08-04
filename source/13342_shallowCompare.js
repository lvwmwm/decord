// Module ID: 13342
// Function ID: 13343
// Name: shallowCompare
// Dependencies: [13343]

// Module 13342 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13343) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13343) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
