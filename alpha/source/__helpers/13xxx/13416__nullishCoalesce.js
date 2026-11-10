// Module ID: 13416
// Function ID: 13417
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13416 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
