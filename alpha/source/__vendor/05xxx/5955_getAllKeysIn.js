// Module ID: 5955
// Function ID: 5956
// Name: getAllKeysIn
// Dependencies: [656, 5940, 5938]

// Module 5955 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5938 from "module_5938" /* 5938 */;
import keysIn from "keysIn" /* 5940 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5938);
};
