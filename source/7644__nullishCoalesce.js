// Module ID: 7644
// Function ID: 7645
// Name: _nullishCoalesce
// Dependencies: []

// Module 7644 (_nullishCoalesce)
arg5._nullishCoalesce = function _nullishCoalesce(closure_0, closure_1) {
  let tmp = closure_0;
  if (null == closure_0) {
    tmp = closure_1();
  }
  return tmp;
};
