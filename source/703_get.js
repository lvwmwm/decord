// Module ID: 703
// Function ID: 8710
// Name: get
// Dependencies: [704]

// Module 703 (get)

export default function get(arg0, arg1, arg2) {
  let tmp;
  if (null != arg0) {
    tmp = require(704) /* baseGet */(arg0, arg1);
  }
  if (undefined === tmp) {
    tmp = arg2;
  }
  return tmp;
};
