// Module ID: 4991
// Function ID: 4992
// Name: getAllKeysIn
// Dependencies: [668, 4976, 4974]

// Module 4991 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod4974 from "module_4974" /* 4974 */;
import keysIn from "keysIn" /* 4976 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod4974);
};
