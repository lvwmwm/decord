// Module ID: 6079
// Function ID: 6080
// Name: getAllKeysIn
// Dependencies: [656, 6064, 6062]

// Module 6079 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod6062 from "module_6062" /* 6062 */;
import keysIn from "keysIn" /* 6064 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod6062);
};
