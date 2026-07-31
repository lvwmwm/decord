// Module ID: 4499
// Function ID: 4500
// Name: CreateDataPropertyOrThrow
// Dependencies: [4438, 541, 4485, 4500]

// Module 4499 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4438) /* isObject */(arg0)) {
    if (tmp(4485)(arg1)) {
      if (!tmp(4500)(arg0, arg1, arg2)) {
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
