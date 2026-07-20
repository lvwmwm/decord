// Module ID: 13183
// Function ID: 99771
// Name: _
// Dependencies: []

// Module 13183 (_)
function _(arg0, context) {
  let str = "Value";
  if (context) {
    str = "Value";
    if (context.context) {
      str = context.context;
    }
  }
  return "" + str + " " + arg0 + ".";
}
function integerPart(arg0) {
  return censorNegativeZero(Math.trunc(arg0));
}
function sign(arg0) {
  let num = 1;
  if (arg0 < 0) {
    num = -1;
  }
  return num;
}
function censorNegativeZero(arg0) {
  let num = 0;
  if (0 !== arg0) {
    num = arg0;
  }
  return num;
}
function createIntegerConversion(exponent, unsigned) {
  const get = tmp;
  if (64 === exponent) {
    const _Math4 = Math;
    let closure_1 = Math.pow(2, 53) - 1;
    let num9 = 0;
    if (tmp) {
      const _Math5 = Math;
      num9 = 1 - Math.pow(2, 53);
    }
    let closure_0 = num9;
  } else if (tmp) {
    const _Math2 = Math;
    const diff = exponent - 1;
    closure_0 = -Math.pow(2, diff);
    const _Math3 = Math;
    closure_1 = Math.pow(2, diff) - 1;
  } else {
    closure_0 = 0;
    const _Math = Math;
    closure_1 = Math.pow(2, exponent) - 1;
  }
  let closure_3 = Math.pow(2, exponent);
  let closure_4 = Math.pow(2, exponent - 1);
  return (arg0, arg1) => {
    let obj = arg1;
    if (undefined === arg1) {
      obj = {};
    }
    const tmp = callback4(+arg0);
    const _Number = Number;
    if (obj.enforceRange) {
      if (_Number.isFinite(tmp)) {
        const tmp28 = callback2(tmp);
        if (tmp28 >= closure_0) {
          if (tmp28 <= closure_1) {
            return tmp28;
          }
        }
        const _TypeError2 = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError(callback("is outside the accepted range of " + closure_0 + " to " + closure_1 + ", inclusive", obj));
        throw typeError;
      } else {
        const _TypeError = TypeError;
        const typeError1 = new TypeError(callback("is not a finite number", obj));
        throw typeError1;
      }
    } else {
      if (!_Number.isNaN(tmp)) {
        if (obj.clamp) {
          const _Math = Math;
          const _Math2 = Math;
          const bound = Math.min(Math.max(tmp, closure_0), closure_1);
          if (bound > 0) {
            if (bound % 1 === 0.5) {
              let tmp5Result = tmp5(rounded);
            }
            const _Math3 = Math;
            let rounded = Math.floor(bound);
          }
          const _Math4 = Math;
          rounded = Math.round(bound);
        }
        return tmp5Result;
      }
      const _Number2 = Number;
      let num6 = 0;
      if (Number.isFinite(tmp)) {
        num6 = 0;
        if (0 !== tmp) {
          const tmp9 = callback2(tmp);
          if (tmp9 < closure_0) {
            const result = tmp9 % callback;
            let sum = result;
            if (tmp16 !== callback3(result)) {
              sum = result + tmp13;
            }
            let diff = sum;
            if (tmp) {
              diff = sum;
              if (sum >= callback2) {
                diff = sum - callback;
              }
            }
            let tmp12 = diff;
            const tmp13 = callback;
            const tmp16 = callback3(callback);
          } else {
            tmp12 = tmp9;
          }
          num6 = tmp12;
        }
      }
      tmp5Result = num6;
    }
  };
}
function convertCallbackFunction(arg0, arg1) {
  if ("function" !== typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError(_("is not a function", arg1));
    throw typeError;
  } else {
    return arg0;
  }
}
function isArrayBuffer(arg0) {
  get.call(arg0);
  return true;
}
unsigned_long_long.any = (arg0) => arg0;
unsigned_long_long.void = () => {

};
unsigned_long_long.boolean = (arg0) => arg0;
unsigned_long_long.byte = require("module_8");
unsigned_long_long.octet = require("module_8");
unsigned_long_long.short = require("module_16");
unsigned_long_long.unsigned short = require("module_16");
unsigned_long_long.long = require("module_32");
unsigned_long_long.unsigned long = require("module_32");
unsigned_long_long.long long = require("module_64");
unsigned_long_long.unsigned long long = require("module_64");
unsigned_long_long.double = (arg0, arg1) => {
  if (Number.isFinite(+arg0)) {
    return tmp;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError(_("is not a finite floating-point value", arg1));
    throw typeError;
  }
};
unsigned_long_long.unrestricted double = (arg0) => +arg0;
unsigned_long_long.float = (arg0, arg1) => {
  if (Number.isFinite(+arg0)) {
    const _Object = Object;
    if (Object.is(tmp, -0)) {
      return tmp;
    } else {
      const _Math = Math;
      const froundResult = Math.fround(tmp);
      const _Number = Number;
      if (Number.isFinite(froundResult)) {
        return froundResult;
      } else {
        const _TypeError2 = TypeError;
        const typeError = new TypeError(_("is outside the range of a single-precision floating-point value", arg1));
        throw typeError;
      }
    }
  } else {
    const _TypeError = TypeError;
    const typeError1 = new TypeError(_("is not a finite floating-point value", arg1));
    throw typeError1;
  }
};
unsigned_long_long.unrestricted float = (arg0) => {
  let froundResult = tmp;
  if (!isNaN(+arg0)) {
    const _Object = Object;
    froundResult = tmp;
    if (!Object.is(tmp, -0)) {
      const _Math = Math;
      froundResult = Math.fround(tmp);
    }
  }
  return froundResult;
};
unsigned_long_long.DOMString = (arg0, arg1) => {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  if (obj.treatNullAsEmptyString) {
    if (null === arg0) {
      return "";
    }
  }
  if ("symbol" === typeof arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError(_("is a symbol, which cannot be converted to a string", obj));
    throw typeError;
  } else {
    const _String = String;
    return String(arg0);
  }
};
unsigned_long_long.ByteString = (arg0, arg1) => {
  const DOMStringResult = arg5.DOMString(arg0, arg1);
  let num = 0;
  let codePointAtResult = DOMStringResult.codePointAt(0);
  if (undefined !== codePointAtResult) {
    while (codePointAtResult <= 255) {
      let sum = num + 1;
      codePointAtResult = DOMStringResult.codePointAt(sum);
      num = sum;
    }
    const _TypeError = TypeError;
    const typeError = new TypeError(_("is not a valid ByteString", arg1));
    throw typeError;
  }
  return DOMStringResult;
};
unsigned_long_long.USVString = (arg0, arg1) => {
  const DOMStringResult = arg5.DOMString(arg0, arg1);
  const items = [];
  let num = 0;
  if (0 < DOMStringResult.length) {
    while (true) {
      let charCodeAtResult = DOMStringResult.charCodeAt(num);
      let tmp3 = num;
      if (charCodeAtResult >= 55296) {
        if (charCodeAtResult <= 57343) {
          if (56320 <= charCodeAtResult) {
            if (charCodeAtResult <= 57343) {
              let _String4 = String;
              let arr = items.push(String.fromCodePoint(65533));
              let sum = num;
              let tmp7 = tmp;
            }
          }
          if (num === length - 1) {
            let _String3 = String;
            arr = items.push(String.fromCodePoint(65533));
            sum = num;
            tmp7 = tmp;
          } else {
            let charCodeAtResult1 = DOMStringResult.charCodeAt(num + 1);
            if (56320 <= charCodeAtResult1) {
              if (charCodeAtResult1 <= 57343) {
                let _String2 = String;
                let arr1 = items.push(String.fromCodePoint(65536 + 1024 * (1023 & charCodeAtResult) + (1023 & charCodeAtResult1)));
                sum = num + 1;
                tmp7 = charCodeAtResult1;
              }
            }
            let _String = String;
            let arr2 = items.push(String.fromCodePoint(65533));
            sum = num;
            tmp7 = charCodeAtResult1;
          }
        }
        num = sum + 1;
        let tmp = tmp7;
        if (num >= length) {
          break;
        }
      }
      let _String5 = String;
      let arr3 = items.push(String.fromCodePoint(charCodeAtResult));
      sum = num;
      tmp7 = tmp;
    }
  }
  return items.join("");
};
unsigned_long_long.object = (arg0, arg1) => {
  let str = "Null";
  if (null !== arg0) {
    if ("undefined" === typeof arg0) {
      str = "Undefined";
    } else if ("boolean" === tmp) {
      str = "Boolean";
    } else if ("number" === tmp) {
      str = "Number";
    } else if ("string" === tmp) {
      str = "String";
    } else {
      str = "Symbol";
      if ("symbol" !== tmp) {
        str = "Object";
      }
    }
  }
  if ("Object" !== str) {
    const _TypeError = TypeError;
    const typeError = new TypeError(_("is not an object", arg1));
    throw typeError;
  } else {
    return arg0;
  }
};
let get = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
unsigned_long_long.ArrayBuffer = (arg0, arg1) => {
  if (isArrayBuffer(arg0)) {
    return arg0;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError(_("is not a view on an ArrayBuffer object", arg1));
    throw typeError;
  }
};
get = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get;
unsigned_long_long.DataView = (arg0, arg1) => {
  get.call(arg0);
  return arg0;
};
const items = [Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array];
const item = items.forEach((name) => {
  name = name.name;
  const arg5 = name;
  let str = "a";
  if (obj.test(name)) {
    str = "an";
  }
  const get = str;
  arg5[name] = (arg0, arg1) => {
    if (ArrayBuffer.isView(arg0)) {
      if (arg0.constructor.name === name) {
        return arg0;
      }
    }
    const typeError = new TypeError(callback("is not " + str + " " + name + " object", arg1));
    throw typeError;
  };
});
unsigned_long_long.ArrayBufferView = (arg0, arg1) => {
  if (ArrayBuffer.isView(arg0)) {
    return arg0;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError(_("is not a view on an ArrayBuffer object", arg1));
    throw typeError;
  }
};
unsigned_long_long.BufferSource = (arg0, arg1) => {
  if (!ArrayBuffer.isView(arg0)) {
    if (!isArrayBuffer(arg0)) {
      const _TypeError = TypeError;
      const typeError = new TypeError(_("is not an ArrayBuffer object or a view on one", arg1));
      throw typeError;
    }
  }
  return arg0;
};
unsigned_long_long.DOMTimeStamp = unsigned_long_long.unsigned long long;
unsigned_long_long.Function = convertCallbackFunction;
unsigned_long_long.VoidFunction = convertCallbackFunction;
