// Module ID: 8927
// Function ID: 70275
// Name: asciiToBase16
// Dependencies: [6, 7, 5, 8928, 8929]
// Exports: asyncLoop, byteSwap, byteSwap32, bytesToHex, checkOpts, concatBytes, createView, hexToBytes, isBytes, randomBytes, rotl, rotr, u32, u8, wrapConstructor, wrapConstructorWithOpts, wrapXOFConstructorWithOpts

// Module 8927 (asciiToBase16)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import asyncGeneratorStep from "asyncGeneratorStep";

function asciiToBase16(arg0) {
  if (arg0 >= closure_7._0) {
    if (arg0 <= closure_7._9) {
      let diff = arg0 - closure_7._0;
    }
    return diff;
  }
  if (arg0 >= closure_7._A) {
    if (arg0 <= closure_7._F) {
      diff = arg0 - (closure_7._A - 10);
    }
  }
  if (arg0 >= closure_7._a) {
    if (arg0 <= closure_7._f) {
      diff = arg0 - (closure_7._a - 10);
    }
  }
}
function _asyncLoop() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = asyncGeneratorStep(tmp);
  return obj(...arguments);
}
function utf8ToBytes(arg0) {
  if ("string" !== typeof arg0) {
    const _Error = Error;
    const error = new Error("utf8ToBytes expected string, got " + tmp);
    throw error;
  } else {
    const _Uint8Array = Uint8Array;
    const _TextEncoder = TextEncoder;
    const textEncoder = new TextEncoder();
    const uint8Array = new Uint8Array(textEncoder.encode(arg0));
    return uint8Array;
  }
}
function toBytes(B) {
  let tmp = B;
  if ("string" === typeof B) {
    tmp = utf8ToBytes(B);
  }
  require(8928) /* number */.bytes(tmp);
  return tmp;
}
let uint32Array = new Uint32Array([287454020]);
let uint8Array = new Uint8Array(uint32Array.buffer);
let closure_6 = Array.from({ length: 256 }, (arg0, arg1) => arg1.toString(16).padStart(2, "0"));
let closure_7 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
const toString = {}.toString;

