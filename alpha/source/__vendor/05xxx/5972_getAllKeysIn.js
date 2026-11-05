// Module ID: 5972
// Function ID: 5973
// Name: getAllKeysIn
// Dependencies: [656, 5957, 5955]

// Module 5972 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5955 from "module_5955" /* 5955 */;
import keysIn from "keysIn" /* 5957 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5955);
};
