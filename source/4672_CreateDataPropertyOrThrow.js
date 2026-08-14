// Module ID: 4672
// Function ID: 4673
// Name: CreateDataPropertyOrThrow
// Dependencies: [4611, 541, 4658, 4673]

// Module 4672 (CreateDataPropertyOrThrow)

export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4611) /* isObject */(arg0)) {
    if (tmp(4658)(arg1)) {
      if (!tmp(4673)(arg0, arg1, arg2)) {
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
