// Module ID: 13159
// Function ID: 101403
// Name: shallowCompare
// Dependencies: [13160]

// Module 13159 (shallowCompare)

export default function shallowCompare(props) {
  let tmp = !require(13160) /* is */(props.props, arg1);
  if (!tmp) {
    tmp = !require(13160) /* is */(props.state, arg2);
  }
  return tmp;
};
