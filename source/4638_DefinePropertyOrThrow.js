// Module ID: 4638
// Function ID: 4639
// Name: DefinePropertyOrThrow
// Dependencies: [4588, 541, 4635, 4639, 4640, 4642, 4643, 4644, 4645]

// Module 4638 (DefinePropertyOrThrow)

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (require(4588) /* isObject */(arg0)) {
    if (tmp(4635)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4639)(arg2)) {
        tmp13 = tmp(4640)(arg2);
      }
      if (tmp(4639)(tmp13)) {
        let tmpResult = tmp(4642);
        tmpResult = tmp(4643);
        return tmpResult(tmpResult, tmp(4644), tmp(4645), arg0, arg1, tmp14);
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
