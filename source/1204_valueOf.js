// Module ID: 1204
// Function ID: 13866
// Name: valueOf
// Dependencies: []

// Module 1204 (valueOf)
function valueOf(arg0) {
  if (arg0.valueOf) {
    let callResult = arg0.valueOf();
  } else {
    const _Object = Object;
    callResult = valueOf.call(arg0);
  }
  return callResult;
}
function valueEqual(arr) {
  const valueOf = arr;
  const valueEqual = arg1;
  if (arr === arg1) {
    return true;
  } else {
    if (null != arr) {
      if (null != arg1) {
        const _Array2 = Array;
        if (Array.isArray(arr)) {
          const _Array = Array;
          return Array.isArray(arg1) && arr.length === arg1.length && arr.every((arg0, arg1) => dependencyMap(arg0, dependencyMap[arg1]));
        } else {
          if ("object" !== typeof arr) {
            if ("object" !== typeof arg1) {
              return false;
            }
          }
          const tmp2 = valueOf(arr);
          const tmp3 = valueOf(arg1);
          if (tmp2 === arr) {
            if (tmp3 === arg1) {
              const _Object = Object;
              const _Object2 = Object;
              const keys = Object.keys(Object.assign({}, arr, arg1));
              let everyResult = keys.every((arg0) => dependencyMap(arr[arg0], dependencyMap[arg0]));
            }
            return everyResult;
          }
          everyResult = valueEqual(tmp2, tmp3);
        }
      }
    }
    return false;
  }
}

export default valueEqual;
