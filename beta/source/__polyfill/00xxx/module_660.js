// Module ID: 660
// Function ID: 661
// Dependencies: [661, 531, 663]

// Module 660
import _mod531 from "module_531" /* 531 */;
import baseGetAllKeys from "baseGetAllKeys" /* 661 */;
import stubArray from "stubArray" /* 663 */;


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, _mod531, stubArray);
};
