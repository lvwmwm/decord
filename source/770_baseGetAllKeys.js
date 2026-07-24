// Module ID: 770
// Function ID: 8843
// Name: baseGetAllKeys
// Dependencies: [591, 771]

// Module 770 (baseGetAllKeys)

export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp5Result = tmp;
  if (!require(591)(arg0)) {
    tmp5Result = require(771) /* arrayPush */(tmp, arg2(arg0));
    const tmp5 = require(771) /* arrayPush */;
  }
  return tmp5Result;
};
