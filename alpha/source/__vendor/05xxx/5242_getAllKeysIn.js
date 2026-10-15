// Module ID: 5242
// Function ID: 5243
// Name: getAllKeysIn
// Dependencies: [668, 5227, 5225]

// Module 5242 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5225 from "module_5225" /* 5225 */;
import keysIn from "keysIn" /* 5227 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5225);
};
