// Module ID: 1552
// Function ID: 1553
// Name: isRecordEqual
// Dependencies: []

// Module 1552 (isRecordEqual)
arg5.isRecordEqual = function isRecordEqual(value, arg1) {
  let closure_0 = value;
  let closure_1 = arg1;
  if (value === arg1) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(value);
    const _Object2 = Object;
    return keys.length === Object.keys(arg1).length && keys.every((arg0) => Object.is(value[arg0], table[arg0]));
  }
};
