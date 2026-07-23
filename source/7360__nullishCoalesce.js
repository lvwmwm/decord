// Module ID: 7360
// Function ID: 59327
// Name: _nullishCoalesce
// Dependencies: []

// Module 7360 (_nullishCoalesce)
arg5._nullishCoalesce = function _nullishCoalesce(arg0, arg1) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = arg1();
  }
  return tmp;
};
