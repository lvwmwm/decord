// Module ID: 4594
// Function ID: 4595
// Name: Get
// Dependencies: [4548, 541, 4595, 575]

// Module 4594 (Get)

export default function Get(arg0, arg1) {
  if (require(4548) /* isObject */(arg0)) {
    if (tmp(4595)(arg1)) {
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
