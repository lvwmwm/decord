// Module ID: 4946
// Function ID: 4947
// Name: CreateDataPropertyOrThrow
// Dependencies: [4885, 1281, 4932, 4947]

// Module 4946 (CreateDataPropertyOrThrow)
import _mod4885 from "module_4885" /* 4885 */;


export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4885(arg0)) {
    if (tmp(4932)(arg1)) {
      if (!tmp(4947)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(1281)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(1281)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1281)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
