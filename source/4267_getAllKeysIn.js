// Module ID: 4267
// Function ID: 37388
// Name: getAllKeysIn
// Dependencies: [770, 4252, 4250]

// Module 4267 (getAllKeysIn)

export default function getAllKeysIn(arg0) {
  const tmp = require(770) /* baseGetAllKeys */;
  return tmp(arg0, require(4252) /* keysIn */, require(4250));
};
