// Module ID: 6142
// Function ID: 6143
// Name: getAllKeysIn
// Dependencies: [656, 6127, 6125]

// Module 6142 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod6125 from "module_6125" /* 6125 */;
import keysIn from "keysIn" /* 6127 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod6125);
};
