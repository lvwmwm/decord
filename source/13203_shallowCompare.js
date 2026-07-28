// Module ID: 13203
// Function ID: 101576
// Name: shallowCompare
// Dependencies: [13204]

// Module 13203 (shallowCompare)

export default function shallowCompare(props) {
  let tmp = !require(13204) /* is */(props.props, arg1);
  if (!tmp) {
    tmp = !require(13204) /* is */(props.state, arg2);
  }
  return tmp;
};
