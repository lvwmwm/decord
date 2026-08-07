// Module ID: 13364
// Function ID: 13365
// Name: shallowCompare
// Dependencies: [13365]

// Module 13364 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13365) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13365) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
