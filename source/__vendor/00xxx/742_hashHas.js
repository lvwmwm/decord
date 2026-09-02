// Module ID: 742
// Function ID: 743
// Name: hashHas
// Dependencies: [733]

// Module 742 (hashHas)
import getNative from "getNative" /* 733 */;


export default function hashHas(arg0) {
  const __data__ = this.__data__;
  if (getNative) {
    let tmp2 = undefined !== __data__[arg0];
  } else {
    const call = hasOwnProperty.call;
    tmp2 = typeof call === "unknown" ? hasOwnProperty(arg0) : call(__data__, arg0);
    const tmp = hasOwnProperty;
  }
  return tmp2;
};
