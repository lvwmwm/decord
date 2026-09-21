// Module ID: 4858
// Function ID: 4859
// Dependencies: [661, 4843, 4841]

// Module 4858
import baseGetAllKeys from "baseGetAllKeys" /* 661 */;
import _mod4841 from "module_4841" /* 4841 */;
import keysIn from "keysIn" /* 4843 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4841);
};
