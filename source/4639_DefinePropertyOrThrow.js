// Module ID: 4639
// Function ID: 4640
// Name: DefinePropertyOrThrow
// Dependencies: [4589, 541, 4636, 4640, 4641, 4643, 4644, 4645, 4646]

// Module 4639 (DefinePropertyOrThrow)

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (require(4589) /* isObject */(arg0)) {
    if (tmp(4636)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4640)(arg2)) {
        tmp13 = tmp(4641)(arg2);
      }
      if (tmp(4640)(tmp13)) {
        let tmpResult = tmp(4643);
        tmpResult = tmp(4644);
        return tmpResult(tmpResult, tmp(4645), tmp(4646), arg0, arg1, tmp14);
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
