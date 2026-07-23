// Module ID: 4390
// Function ID: 38831
// Name: ToPrimitive
// Dependencies: [4391]

// Module 4390 (ToPrimitive)

export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = require(4391) /* ToPrimitive */(arg0, arguments[1]);
  } else {
    tmp3 = require(4391) /* ToPrimitive */(arg0);
  }
  return tmp3;
};
