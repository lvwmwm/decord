// Module ID: 5991
// Function ID: 5992
// Name: getAllKeysIn
// Dependencies: [656, 5976, 5974]

// Module 5991 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5974 from "module_5974" /* 5974 */;
import keysIn from "keysIn" /* 5976 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5974);
};
