// Module ID: 573
// Function ID: 6947
// Name: isObject
// Dependencies: []

// Module 573 (isObject)

export default function isObject(arg0) {
  let tmp2 = null != arg0;
  if (tmp2) {
    let tmp3 = "object" === tmp;
    if (!tmp3) {
      tmp3 = "function" === tmp;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};
