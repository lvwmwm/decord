// Module ID: 4711
// Function ID: 4712
// Name: CreateDataPropertyOrThrow
// Dependencies: [4650, 541, 4697, 4712]

// Module 4711 (CreateDataPropertyOrThrow)
import isObject from "isObject" /* 4650 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4697)(arg1)) {
      if (!tmp(4712)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(541)("unable to create data property");
        throw tmp15;
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
