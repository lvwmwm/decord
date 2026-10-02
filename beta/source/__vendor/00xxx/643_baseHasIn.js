// Module ID: 643
// Function ID: 644
// Name: baseHasIn
// Dependencies: []

// Module 643 (baseHasIn)

export default function baseHasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    const _Object = Object;
    tmp = arg1 in Object(arg0);
  }
  return tmp;
};
