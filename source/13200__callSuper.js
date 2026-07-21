// Module ID: 13200
// Function ID: 100046
// Name: _callSuper
// Dependencies: [0]

// Module 13200 (_callSuper)
import result from "result";

function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_5(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = require(dependencyMap[1]);
let closure_5 = require(dependencyMap[2]);
let closure_6 = require(dependencyMap[3]);
let closure_7 = require(dependencyMap[4]);
const _module = require(dependencyMap[5]);
const NativeModules = require(dependencyMap[6]).NativeModules;
let closure_9 = (arg0) => {
  class TypeMismatchError {
    constructor() {
      tmp = closure_4(this, TypeMismatchError);
      return closure_11(this, TypeMismatchError, arguments);
    }
  }
  const global = TypeMismatchError;
  callback2(TypeMismatchError, arg0);
  return result(TypeMismatchError);
}(_module(Error));
let closure_10 = (arg0) => {
  class QuotaExceededError {
    constructor() {
      tmp = closure_4(this, QuotaExceededError);
      return closure_11(this, QuotaExceededError, arguments);
    }
  }
  const global = QuotaExceededError;
  callback2(QuotaExceededError, arg0);
  return result(QuotaExceededError);
}(_module(Error));
if ("object" !== typeof global.crypto) {
  global.crypto = {};
}
if ("function" !== typeof global.crypto.getRandomValues) {
  global.crypto.getRandomValues = function getRandomValues(uint8Array) {
    if (!(uint8Array instanceof Int8Array)) {
      const _Uint8Array = Uint8Array;
      if (!(uint8Array instanceof Uint8Array)) {
        const _Int16Array = Int16Array;
        if (!(uint8Array instanceof Int16Array)) {
          const _Uint16Array = Uint16Array;
          if (!(uint8Array instanceof Uint16Array)) {
            const _Int32Array = Int32Array;
            if (!(uint8Array instanceof Int32Array)) {
              const _Uint32Array = Uint32Array;
              if (!(uint8Array instanceof Uint32Array)) {
                const _Uint8ClampedArray = Uint8ClampedArray;
                if (!(uint8Array instanceof Uint8ClampedArray)) {
                  const prototype = ctor.prototype;
                  const tmp4 = new ctor("Expected an integer array");
                  throw tmp4;
                }
              }
            }
          }
        }
      }
    }
    if (uint8Array.byteLength > 65536) {
      const prototype4 = ctor2.prototype;
      const tmp22 = new ctor2("Can only request a maximum of 65536 bytes");
      throw tmp22;
    } else {
      const byteLength = uint8Array.byteLength;
      if (NativeModules.RNGetRandomValues) {
        const RNGetRandomValues = tmp28.RNGetRandomValues;
        let randomBase64 = RNGetRandomValues.getRandomBase64(byteLength);
      } else if (tmp28.ExpoRandom) {
        const ExpoRandom2 = NativeModules.ExpoRandom;
        randomBase64 = ExpoRandom2.getRandomBase64String(byteLength);
      } else if (global.ExpoModules) {
        const ExpoRandom = global.ExpoModules.ExpoRandom;
        randomBase64 = ExpoRandom.getRandomBase64String(byteLength);
      } else {
        const _Error = Error;
        const error = new Error("Native module not found");
        throw error;
      }
      const _Uint8Array2 = Uint8Array;
      uint8Array = new Uint8Array(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
      require(dependencyMap[7])(randomBase64, uint8Array);
      return uint8Array;
    }
  };
}
