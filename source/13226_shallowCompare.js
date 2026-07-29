// Module ID: 13226
// Function ID: 13227
// Name: shallowCompare
// Dependencies: [13227]

// Module 13226 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13227) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13227) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
