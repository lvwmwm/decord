// Module ID: 5830
// Function ID: 5831
// Name: getAllKeysIn
// Dependencies: [656, 5815, 5813]

// Module 5830 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5813 from "module_5813" /* 5813 */;
import keysIn from "keysIn" /* 5815 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5813);
};
