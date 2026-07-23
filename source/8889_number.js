// Module ID: 8889
// Function ID: 70100
// Name: number
// Dependencies: []

// Module 8889 (number)
function number(NumberResult) {
  const error = new Error("positive integer expected, not " + NumberResult);
  throw error;
}
function bool(arg0) {
  if ("boolean" !== typeof arg0) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("boolean expected, not " + arg0);
    throw error;
  }
}
function isBytes(arg0) {
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
}
function bytes(arg0) {
  if (isBytes(arg0)) {
    const length = arguments.length;
    let _Array = Array;
    let num3 = 0;
    if (length > 1) {
      num3 = length - 1;
    }
    const prototype2 = _Array.prototype;
    _Array = new _Array(num3);
    for (let num4 = 1; num4 < length; num4 = num4 + 1) {
      _Array[num4 - 1] = arguments[num4];
    }
    if (_Array.length > 0) {
      if (!_Array.includes(arg0.length)) {
        const _Error2 = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Uint8Array expected of length " + _Array + ", not of length=" + arg0.length);
        throw error;
      }
    }
  } else {
    const _Error = Error;
    const error1 = new Error("Uint8Array expected");
    throw error1;
  }
}
function hash(create) {
  if ("function" === typeof create) {
    if ("function" === typeof create.create) {
      number(create.outputLen);
      number(create.blockLen);
    }
  }
  const error = new Error("Hash should be wrapped by utils.wrapConstructor");
  throw error;
}
function exists(destroyed) {
  const tmp = arguments.length > 1 && undefined !== arguments[1];
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = arguments[1];
  }
  if (destroyed.destroyed) {
    const _Error2 = Error;
    const error = new Error("Hash instance has been destroyed");
    throw error;
  } else if (tmp2) {
    if (destroyed.finished) {
      const _Error = Error;
      const error1 = new Error("Hash#digest() has already been called");
      throw error1;
    }
  }
}
function output(content, state) {
  bytes(content);
  const outputLen = state.outputLen;
  if (content.length < outputLen) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("digestInto() expects output buffer of length at least " + outputLen);
    throw error;
  }
}
arg5.isBytes = isBytes;
arg5.number = number;
arg5.bool = bool;
arg5.bytes = bytes;
arg5.hash = hash;
arg5.exists = exists;
arg5.output = output;
arg5.default = { number, bool, bytes, hash, exists, output };
