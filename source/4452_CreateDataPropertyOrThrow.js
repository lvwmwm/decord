// Module ID: 4452
// Function ID: 4453
// Name: CreateDataPropertyOrThrow
// Dependencies: [4391, 541, 4438, 4453]

// Module 4452 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4391) /* isObject */(arg0)) {
    if (tmp(4438)(arg1)) {
      if (!tmp(4453)(arg0, arg1, arg2)) {
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
