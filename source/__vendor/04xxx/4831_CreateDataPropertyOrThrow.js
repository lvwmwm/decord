// Module ID: 4831
// Function ID: 4832
// Name: CreateDataPropertyOrThrow
// Dependencies: [4770, 538, 4817, 4832]

// Module 4831 (CreateDataPropertyOrThrow)
import isObject from "isObject" /* 4770 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4817)(arg1)) {
      if (!tmp(4832)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(538)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(538)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
