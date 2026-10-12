// Module ID: 11332
// Function ID: 11333
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 11332 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
