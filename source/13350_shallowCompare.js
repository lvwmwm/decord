// Module ID: 13350
// Function ID: 13351
// Name: shallowCompare
// Dependencies: [13351]

// Module 13350 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13351) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13351) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
