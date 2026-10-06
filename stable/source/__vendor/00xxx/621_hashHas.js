// Module ID: 621
// Function ID: 622
// Name: hashHas
// Dependencies: [612]

// Module 621 (hashHas)
import getNative from "getNative" /* 612 */;


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
