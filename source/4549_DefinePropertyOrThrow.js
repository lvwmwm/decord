// Module ID: 4549
// Function ID: 4550
// Name: DefinePropertyOrThrow
// Dependencies: [4499, 541, 4546, 4550, 4551, 4553, 4554, 4555, 4556]

// Module 4549 (DefinePropertyOrThrow)

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (require(4499) /* isObject */(arg0)) {
    if (tmp(4546)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4550)(arg2)) {
        tmp13 = tmp(4551)(arg2);
      }
      if (tmp(4550)(tmp13)) {
        let tmpResult = tmp(4553);
        tmpResult = tmp(4554);
        return tmpResult(tmpResult, tmp(4555), tmp(4556), arg0, arg1, tmp14);
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
