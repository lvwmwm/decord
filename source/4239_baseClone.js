// Module ID: 4239
// Function ID: 37319
// Name: baseClone
// Dependencies: [573, 591, 4240, 4241, 747, 605, 4242, 4243, 4246, 4250, 4254, 4255, 4256, 752, 4262, 4264, 4266, 769, 4251, 601, 592, 4248]

// Module 4239 (baseClone)
let obj = {};
obj["[object Uint32Array]"] = true;
obj["[object Uint16Array]"] = true;
obj["[object Uint8ClampedArray]"] = true;
obj["[object Uint8Array]"] = true;
obj["[object Symbol]"] = true;
obj["[object String]"] = true;
obj["[object Set]"] = true;
obj["[object RegExp]"] = true;
obj["[object Object]"] = true;
obj["[object Number]"] = true;
obj["[object Map]"] = true;
obj["[object Int32Array]"] = true;
obj["[object Int16Array]"] = true;
obj["[object Int8Array]"] = true;
obj["[object Float64Array]"] = true;
obj["[object Float32Array]"] = true;
obj["[object Date]"] = true;
obj["[object Boolean]"] = true;
obj["[object DataView]"] = true;
obj["[object ArrayBuffer]"] = true;
obj["[object Array]"] = true;
obj["[object Arguments]"] = true;
obj["[object WeakMap]"] = false;
obj["[object Function]"] = false;
obj["[object Error]"] = false;
function baseClone(arr) {
  const _require = arr;
  const dependencyMap = arg1;
  let obj = arg2;
  let closure_3 = arg5;
  if (!arg2) {
    {
      if (_require(573)(arr)) {
        const tmp12 = _require(591)(arr);
        if (tmp12) {
          const tmp32 = tmp13(4240)(arr);
          obj = tmp32;
          let tmp22 = tmp32;
          if (!tmp) {
            return _require(4241)(arr, tmp32);
          }
        } else {
          const tmp15 = tmp13(747)(arr);
          let tmp16 = tmp15 == "[object Function]";
          if (!tmp16) {
            tmp16 = "[object GeneratorFunction]" == tmp15;
          }
          if (_require(605)(arr)) {
            return _require(4242)(arr, tmp);
          } else {
            if (tmp15 != "[object Object]") {
              if (tmp15 != "[object Arguments]") {
                if (obj[tmp15]) {
                  tmp22 = _require(4256)(arr, tmp15, tmp);
                  obj = tmp22;
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
                obj = _require(4243)(arr);
              }
              tmp22 = obj;
              if (!tmp) {
                if (tmp2) {
                  let tmp25Result = tmp25(4246);
                  let tmp25ResultResult = tmp25Result(arr, tmp25(4250)(obj, arr));
                } else {
                  tmp25Result = tmp25(4254);
                  tmp25ResultResult = tmp25Result(arr, tmp25(4255)(obj, arr));
                }
                return tmp25ResultResult;
              }
            }
            obj = {};
          }
        }
        let obj3 = arg5;
        if (!arg5) {
          let tmp37 = _require(752);
          const prototype = tmp37.prototype;
          tmp37 = new tmp37();
          closure_3 = tmp37;
          obj3 = tmp37;
        }
        const value = obj3.get(arr);
        if (value) {
          return value;
        } else {
          let result = obj3.set(arr, tmp22);
          if (_require(4262)(arr)) {
            const item = arr.forEach((arg0) => {
              obj.add(callback(arg0, closure_1, closure_2, arg0, closure_0, callback));
            });
          } else if (_require(4264)(arr)) {
            const item1 = arr.forEach((arg0, arg1) => {
              const result = obj.set(arg1, callback(arg0, closure_1, closure_2, arg1, closure_0, callback));
            });
          }
          if (tmp3) {
            if (tmp2) {
              let tmp54 = 4266;
            } else {
              tmp54 = 769;
            }
          } else {
            if (tmp2) {
              let tmp53 = 4251;
            } else {
              tmp53 = 601;
            }
            let tmp56;
            if (!tmp12) {
              tmp56 = tmp51(tmp53)(arr);
            }
            let closure_5 = tmp56;
            if (!tmp56) {
              tmp56 = arr;
            }
            _require(592)(tmp56, (arg0, arg1) => {
              let tmp = arg1;
              let tmp2 = arg0;
              if (closure_5) {
                tmp2 = arr[arg0];
                tmp = arg0;
              }
              arr(table[21])(obj, tmp, callback(tmp2, table, closure_2, tmp, arr, callback));
            });
            return tmp22;
          }
        }
      } else {
        return arr;
      }
    }
  } else {
    if (arg4) {
      let tmp4 = arg2(arr, arg3, arg4, arg5);
    } else {
      tmp4 = arg2(arr);
    }
    obj = tmp4;
  }
}

export default baseClone;
