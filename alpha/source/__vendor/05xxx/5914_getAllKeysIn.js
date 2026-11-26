// Module ID: 5914
// Function ID: 5915
// Name: getAllKeysIn
// Dependencies: [656, 5899, 5897]

// Module 5914 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5897 from "module_5897" /* 5897 */;
import keysIn from "keysIn" /* 5899 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5897);
};
