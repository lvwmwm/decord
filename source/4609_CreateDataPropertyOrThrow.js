// Module ID: 4609
// Function ID: 4610
// Name: CreateDataPropertyOrThrow
// Dependencies: [4548, 541, 4595, 4610]

// Module 4609 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4548) /* isObject */(arg0)) {
    if (tmp(4595)(arg1)) {
      if (!tmp(4610)(arg0, arg1, arg2)) {
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
