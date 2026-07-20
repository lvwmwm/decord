// Module ID: 88
// Function ID: 1515
// Name: insetsDiffer
// Dependencies: []

// Module 88 (insetsDiffer)
let closure_0 = { top: undefined, left: undefined, right: undefined, bottom: undefined };
arg5.default = function insetsDiffer(arg0, arg1) {
  let rect = arg0;
  let rect2 = arg1;
  if (!arg0) {
    rect = closure_0;
  }
  if (!rect2) {
    rect2 = closure_0;
  }
  let tmp = rect !== rect2;
  if (tmp) {
    tmp = rect.top !== rect2.top || rect.left !== rect2.left || rect.right !== rect2.right || rect.bottom !== rect2.bottom;
    const tmp2 = rect.top !== rect2.top || rect.left !== rect2.left || rect.right !== rect2.right || rect.bottom !== rect2.bottom;
  }
  return tmp;
};
