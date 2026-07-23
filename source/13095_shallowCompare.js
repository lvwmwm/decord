// Module ID: 13095
// Function ID: 100948
// Name: shallowCompare
// Dependencies: [13096]

// Module 13095 (shallowCompare)

export default function shallowCompare(props) {
  let tmp = !require(13096) /* is */(props.props, arg1);
  if (!tmp) {
    tmp = !require(13096) /* is */(props.state, arg2);
  }
  return tmp;
};
