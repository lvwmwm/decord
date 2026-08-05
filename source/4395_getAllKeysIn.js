// Module ID: 4395
// Function ID: 4396
// Name: getAllKeysIn
// Dependencies: [793, 4380, 4378]

// Module 4395 (getAllKeysIn)

export default function getAllKeysIn(arg0) {
  const tmp = require(793) /* baseGetAllKeys */;
  return tmp(arg0, require(4380) /* keysIn */, require(4378));
};
