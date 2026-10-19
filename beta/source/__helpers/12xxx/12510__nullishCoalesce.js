// Module ID: 12510
// Function ID: 12511
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 12510 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
