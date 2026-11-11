// Module ID: 9855
// Function ID: 9856
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 9855 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
