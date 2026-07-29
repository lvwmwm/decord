// Module ID: 6492
// Function ID: 6493
// Name: _nullishCoalesce
// Dependencies: []

// Module 6492 (_nullishCoalesce)
arg5._nullishCoalesce = function _nullishCoalesce(closure_0, closure_1) {
  let tmp = closure_0;
  if (null == closure_0) {
    tmp = closure_1();
  }
  return tmp;
};
