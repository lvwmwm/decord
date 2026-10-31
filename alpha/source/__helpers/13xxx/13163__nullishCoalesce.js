// Module ID: 13163
// Function ID: 13164
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13163 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
