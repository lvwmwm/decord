// Module ID: 5969
// Function ID: 5970
// Name: getAllKeysIn
// Dependencies: [656, 5954, 5952]

// Module 5969 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5952 from "module_5952" /* 5952 */;
import keysIn from "keysIn" /* 5954 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5952);
};
