// Module ID: 325
// Function ID: 4896
// Name: useMergeRefs
// Dependencies: [31, 326]
// Exports: default

// Module 325 (useMergeRefs)
import "result";

require("result").useCallback;

export default function useMergeRefs() {
  const length = arguments.length;
  let array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  const items = [];
  return array(326)(useCallback((arg0) => {
    const array = arg0;
    let closure_1 = array.map((arg0) => {
      let closure_0 = arg0;
      if (null != arg0) {
        if ("function" === typeof arg0) {
          let fn = arg0(closure_0);
          if ("function" !== typeof fn) {
            fn = () => {
              callback(null);
            };
          }
          return fn;
        } else {
          arg0.current = closure_0;
          return () => {
            closure_0.current = null;
          };
        }
      }
    });
    return () => {
      const iter = dependencyMap[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null != nextResult) {
          let tmp3 = nextResult;
          let tmp2Result = tmp2();
        }
        continue;
      }
    };
  }, items.concat(array)));
};
