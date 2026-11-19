// Module ID: 5604
// Function ID: 5605
// Name: getAllKeysIn
// Dependencies: [656, 5589, 5587]

// Module 5604 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5587 from "module_5587" /* 5587 */;
import keysIn from "keysIn" /* 5589 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5587);
};
