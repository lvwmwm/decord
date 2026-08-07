// Module ID: 4596
// Function ID: 4597
// Name: DefinePropertyOrThrow
// Dependencies: [4546, 541, 4593, 4597, 4598, 4600, 4601, 4602, 4603]

// Module 4596 (DefinePropertyOrThrow)

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (require(4546) /* isObject */(arg0)) {
    if (tmp(4593)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4597)(arg2)) {
        tmp13 = tmp(4598)(arg2);
      }
      if (tmp(4597)(tmp13)) {
        let tmpResult = tmp(4600);
        tmpResult = tmp(4601);
        return tmpResult(tmpResult, tmp(4602), tmp(4603), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(541)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
