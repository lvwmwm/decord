// Module ID: 631
// Function ID: 632
// Name: baseHasIn
// Dependencies: []

// Module 631 (baseHasIn)

export default function baseHasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const _Object = Object;
    tmp = arg1 in Object(arg0);
  }
  return tmp;
};
