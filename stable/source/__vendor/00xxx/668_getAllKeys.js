// Module ID: 668
// Function ID: 669
// Name: getAllKeys
// Dependencies: [669, 531, 671]

// Module 668 (getAllKeys)
import _mod531 from "module_531" /* 531 */;
import baseGetAllKeys from "baseGetAllKeys" /* 669 */;
import stubArray from "stubArray" /* 671 */;


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = _mod531;
  return tmp(arg0, tmp2, stubArray);
};
