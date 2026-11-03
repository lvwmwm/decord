// Module ID: 13314
// Function ID: 13315
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13314 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
