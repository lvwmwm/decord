// Module ID: 4651
// Function ID: 4652
// Name: CreateDataProperty
// Dependencies: [4589, 541, 4636, 4652]

// Module 4651 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4589) /* isObject */(arg0)) {
    if (tmp(4636)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4652)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
