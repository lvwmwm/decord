// Module ID: 13379
// Function ID: 13380
// Name: _nullishCoalesce
// Dependencies: []
// Exports: _nullishCoalesce

// Module 13379 (_nullishCoalesce)

export function _nullishCoalesce(arg0, fn) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = fn();
  }
  return tmp;
}
