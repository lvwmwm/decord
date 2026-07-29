// Module ID: 4330
// Function ID: 4331
// Name: getAllKeysIn
// Dependencies: [793, 4315, 4313]

// Module 4330 (getAllKeysIn)

export default function getAllKeysIn(arg0) {
  const tmp = require(793) /* baseGetAllKeys */;
  return tmp(arg0, require(4315) /* keysIn */, require(4313));
};
