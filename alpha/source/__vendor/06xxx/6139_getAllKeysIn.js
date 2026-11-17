// Module ID: 6139
// Function ID: 6140
// Name: getAllKeysIn
// Dependencies: [656, 6124, 6122]

// Module 6139 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod6122 from "module_6122" /* 6122 */;
import keysIn from "keysIn" /* 6124 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod6122);
};
