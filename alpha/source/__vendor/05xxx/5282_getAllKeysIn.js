// Module ID: 5282
// Function ID: 5283
// Name: getAllKeysIn
// Dependencies: [668, 5267, 5265]

// Module 5282 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5265 from "module_5265" /* 5265 */;
import keysIn from "keysIn" /* 5267 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5265);
};
