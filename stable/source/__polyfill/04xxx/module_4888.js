// Module ID: 4888
// Function ID: 4889
// Dependencies: [657, 4873, 4871]

// Module 4888
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4871 from "module_4871" /* 4871 */;
import keysIn from "keysIn" /* 4873 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4871);
};
