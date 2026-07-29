// Module ID: 4484
// Function ID: 4485
// Name: DefinePropertyOrThrow
// Dependencies: [4434, 541, 4481, 4485, 4486, 4488, 4489, 4490, 4491]

// Module 4484 (DefinePropertyOrThrow)

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (require(4434) /* isObject */(arg0)) {
    if (tmp(4481)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4485)(arg2)) {
        tmp13 = tmp(4486)(arg2);
      }
      if (tmp(4485)(tmp13)) {
        let tmpResult = tmp(4488);
        tmpResult = tmp(4489);
        return tmpResult(tmpResult, tmp(4490), tmp(4491), arg0, arg1, tmp14);
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
