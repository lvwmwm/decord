// Module ID: 4301
// Function ID: 37500
// Name: getAllKeysIn
// Dependencies: [770, 4286, 4284]

// Module 4301 (getAllKeysIn)

export default function getAllKeysIn(arg0) {
  const tmp = require(770) /* baseGetAllKeys */;
  return tmp(arg0, require(4286) /* keysIn */, require(4284));
};
