// Module ID: 608
// Function ID: 609
// Name: hashHas
// Dependencies: [599]

// Module 608 (hashHas)
import getNative from "getNative" /* 599 */;


export default function hashHas(arg0) {
  let callResult;
  const __data__ = this.__data__;
  if (getNative) {
    callResult = undefined !== __data__[arg0];
  } else {
    callResult = hasOwnProperty.call(__data__, arg0);
  }
  return callResult;
};
