// Module ID: 13209
// Function ID: 13210
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13209 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
