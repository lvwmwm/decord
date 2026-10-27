// Module ID: 5786
// Function ID: 5787
// Name: getAllKeysIn
// Dependencies: [668, 5771, 5769]

// Module 5786 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5769 from "module_5769" /* 5769 */;
import keysIn from "keysIn" /* 5771 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5769);
};
