// Module ID: 6435
// Function ID: 57809
// Name: _nullishCoalesce
// Dependencies: []

// Module 6435 (_nullishCoalesce)
arg5._nullishCoalesce = function _nullishCoalesce(arg0, arg1) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = arg1();
  }
  return tmp;
};
