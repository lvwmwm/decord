// Module ID: 13405
// Function ID: 13406
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13405 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
