// Module ID: 4673
// Function ID: 4674
// Name: CreateDataProperty
// Dependencies: [4611, 541, 4658, 4674]

// Module 4673 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4611) /* isObject */(arg0)) {
    if (tmp(4658)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4674)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
