// Module ID: 13221
// Function ID: 13222
// Name: shallowCompare
// Dependencies: [13222]

// Module 13221 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13222) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13222) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
