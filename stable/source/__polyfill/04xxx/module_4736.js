// Module ID: 4736
// Function ID: 4737
// Dependencies: [657, 4721, 4719]

// Module 4736
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4719 from "module_4719" /* 4719 */;
import keysIn from "keysIn" /* 4721 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4719);
};
