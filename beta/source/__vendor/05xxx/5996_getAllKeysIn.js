// Module ID: 5996
// Function ID: 5997
// Name: getAllKeysIn
// Dependencies: [656, 5981, 5979]

// Module 5996 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5979 from "module_5979" /* 5979 */;
import keysIn from "keysIn" /* 5981 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5979);
};
