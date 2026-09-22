// Module ID: 4857
// Function ID: 4858
// Dependencies: [657, 4842, 4840]

// Module 4857
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4840 from "module_4840" /* 4840 */;
import keysIn from "keysIn" /* 4842 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4840);
};
