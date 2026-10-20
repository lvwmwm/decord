// Module ID: 12547
// Function ID: 12548
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 12547 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
