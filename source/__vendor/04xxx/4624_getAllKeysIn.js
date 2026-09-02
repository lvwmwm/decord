// Module ID: 4624
// Function ID: 4625
// Name: getAllKeysIn
// Dependencies: [790, 4609, 4607]

// Module 4624 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 790 */;
import _mod4607 from "module_4607" /* 4607 */;
import keysIn from "keysIn" /* 4609 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4607);
};
