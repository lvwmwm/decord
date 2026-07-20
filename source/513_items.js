// Module ID: 513
// Function ID: 6574
// Name: items
// Dependencies: []

// Module 513 (items)
const items = [];
let num = 0;
do {
  let str = "";
  if (num < 16) {
    str = "0";
  }
  let str2 = str + require("module_16");
  let arr = items.push(`%${str2.toUpperCase()}`);
  num = num + 1;
} while (num < 256);
function arrayToObject(arr, plainObjects) {
  if (plainObjects) {
    if (plainObjects.plainObjects) {
      let obj = Object.create(null);
    }
    for (let num = 0; num < arr.length; num = num + 1) {
      if (undefined !== arr[num]) {
        obj[num] = arr[num];
      }
    }
    return obj;
  }
  obj = {};
}
function merge(arr, arr2, plainObjects) {
  const require = arr;
  const dependencyMap = arr2;
  const hasOwnProperty = plainObjects;
  if (arr2) {
    if ("object" !== typeof arr2) {
      if ("function" !== tmp) {
        if (isArray(arr)) {
          arr.push(arr2);
        } else {
          if (arr) {
            if ("object" === typeof arr) {
              let tmp12 = plainObjects;
              if (plainObjects) {
                tmp12 = plainObjects.plainObjects || plainObjects.allowPrototypes;
                const tmp13 = plainObjects.plainObjects || plainObjects.allowPrototypes;
              }
              if (!tmp12) {
                const _Object2 = Object;
                tmp12 = !hasOwnProperty.call(Object.prototype, arr2);
              }
              if (tmp12) {
                arr[arr2] = true;
              }
            }
          }
          const items = [arr, arr2];
          return items;
        }
        return arr;
      }
    }
    if (arr) {
      if ("object" === typeof arr) {
        let tmp3 = isArray(arr);
        if (tmp3) {
          tmp3 = !isArray(arr2);
        }
        let tmp4 = arr;
        if (tmp3) {
          tmp4 = arrayToObject(arr, plainObjects);
        }
        if (isArray(arr)) {
          if (isArray(arr2)) {
            const item = arr2.forEach((arg0, arg1) => {
              if (arg2.call(arg0, arg1)) {
                if (tmp[arg1]) {
                  if ("object" === typeof tmp2) {
                    if (arg0) {
                      if ("object" === typeof arg0) {
                        arg0[arg1] = callback(tmp2, arg0, arg2);
                      }
                    }
                  }
                }
                arg0.push(arg0);
              } else {
                tmp[arg1] = arg0;
              }
            });
            let reduced = arr;
          }
          return reduced;
        }
        const _Object = Object;
        const keys = Object.keys(arr2);
        reduced = keys.reduce((arg0, arg1) => {
          if (arg2.call(arg0, arg1)) {
            arg0[arg1] = callback(arg0[arg1], tmp, arg2);
          } else {
            arg0[arg1] = tmp;
          }
          return arg0;
        }, tmp4);
      }
    }
    const items1 = [arr];
    return items1.concat(arr2);
  } else {
    return arr;
  }
}

