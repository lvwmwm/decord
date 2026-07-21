// Module ID: 1513
// Function ID: 17400
// Name: isRecordEqual
// Dependencies: []

// Module 1513 (isRecordEqual)
arg5.default = function isRecordEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(arg0);
    const _Object2 = Object;
    return keys.length === Object.keys(arg1).length && keys.every((arg0) => arg0[arg0] === arg1[arg0]);
  }
};
