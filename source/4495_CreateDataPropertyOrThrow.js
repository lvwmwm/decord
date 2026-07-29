// Module ID: 4495
// Function ID: 4496
// Name: CreateDataPropertyOrThrow
// Dependencies: [4434, 541, 4481, 4496]

// Module 4495 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4434) /* isObject */(arg0)) {
    if (tmp(4481)(arg1)) {
      if (!tmp(4496)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(541)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
