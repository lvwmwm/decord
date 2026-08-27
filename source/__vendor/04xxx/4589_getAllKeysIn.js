// Module ID: 4589
// Function ID: 4590
// Name: getAllKeysIn
// Dependencies: [793, 4574, 4572]

// Module 4589 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 793 */;
import _mod4572 from "module_4572" /* 4572 */;
import keysIn from "keysIn" /* 4574 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4572);
};
