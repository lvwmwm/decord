// Module ID: 4592
// Function ID: 4593
// Name: getAllKeysIn
// Dependencies: [793, 4577, 4575]

// Module 4592 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 793 */;
import _mod4575 from "module_4575" /* 4575 */;
import keysIn from "keysIn" /* 4577 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4575);
};
