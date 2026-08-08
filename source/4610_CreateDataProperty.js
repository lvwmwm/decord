// Module ID: 4610
// Function ID: 4611
// Name: CreateDataProperty
// Dependencies: [4548, 541, 4595, 4611]

// Module 4610 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4548) /* isObject */(arg0)) {
    if (tmp(4595)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4611)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
