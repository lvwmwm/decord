// Module ID: 4500
// Function ID: 4501
// Name: CreateDataProperty
// Dependencies: [4438, 541, 4485, 4501]

// Module 4500 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4438) /* isObject */(arg0)) {
    if (tmp(4485)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4501)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
