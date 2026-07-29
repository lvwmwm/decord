// Module ID: 5893
// Function ID: 5894
// Name: arrayIncludesWith
// Dependencies: []

// Module 5893 (arrayIncludesWith)

export default function arrayIncludesWith(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let num2 = 0;
  if (0 < num) {
    while (!arg2(arg1, arg0[num2])) {
      num2 = num2 + 1;
    }
    return true;
  }
  return false;
};
