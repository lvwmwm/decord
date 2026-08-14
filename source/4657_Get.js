// Module ID: 4657
// Function ID: 4658
// Name: Get
// Dependencies: [4611, 541, 4658, 575]

// Module 4657 (Get)

export default function Get(arg0, arg1) {
  if (require(4611) /* isObject */(arg0)) {
    if (tmp(4658)(arg1)) {
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
