// Module ID: 4936
// Function ID: 4937
// Name: getAllKeysIn
// Dependencies: [657, 4921, 4919]

// Module 4936 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4919 from "module_4919" /* 4919 */;
import keysIn from "keysIn" /* 4921 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod4919);
};
