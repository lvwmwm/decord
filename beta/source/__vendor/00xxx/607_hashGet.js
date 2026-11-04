// Module ID: 607
// Function ID: 608
// Name: hashGet
// Dependencies: [599]

// Module 607 (hashGet)
import getNative from "getNative" /* 599 */;


export default function hashGet(arg0) {
  const __data__ = this.__data__;
  if (getNative) {
    let tmp3;
    if ("__lodash_hash_undefined__" !== __data__[arg0]) {
      tmp3 = tmp2;
    }
    return tmp3;
  } else {
    let tmp;
    if (hasOwnProperty.call(__data__, arg0)) {
      tmp = __data__[arg0];
    }
    return tmp;
  }
};
