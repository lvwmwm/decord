// Module ID: 13147
// Function ID: 101271
// Name: shallowCompare
// Dependencies: [13148]

// Module 13147 (shallowCompare)

export default function shallowCompare(props) {
  let tmp = !require(13148) /* is */(props.props, arg1);
  if (!tmp) {
    tmp = !require(13148) /* is */(props.state, arg2);
  }
  return tmp;
};
