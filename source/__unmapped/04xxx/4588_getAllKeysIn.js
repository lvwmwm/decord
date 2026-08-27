// Module ID: 4588
// Function ID: 4589
// Name: getAllKeysIn
// Dependencies: [793, 4573, 4571]

// Module 4588 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 793 */;
import _mod4571 from "module_4571" /* 4571 */;
import keysIn from "keysIn" /* 4573 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4571);
};
