// Module ID: 642
// Function ID: 643
// Name: baseHasIn
// Dependencies: []

// Module 642 (baseHasIn)

export default function baseHasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const _Object = Object;
    tmp = arg1 in Object(arg0);
  }
  return tmp;
};
