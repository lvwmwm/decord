// Module ID: 13433
// Function ID: 13434
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13433 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
