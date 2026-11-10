// Module ID: 5966
// Function ID: 5967
// Name: getAllKeysIn
// Dependencies: [656, 5951, 5949]

// Module 5966 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5949 from "module_5949" /* 5949 */;
import keysIn from "keysIn" /* 5951 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5949);
};
