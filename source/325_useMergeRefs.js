// Module ID: 325
// Function ID: 4896
// Name: useMergeRefs
// Dependencies: []
// Exports: default

// Module 325 (useMergeRefs)
importAll(dependencyMap[0]);
arg1(dependencyMap[0]).useCallback;

export default function useMergeRefs() {
  const length = arguments.length;
  const array = new Array(length);
  const importDefault = array;
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  const items = [];
  return importDefault(dependencyMap[1])(useCallback((arg0) => {
    const array = arg0;
    let closure_1 = array.map((arg0) => {
      if (null != arg0) {
        if ("function" === typeof arg0) {
          let fn = arg0(arg0);
          if ("function" !== typeof fn) {
            fn = () => {
              arg0(null);
            };
          }
          return fn;
        } else {
          arg0.current = arg0;
          return () => {
            arg0.current = null;
          };
        }
      }
    });
    return () => {
      const iter = closure_1[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (null != nextResult) {
          let tmp3 = nextResult;
          let tmp2Result = tmp2();
        }
        // continue
      }
    };
  }, items.concat(array)));
};
