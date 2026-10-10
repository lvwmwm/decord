// Module ID: 14258
// Function ID: 14259
// Name: isEmpty
// Dependencies: [518, 514, 536, 538, 533, 645, 545, 544]

// Module 14258 (isEmpty)
import isArrayLike from "isArrayLike" /* 518 */;
import baseKeys from "baseKeys" /* 544 */;
import isPrototype from "isPrototype" /* 545 */;
import _mod645 from "module_645" /* 645 */;


export default function isEmpty(size) {
  if (null == size) {
    return true;
  } else {
    if (isArrayLike(size)) {
      return !size.length;
    }
    const tmp = _mod645(size);
    if ("[object Map]" != tmp) {
      if ("[object Set]" != tmp) {
        if (isPrototype(size)) {
          return !baseKeys(size).length;
        } else {
          for (const key10021 in size) {
            if (!hasOwnProperty.call(size, key10021)) {
              continue;
            } else {
              let flag = false;
              return false;
            }
          }
          return true;
        }
      }
    }
    return !size.size;
  }
};
