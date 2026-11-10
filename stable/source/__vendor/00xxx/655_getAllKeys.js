// Module ID: 655
// Function ID: 656
// Name: getAllKeys
// Dependencies: [656, 531, 658]

// Module 655 (getAllKeys)
import _mod531 from "module_531" /* 531 */;
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import stubArray from "stubArray" /* 658 */;


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = _mod531;
  return tmp(arg0, tmp2, stubArray);
};
