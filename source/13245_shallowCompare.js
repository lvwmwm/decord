// Module ID: 13245
// Function ID: 13246
// Name: shallowCompare
// Dependencies: [13246]

// Module 13245 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13246) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13246) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
