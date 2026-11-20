// Module ID: 5606
// Function ID: 5607
// Name: getAllKeysIn
// Dependencies: [656, 5591, 5589]

// Module 5606 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5589 from "module_5589" /* 5589 */;
import keysIn from "keysIn" /* 5591 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5589);
};
