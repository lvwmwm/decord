// Module ID: 4467
// Function ID: 4468
// Name: assignValue
// Dependencies: [752, 804]

// Module 4467 (assignValue)

export default function assignValue(arg0, arg1, arg2) {
  const call = hasOwnProperty.call;
  let tmp2 = typeof call === "unknown" ? hasOwnProperty(arg1) : call(arg0, arg1);
  if (tmp2) {
    tmp2 = require(752) /* eq */(arg0[arg1], arg2);
  }
  if (tmp2) {
    tmp2 = undefined !== arg2 || arg1 in arg0;
    const tmp5 = undefined !== arg2 || arg1 in arg0;
  }
  if (!tmp2) {
    require(804) /* baseAssignValue */(arg0, arg1, arg2);
  }
};
