// Module ID: 13269
// Function ID: 13270
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13269 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
