// Module ID: 13308
// Function ID: 13309
// Name: shallowCompare
// Dependencies: [13309]

// Module 13308 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13309) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13309) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
