// Module ID: 13341
// Function ID: 13342
// Name: shallowCompare
// Dependencies: [13342]

// Module 13341 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13342) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13342) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
