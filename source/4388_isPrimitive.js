// Module ID: 4388
// Function ID: 38803
// Name: isPrimitive
// Dependencies: []

// Module 4388 (isPrimitive)

export default function isPrimitive(arg0) {
  let tmp = null === arg0;
  if (!tmp) {
    let tmp3 = "function" !== tmp2;
    if (tmp3) {
      tmp3 = "object" !== tmp2;
    }
    tmp = tmp3;
  }
  return tmp;
};