export const isBytes = function isBytes(arg0) {
  let tmp = arg0 instanceof Uint8Array;
  if (!tmp) {
    let tmp3 = null != arg0;
    if (tmp3) {
      tmp3 = "object" === typeof arg0;
    }
    if (tmp3) {
      tmp3 = "Uint8Array" === arg0.constructor.name;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const byteSwap32 = function byteSwap32(B32) {
  let length;
  let num = 0;
  if (0 < B32.length) {
    do {
      let tmp = exports;
      B32[num] = exports.byteSwap(B32[num]);
      num = num + 1;
      length = B32.length;
    } while (num < length);
  }
};
export const bytesToHex = function bytesToHex(arg0) {
  let length;
  require(8928) /* number */.bytes(arg0);
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg0.length) {
    do {
      let tmp2 = table;
      str = `${closure_6[arg0[num]]}`;
      num = num + 1;
      str2 = str;
      length = arg0.length;
    } while (num < length);
  }
  return str2;
};
export const hexToBytes = function hexToBytes(str) {
  if ("string" !== typeof str) {
    const _Error3 = Error;
    const error = new Error("hex string expected, got " + tmp);
    throw error;
  } else {
    const result = length / 2;
    if (str.length % 2) {
      const _Error2 = Error;
      const error1 = new Error("padded hex string expected, got unpadded hex of length " + length);
      throw error1;
    } else {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(result);
      let num = 0;
      let num4 = 0;
      if (0 < result) {
        const tmp8 = asciiToBase16(str.charCodeAt(num4));
        const sum = num4 + 1;
        const tmp10 = asciiToBase16(str.charCodeAt(sum));
        while (undefined !== tmp8) {
          if (undefined === tmp10) {
            break;
          } else {
            uint8Array[num] = 16 * tmp8 + tmp10;
            num = num + 1;
            num4 = num4 + 2;
          }
        }
        const _Error = Error;
        const error2 = new Error("hex string expected, got non-hex character \"" + (str[num4] + str[sum]) + "\" at index " + num4);
        throw error2;
      }
      return uint8Array;
    }
  }
};
export const asyncLoop = function asyncLoop(outer1_0, outer1_7, arg2) {
  return _asyncLoop(...arguments);
};
export { utf8ToBytes };
export { toBytes };
export const concatBytes = function concatBytes() {
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < arguments.length) {
    do {
      let tmp;
      if (num2 >= 0) {
        if (arguments.length > num2) {
          tmp = arguments[num2];
        }
      }
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let bytesResult = require(8928) /* number */.bytes(tmp);
      num = num + tmp.length;
      num2 = num2 + 1;
      num3 = num;
    } while (num2 < arguments.length);
  }
  const uint8Array = new Uint8Array(num3);
  let num4 = 0;
  let num5 = 0;
  if (0 < arguments.length) {
    do {
      let tmp5;
      if (num4 >= 0) {
        if (arguments.length > num4) {
          tmp5 = arguments[num4];
        }
      }
      let result = uint8Array.set(tmp5, num5);
      num5 = num5 + tmp5.length;
      num4 = num4 + 1;
    } while (num4 < arguments.length);
  }
  return uint8Array;
};
export const checkOpts = function checkOpts(arg0, arg1) {
  if (undefined !== arg1) {
    if ("[object Object]" !== toString.call(arg1)) {
      const _Error = Error;
      const error = new Error("Options should be object or undefined");
      throw error;
    }
  }
  return Object.assign(arg0, arg1);
};
export const wrapConstructor = function wrapConstructor(arg0) {
  let closure_0 = arg0;
  function hashC(arg0) {
    const obj = callback();
    return callback().update(outer1_12(arg0)).digest();
  }
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = arg0());
  hashC.create = () => callback();
  return hashC;
};
export const wrapConstructorWithOpts = function wrapConstructorWithOpts(arg0) {
  let closure_0 = arg0;
  function hashC(arg0, arg1) {
    const obj = callback(arg1);
    return callback(arg1).update(outer1_12(arg0)).digest();
  }
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = arg0({}));
  hashC.create = (arg0) => callback(arg0);
  return hashC;
};
export const wrapXOFConstructorWithOpts = function wrapXOFConstructorWithOpts(arg0) {
  let closure_0 = arg0;
  function hashC(arg0, arg1) {
    const obj = callback(arg1);
    return callback(arg1).update(outer1_12(arg0)).digest();
  }
  ({ outputLen: hashC.outputLen, blockLen: hashC.blockLen } = arg0({}));
  hashC.create = (arg0) => callback(arg0);
  return hashC;
};
export const randomBytes = function randomBytes(result) {
  let num = 32;
  if (arguments.length > 0) {
    num = 32;
    if (undefined !== arguments[0]) {
      num = arguments[0];
    }
  }
  if (require(8929) /* _crypto */.crypto) {
    if ("function" === typeof require(8929) /* _crypto */.crypto.getRandomValues) {
      const _crypto2 = require(8929) /* _crypto */.crypto;
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(num);
      return _crypto2.getRandomValues(uint8Array);
    }
  }
  if (require(8929) /* _crypto */.crypto) {
    if ("function" === typeof require(8929) /* _crypto */.crypto.randomBytes) {
      const _crypto = require(8929) /* _crypto */.crypto;
      return _crypto.randomBytes(num);
    }
  }
  const error = new Error("crypto.getRandomValues must be defined");
  throw error;
};
export const u8 = function u8(buffer) {
  const uint8Array = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  return uint8Array;
};
export const u32 = function u32(pbkdf2Result) {
  const uint32Array = new Uint32Array(pbkdf2Result.buffer, pbkdf2Result.byteOffset, Math.floor(pbkdf2Result.byteLength / 4));
  return uint32Array;
};
export const createView = function createView(buffer) {
  const dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  return dataView;
};
export const rotr = function rotr(A, arg1) {
  return A << 32 - arg1 | A >>> arg1;
};
export const rotl = function rotl(arg0, arg1) {
  return arg0 << arg1 | arg0 >>> 32 - arg1 >>> 0;
};
export const isLE = 68 === uint8Array[0];
export const byteSwap = function byteSwap(arg0) {
  return arg0 << 24 & 4278190080 | arg0 << 8 & 16711680 | arg0 >>> 8 & 65280 | arg0 >>> 24 & 255;
};
export const byteSwapIfBE = exports.isLE ? ((arg0) => arg0) : ((arg0) => exports.byteSwap(arg0));
export const nextTick = (() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = asyncGeneratorStep(tmp);
  return function nextTick(cb) {
    return callback(...arguments);
  };
})();
export const Hash = (() => {
  class Hash {
    constructor() {
      tmp = outer1_3(this, Hash);
      return;
    }
  }
  const items = [
    {
      key: "clone",
      value: function clone() {
        return this._cloneInto();
      }
    }
  ];
  return _defineProperties(Hash, items);
})();
