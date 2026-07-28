// Module ID: 6471
// Function ID: 57898
// Name: _nullishCoalesce
// Dependencies: []

// Module 6471 (_nullishCoalesce)
arg5._nullishCoalesce = function _nullishCoalesce(arg0, arg1) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = arg1();
  }
  return tmp;
};
