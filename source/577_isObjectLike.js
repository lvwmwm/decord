// Module ID: 577
// Function ID: 6962
// Name: isObjectLike
// Dependencies: []

// Module 577 (isObjectLike)

export default function isObjectLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = "object" === typeof arg0;
  }
  return tmp;
};
