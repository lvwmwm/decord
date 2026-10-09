// Module ID: 16135
// Function ID: 16136
// Name: arrayIncludesWith
// Dependencies: []

// Module 16135 (arrayIncludesWith)

export default function arrayIncludesWith(arg0, arg1, fn) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!fn(arg1, arg0[num2])) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
};
