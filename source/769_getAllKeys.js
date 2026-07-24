// Module ID: 769
// Function ID: 8841
// Name: getAllKeys
// Dependencies: [770, 601, 772]

// Module 769 (getAllKeys)

export default function getAllKeys(arg0) {
  const tmp = require(770) /* baseGetAllKeys */;
  return tmp(arg0, require(601) /* keys */, require(772) /* getOwnPropertySymbols */);
};
