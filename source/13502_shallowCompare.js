// Module ID: 13502
// Function ID: 13503
// Name: shallowCompare
// Dependencies: [13503]

// Module 13502 (shallowCompare)

export default function shallowCompare(props) {
  const tmp3 = require(13503) /* shallowEqual */(props.props, arg1);
  let tmp4 = !tmp3;
  if (tmp3) {
    tmp4 = !require(13503) /* shallowEqual */(props.state, arg2);
  }
  return tmp4;
};
