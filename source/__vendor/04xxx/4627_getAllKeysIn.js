// Module ID: 4627
// Function ID: 4628
// Name: getAllKeysIn
// Dependencies: [790, 4612, 4610]

// Module 4627 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 790 */;
import _mod4610 from "module_4610" /* 4610 */;
import keysIn from "keysIn" /* 4612 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keysIn, _mod4610);
};
