// Module ID: 4231
// Function ID: 37223
// Name: baseClone
// Dependencies: []

// Module 4231 (baseClone)
const obj = {};
obj.[object Uint32Array] = true;
obj.[object Uint16Array] = true;
obj.[object Uint8ClampedArray] = true;
obj.[object Uint8Array] = true;
obj.[object Symbol] = true;
obj.[object String] = true;
obj.[object Set] = true;
obj.[object RegExp] = true;
obj.[object Object] = true;
obj.[object Number] = true;
obj.[object Map] = true;
obj.[object Int32Array] = true;
obj.[object Int16Array] = true;
obj.[object Int8Array] = true;
obj.[object Float64Array] = true;
obj.[object Float32Array] = true;
obj.[object Date] = true;
obj.[object Boolean] = true;
obj.[object DataView] = true;
obj.[object ArrayBuffer] = true;
obj.[object Array] = true;
obj.[object Arguments] = true;
obj.[object WeakMap] = false;
obj.[object Function] = false;
obj.[object Error] = false;
function baseClone(arr) {
  const require = arr;
  const dependencyMap = arg1;
  let obj = arg2;
  let baseClone = arg5;
  if (!arg2) {
    {
      if (require(dependencyMap[0])(arr)) {
        const tmp12 = require(dependencyMap[1])(arr);
        if (tmp12) {
          const tmp32 = tmp13(tmp14[2])(arr);
          let tmp4 = tmp32;
          let tmp22 = tmp32;
          if (!tmp) {
            return require(dependencyMap[3])(arr, tmp32);
          }
        } else {
          const tmp15 = tmp13(tmp14[4])(arr);
          let tmp16 = tmp15 == "[object Function]";
          if (!tmp16) {
            tmp16 = "[object GeneratorFunction]" == tmp15;
          }
          if (require(dependencyMap[5])(arr)) {
            return require(dependencyMap[6])(arr, tmp);
          } else {
            if (tmp15 != "[object Object]") {
              if (tmp15 != "[object Arguments]") {
                if (obj[tmp15]) {
                  tmp22 = require(dependencyMap[12])(arr, tmp15, tmp);
                  tmp4 = tmp22;
                } else {
                  obj = arr;
                  if (!arg4) {
                    obj = {};
                  }
                  return obj;
                }
              }
            }
            if (!tmp2) {
              if (!tmp16) {
                obj = require(dependencyMap[7])(arr);
              }
              tmp4 = obj;
              tmp22 = obj;
              if (!tmp) {
                if (tmp2) {
                  let tmp25Result = tmp25(tmp26[8]);
                  let tmp25ResultResult = tmp25Result(arr, tmp25(tmp26[9])(obj, arr));
                } else {
                  tmp25Result = tmp25(tmp26[10]);
                  tmp25ResultResult = tmp25Result(arr, tmp25(tmp26[11])(obj, arr));
                }
                return tmp25ResultResult;
              }
            }
            obj = {};
          }
        }
        let obj3 = arg5;
        if (!arg5) {
          let tmp37 = require(dependencyMap[13]);
          const prototype = tmp37.prototype;
          tmp37 = new tmp37();
          baseClone = tmp37;
          obj3 = tmp37;
        }
        const value = obj3.get(arr);
        if (value) {
          return value;
        } else {
          const result = obj3.set(arr, tmp22);
          if (require(dependencyMap[14])(arr)) {
            const item = arr.forEach((arg0) => {
              tmp4.add(tmp37(arg0, arg1, arg2, arg0, arg0, tmp37));
            });
          } else if (require(dependencyMap[15])(arr)) {
            const item1 = arr.forEach((arg0, arg1) => {
              const result = tmp4.set(arg1, tmp37(arg0, arg1, arg2, arg1, arg0, tmp37));
            });
          }
          if (tmp3) {
            if (tmp2) {
              let tmp54 = tmp52[16];
            } else {
              tmp54 = tmp52[17];
            }
          } else {
            if (tmp2) {
              let tmp53 = tmp52[18];
            } else {
              tmp53 = tmp52[19];
            }
            let tmp56;
            if (!tmp12) {
              tmp56 = tmp51(tmp53)(arr);
            }
            if (!tmp56) {
              tmp56 = arr;
            }
            require(dependencyMap[20])(tmp56, (arg0, arg1) => {
              let tmp = arg1;
              let tmp2 = arg0;
              if (tmp56) {
                tmp2 = arg0[arg0];
                tmp = arg0;
              }
              const tmp4 = arg0(arg1[21]);
              tmp4(tmp4, tmp, tmp37(tmp2, arg1, arg2, tmp, arg0, tmp37));
            });
            return tmp22;
          }
        }
      } else {
        return arr;
      }
    }
  } else if (arg4) {
    tmp4 = arg2(arr, arg3, arg4, arg5);
  } else {
    tmp4 = arg2(arr);
  }
}

export default baseClone;
