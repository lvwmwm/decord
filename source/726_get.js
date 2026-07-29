// Module ID: 726
// Function ID: 727
// Name: get
// Dependencies: [727]

// Module 726 (get)

export default function get(arg0, arg1, arg2) {
  let tmp;
  if (null != arg0) {
    tmp = require(727) /* baseGet */(arg0, arg1);
  }
  if (undefined === tmp) {
    tmp = arg2;
  }
  return tmp;
};
