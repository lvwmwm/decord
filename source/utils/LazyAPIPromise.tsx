// Module ID: 8359
// Function ID: 66586
// Name: useLazyAPIPromise
// Dependencies: [5, 57, 31, 4029, 2]
// Exports: default

// Module 8359 (useLazyAPIPromise)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("result").fileFinishedImporting("utils/LazyAPIPromise.tsx");

export default function useLazyAPIPromise(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function _execFn() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp = callback(_execFn.useState(false), 2);
  let asyncGeneratorStep = tmp[1];
  const tmp2 = callback(_execFn.useState(null), 2);
  callback = tmp2[1];
  const items = [
    function execFn() {
      return _execFn(...arguments);
    },
    { loading: tmp[0], error: tmp2[0] }
  ];
  return items;
};
