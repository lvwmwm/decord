// Module ID: 4428
// Function ID: 38871
// Name: SameValue
// Dependencies: [0]

// Module 4428 (SameValue)

export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp6 = 0 !== arg0;
    if (!tmp6) {
      tmp6 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp6;
  } else {
    tmp3 = require(dependencyMap[0])(arg0);
    if (tmp3) {
      tmp3 = require(dependencyMap[0])(arg1);
    }
  }
  return tmp3;
};
