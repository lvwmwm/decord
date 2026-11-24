// Module ID: 5725
// Function ID: 5726
// Name: getAllKeysIn
// Dependencies: [656, 5710, 5708]

// Module 5725 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5708 from "module_5708" /* 5708 */;
import keysIn from "keysIn" /* 5710 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5708);
};
