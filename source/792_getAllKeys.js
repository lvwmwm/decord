// Module ID: 792
// Function ID: 793
// Name: getAllKeys
// Dependencies: [793, 616, 795]

// Module 792 (getAllKeys)

export default function getAllKeys(arg0) {
  const tmp = require(793) /* baseGetAllKeys */;
  return tmp(arg0, require(616) /* keys */, require(795) /* getOwnPropertySymbols */);
};
