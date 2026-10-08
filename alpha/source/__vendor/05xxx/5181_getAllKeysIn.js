// Module ID: 5181
// Function ID: 5182
// Name: getAllKeysIn
// Dependencies: [668, 5166, 5164]

// Module 5181 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5164 from "module_5164" /* 5164 */;
import keysIn from "keysIn" /* 5166 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5164);
};
