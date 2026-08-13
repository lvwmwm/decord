// Module ID: 4601
// Function ID: 4602
// Name: ToNumber
// Dependencies: [540, 4602, 4603, 541, 4608]

// Module 4601 (ToNumber)
let closure_2 = require("getEvalledConstructor")("%Number%");

export default function ToNumber(arg0) {
  let tmp3 = arg0;
  if (!require(4602) /* isPrimitive */(arg0)) {
    tmp3 = tmp(4603)(arg0, closure_2);
  }
  if (typeof tmp3 === "symbol") {
    const tmp12 = new tmp(541)("Cannot convert a Symbol value to a number");
    throw tmp12;
  } else if (typeof tmp3 === "bigint") {
    const tmp8 = new tmp(541)("Conversion from 'BigInt' to 'number' is not allowed.");
    throw tmp8;
  } else {
    if (typeof tmp3 === "string") {
      let tmp5 = tmp(4608)(tmp3);
    } else {
      tmp5 = +tmp3;
    }
    return tmp5;
  }
};
