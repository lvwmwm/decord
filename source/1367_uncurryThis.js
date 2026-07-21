// Module ID: 1367
// Function ID: 16442
// Name: uncurryThis
// Dependencies: []
// Exports: isAnyArrayBuffer, isArrayBufferView, isAsyncFunction, isBigInt64Array, isBigUint64Array, isBoxedPrimitive, isFloat32Array, isFloat64Array, isGeneratorObject, isInt16Array, isInt32Array, isInt8Array, isMap, isMapIterator, isPromise, isSet, isSetIterator, isUint16Array, isUint32Array, isUint8Array, isUint8ClampedArray, isWeakMap, isWeakSet, isWebAssemblyCompiledModule

// Module 1367 (uncurryThis)
function uncurryThis(valueOf) {
  const call = valueOf.call;
  return call.bind(valueOf);
}
function checkBoxedPrimitive(arg0, closure_10) {
  if ("object" !== typeof arg0) {
    return false;
  } else {
    closure_10(tmp);
    return true;
  }
}
function isMapToString(map) {
  return "[object Map]" === callback(map);
}
function isSetToString(set) {
  return "[object Set]" === callback(set);
}
function isWeakMapToString(weakMap) {
  return "[object WeakMap]" === callback(weakMap);
}
function isWeakSetToString(weakSet) {
  return "[object WeakSet]" === callback(weakSet);
}
function isArrayBufferToString(arrayBuffer) {
  return "[object ArrayBuffer]" === callback(arrayBuffer);
}
function isArrayBuffer(arrayBuffer) {
  if ("undefined" === typeof ArrayBuffer) {
    return tmp;
  } else if (isArrayBufferToString.working) {
    let tmp3 = isArrayBufferToString(arrayBuffer);
  } else {
    const _ArrayBuffer = ArrayBuffer;
    tmp3 = arrayBuffer instanceof ArrayBuffer;
  }
}
function isDataViewToString(dataView) {
  return "[object DataView]" === callback(dataView);
}
function isDataView(dataView) {
  if ("undefined" === typeof DataView) {
    return tmp;
  } else if (isDataViewToString.working) {
    let tmp3 = isDataViewToString(dataView);
  } else {
    const _DataView = DataView;
    tmp3 = dataView instanceof DataView;
  }
}
function isSharedArrayBufferToString(arg0) {
  return "[object SharedArrayBuffer]" === callback(arg0);
}
function isSharedArrayBuffer(arg0) {
  if (undefined === _SharedArrayBuffer) {
    return tmp;
  } else {
    if (undefined === isSharedArrayBufferToString.working) {
      const prototype = _SharedArrayBuffer.prototype;
      const tmp7 = new _SharedArrayBuffer();
      isSharedArrayBufferToString.working = isSharedArrayBufferToString(tmp7);
    }
    if (isSharedArrayBufferToString.working) {
      let tmp11 = isSharedArrayBufferToString(arg0);
    } else {
      tmp11 = arg0 instanceof _SharedArrayBuffer;
    }
  }
}
function isNumberObject(arg0) {
  return checkBoxedPrimitive(arg0, closure_6);
}
function isStringObject(arg0) {
  return checkBoxedPrimitive(arg0, closure_7);
}
function isBooleanObject(arg0) {
  return checkBoxedPrimitive(arg0, closure_8);
}
function isBigIntObject(arg0) {
  if (tmp) {
    const tmp = checkBoxedPrimitive(arg0, closure_9);
  }
  return tmp;
}
function isSymbolObject(arg0) {
  let tmp = tmp2;
  if (tmp2) {
    tmp = checkBoxedPrimitive(arg0, closure_10);
  }
  return tmp;
}
const tmp = "undefined" !== typeof BigInt;
const tmp2 = "undefined" !== typeof Symbol;
let closure_5 = uncurryThis(Object.prototype.toString);
let closure_6 = uncurryThis(Number.prototype.valueOf);
let closure_7 = uncurryThis(String.prototype.valueOf);
let closure_8 = uncurryThis(Boolean.prototype.valueOf);
if (tmp) {
  const _BigInt = BigInt;
  let closure_9 = uncurryThis(BigInt.prototype.valueOf);
}
if (tmp2) {
  const _Symbol = Symbol;
  let closure_10 = uncurryThis(Symbol.prototype.valueOf);
}
let isMapToStringResult = "undefined" !== typeof Map;
if (isMapToStringResult) {
  const _Map = Map;
  const map = new Map();
  isMapToStringResult = isMapToString(map);
}
isMapToString.working = isMapToStringResult;
let isSetToStringResult = "undefined" !== typeof Set;
if (isSetToStringResult) {
  const _Set = Set;
  const set = new Set();
  isSetToStringResult = isSetToString(set);
}
isSetToString.working = isSetToStringResult;
let isWeakMapToStringResult = "undefined" !== typeof WeakMap;
if (isWeakMapToStringResult) {
  const _WeakMap = WeakMap;
  const weakMap = new WeakMap();
  isWeakMapToStringResult = isWeakMapToString(weakMap);
}
isWeakMapToString.working = isWeakMapToStringResult;
let isWeakSetToStringResult = "undefined" !== typeof WeakSet;
if (isWeakSetToStringResult) {
  const _WeakSet = WeakSet;
  const weakSet = new WeakSet();
  isWeakSetToStringResult = isWeakSetToString(weakSet);
}
isWeakSetToString.working = isWeakSetToStringResult;
let result = "undefined" !== typeof ArrayBuffer;
if (result) {
  const _ArrayBuffer = ArrayBuffer;
  let arrayBuffer = new ArrayBuffer();
  result = isArrayBufferToString(arrayBuffer);
}
isArrayBufferToString.working = result;
let isDataViewToStringResult = "undefined" !== typeof ArrayBuffer;
if (isDataViewToStringResult) {
  const _DataView = DataView;
  isDataViewToStringResult = "undefined" !== typeof DataView;
}
if (isDataViewToStringResult) {
  const _DataView2 = DataView;
  const _ArrayBuffer2 = ArrayBuffer;
  arrayBuffer = new ArrayBuffer(1);
  const dataView = new DataView(arrayBuffer, 0, 1);
  isDataViewToStringResult = isDataViewToString(dataView);
}
isDataViewToString.working = isDataViewToStringResult;
let _SharedArrayBuffer;
if ("undefined" !== typeof SharedArrayBuffer) {
  _SharedArrayBuffer = SharedArrayBuffer;
}
const items = [true, true, true];
const item = items.forEach((arg0) => {
  const require = arg0;
  Object.defineProperty(exports, arg0, {
    enumerable: false,
    value() {
      const error = new Error(arg0 + " is not supported in userland");
      throw error;
    }
  });
});

