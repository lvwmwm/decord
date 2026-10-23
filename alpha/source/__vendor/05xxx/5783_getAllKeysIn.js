// Module ID: 5783
// Function ID: 5784
// Name: getAllKeysIn
// Dependencies: [668, 5768, 5766]

// Module 5783 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5766 from "module_5766" /* 5766 */;
import keysIn from "keysIn" /* 5768 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5766);
};
