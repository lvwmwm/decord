// Module ID: 9921
// Function ID: 9922
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 9921 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
