// Module ID: 5823
// Function ID: 5824
// Name: getAllKeysIn
// Dependencies: [668, 5808, 5806]

// Module 5823 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5806 from "module_5806" /* 5806 */;
import keysIn from "keysIn" /* 5808 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5806);
};
