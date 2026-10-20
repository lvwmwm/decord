// Module ID: 5746
// Function ID: 5747
// Name: getAllKeysIn
// Dependencies: [668, 5731, 5729]

// Module 5746 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5729 from "module_5729" /* 5729 */;
import keysIn from "keysIn" /* 5731 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5729);
};
