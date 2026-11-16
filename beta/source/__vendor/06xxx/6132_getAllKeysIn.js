// Module ID: 6132
// Function ID: 6133
// Name: getAllKeysIn
// Dependencies: [656, 6117, 6115]

// Module 6132 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod6115 from "module_6115" /* 6115 */;
import keysIn from "keysIn" /* 6117 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod6115);
};
