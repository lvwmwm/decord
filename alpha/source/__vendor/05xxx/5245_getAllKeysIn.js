// Module ID: 5245
// Function ID: 5246
// Name: getAllKeysIn
// Dependencies: [668, 5230, 5228]

// Module 5245 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5228 from "module_5228" /* 5228 */;
import keysIn from "keysIn" /* 5230 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5228);
};
