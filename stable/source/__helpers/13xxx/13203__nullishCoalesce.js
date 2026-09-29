// Module ID: 13203
// Function ID: 13204
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13203 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
