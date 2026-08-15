// Module ID: 4453
// Function ID: 4454
// Name: CreateDataProperty
// Dependencies: [4391, 541, 4438, 4454]

// Module 4453 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4391) /* isObject */(arg0)) {
    if (tmp(4438)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4454)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
