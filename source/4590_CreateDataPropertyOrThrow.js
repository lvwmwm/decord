// Module ID: 4590
// Function ID: 4591
// Name: CreateDataPropertyOrThrow
// Dependencies: [4529, 541, 4576, 4591]

// Module 4590 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4529) /* isObject */(arg0)) {
    if (tmp(4576)(arg1)) {
      if (!tmp(4591)(arg0, arg1, arg2)) {
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
