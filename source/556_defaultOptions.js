// Module ID: 556
// Function ID: 6709
// Name: defaultOptions
// Dependencies: []

// Module 556 (defaultOptions)
function defaultOptions() {
  return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function stringify(arr, arg1, arg2, depthLimit) {
  let tmp = depthLimit;
  if (undefined === depthLimit) {
    tmp = defaultOptions();
  }
  decirc(arr, "", 0, [], undefined, 0, tmp);
  if (0 === arr2.length) {
    const _JSON2 = JSON;
    let json = JSON.stringify(arr, arg1, arg2);
  } else {
    const _JSON = JSON;
    json = JSON.stringify(arr, replaceGetterValues(arg1), arg2);
  }
  if (0 !== arr.length) {
    do {
      let tmp11 = arr;
      arr = arr.pop();
      let tmp12 = arr;
      if (4 === arr.length) {
        let _Object = Object;
        let tmp14 = arr;
        let definePropertyResult = Object.defineProperty(tmp12[0], tmp12[1], tmp12[3]);
      } else {
        let tmp13 = arr;
        tmp12[0][tmp12[1]] = tmp12[2];
      }
      let tmp16 = arr;
    } while (0 !== arr.length);
  }
  return json;
}
function setReplace(c0, arr, arg2, arr) {
  const ownPropertyDescriptor = Object.getOwnPropertyDescriptor(arr, arg2);
  if (undefined !== ownPropertyDescriptor.get) {
    if (ownPropertyDescriptor.configurable) {
      const _Object = Object;
      const obj = { value: c0 };
      Object.defineProperty(arr, arg2, obj);
      const items = [arr, arg2, arr, ownPropertyDescriptor];
      arr = arr.push(items);
    } else {
      const items1 = [arr, arg2, c0];
      arr = arr2.push(items1);
    }
  } else {
    arr[arg2] = c0;
    const items2 = [arr, arg2, arr];
    arr.push(items2);
  }
}
function decirc(arr, arg1, arg2, arr, arr, sum, depthLimit) {
  let length;
  let length2;
  sum = sum + 1;
  if ("object" === typeof arr) {
    if (null !== arr) {
      let num2 = 0;
      let num3 = 0;
      if (0 < arr.length) {
        while (arr[num3] !== arr) {
          num3 = num3 + 1;
        }
        setReplace(c1, arr, arg1, arr);
      }
      if (undefined !== depthLimit.depthLimit) {
        if (sum > depthLimit.depthLimit) {
          setReplace(c0, arr, arg1, arr);
        }
      }
      if (undefined !== depthLimit.edgesLimit) {
        if (arg2 + 1 > depthLimit.edgesLimit) {
          setReplace(c0, arr, arg1, arr);
        }
      }
      arr.push(arr);
      const _Array = Array;
      if (Array.isArray(arr)) {
        num2 = 0;
        if (tmp14) {
          do {
            let tmp15 = decirc;
            let tmp16 = num2;
            let tmp17 = num2;
            let tmp18 = arr;
            let tmp19 = arr;
            let tmp20 = sum;
            let tmp21 = depthLimit;
            let tmp22 = decirc(arr[num2], num2, num2, arr, arr, sum, depthLimit);
            num2 = num2 + 1;
            length2 = arr.length;
          } while (num2 < length2);
        }
        tmp14 = num2 < arr.length;
      } else {
        const _Object = Object;
        const keys = Object.keys(arr);
        let num = 0;
        if (num2 < keys.length) {
          do {
            let tmp5 = keys[num];
            let tmp6 = decirc;
            let tmp7 = tmp5;
            let tmp8 = num;
            let tmp9 = arr;
            let tmp10 = arr;
            let tmp11 = sum;
            let tmp12 = depthLimit;
            let tmp13 = decirc(arr[tmp5], tmp5, num, arr, arr, sum, depthLimit);
            num = num + 1;
            length = keys.length;
          } while (num < length);
        }
      }
      arr.pop();
    }
  }
}
function compareFunction(arg0, arg1) {
  let num = -1;
  if (arg0 >= arg1) {
    let num2 = 0;
    if (arg0 > arg1) {
      num2 = 1;
    }
    num = num2;
  }
  return num;
}
function deterministicStringify(arr, arg1, arg2, depthLimit) {
  let tmp = depthLimit;
  if (undefined === depthLimit) {
    tmp = defaultOptions();
  }
  const tmp3 = deterministicDecirc(arr, "", 0, [], undefined, 0, tmp);
  let tmp4 = tmp3;
  if (!tmp3) {
    tmp4 = arr;
  }
  if (0 === arr2.length) {
    const _JSON2 = JSON;
    let json = JSON.stringify(tmp4, arg1, arg2);
  } else {
    const _JSON = JSON;
    json = JSON.stringify(tmp5, replaceGetterValues(arg1), arg2);
  }
  if (0 !== arr.length) {
    do {
      let tmp13 = arr;
      arr = arr.pop();
      let tmp14 = arr;
      if (4 === arr.length) {
        let _Object = Object;
        let tmp16 = arr;
        let definePropertyResult = Object.defineProperty(tmp14[0], tmp14[1], tmp14[3]);
      } else {
        let tmp15 = arr;
        tmp14[0][tmp14[1]] = tmp14[2];
      }
      let tmp18 = arr;
    } while (0 !== arr.length);
  }
  return json;
}
function deterministicDecirc(arr, arg1, arg2, arr, arr, sum, depthLimit) {
  let length;
  let length2;
  let sum2;
  let sum3;
  sum = sum + 1;
  if ("object" === typeof arr) {
    if (null !== arr) {
      let num4 = 0;
      if (0 < arr.length) {
        while (arr[num4] !== arr) {
          let tmp71 = num4;
          let sum1 = num4 + 1;
          num4 = sum1;
          let tmp73 = arr;
        }
        setReplace(c1, arr, arg1, arr);
      }
      if ("function" !== typeof arr.toJSON) {
        if (undefined !== depthLimit.depthLimit) {
          if (sum > depthLimit.depthLimit) {
            setReplace(c0, arr, arg1, arr);
          }
        }
        if (undefined !== depthLimit.edgesLimit) {
          if (arg2 + 1 > depthLimit.edgesLimit) {
            setReplace(c0, arr, arg1, arr);
          }
        }
        arr = arr.push(arr);
        const _Array = Array;
        if (Array.isArray(arr)) {
          let num2 = 0;
          if (0 < arr.length) {
            do {
              let tmp38 = deterministicDecirc;
              let tmp39 = arr;
              let tmp40 = num2;
              let tmp41 = arr;
              let tmp42 = sum;
              let tmp43 = depthLimit;
              let tmp44 = num2;
              let tmp45 = num2;
              let tmp46 = arr;
              let tmp47 = deterministicDecirc(arr[num2], num2, num2, arr, arr, sum, depthLimit);
              sum2 = num2 + 1;
              num2 = sum2;
              length2 = arr.length;
            } while (sum2 < length2);
          }
          let obj = arr;
          arr = arr.pop();
        } else {
          obj = {};
          const _Object = Object;
          const keys = Object.keys(arr);
          const sorted = keys.sort(compareFunction);
          let num = 0;
          if (0 < sorted.length) {
            do {
              let tmp16 = sorted;
              let tmp17 = num;
              let tmp18 = arr3[num];
              let tmp19 = deterministicDecirc;
              let tmp20 = arr;
              let tmp21 = arr;
              let tmp22 = sum;
              let tmp23 = depthLimit;
              let tmp24 = tmp18;
              let tmp25 = num;
              let tmp26 = arr;
              let tmp27 = deterministicDecirc(arr[tmp18], tmp18, num, arr, arr, sum, depthLimit);
              let tmp28 = obj;
              obj[tmp18] = arr[tmp18];
              sum3 = num + 1;
              num = sum3;
              length = arr3.length;
            } while (sum3 < length);
          }
          if (undefined !== arr) {
            const items = [arr, arg1, arr];
            arr.push(items);
            arr[arg1] = obj;
          }
        }
        return obj;
      }
    }
  }
}
function replaceGetterValues(arg0) {
  let fn = arg0;
  fn = arg0;
  if (undefined === arg0) {
    fn = (arg0, arg1) => arg1;
  }
  return function(arg0, arg1) {
    let tmp4;
    let tmp = arg1;
    if (outer1_3.length > 0) {
      let num2 = 0;
      tmp = arg1;
      if (0 < outer1_3.length) {
        while (true) {
          let tmp3 = outer1_3;
          tmp4 = outer1_3[num2];
          let tmp5 = num2;
          if (tmp4[1] === arg0) {
            if (tmp4[0] === arg1) {
              break;
            }
          }
          num2 = num2 + 1;
          let tmp6 = outer1_3;
          tmp = arg1;
        }
        tmp = tmp4[2];
        outer1_3.splice(num2, 1);
      }
    }
    return fn.call(this, arg0, tmp);
  };
}
stringify.default = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
let c0 = "[...]";
let c1 = "[Circular]";
let closure_2 = [];
let closure_3 = [];

export default stringify;
