// Module ID: 12644
// Function ID: 12645
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 12644 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
