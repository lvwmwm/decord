// Module ID: 13434
// Function ID: 13435
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13434 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
