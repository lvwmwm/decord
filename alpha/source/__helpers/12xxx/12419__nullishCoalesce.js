// Module ID: 12419
// Function ID: 12420
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 12419 (_nullishCoalesce)

export const _nullishCoalesce = function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
};
