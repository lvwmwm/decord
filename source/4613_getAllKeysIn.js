// Module ID: 4613
// Function ID: 4614
// Name: getAllKeysIn
// Dependencies: [793, 4598, 4596]

// Module 4613 (getAllKeysIn)

export default function getAllKeysIn(arg0) {
  const tmp = require(793) /* baseGetAllKeys */;
  return tmp(arg0, require(4598) /* keysIn */, require(4596));
};
