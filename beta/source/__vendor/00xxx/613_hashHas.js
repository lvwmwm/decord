// Module ID: 613
// Function ID: 614
// Name: hashHas
// Dependencies: [604]

// Module 613 (hashHas)
import _mod604 from "module_604" /* 604 */;


export default function hashHas(arg0) {
  const __data__ = this.__data__;
  if (_mod604) {
    let tmp2 = undefined !== __data__[arg0];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(arg0) : call(__data__, arg0);
  }
  return tmp2;
};
