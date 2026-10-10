// Module ID: 5183
// Function ID: 5184
// Name: getAllKeysIn
// Dependencies: [668, 5168, 5166]

// Module 5183 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5166 from "module_5166" /* 5166 */;
import keysIn from "keysIn" /* 5168 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5166);
};