export const isArgumentsObject = require(dependencyMap[0]);
export const isGeneratorFunction = require(dependencyMap[1]);
export const isTypedArray = require(dependencyMap[2]);
export const isPromise = function isPromise(self) {
  let tmp = "undefined" !== typeof Promise;
  if (tmp) {
    tmp = self instanceof Promise;
  }
  if (!tmp) {
    let tmp3 = null !== self;
    if (tmp3) {
      tmp3 = "object" === typeof self;
    }
    if (tmp3) {
      tmp3 = "function" === typeof self.then;
    }
    if (tmp3) {
      tmp3 = "function" === typeof self.catch;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const isArrayBufferView = function isArrayBufferView(dataView) {
  if ("undefined" !== typeof ArrayBuffer) {
    const _ArrayBuffer = ArrayBuffer;
    if (ArrayBuffer.isView) {
      const _ArrayBuffer2 = ArrayBuffer;
      let isViewResult = ArrayBuffer.isView(dataView);
    }
    return isViewResult;
  }
  isViewResult = require(dependencyMap[2])(dataView);
  if (!isViewResult) {
    isViewResult = isDataView(dataView);
  }
};
export const isUint8Array = function isUint8Array(arg0) {
  return "Uint8Array" === require(dependencyMap[3])(arg0);
};
export const isUint8ClampedArray = function isUint8ClampedArray(arg0) {
  return "Uint8ClampedArray" === require(dependencyMap[3])(arg0);
};
export const isUint16Array = function isUint16Array(arg0) {
  return "Uint16Array" === require(dependencyMap[3])(arg0);
};
export const isUint32Array = function isUint32Array(arg0) {
  return "Uint32Array" === require(dependencyMap[3])(arg0);
};
export const isInt8Array = function isInt8Array(arg0) {
  return "Int8Array" === require(dependencyMap[3])(arg0);
};
export const isInt16Array = function isInt16Array(arg0) {
  return "Int16Array" === require(dependencyMap[3])(arg0);
};
export const isInt32Array = function isInt32Array(arg0) {
  return "Int32Array" === require(dependencyMap[3])(arg0);
};
export const isFloat32Array = function isFloat32Array(arg0) {
  return "Float32Array" === require(dependencyMap[3])(arg0);
};
export const isFloat64Array = function isFloat64Array(arg0) {
  return "Float64Array" === require(dependencyMap[3])(arg0);
};
export const isBigInt64Array = function isBigInt64Array(arg0) {
  return "BigInt64Array" === require(dependencyMap[3])(arg0);
};
export const isBigUint64Array = function isBigUint64Array(arg0) {
  return "BigUint64Array" === require(dependencyMap[3])(arg0);
};
export const isMap = function isMap(map) {
  if ("undefined" === typeof Map) {
    return tmp;
  } else if (isMapToString.working) {
    let tmp3 = isMapToString(map);
  } else {
    const _Map = Map;
    tmp3 = map instanceof Map;
  }
};
export const isSet = function isSet(set) {
  if ("undefined" === typeof Set) {
    return tmp;
  } else if (isSetToString.working) {
    let tmp3 = isSetToString(set);
  } else {
    const _Set = Set;
    tmp3 = set instanceof Set;
  }
};
export const isWeakMap = function isWeakMap(weakMap) {
  if ("undefined" === typeof WeakMap) {
    return tmp;
  } else if (isWeakMapToString.working) {
    let tmp3 = isWeakMapToString(weakMap);
  } else {
    const _WeakMap = WeakMap;
    tmp3 = weakMap instanceof WeakMap;
  }
};
export const isWeakSet = function isWeakSet(weakSet) {
  return isWeakSetToString(weakSet);
};
export { isArrayBuffer };
export { isDataView };
export { isSharedArrayBuffer };
export const isAsyncFunction = function isAsyncFunction(arg0) {
  return "[object AsyncFunction]" === callback(arg0);
};
export const isMapIterator = function isMapIterator(arg0) {
  return "[object Map Iterator]" === callback(arg0);
};
export const isSetIterator = function isSetIterator(arg0) {
  return "[object Set Iterator]" === callback(arg0);
};
export const isGeneratorObject = function isGeneratorObject(arg0) {
  return "[object Generator]" === callback(arg0);
};
export const isWebAssemblyCompiledModule = function isWebAssemblyCompiledModule(arg0) {
  return "[object WebAssembly.Module]" === callback(arg0);
};
export { isNumberObject };
export { isStringObject };
export { isBooleanObject };
export { isBigIntObject };
export { isSymbolObject };
export const isBoxedPrimitive = function isBoxedPrimitive(arg0) {
  let tmp = isNumberObject(arg0);
  if (!tmp) {
    tmp = isStringObject(arg0);
  }
  if (!tmp) {
    tmp = isBooleanObject(arg0);
  }
  if (!tmp) {
    tmp = isBigIntObject(arg0);
  }
  if (!tmp) {
    tmp = isSymbolObject(arg0);
  }
  return tmp;
};
export const isAnyArrayBuffer = function isAnyArrayBuffer(arg0) {
  let tmp = "undefined" !== typeof Uint8Array;
  if (tmp) {
    let tmp3 = isArrayBuffer(arg0);
    if (!tmp3) {
      tmp3 = isSharedArrayBuffer(arg0);
    }
    tmp = tmp3;
  }
  return tmp;
};
