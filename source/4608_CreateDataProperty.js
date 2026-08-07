// Module ID: 4608
// Function ID: 4609
// Name: CreateDataProperty
// Dependencies: [4546, 541, 4593, 4609]

// Module 4608 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4546) /* isObject */(arg0)) {
    if (tmp(4593)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4609)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
