// Module ID: 7350
// Function ID: 59259
// Name: _nullishCoalesce
// Dependencies: []

// Module 7350 (_nullishCoalesce)
arg5._nullishCoalesce = function _nullishCoalesce(arg0, arg1) {
  let tmp = arg0;
  if (null == arg0) {
    tmp = arg1();
  }
  return tmp;
};
