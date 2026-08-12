// Module ID: 4649
// Function ID: 4650
// Name: CreateDataPropertyOrThrow
// Dependencies: [4588, 541, 4635, 4650]

// Module 4649 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4588) /* isObject */(arg0)) {
    if (tmp(4635)(arg1)) {
      if (!tmp(4650)(arg0, arg1, arg2)) {
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
