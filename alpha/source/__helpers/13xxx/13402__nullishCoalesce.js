// Module ID: 13402
// Function ID: 13403
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13402 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
