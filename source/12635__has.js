// Module ID: 12635
// Function ID: 97760
// Name: _has
// Dependencies: []

// Module 12635 (_has)
const exports = setTyped;
function _has(arr, arg1) {
  return hasOwnProperty.call(arr, arg1);
}
let tmp = "undefined" !== typeof Uint8Array;
if (tmp) {
  let _Uint16Array = Uint16Array;
  tmp = "undefined" !== typeof Uint16Array;
}
if (tmp) {
  let _Int32Array = Int32Array;
  tmp = "undefined" !== typeof Int32Array;
}
setTyped.assign = (arg0) => {
  let arr;
  const callResult = slice.call(arguments, 1);
  if (callResult.length) {
    while (true) {
      arr = callResult.shift();
      let tmp4 = tmp2;
      if (arr) {
        if ("object" !== typeof arr) {
          break;
        } else {
          let tmp5 = arr;
          let tmp6 = tmp2;
          tmp4 = tmp2;
          let keys = Object.keys();
          if (keys !== undefined) {
            tmp4 = tmp6;
            let tmp8 = keys[tmp];
            while (tmp8 !== undefined) {
              let tmp13 = tmp8;
              let tmp14 = _has;
              tmp6 = tmp8;
              if (!_has(arr, tmp8)) {
                continue;
              } else {
                arg0[tmp8] = arr[tmp8];
                tmp6 = tmp8;
                continue;
              }
              continue;
            }
          }
        }
      }
      tmp2 = tmp4;
    }
    const _TypeError = TypeError;
    const typeError = new TypeError(arr + "must be non-object");
    throw typeError;
  }
  return arg0;
};
setTyped.shrinkBuf = (subarray) => {
  if (subarray.length === arg1) {
    return subarray;
  } else if (subarray.subarray) {
    let subarrayResult = subarray.subarray(0, arg1);
  } else {
    subarray.length = arg1;
    subarrayResult = subarray;
  }
};
let closure_1 = {
  arraySet(subarray, subarray2) {
    if (subarray2.subarray) {
      if (subarray.subarray) {
        const result = subarray.set(subarray2.subarray(arg2, arg2 + arg3), arg4);
      }
    }
    for (let num = 0; num < arg3; num = num + 1) {
      subarray[arg4 + num] = subarray2[arg2 + num];
    }
  },
  flattenChunks(arg0) {
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < arg0.length) {
      do {
        num2 = num2 + arg0[num].length;
        num = num + 1;
        num3 = num2;
      } while (num < length);
    }
    const uint8Array = new Uint8Array(num3);
    let num4 = 0;
    let num5 = 0;
    if (0 < arg0.length) {
      do {
        let arr = arg0[num4];
        let result = uint8Array.set(arr, num5);
        num5 = num5 + arr.length;
        num4 = num4 + 1;
      } while (num4 < length2);
    }
    return uint8Array;
  }
};
let closure_2 = {
  arraySet(arg0, arg1, arg2, arg3, arg4) {
    for (let num = 0; num < arg3; num = num + 1) {
      arg0[arg4 + num] = arg1[arg2 + num];
    }
  },
  flattenChunks(arg0) {
    const concat = [].concat;
    return concat.apply([], arg0);
  }
};
setTyped.setTyped = (arg0) => {
  let obj = exports;
  if (arg0) {
    const _Uint8Array = Uint8Array;
    obj.Buf8 = Uint8Array;
    const _Uint16Array = Uint16Array;
    obj.Buf16 = Uint16Array;
    const _Int32Array = Int32Array;
    obj.Buf32 = Int32Array;
    obj = obj.assign(obj, closure_1);
  } else {
    const _Array = Array;
    obj.Buf8 = Array;
    const _Array2 = Array;
    obj.Buf16 = Array;
    const _Array3 = Array;
    obj.Buf32 = Array;
    obj = obj.assign(obj, closure_2);
  }
};
setTyped.setTyped(tmp);
