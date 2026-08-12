// Module ID: 4634
// Function ID: 4635
// Name: Get
// Dependencies: [4588, 541, 4635, 575]

// Module 4634 (Get)

export default function Get(arg0, arg1) {
  if (require(4588) /* isObject */(arg0)) {
    if (tmp(4635)(arg1)) {
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
