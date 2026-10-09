// Module ID: 11291
// Function ID: 11292
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 11291 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
