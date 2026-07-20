// Module ID: 184
// Function ID: 2638
// Name: parseErrorStack
// Dependencies: []

// Module 184 (parseErrorStack)
arg5.default = function parseErrorStack(defaultResult1) {
  let iter = defaultResult1;
  if (null == defaultResult1) {
    return [];
  } else {
    const _Array = Array;
    if (Array.isArray(iter)) {
      return iter;
    } else if (defaultResult1.HermesInternal) {
      let arr = arg1(arg6[1]);
      const items = [];
      const entries = arr.default(iter).entries;
      iter = entries[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp20 = nextResult;
        if ("FRAME" === nextResult.type) {
          let tmp21 = nextResult;
          let _location = tmp20.location;
          let tmp22 = _location;
          let functionName = tmp20.functionName;
          let tmp23 = "NATIVE" !== _location.type;
          let tmp9 = tmp23;
          if (tmp23) {
            let tmp8 = _location;
            tmp9 = "INTERNAL_BYTECODE" !== tmp22.type;
          }
          if (tmp9) {
            let tmp10 = items;
            arr = {};
            let tmp11 = functionName;
            arr.methodName = functionName;
            let tmp12 = _location;
            ({ sourceUrl: obj2.file, line1Based: obj2.lineNumber } = tmp22);
            if ("SOURCE" === tmp22.type) {
              let tmp14 = _location;
              let virtualOffset0Based = tmp22.column1Based - 1;
            } else {
              let tmp13 = _location;
              virtualOffset0Based = tmp22.virtualOffset0Based;
            }
            arr.column = virtualOffset0Based;
            arr = items.push(arr);
          }
        }
        // continue
      }
      let mapped = items;
    } else {
      const parsed = obj3.parse(iter);
      mapped = parsed.map((column) => {
        const obj = {};
        let diff = null;
        if (null != column.column) {
          diff = column.column - 1;
        }
        obj.column = diff;
        return Object.assign({}, column, obj);
      });
    }
    const obj3 = arg1(arg6[0]);
  }
};
