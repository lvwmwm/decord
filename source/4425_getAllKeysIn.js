// Module ID: 4425
// Function ID: 4426
// Name: getAllKeysIn
// Dependencies: [793, 4410, 4408]

// Module 4425 (getAllKeysIn)

export default function getAllKeysIn(arg0) {
  const tmp = require(793) /* baseGetAllKeys */;
  return tmp(arg0, require(4410) /* keysIn */, require(4408));
};
