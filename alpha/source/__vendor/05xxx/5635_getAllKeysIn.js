// Module ID: 5635
// Function ID: 5636
// Name: getAllKeysIn
// Dependencies: [656, 5620, 5618]

// Module 5635 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 656 */;
import _mod5618 from "module_5618" /* 5618 */;
import keysIn from "keysIn" /* 5620 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5618);
};
