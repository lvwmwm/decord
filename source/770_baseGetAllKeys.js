// Module ID: 770
// Function ID: 8841
// Name: baseGetAllKeys
// Dependencies: []

// Module 770 (baseGetAllKeys)

export default function baseGetAllKeys(arg0, arg1, arg2) {
  const tmp = arg1(arg0);
  let tmp5Result = tmp;
  if (!require(dependencyMap[0])(arg0)) {
    tmp5Result = require(dependencyMap[1])(tmp, arg2(arg0));
    const tmp5 = require(dependencyMap[1]);
  }
  return tmp5Result;
};
