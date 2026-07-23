// Module ID: 1494
// Function ID: 17226
// Name: fromEntries
// Dependencies: [57]
// Exports: default

// Module 1494 (fromEntries)
import _slicedToArray from "_slicedToArray";


export default function fromEntries(arr) {
  return arr.reduce((arg0, arg1) => {
    const tmp = outer1_0(arg1, 2);
    const first = tmp[0];
    if (arg0.hasOwnProperty(first)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("A value for key '" + first + "' already exists in the object.");
      throw error;
    } else {
      arg0[first] = tmp[1];
      return arg0;
    }
  }, {});
};
