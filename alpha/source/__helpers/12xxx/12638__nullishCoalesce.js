// Module ID: 12638
// Function ID: 12639
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 12638 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
