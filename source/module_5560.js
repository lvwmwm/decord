// Module ID: 5560
// Function ID: 47236
// Dependencies: []

// Module 5560
const obj = {};
const keys = Object.keys(require(dependencyMap[0]));
const item = keys.forEach((arg0) => {
  const require = arg0;
  obj[arg0] = {};
  let obj = { value: require(dependencyMap[0])[arg0].channels };
  Object.defineProperty(obj[arg0], "channels", obj);
  obj = { value: require(dependencyMap[0])[arg0].labels };
  Object.defineProperty(obj[arg0], "labels", obj);
  const tmp3 = require(dependencyMap[1])(arg0);
  const dependencyMap = tmp3;
  const keys = Object.keys(tmp3);
  const item = keys.forEach((arg0) => {
    closure_2[closure_0][arg0] = function wrapRounded(conversion) {
      function wrappedFn() {
        const length = arguments.length;
        let array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        const first = array[0];
        if (null == first) {
          return first;
        } else {
          if (first.length > 1) {
            array = first;
          }
          const arr2 = arg0(array);
          if ("object" === typeof arr2) {
            for (let num3 = 0; num3 < length2; num3 = num3 + 1) {
              let _Math = Math;
              arr2[num3] = Math.round(arr2[num3]);
            }
            const length2 = arr2.length;
          }
          return arr2;
        }
      }
      if ("conversion" in conversion) {
        wrappedFn.conversion = conversion.conversion;
      }
      return wrappedFn;
    }(tmp3[arg0]);
    closure_2[closure_0][arg0].raw = function wrapRaw(conversion) {
      function wrappedFn() {
        const length = arguments.length;
        let array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        const first = array[0];
        let tmp2 = first;
        if (null != first) {
          if (first.length > 1) {
            array = first;
          }
          tmp2 = arg0(array);
        }
        return tmp2;
      }
      if ("conversion" in conversion) {
        wrappedFn.conversion = conversion.conversion;
      }
      return wrappedFn;
    }(tmp3[arg0]);
  });
});

export default obj;
