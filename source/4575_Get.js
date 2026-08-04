// Module ID: 4575
// Function ID: 4576
// Name: Get
// Dependencies: [4529, 541, 4576, 575]

// Module 4575 (Get)

export default function Get(arg0, arg1) {
  if (require(4529) /* isObject */(arg0)) {
    if (tmp(4576)(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = tmp(541);
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + tmp(575)(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
