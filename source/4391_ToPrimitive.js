// Module ID: 4391
// Function ID: 38844
// Name: ToPrimitive
// Dependencies: [4392]

// Module 4391 (ToPrimitive)

export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = require(4392) /* ToPrimitive */(arg0, arguments[1]);
  } else {
    tmp3 = require(4392) /* ToPrimitive */(arg0);
  }
  return tmp3;
};
