// Module ID: 4660
// Function ID: 4661
// Name: getAllKeysIn
// Dependencies: [657, 4645, 4643]

// Module 4660 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 657 */;
import _mod4643 from "module_4643" /* 4643 */;
import keysIn from "keysIn" /* 4645 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4643);
};
