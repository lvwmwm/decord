// Module ID: 5244
// Function ID: 5245
// Name: getAllKeysIn
// Dependencies: [668, 5229, 5227]

// Module 5244 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5227 from "module_5227" /* 5227 */;
import keysIn from "keysIn" /* 5229 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5227);
};
