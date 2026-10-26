// Module ID: 5785
// Function ID: 5786
// Name: getAllKeysIn
// Dependencies: [668, 5770, 5768]

// Module 5785 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5768 from "module_5768" /* 5768 */;
import keysIn from "keysIn" /* 5770 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5768);
};
