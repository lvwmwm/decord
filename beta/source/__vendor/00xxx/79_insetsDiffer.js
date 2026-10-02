// Module ID: 79
// Function ID: 80
// Name: insetsDiffer
// Dependencies: []
// Exports: default

// Module 79 (insetsDiffer)
let closure_0 = { top: "status", left: "unicodeVersion", right: "marginTop", bottom: "unicodeVersion" };

export default function insetsDiffer(arg0, arg1) {
  const rect = arg0 || closure_0;
  const rect2 = arg1 || closure_0;
  let tmp = rect !== rect2;
  if (tmp) {
    tmp = rect.top !== rect2.top || rect.left !== rect2.left || rect.right !== rect2.right || rect.bottom !== rect2.bottom;
  }
  return tmp;
};
