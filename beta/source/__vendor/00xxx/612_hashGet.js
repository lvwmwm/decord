// Module ID: 612
// Function ID: 613
// Name: hashGet
// Dependencies: [604]

// Module 612 (hashGet)
import _mod604 from "module_604" /* 604 */;


export default function hashGet(arg0) {
  const __data__ = this.__data__;
  if (_mod604) {
    let tmp4;
    if ("__lodash_hash_undefined__" !== __data__[arg0]) {
      tmp4 = tmp3;
    }
    return tmp4;
  } else {
    const call = hasOwnProperty.call;
    let tmp2;
    if (typeof call === "unknown" ? hasOwnProperty(arg0) : call(__data__, arg0)) {
      tmp2 = __data__[arg0];
    }
    return tmp2;
  }
};
