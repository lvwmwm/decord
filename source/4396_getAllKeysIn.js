// Module ID: 4396
// Function ID: 4397
// Name: getAllKeysIn
// Dependencies: [793, 4381, 4379]

// Module 4396 (getAllKeysIn)

export default function getAllKeysIn(arg0) {
  const tmp = require(793) /* baseGetAllKeys */;
  return tmp(arg0, require(4381) /* keysIn */, require(4379));
};
