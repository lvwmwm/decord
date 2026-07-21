// Module ID: 1790
// Function ID: 19837
// Name: useCombinedRef
// Dependencies: []
// Exports: default

// Module 1790 (useCombinedRef)
require(dependencyMap[0]).useCallback;

export default function useCombinedRef() {
  const length = arguments.length;
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arguments[num];
  }
  return array((current) => {
    const iter = array[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult) {
        let tmp3 = nextResult;
        if ("function" === typeof tmp2) {
          let tmp6 = nextResult;
          let tmp7 = current;
          let tmp2Result = tmp2(current);
        } else {
          let tmp4 = nextResult;
          let tmp5 = current;
          tmp2.current = current;
        }
      }
      // continue
    }
  }, array);
};
