// Module ID: 4425
// Function ID: 38958
// Name: ToPrimitive
// Dependencies: [4426]

// Module 4425 (ToPrimitive)

export default function ToPrimitive(arg0) {
  if (arguments.length > 1) {
    let tmp3 = require(4426) /* ToPrimitive */(arg0, arguments[1]);
  } else {
    tmp3 = require(4426) /* ToPrimitive */(arg0);
  }
  return tmp3;
};
