// Module ID: 13128
// Function ID: 13129
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13128 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
