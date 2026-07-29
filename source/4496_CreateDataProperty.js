// Module ID: 4496
// Function ID: 4497
// Name: CreateDataProperty
// Dependencies: [4434, 541, 4481, 4497]

// Module 4496 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4434) /* isObject */(arg0)) {
    if (tmp(4481)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4497)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
