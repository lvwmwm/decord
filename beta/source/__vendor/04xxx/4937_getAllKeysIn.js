// Module ID: 4937
// Function ID: 4938
// Name: getAllKeysIn
// Dependencies: [669, 4922, 4920]

// Module 4937 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 669 */;
import _mod4920 from "module_4920" /* 4920 */;
import keysIn from "keysIn" /* 4922 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod4920);
};
