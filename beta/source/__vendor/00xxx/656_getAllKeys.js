// Module ID: 656
// Function ID: 657
// Name: getAllKeys
// Dependencies: [657, 531, 659]

// Module 656 (getAllKeys)
import _mod531 from "module_531" /* 531 */;
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import stubArray from "stubArray" /* 659 */;


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = _mod531;
  return tmp(arg0, tmp2, stubArray);
};
