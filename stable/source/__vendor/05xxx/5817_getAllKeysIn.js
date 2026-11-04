// Module ID: 5817
// Function ID: 5818
// Name: getAllKeysIn
// Dependencies: [668, 5802, 5800]

// Module 5817 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5800 from "module_5800" /* 5800 */;
import keysIn from "keysIn" /* 5802 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5800);
};
