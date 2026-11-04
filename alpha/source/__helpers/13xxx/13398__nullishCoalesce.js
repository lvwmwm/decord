// Module ID: 13398
// Function ID: 13399
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13398 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
