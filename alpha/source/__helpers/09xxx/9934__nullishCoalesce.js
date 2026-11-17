// Module ID: 9934
// Function ID: 9935
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 9934 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
