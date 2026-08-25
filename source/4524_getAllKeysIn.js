// Module ID: 4524
// Function ID: 4525
// Name: getAllKeysIn
// Dependencies: [793, 4509, 4507]

// Module 4524 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 793 */;
import _mod4507 from "module_4507" /* 4507 */;
import keysIn from "keysIn" /* 4509 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4507);
};
