// Module ID: 4890
// Function ID: 4891
// Dependencies: [661, 4875, 4873]

// Module 4890
import baseGetAllKeys from "baseGetAllKeys" /* 661 */;
import _mod4873 from "module_4873" /* 4873 */;
import keysIn from "keysIn" /* 4875 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4873);
};
