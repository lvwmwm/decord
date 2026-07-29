// Module ID: 767
// Function ID: 768
// Name: baseHasIn
// Dependencies: []

// Module 767 (baseHasIn)

export default function baseHasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const _Object = Object;
    tmp = arg1 in Object(arg0);
  }
  return tmp;
};
