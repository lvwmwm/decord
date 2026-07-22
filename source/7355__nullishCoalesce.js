// Module ID: 7355
// Function ID: 59293
// Name: _nullishCoalesce
// Dependencies: []

// Module 7355 (_nullishCoalesce)
arg5._nullishCoalesce = function _nullishCoalesce(arg0, arg1) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = arg1();
  }
  return tmp;
};
