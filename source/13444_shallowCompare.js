// Module ID: 13444
// Function ID: 13445
// Name: shallowCompare
// Dependencies: [13445]

// Module 13444 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13445) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13445) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
