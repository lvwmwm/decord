// Module ID: 13158
// Function ID: 101398
// Name: shallowCompare
// Dependencies: [13159]

// Module 13158 (shallowCompare)

export default function shallowCompare(props) {
  let tmp = !require(13159) /* is */(props.props, arg1);
  if (!tmp) {
    tmp = !require(13159) /* is */(props.state, arg2);
  }
  return tmp;
};
