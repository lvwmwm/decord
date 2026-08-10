// Module ID: 13436
// Function ID: 13437
// Name: shallowCompare
// Dependencies: [13437]

// Module 13436 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13437) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13437) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
