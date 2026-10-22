// Module ID: 5771
// Function ID: 5772
// Name: getAllKeysIn
// Dependencies: [668, 5756, 5754]

// Module 5771 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5754 from "module_5754" /* 5754 */;
import keysIn from "keysIn" /* 5756 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5754);
};
