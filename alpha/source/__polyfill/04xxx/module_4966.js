// Module ID: 4966
// Function ID: 4967
// Dependencies: [657, 4951, 4949]

// Module 4966
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4949 from "module_4949" /* 4949 */;
import keysIn from "keysIn" /* 4951 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4949);
};
