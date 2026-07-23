// Module ID: 4248
// Function ID: 37341
// Name: assignValue
// Dependencies: [729, 781]

// Module 4248 (assignValue)

export default function assignValue(arg0, arg1, arg2) {
  let callResult = hasOwnProperty.call(arg0, arg1);
  if (callResult) {
    callResult = require(729) /* eq */(arg0[arg1], arg2);
  }
  if (callResult) {
    callResult = undefined !== arg2 || arg1 in arg0;
    const tmp4 = undefined !== arg2 || arg1 in arg0;
  }
  if (!callResult) {
    require(781) /* baseAssignValue */(arg0, arg1, arg2);
  }
};
