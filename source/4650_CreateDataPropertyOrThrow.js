// Module ID: 4650
// Function ID: 4651
// Name: CreateDataPropertyOrThrow
// Dependencies: [4589, 541, 4636, 4651]

// Module 4650 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4589) /* isObject */(arg0)) {
    if (tmp(4636)(arg1)) {
      if (!tmp(4651)(arg0, arg1, arg2)) {
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
