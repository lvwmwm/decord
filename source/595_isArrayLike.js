// Module ID: 595
// Function ID: 7019
// Name: isArrayLike
// Dependencies: [596, 597]

// Module 595 (isArrayLike)

export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = require(596) /* isLength */(arg0.length);
  }
  if (tmp) {
    tmp = !require(597) /* isFunction */(arg0);
  }
  return tmp;
};
