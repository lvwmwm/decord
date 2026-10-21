// Module ID: 5766
// Function ID: 5767
// Name: getAllKeysIn
// Dependencies: [668, 5751, 5749]

// Module 5766 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5749 from "module_5749" /* 5749 */;
import keysIn from "keysIn" /* 5751 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5749);
};
