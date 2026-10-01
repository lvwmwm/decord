// Module ID: 609
// Function ID: 610
// Name: hashHas
// Dependencies: [600]

// Module 609 (hashHas)
import getNative from "getNative" /* 600 */;


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
