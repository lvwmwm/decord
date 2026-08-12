// Module ID: 4650
// Function ID: 4651
// Name: CreateDataProperty
// Dependencies: [4588, 541, 4635, 4651]

// Module 4650 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4588) /* isObject */(arg0)) {
    if (tmp(4635)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4651)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
