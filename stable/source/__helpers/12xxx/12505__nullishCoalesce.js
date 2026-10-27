// Module ID: 12505
// Function ID: 12506
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 12505 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
