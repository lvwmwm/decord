// Module ID: 4936
// Function ID: 4937
// Dependencies: [657, 4921, 4919]

// Module 4936
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4919 from "module_4919" /* 4919 */;
import keysIn from "keysIn" /* 4921 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4919);
};
