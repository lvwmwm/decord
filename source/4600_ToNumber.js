// Module ID: 4600
// Function ID: 4601
// Name: ToNumber
// Dependencies: [540, 4601, 4602, 541, 4607]

// Module 4600 (ToNumber)
let closure_2 = require("getEvalledConstructor")("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!require(4601) /* isPrimitive */(arg0)) {
    tmp3 = tmp(4602)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(541)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(541)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4607)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
