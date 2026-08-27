// Module ID: 792
// Function ID: 793
// Name: getAllKeys
// Dependencies: [793, 616, 795]

// Module 792 (getAllKeys)
import keys from "keys" /* 616 */;
import baseGetAllKeys from "baseGetAllKeys" /* 793 */;
import getOwnPropertySymbols from "getOwnPropertySymbols" /* 795 */;


export default function getAllKeys(arg0) {
  const tmp = baseGetAllKeys;
  return tmp(arg0, keys, getOwnPropertySymbols);
};
