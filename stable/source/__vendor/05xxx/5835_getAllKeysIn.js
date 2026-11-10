// Module ID: 5835
// Function ID: 5836
// Name: getAllKeysIn
// Dependencies: [656, 5820, 5818]

// Module 5835 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5818 from "module_5818" /* 5818 */;
import keysIn from "keysIn" /* 5820 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5818);
};
