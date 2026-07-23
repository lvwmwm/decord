// Module ID: 4266
// Function ID: 37375
// Name: getAllKeysIn
// Dependencies: [770, 4251, 4249]

// Module 4266 (getAllKeysIn)

export default function getAllKeysIn(arg0) {
  const tmp = require(770) /* baseGetAllKeys */;
  return tmp(arg0, require(4251) /* keysIn */, require(4249));
};
