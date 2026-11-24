// Module ID: 5788
// Function ID: 5789
// Name: getAllKeysIn
// Dependencies: [656, 5773, 5771]

// Module 5788 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5771 from "module_5771" /* 5771 */;
import keysIn from "keysIn" /* 5773 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5771);
};