export default {
  arrayToObject,
  assign: function assignSingleSource(arg0, arg1) {
    const require = arg1;
    const keys = Object.keys(arg1);
    return keys.reduce((arg0, arg1) => {
      arg0[arg1] = arg1[arg1];
      return arg0;
    }, arg0);
  },
  combine(arg0, arg1) {
    const items = [];
    return items.concat(arg0, arg1);
  },
  compact(o) {
    let obj = { o };
    const items = [{ obj, prop: "o" }];
    const items1 = [];
    for (let num = 0; num < items.length; num = num + 1) {
      let tmp = items[num];
      let tmp2 = tmp.obj[tmp.prop];
      let _Object = Object;
      let keys = Object.keys(tmp2);
      let num2 = 0;
      if (0 < keys.length) {
        do {
          let tmp3 = keys[num2];
          let tmp4 = tmp2[tmp3];
          let tmp5 = "object" === typeof tmp4 && null !== tmp4 && -1 === items1.indexOf(tmp4);
          if (tmp5) {
            obj = { obj: tmp2, prop: tmp3 };
            let arr = items.push(obj);
            arr = items1.push(tmp4);
          }
          num2 = num2 + 1;
          let tmp8 = tmp3;
          let tmp9 = tmp4;
        } while (num2 < keys.length);
      }
    }
    while (items.length > 1) {
      let arr1 = items.pop();
      let arr4 = arr1.obj[arr1.prop];
      let tmp11 = isArray;
      if (isArray(arr4)) {
        let items2 = [];
        let num3 = 0;
        let num4 = 0;
        if (0 < arr4.length) {
          do {
            if (undefined !== arr4[num3]) {
              let arr2 = items2.push(arr4[num3]);
            }
            num3 = num3 + 1;
            num4 = num3;
          } while (num3 < arr4.length);
        }
        arr1.obj[arr1.prop] = items2;
        let tmp13 = num4;
        let tmp14 = items2;
      }
    }
    return o;
  },
  decode(str) {
    str = str.replace(/\+/g, " ");
    if ("iso-8859-1" === arg2) {
      const _unescape = unescape;
      return str.replace(/%[0-9a-f]{2}/gi, unescape);
    } else {
      const _decodeURIComponent = decodeURIComponent;
      return decodeURIComponent(str);
    }
  },
  encode(arg0, arg1, arg2, arg3, arg4) {
    if (0 === arg0.length) {
      return arg0;
    } else {
      if ("symbol" === typeof arg0) {
        const _Symbol = Symbol;
        let callResult = toString.call(arg0);
      } else {
        callResult = arg0;
        if ("string" !== tmp15) {
          const _String = String;
          callResult = String(arg0);
        }
      }
      if ("iso-8859-1" === arg2) {
        const _escape = escape;
        return escape(callResult).replace(/%u[0-9a-f]{4}/gi, (arr) => "%26%23" + parseInt(arr.slice(2), 16) + "%3B");
      } else {
        let str3 = "";
        let num2 = 0;
        let str4 = "";
        if (0 < callResult.length) {
          do {
            let substr = callResult;
            if (callResult.length >= 1024) {
              substr = callResult.slice(num2, num2 + 1024);
            }
            let items = [];
            let num = 0;
            if (0 < substr.length) {
              while (true) {
                let charCodeAtResult = substr.charCodeAt(num);
                let tmp5 = num;
                if (45 !== charCodeAtResult) {
                  if (46 !== charCodeAtResult) {
                    if (95 !== charCodeAtResult) {
                      if (126 !== charCodeAtResult) {
                        if (charCodeAtResult < 48) {
                          if (charCodeAtResult < 65) {
                            if (charCodeAtResult < 97) {
                              let tmp6 = closure_0;
                              let tmp7 = closure_1;
                              if (arg4 !== closure_0(closure_1[0]).RFC1738) {
                                if (charCodeAtResult < 128) {
                                  let tmp12 = closure_4;
                                  items[items.length] = closure_4[charCodeAtResult];
                                  let sum = num;
                                  let sum1 = charCodeAtResult;
                                } else if (charCodeAtResult < 2048) {
                                  let tmp11 = closure_4;
                                  items[items.length] = closure_4[192 | charCodeAtResult >> 6] + closure_4[128 | 63 & charCodeAtResult];
                                  sum = num;
                                  sum1 = charCodeAtResult;
                                } else {
                                  if (charCodeAtResult >= 55296) {
                                    if (charCodeAtResult < 57344) {
                                      sum = num + 1;
                                      let tmp16 = 1023 & charCodeAtResult;
                                      sum1 = 65536 + (tmp16 << 10 | 1023 & substr.charCodeAt(sum));
                                      let tmp17 = closure_4;
                                      items[items.length] = closure_4[240 | sum1 >> 18] + closure_4[128 | sum1 >> 12 & 63] + closure_4[128 | sum1 >> 6 & 63] + closure_4[128 | 63 & sum1];
                                    }
                                  }
                                  let tmp8 = closure_4;
                                  items[items.length] = closure_4[224 | charCodeAtResult >> 12] + closure_4[128 | charCodeAtResult >> 6 & 63] + closure_4[128 | 63 & charCodeAtResult];
                                  sum = num;
                                  sum1 = charCodeAtResult;
                                }
                                num = sum + 1;
                                let tmp13 = sum1;
                                if (num >= substr.length) {
                                  break;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                items[items.length] = substr.charAt(num);
                sum = num;
                sum1 = charCodeAtResult;
              }
            }
            str3 = str3 + items.join("");
            num2 = num2 + 1024;
            str4 = str3;
          } while (num2 < callResult.length);
        }
        return str4;
      }
    }
  },
  isBuffer(arg0) {
    let tmp = !arg0;
    if (!tmp) {
      tmp = "object" !== typeof arg0;
    }
    let tmp2 = !tmp;
    if (!tmp) {
      let isBufferResult = arg0.constructor && arg0.constructor.isBuffer;
      if (isBufferResult) {
        const constructor = arg0.constructor;
        isBufferResult = constructor.isBuffer(arg0);
      }
      tmp2 = isBufferResult;
    }
    return tmp2;
  },
  isRegExp(arg0) {
    return "[object RegExp]" === toString.call(arg0);
  },
  maybeMap(arg0, arg1) {
    let length;
    if (isArray(arg0)) {
      const items = [];
      let num = 0;
      if (0 < arg0.length) {
        do {
          let arr = items.push(arg1(arg0[num]));
          num = num + 1;
          length = arg0.length;
        } while (num < length);
      }
      return items;
    } else {
      return arg1(arg0);
    }
  },
  merge
};
