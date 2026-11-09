// Module ID: 5964
// Function ID: 5965
// Name: getAllKeysIn
// Dependencies: [656, 5949, 5947]

// Module 5964 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5947 from "module_5947" /* 5947 */;
import keysIn from "keysIn" /* 5949 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5947);
};
