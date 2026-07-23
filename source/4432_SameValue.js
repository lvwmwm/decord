// Module ID: 4432
// Function ID: 38919
// Name: SameValue
// Dependencies: [549]

// Module 4432 (SameValue)

export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp6 = 0 !== arg0;
    if (!tmp6) {
      tmp6 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp6;
  } else {
    tmp3 = require(549)(arg0);
    if (tmp3) {
      tmp3 = require(549)(arg1);
    }
  }
  return tmp3;
};
