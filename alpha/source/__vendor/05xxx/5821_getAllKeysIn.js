// Module ID: 5821
// Function ID: 5822
// Name: getAllKeysIn
// Dependencies: [668, 5806, 5804]

// Module 5821 (getAllKeysIn)
import baseGetAllKeys from "baseGetAllKeys" /* 668 */;
import _mod5804 from "module_5804" /* 5804 */;
import keysIn from "keysIn" /* 5806 */;


export default function getAllKeysIn(arg0) {
  const tmp = baseGetAllKeys;
  const tmp2 = keysIn;
  return tmp(arg0, tmp2, _mod5804);
};
