// Module ID: 5883
// Function ID: 5884
// Name: getAllKeysIn
// Dependencies: [656, 5868, 5866]

// Module 5883 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5866 from "module_5866" /* 5866 */;
import keysIn from "keysIn" /* 5868 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5866);
};
