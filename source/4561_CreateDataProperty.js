// Module ID: 4561
// Function ID: 4562
// Name: CreateDataProperty
// Dependencies: [4499, 541, 4546, 4562]

// Module 4561 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4499) /* isObject */(arg0)) {
    if (tmp(4546)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4562)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
