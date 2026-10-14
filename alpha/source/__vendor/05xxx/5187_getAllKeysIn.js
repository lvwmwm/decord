// Module ID: 5187
// Function ID: 5188
// Name: getAllKeysIn
// Dependencies: [668, 5172, 5170]

// Module 5187 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5170 from "module_5170" /* 5170 */;
import keysIn from "keysIn" /* 5172 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5170);
};
