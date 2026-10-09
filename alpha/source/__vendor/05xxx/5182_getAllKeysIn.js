// Module ID: 5182
// Function ID: 5183
// Name: getAllKeysIn
// Dependencies: [668, 5167, 5165]

// Module 5182 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5165 from "module_5165" /* 5165 */;
import keysIn from "keysIn" /* 5167 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5165);
};
