// Module ID: 4927
// Function ID: 4928
// Dependencies: [657, 4912, 4910]

// Module 4927
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4910 from "module_4910" /* 4910 */;
import keysIn from "keysIn" /* 4912 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4910);
};
