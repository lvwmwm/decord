// Module ID: 4997
// Function ID: 4998
// Name: getAllKeysIn
// Dependencies: [668, 4982, 4980]

// Module 4997 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod4980 from "module_4980" /* 4980 */;
import keysIn from "keysIn" /* 4982 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod4980);
};
