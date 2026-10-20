// Module ID: 12530
// Function ID: 12531
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 12530 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
