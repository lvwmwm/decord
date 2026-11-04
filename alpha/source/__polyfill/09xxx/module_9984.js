// Module ID: 9984
// Function ID: 9985
// Dependencies: [41, 42]

// Module 9984
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let _TransformStream, _undefined, asyncIterator, hasOwnProperty, set;

let _self;
const f126054 = () => 1;
const f126072 = () => {
  self._pulling = false;
  if (self._pullAgain) {
    self._pullAgain = false;
    if (ur(self)) {
      if (self._pulling) {
        self._pullAgain = true;
      } else {
        self._pulling = true;
        then.call(then.call(self._pullAlgorithm(), f126072, f126073), undefined, fn);
      }
    }
  }
  return null;
};
const f126073 = function(arg0) {
  const _controlledReadableStream = self._controlledReadableStream;
  if ("readable" === _controlledReadableStream._state) {
    self = this;
    const self2 = this;
    self._queue = new closure_2_15();
    self._queueTotalSize = 0;
    self._pullAlgorithm = undefined;
    self._cancelAlgorithm = undefined;
    self._strategySizeAlgorithm = undefined;
    const tmp4 = new closure_2_15();
    jr(_controlledReadableStream, arg0);
  }
  return null;
};
const te2 = function te() {
  return 1;
};
let Promise;
let c29;
let str;
let closure_38;
let obj3;
let fn4;
let _moduleResult1;
let _moduleResult2;
let _moduleResult3;
let _moduleResult4;
let _moduleResult5;
let closure_77;
let _moduleResult6;
let e;
let _moduleResult7;
let _moduleResult8;
let zr;
let _moduleResult9;
let _moduleResult10;
let _moduleResult11;
let _moduleResult12;
let fn = function e() {

};
function t(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  return tmp;
}
function u(fn) {
  const tmp = new Promise(fn);
  return tmp;
}
function c(arg0) {
  let closure_0 = arg0;
  const tmp = new Promise((fn) => fn(c0));
  return tmp;
}
function d(arg0) {
  return closure_5(arg0);
}
function f(arg0, arg1, arg2) {
  return then.call(arg0, arg1, undefined);
}
function _(arg0, arg1, arg2) {
  return then.call(arg0, arg1, undefined);
}
function S(fn, arg1, arg2) {
  if (typeof fn !== "function") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Argument is not a function");
    throw typeError;
  } else {
    const _Function = Function;
    return apply.call(fn, arg1, arg2);
  }
}
function g(arg0, arg1, arg2) {
  try {
    return c(S(arg0, arg1, arg2));
  } catch (tmp6) {
    return d(tmp6);
  }
}
function q(_reader, _ownerReadableStream) {
  _reader._ownerReadableStream = _ownerReadableStream;
  _ownerReadableStream._reader = _reader;
  if ("readable" === _ownerReadableStream._state) {
    let closure_0 = _reader;
    const self3 = this;
    const self4 = this;
    _reader._closedPromise = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    const tmp7 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
  } else if ("closed" === _ownerReadableStream._state) {
    closure_0 = _reader;
    const self = this;
    const self2 = this;
    _reader._closedPromise = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    const tmp3 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    if (undefined !== _reader._closedPromise_resolve) {
      const result = _reader._closedPromise_resolve(undefined);
      _reader._closedPromise_resolve = undefined;
      _reader._closedPromise_reject = undefined;
    }
  } else {
    closure_0 = _reader;
    const self5 = this;
    const self6 = this;
    const _storedError = _ownerReadableStream._storedError;
    _reader._closedPromise = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    const tmp10 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    if (undefined !== _reader._closedPromise_reject) {
      then.call(_reader._closedPromise, undefined, fn);
      const result1 = _reader._closedPromise_reject(_storedError);
      _reader._closedPromise_resolve = undefined;
      _reader._closedPromise_reject = undefined;
    }
  }
}
function W(_ownerReadableStream) {
  _ownerReadableStream = _ownerReadableStream._ownerReadableStream;
  if ("readable" === _ownerReadableStream._state) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Reader was released and can no longer be used to monitor the stream's closedness");
    if (undefined !== _ownerReadableStream._closedPromise_reject) {
      then.call(_ownerReadableStream._closedPromise, undefined, fn);
      const result = _ownerReadableStream._closedPromise_reject(typeError);
      _ownerReadableStream._closedPromise_resolve = undefined;
      _ownerReadableStream._closedPromise_reject = undefined;
    }
  } else {
    const _TypeError2 = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError1 = new TypeError("Reader was released and can no longer be used to monitor the stream's closedness");
    let closure_0 = _ownerReadableStream;
    const self5 = this;
    const self6 = this;
    _ownerReadableStream._closedPromise = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    const tmp11 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      closure_0._closedPromise_resolve = _closedPromise_resolve;
      closure_0._closedPromise_reject = _closedPromise_reject;
    });
    if (undefined !== _ownerReadableStream._closedPromise_reject) {
      then.call(_ownerReadableStream._closedPromise, undefined, fn);
      const result1 = _ownerReadableStream._closedPromise_reject(typeError1);
      _ownerReadableStream._closedPromise_resolve = undefined;
      _ownerReadableStream._closedPromise_reject = undefined;
    }
  }
  const _readableStreamController = _ownerReadableStream._readableStreamController;
  _readableStreamController[SymbolResult4]();
  _ownerReadableStream._reader = undefined;
  _ownerReadableStream._ownerReadableStream = undefined;
}
function O(arg0) {
  const typeError = new TypeError("Cannot " + "read from" + " a stream using a released reader");
  return typeError;
}
function V(_reader, arg1) {
  const _readRequests = _reader._reader._readRequests;
  _readRequests.push(arg1);
}
function U(_reader, arg1, arg2) {
  const _readRequests = _reader._reader._readRequests;
  const arr = _readRequests.shift();
  arr._chunkSteps(arg1);
}
function G(_reader) {
  return _reader._reader._readRequests.length;
}
function se(arr, arg1, arg2) {
  if (arr.slice) {
    return arr.slice(arg1, arg2);
  } else {
    const diff = arg2 - arg1;
    const _ArrayBuffer = ArrayBuffer;
    const self = this;
    const self2 = this;
    const arrayBuffer = new ArrayBuffer(diff);
    const _Uint8Array = Uint8Array;
    const self3 = this;
    const self4 = this;
    const uint8Array = new Uint8Array(arrayBuffer);
    const _Uint8Array2 = Uint8Array;
    const self5 = this;
    const self6 = this;
    set = uint8Array.set;
    const uint8Array1 = new Uint8Array(arr, arg1, diff);
    const result = set(uint8Array1, 0);
    return arrayBuffer;
  }
}
function ue(arg0, arg1) {
  const _return = arg0.return;
  if (null != _return) {
    if (typeof _return !== "function") {
      const _TypeError = TypeError;
      const _String = String;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("" + String("return") + " is not a function");
      throw typeError;
    } else {
      return _return;
    }
  }
}
function ce(done) {
  try {
    done = done.done;
    return f(_undefined(done.value), (value) => ({ done, value }));
  } catch (tmp4) {
    return d(tmp4);
  }
}
function fe(getReader, arg1) {
  let tmp8;
  let tmp = arg2;
  if (undefined === arg2) {
    let iterator;
    if ("async" === arg1) {
      let tmp11;
      if (null != getReader[str]) {
        tmp11 = tmp9;
        if (typeof getReader[str] !== "function") {
          const _TypeError6 = TypeError;
          const _String3 = String;
          const _HermesInternal3 = HermesInternal;
          const self11 = this;
          const self12 = this;
          let typeError = new TypeError("" + String(tmp8) + " is not a function");
          throw typeError;
        }
      }
      tmp = tmp11;
      if (undefined === tmp11) {
        const _Symbol2 = Symbol;
        const iterator2 = Symbol.iterator;
        let tmp24;
        const tmp21 = fe;
        if (null != getReader[iterator2]) {
          tmp24 = tmp23;
          if (typeof getReader[iterator2] !== "function") {
            const _TypeError5 = TypeError;
            const _String2 = String;
            const _HermesInternal2 = HermesInternal;
            const self9 = this;
            const self10 = this;
            const typeError1 = new TypeError("" + String(iterator2) + " is not a function");
            throw typeError1;
          }
        }
        iterator = tmp21(getReader, "sync", tmp24);
        const obj2 = {
          next() {
                  try {
                    return ce(be(iterator));
                  } catch (tmp4) {
                    return d(tmp4);
                  }
                },
          return: function(value) {
                  try {
                    const tmp3 = iterator;
                    const tmp4 = ue(iterator.iterator, "return");
                    if (undefined === tmp4) {
                      const obj = { done: true, value };
                      return c(obj);
                    } else {
                      let tmp15;
                      const items = [value];
                      const tmp8 = S(tmp5, tmp3.iterator, items);
                      if (t(tmp8)) {
                        tmp15 = ce(tmp8);
                      } else {
                        const _TypeError = TypeError;
                        const self = this;
                        const self2 = this;
                        const typeError = new TypeError("The iterator.return() method must return an object");
                        tmp15 = d(typeError);
                      }
                      return tmp15;
                    }
                  } catch (tmp18) {
                    return d(tmp18);
                  }
                }
        };
        return { iterator: obj2, nextMethod: obj2.next, done: false };
      }
    } else {
      const _Symbol = Symbol;
      iterator = Symbol.iterator;
      let tmp3 = getReader[iterator];
      let tmp4 = null;
      let tmp5;
      if (null != tmp3) {
        tmp5 = tmp3;
        if (typeof tmp3 !== "function") {
          let _TypeError = TypeError;
          const _String = String;
          const _HermesInternal = HermesInternal;
          let self = this;
          let self2 = this;
          const typeError2 = new TypeError("" + String(iterator) + " is not a function");
          throw typeError2;
        }
      }
      tmp = tmp5;
    }
  }
  if (undefined === tmp) {
    const tmp18 = globalThis;
    const _TypeError4 = TypeError;
    const self7 = this;
    const self8 = this;
    const typeError3 = new TypeError("The object is not iterable");
    throw typeError3;
  } else if (typeof tmp !== "function") {
    let tmp15 = globalThis;
    const _TypeError3 = TypeError;
    const self5 = this;
    const self6 = this;
    const typeError4 = new TypeError("Argument is not a function");
    throw typeError4;
  } else {
    const _Function = Function;
    const iter = apply.call(tmp, getReader, []);
    let tmp12 = typeof iter === "object";
    if (typeof iter === "object") {
      tmp12 = null !== iter;
    }
    if (!tmp12) {
      tmp12 = typeof iter === "function";
    }
    if (tmp12) {
      let obj = { iterator: iter, nextMethod: iter.next, done: false };
      return obj;
    } else {
      const _TypeError2 = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError5 = new TypeError("The iterator method must return an object");
      throw typeError5;
    }
  }
}
function be(nextMethod) {
  nextMethod = nextMethod.nextMethod;
  if (typeof nextMethod !== "function") {
    const _TypeError2 = TypeError;
    const self3 = this;
    const self4 = this;
    const typeError = new TypeError("Argument is not a function");
    throw typeError;
  } else {
    const _Function = Function;
    const callResult = apply.call(nextMethod, tmp, []);
    let tmp3 = typeof callResult === "object";
    if (typeof callResult === "object") {
      tmp3 = null !== callResult;
    }
    if (!tmp3) {
      tmp3 = typeof callResult === "function";
    }
    if (tmp3) {
      return callResult;
    } else {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError1 = new TypeError("The iterator.next() method must return an object");
      throw typeError1;
    }
  }
}
function _e(_asyncIteratorImpl) {
  if (t(_asyncIteratorImpl)) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (hasOwnProperty.call(_asyncIteratorImpl, "_asyncIteratorImpl")) {
      try {
        return _asyncIteratorImpl._asyncIteratorImpl instanceof closure_38;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}
function Se(byteOffset) {
  let buffer;
  let substr;
  ({ buffer, byteOffset } = byteOffset);
  const sum = byteOffset.byteOffset + byteOffset.byteLength;
  if (buffer.slice) {
    substr = buffer.slice(byteOffset, sum);
  } else {
    const diff = sum - byteOffset;
    const _ArrayBuffer = ArrayBuffer;
    const self = this;
    const self2 = this;
    const arrayBuffer = new ArrayBuffer(diff);
    const _Uint8Array = Uint8Array;
    const self3 = this;
    const self4 = this;
    const uint8Array = new Uint8Array(arrayBuffer);
    const _Uint8Array2 = Uint8Array;
    const self5 = this;
    const self6 = this;
    set = uint8Array.set;
    const uint8Array1 = new Uint8Array(buffer, byteOffset, diff);
    const result = set(uint8Array1, 0);
    substr = arrayBuffer;
  }
  const uint8Array2 = new Uint8Array(substr);
  return uint8Array2;
}
function ve(_queue, value, size) {
  if (typeof size === "number") {
    if (!fn4(size)) {
      if (size >= 0) {
        if (size !== Infinity) {
          _queue = _queue._queue;
          const obj = { value, size };
          _queue.push(obj);
          _queue._queueTotalSize = _queue._queueTotalSize + size;
        }
      }
    }
  }
  const rangeError = new RangeError("Size must be a finite, non-NaN, non-negative number.");
  throw rangeError;
}
function Pe(_controlledReadableByteStream) {
  _controlledReadableByteStream = _controlledReadableByteStream._controlledReadableByteStream;
  let tmp = "readable" === _controlledReadableByteStream._state;
  if (tmp) {
    let tmp2 = !_controlledReadableByteStream._closeRequested;
    if (tmp2) {
      let _started = _controlledReadableByteStream._started;
      if (_started) {
        const _reader = _controlledReadableByteStream._reader;
        let tmp4 = undefined !== _reader;
        if (tmp4) {
          let tmp5 = typeof _reader === "object";
          if (typeof _reader === "object") {
            tmp5 = null !== _reader;
          }
          if (!tmp5) {
            tmp5 = typeof _reader === "function";
          }
          let callResult1 = tmp5;
          if (callResult1) {
            const _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            callResult1 = hasOwnProperty.call(_reader, "_readRequests");
          }
          if (callResult1) {
            callResult1 = _reader instanceof c29;
          }
          tmp4 = callResult1;
        }
        if (tmp4) {
          tmp4 = _controlledReadableByteStream._reader._readRequests.length > 0;
        }
        let tmp9 = tmp4;
        if (!tmp9) {
          const _reader2 = _controlledReadableByteStream._reader;
          let tmp10 = undefined !== _reader2;
          if (tmp10) {
            let tmp11 = typeof _reader2 === "object";
            if (typeof _reader2 === "object") {
              tmp11 = null !== _reader2;
            }
            if (!tmp11) {
              tmp11 = typeof _reader2 === "function";
            }
            let callResult2 = tmp11;
            if (callResult2) {
              const _Object2 = Object;
              const hasOwnProperty2 = Object.prototype.hasOwnProperty;
              callResult2 = hasOwnProperty2.call(_reader2, "_readIntoRequests");
            }
            if (callResult2) {
              callResult2 = _reader2 instanceof _moduleResult3;
            }
            tmp10 = callResult2;
          }
          if (tmp10) {
            tmp10 = _controlledReadableByteStream._reader._readIntoRequests.length > 0;
          }
          let tmp15 = tmp10;
          if (!tmp15) {
            const _state = _controlledReadableByteStream._controlledReadableByteStream._state;
            let tmp16 = null;
            if ("errored" !== _state) {
              let num3 = 0;
              if ("closed" !== _state) {
                num3 = _controlledReadableByteStream._strategyHWM - _controlledReadableByteStream._queueTotalSize;
              }
              tmp16 = num3;
            }
            tmp15 = tmp16 > 0;
          }
          tmp9 = tmp15;
        }
        _started = tmp9;
      }
      tmp2 = _started;
    }
    tmp = tmp2;
  }
  if (tmp) {
    if (_controlledReadableByteStream._pulling) {
      _controlledReadableByteStream._pullAgain = true;
    } else {
      _controlledReadableByteStream._pulling = true;
      then.call(then.call(_controlledReadableByteStream._pullAlgorithm(), () => {
        _controlledReadableByteStream._pulling = false;
        if (_controlledReadableByteStream._pullAgain) {
          _controlledReadableByteStream._pullAgain = false;
          Pe(_controlledReadableByteStream);
        }
        return null;
      }, function(typeError) {
        _controlledReadableByteStream = _controlledReadableByteStream._controlledReadableByteStream;
        if ("readable" === _controlledReadableByteStream._state) {
          if (null !== _controlledReadableByteStream._byobRequest) {
            _controlledReadableByteStream._byobRequest._associatedReadableByteStreamController = undefined;
            _controlledReadableByteStream._byobRequest._view = null;
            _controlledReadableByteStream._byobRequest = null;
          }
          const self = this;
          const self2 = this;
          _controlledReadableByteStream._pendingPullIntos = new closure_15();
          const self3 = this;
          const self4 = this;
          const tmp4 = new closure_15();
          _controlledReadableByteStream._queue = new closure_15();
          _controlledReadableByteStream._queueTotalSize = 0;
          _controlledReadableByteStream._pullAlgorithm = undefined;
          _controlledReadableByteStream._cancelAlgorithm = undefined;
          const tmp6 = new closure_15();
          jr(_controlledReadableByteStream, typeError);
        }
        return null;
      }), undefined, fn);
    }
  }
}
function Oe(viewConstructor) {
  viewConstructor = new viewConstructor.viewConstructor(viewConstructor.buffer, viewConstructor.byteOffset, viewConstructor.bytesFilled / viewConstructor.elementSize);
  return viewConstructor;
}
function Be(_queue, buffer, arg2, byteLength) {
  _queue = _queue._queue;
  const obj = { buffer, byteOffset: 0, byteLength };
  _queue.push(obj);
  _queue._queueTotalSize = _queue._queueTotalSize + byteLength;
}
function je(self, buffer, byteOffset, bytesFilled) {
  try {
    const tmp5 = se(buffer, byteOffset, byteOffset + bytesFilled);
    Be(self, tmp5, 0, bytesFilled);
  } catch (tmp11) {
    Ne(self, tmp11);
    throw tmp11;
  }
}
function Ae(_queueTotalSize, peekResult1) {
  const bound = Math.min(_queueTotalSize._queueTotalSize, peekResult1.byteLength - peekResult1.bytesFilled);
  const sum = peekResult1.bytesFilled + bound;
  const diff = sum - sum % peekResult1.elementSize;
  let flag = false;
  let diff1 = bound;
  if (diff >= peekResult1.minimumFill) {
    diff1 = diff - peekResult1.bytesFilled;
    flag = true;
  }
  const _queue = _queueTotalSize._queue;
  if (diff1 > 0) {
    do {
      let peekResult = _queue.peek();
      let _Math = Math;
      let bound1 = Math.min(diff1, peekResult.byteLength);
      let buffer = peekResult.buffer;
      let _Uint8Array = Uint8Array;
      let self = this;
      let self2 = this;
      let sum1 = peekResult1.byteOffset + peekResult1.bytesFilled;
      let byteOffset = peekResult.byteOffset;
      let uint8Array = new Uint8Array(peekResult1.buffer);
      let _Uint8Array2 = Uint8Array;
      let self3 = this;
      let self4 = this;
      set = uint8Array.set;
      let uint8Array1 = new Uint8Array(buffer, byteOffset, bound1);
      let result = set(uint8Array1, sum1);
      if (peekResult.byteLength === bound1) {
        let arr = _queue.shift();
      } else {
        peekResult.byteOffset = peekResult.byteOffset + bound1;
        peekResult.byteLength = peekResult.byteLength - bound1;
      }
      _queueTotalSize._queueTotalSize = _queueTotalSize._queueTotalSize - bound1;
      peekResult1.bytesFilled = peekResult1.bytesFilled + bound1;
      diff1 = diff1 - bound1;
    } while (diff1 > 0);
  }
  return flag;
}
function De(_queueTotalSize) {
  if (0 === _queueTotalSize._queueTotalSize) {
    if (_queueTotalSize._closeRequested) {
      _queueTotalSize._pullAlgorithm = undefined;
      _queueTotalSize._cancelAlgorithm = undefined;
      Br(_queueTotalSize._controlledReadableByteStream);
    }
  }
  Pe(_queueTotalSize);
}
function $e(_associatedReadableByteStreamController, byteLength) {
  let length;
  let length2;
  const _pendingPullIntos = _associatedReadableByteStreamController._pendingPullIntos;
  const peekResult = _pendingPullIntos.peek();
  if (null !== _associatedReadableByteStreamController._byobRequest) {
    _associatedReadableByteStreamController._byobRequest._associatedReadableByteStreamController = undefined;
    _associatedReadableByteStreamController._byobRequest._view = null;
    _associatedReadableByteStreamController._byobRequest = null;
  }
  if ("closed" === _associatedReadableByteStreamController._controlledReadableByteStream._state) {
    if ("none" === peekResult.readerType) {
      const _pendingPullIntos1 = _associatedReadableByteStreamController._pendingPullIntos;
      _pendingPullIntos1.shift();
    }
    const _controlledReadableByteStream4 = _associatedReadableByteStreamController._controlledReadableByteStream;
    const _reader = _controlledReadableByteStream4._reader;
    let tmp41 = undefined !== _reader;
    if (tmp41) {
      let tmp42 = typeof _reader === "object";
      if (typeof _reader === "object") {
        tmp42 = null !== _reader;
      }
      if (!tmp42) {
        tmp42 = typeof _reader === "function";
      }
      let callResult = tmp42;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(_reader, "_readIntoRequests");
      }
      if (callResult) {
        callResult = _reader instanceof _moduleResult3;
      }
      tmp41 = callResult;
    }
    if (tmp41) {
      let num7;
      const items = [];
      if (items.length < _controlledReadableByteStream4._reader._readIntoRequests.length) {
        do {
          let _pendingPullIntos4 = _associatedReadableByteStreamController._pendingPullIntos;
          let arr2 = items.push(_pendingPullIntos4.shift());
          length = items.length;
          length2 = _controlledReadableByteStream4._reader._readIntoRequests.length;
        } while (length < length2);
      }
      for (let num7 = 0; num7 < items.length; num7 = num7 + 1) {
        let tmp47 = items[num7];
        let flag4 = false;
        if ("closed" === _controlledReadableByteStream4._state) {
          flag4 = true;
        }
        let self7 = this;
        let self8 = this;
        let viewConstructor = new tmp47.viewConstructor(tmp47.buffer, tmp47.byteOffset, tmp47.bytesFilled / tmp47.elementSize);
        if ("default" === tmp47.readerType) {
          let _readRequests = _controlledReadableByteStream4._reader._readRequests;
          let arr3 = _readRequests.shift();
          if (flag4) {
            let _closeStepsResult = arr3._closeSteps();
          } else {
            let _chunkStepsResult = arr3._chunkSteps(viewConstructor);
          }
        } else {
          let _readIntoRequests = _controlledReadableByteStream4._reader._readIntoRequests;
          let arr4 = _readIntoRequests.shift();
          if (flag4) {
            let _closeStepsResult1 = arr4._closeSteps(viewConstructor);
          } else {
            let _chunkStepsResult1 = arr4._chunkSteps(viewConstructor);
          }
        }
      }
    }
  } else {
    peekResult.bytesFilled = peekResult.bytesFilled + byteLength;
    if ("none" !== peekResult.readerType) {
      if (peekResult.bytesFilled >= peekResult.minimumFill) {
        let num6;
        const _pendingPullIntos5 = _associatedReadableByteStreamController._pendingPullIntos;
        _pendingPullIntos5.shift();
        const result = peekResult.bytesFilled % peekResult.elementSize;
        if (result > 0) {
          je(_associatedReadableByteStreamController, peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled - result, result);
        }
        peekResult.bytesFilled = peekResult.bytesFilled - result;
        const items1 = [];
        if (_associatedReadableByteStreamController._pendingPullIntos.length > 0) {
          if (0 !== _associatedReadableByteStreamController._queueTotalSize) {
            while (true) {
              let _pendingPullIntos3 = _associatedReadableByteStreamController._pendingPullIntos;
              let peekResult1 = _pendingPullIntos3.peek();
              if (Ae(_associatedReadableByteStreamController, peekResult1)) {
                let _pendingPullIntos6 = _associatedReadableByteStreamController._pendingPullIntos;
                let arr6 = _pendingPullIntos6.shift();
                let arr7 = items1.push(peekResult1);
              }
              if (_associatedReadableByteStreamController._pendingPullIntos.length <= 0) {
                break;
              } else if (0 === _associatedReadableByteStreamController._queueTotalSize) {
                break;
              }
            }
          }
        }
        const _controlledReadableByteStream2 = _associatedReadableByteStreamController._controlledReadableByteStream;
        let flag2 = false;
        if ("closed" === _controlledReadableByteStream2._state) {
          flag2 = true;
        }
        const self3 = this;
        const self4 = this;
        const viewConstructor1 = new peekResult.viewConstructor(peekResult.buffer, peekResult.byteOffset, peekResult.bytesFilled / peekResult.elementSize);
        if ("default" === peekResult.readerType) {
          const _readRequests1 = _controlledReadableByteStream2._reader._readRequests;
          const arr8 = _readRequests1.shift();
          if (flag2) {
            arr8._closeSteps();
          } else {
            arr8._chunkSteps(viewConstructor1);
          }
        } else {
          const _readIntoRequests1 = _controlledReadableByteStream2._reader._readIntoRequests;
          const arr9 = _readIntoRequests1.shift();
          if (flag2) {
            arr9._closeSteps(viewConstructor1);
          } else {
            arr9._chunkSteps(viewConstructor1);
          }
        }
        const _controlledReadableByteStream3 = _associatedReadableByteStreamController._controlledReadableByteStream;
        for (let num6 = 0; num6 < items1.length; num6 = num6 + 1) {
          let tmp32 = items1[num6];
          let flag3 = false;
          if ("closed" === _controlledReadableByteStream3._state) {
            flag3 = true;
          }
          let self5 = this;
          let self6 = this;
          let viewConstructor2 = new tmp32.viewConstructor(tmp32.buffer, tmp32.byteOffset, tmp32.bytesFilled / tmp32.elementSize);
          if ("default" === tmp32.readerType) {
            let _readRequests2 = _controlledReadableByteStream3._reader._readRequests;
            let arr10 = _readRequests2.shift();
            if (flag3) {
              let _closeStepsResult4 = arr10._closeSteps();
            } else {
              let _chunkStepsResult4 = arr10._chunkSteps(viewConstructor2);
            }
          } else {
            let _readIntoRequests2 = _controlledReadableByteStream3._reader._readIntoRequests;
            let arr11 = _readIntoRequests2.shift();
            if (flag3) {
              let _closeStepsResult5 = arr11._closeSteps(viewConstructor2);
            } else {
              let _chunkStepsResult5 = arr11._chunkSteps(viewConstructor2);
            }
          }
        }
      }
    } else {
      let num3;
      if (peekResult.bytesFilled > 0) {
        je(_associatedReadableByteStreamController, peekResult.buffer, peekResult.byteOffset, peekResult.bytesFilled);
      }
      const _pendingPullIntos7 = _associatedReadableByteStreamController._pendingPullIntos;
      _pendingPullIntos7.shift();
      const items2 = [];
      if (_associatedReadableByteStreamController._pendingPullIntos.length > 0) {
        if (0 !== _associatedReadableByteStreamController._queueTotalSize) {
          while (true) {
            let _pendingPullIntos2 = _associatedReadableByteStreamController._pendingPullIntos;
            let peekResult2 = _pendingPullIntos2.peek();
            if (Ae(_associatedReadableByteStreamController, peekResult2)) {
              let _pendingPullIntos8 = _associatedReadableByteStreamController._pendingPullIntos;
              let arr13 = _pendingPullIntos8.shift();
              let arr14 = items2.push(peekResult2);
            }
            if (_associatedReadableByteStreamController._pendingPullIntos.length <= 0) {
              break;
            } else if (0 === _associatedReadableByteStreamController._queueTotalSize) {
              break;
            }
          }
        }
      }
      const _controlledReadableByteStream = _associatedReadableByteStreamController._controlledReadableByteStream;
      for (let num3 = 0; num3 < items2.length; num3 = num3 + 1) {
        let tmp10 = items2[num3];
        let flag = false;
        if ("closed" === _controlledReadableByteStream._state) {
          flag = true;
        }
        let self = this;
        let self2 = this;
        let viewConstructor3 = new tmp10.viewConstructor(tmp10.buffer, tmp10.byteOffset, tmp10.bytesFilled / tmp10.elementSize);
        if ("default" === tmp10.readerType) {
          let _readRequests3 = _controlledReadableByteStream._reader._readRequests;
          let arr15 = _readRequests3.shift();
          if (flag) {
            let _closeStepsResult6 = arr15._closeSteps();
          } else {
            let _chunkStepsResult6 = arr15._chunkSteps(viewConstructor3);
          }
        } else {
          let _readIntoRequests3 = _controlledReadableByteStream._reader._readIntoRequests;
          let arr16 = _readIntoRequests3.shift();
          if (flag) {
            let _closeStepsResult7 = arr16._closeSteps(viewConstructor3);
          } else {
            let _chunkStepsResult7 = arr16._chunkSteps(viewConstructor3);
          }
        }
      }
    }
  }
  Pe(_associatedReadableByteStreamController);
}
function Qe(self) {
  const _controlledReadableByteStream = self._controlledReadableByteStream;
  if (!self._closeRequested) {
    if ("readable" === _controlledReadableByteStream._state) {
      if (self._queueTotalSize > 0) {
        self._closeRequested = true;
      } else {
        if (self._pendingPullIntos.length > 0) {
          const _pendingPullIntos = self._pendingPullIntos;
          const peekResult = _pendingPullIntos.peek();
          if (peekResult.bytesFilled % peekResult.elementSize != 0) {
            const _TypeError = TypeError;
            self = this;
            const self2 = this;
            const typeError = new TypeError("Insufficient bytes to fill elements in the given buffer");
            const _controlledReadableByteStream2 = self._controlledReadableByteStream;
            if ("readable" === _controlledReadableByteStream2._state) {
              if (null !== self._byobRequest) {
                self._byobRequest._associatedReadableByteStreamController = undefined;
                self._byobRequest._view = null;
                self._byobRequest = null;
              }
              const self3 = this;
              const self4 = this;
              self._pendingPullIntos = new closure_15();
              const self5 = this;
              const self6 = this;
              const tmp9 = new closure_15();
              self._queue = new closure_15();
              self._queueTotalSize = 0;
              self._pullAlgorithm = undefined;
              self._cancelAlgorithm = undefined;
              const tmp11 = new closure_15();
              jr(_controlledReadableByteStream2, typeError);
            }
            throw typeError;
          }
        }
        self._pullAlgorithm = undefined;
        self._cancelAlgorithm = undefined;
        Br(_controlledReadableByteStream);
      }
    }
  }
}
function xe(self, byteLength) {
  let buffer;
  let byteOffset;
  const _controlledReadableByteStream = self._controlledReadableByteStream;
  if (!self._closeRequested) {
    if ("readable" === _controlledReadableByteStream._state) {
      ({ buffer, byteOffset, byteLength } = byteLength);
      if (fn(buffer)) {
        const _TypeError2 = TypeError;
        const self9 = this;
        const self10 = this;
        const typeError = new TypeError("chunk's buffer is detached and so cannot be enqueued");
        throw typeError;
      } else {
        const tmp2 = fn(buffer);
        if (self._pendingPullIntos.length > 0) {
          const _pendingPullIntos2 = self._pendingPullIntos;
          const peekResult = _pendingPullIntos2.peek();
          if (fn(peekResult.buffer)) {
            const _TypeError = TypeError;
            const self7 = this;
            const self8 = this;
            const typeError1 = new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
            throw typeError1;
          } else {
            if (null !== self._byobRequest) {
              self._byobRequest._associatedReadableByteStreamController = undefined;
              self._byobRequest._view = null;
              self._byobRequest = null;
            }
            peekResult.buffer = fn(peekResult.buffer);
            if ("none" === peekResult.readerType) {
              if (peekResult.bytesFilled > 0) {
                je(self, peekResult.buffer, peekResult.byteOffset, peekResult.bytesFilled);
              }
              const _pendingPullIntos1 = self._pendingPullIntos;
              _pendingPullIntos1.shift();
            }
          }
        }
        const _reader = _controlledReadableByteStream._reader;
        let tmp9 = undefined !== _reader;
        if (tmp9) {
          let tmp10 = typeof _reader === "object";
          if (typeof _reader === "object") {
            tmp10 = null !== _reader;
          }
          if (!tmp10) {
            tmp10 = typeof _reader === "function";
          }
          let callResult = tmp10;
          if (callResult) {
            const _Object = Object;
            hasOwnProperty = Object.prototype.hasOwnProperty;
            callResult = hasOwnProperty.call(_reader, "_readRequests");
          }
          if (callResult) {
            callResult = _reader instanceof c29;
          }
          tmp9 = callResult;
        }
        if (tmp9) {
          const _reader3 = self._controlledReadableByteStream._reader;
          if (_reader3._readRequests.length > 0) {
            while (0 !== self._queueTotalSize) {
              let _readRequests = _reader3._readRequests;
              let arr2 = _readRequests.shift();
              let _queue = self._queue;
              let arr3 = _queue.shift();
              self._queueTotalSize = self._queueTotalSize - arr3.byteLength;
              if (0 === self._queueTotalSize) {
                if (self._closeRequested) {
                  self._pullAlgorithm = undefined;
                  self._cancelAlgorithm = undefined;
                  let tmp36 = Br(self._controlledReadableByteStream);
                  let _Uint8Array = Uint8Array;
                  let self3 = this;
                  let self4 = this;
                  let uint8Array = new Uint8Array(arr3.buffer, arr3.byteOffset, arr3.byteLength);
                  let _chunkStepsResult = arr2._chunkSteps(uint8Array);
                  if (_reader3._readRequests.length <= 0) {
                    break;
                  }
                }
              }
              let tmp34 = Pe(self);
            }
          }
          if (0 === _controlledReadableByteStream._reader._readRequests.length) {
            const _queue1 = self._queue;
            const obj2 = { buffer: tmp2, byteOffset, byteLength };
            _queue1.push(obj2);
            self._queueTotalSize = self._queueTotalSize + byteLength;
          } else {
            if (self._pendingPullIntos.length > 0) {
              const _pendingPullIntos3 = self._pendingPullIntos;
              _pendingPullIntos3.shift();
            }
            const _Uint8Array2 = Uint8Array;
            const self5 = this;
            const self6 = this;
            const uint8Array1 = new Uint8Array(tmp2, byteOffset, byteLength);
            const _readRequests1 = _controlledReadableByteStream._reader._readRequests;
            const arr6 = _readRequests1.shift();
            arr6._chunkSteps(uint8Array1);
          }
        } else {
          const _reader2 = _controlledReadableByteStream._reader;
          let tmp14 = undefined !== _reader2;
          if (tmp14) {
            let tmp15 = typeof _reader2 === "object";
            if (typeof _reader2 === "object") {
              tmp15 = null !== _reader2;
            }
            if (!tmp15) {
              tmp15 = typeof _reader2 === "function";
            }
            let callResult1 = tmp15;
            if (callResult1) {
              const _Object2 = Object;
              const hasOwnProperty2 = Object.prototype.hasOwnProperty;
              callResult1 = hasOwnProperty2.call(_reader2, "_readIntoRequests");
            }
            if (callResult1) {
              callResult1 = _reader2 instanceof _moduleResult3;
            }
            tmp14 = callResult1;
          }
          const _queue2 = self._queue;
          const obj = { buffer: tmp2, byteOffset, byteLength };
          _queue2.push(obj);
          self._queueTotalSize = self._queueTotalSize + byteLength;
          if (tmp14) {
            let num4;
            const items = [];
            if (self._pendingPullIntos.length > 0) {
              if (0 !== self._queueTotalSize) {
                while (true) {
                  let _pendingPullIntos = self._pendingPullIntos;
                  let peekResult1 = _pendingPullIntos.peek();
                  if (Ae(self, peekResult1)) {
                    let _pendingPullIntos4 = self._pendingPullIntos;
                    let arr8 = _pendingPullIntos4.shift();
                    let arr9 = items.push(peekResult1);
                  }
                  if (self._pendingPullIntos.length <= 0) {
                    break;
                  } else if (0 === self._queueTotalSize) {
                    break;
                  }
                }
              }
            }
            for (let num4 = 0; num4 < items.length; num4 = num4 + 1) {
              let tmp24 = items[num4];
              let flag = false;
              if ("closed" === _controlledReadableByteStream._state) {
                flag = true;
              }
              self = this;
              let self2 = this;
              let viewConstructor = new tmp24.viewConstructor(tmp24.buffer, tmp24.byteOffset, tmp24.bytesFilled / tmp24.elementSize);
              if ("default" === tmp24.readerType) {
                let _readRequests2 = _controlledReadableByteStream._reader._readRequests;
                let arr10 = _readRequests2.shift();
                if (flag) {
                  let _closeStepsResult = arr10._closeSteps();
                } else {
                  let _chunkStepsResult2 = arr10._chunkSteps(viewConstructor);
                }
              } else {
                let _readIntoRequests = _controlledReadableByteStream._reader._readIntoRequests;
                let arr11 = _readIntoRequests.shift();
                if (flag) {
                  let _closeStepsResult1 = arr11._closeSteps(viewConstructor);
                } else {
                  let _chunkStepsResult3 = arr11._chunkSteps(viewConstructor);
                }
              }
            }
          }
        }
        Pe(self);
      }
    }
  }
}
function Ne(_controlledReadableByteStream, typeError) {
  _controlledReadableByteStream = _controlledReadableByteStream._controlledReadableByteStream;
  if ("readable" === _controlledReadableByteStream._state) {
    if (null !== _controlledReadableByteStream._byobRequest) {
      _controlledReadableByteStream._byobRequest._associatedReadableByteStreamController = undefined;
      _controlledReadableByteStream._byobRequest._view = null;
      _controlledReadableByteStream._byobRequest = null;
    }
    const self = this;
    const self2 = this;
    _controlledReadableByteStream._pendingPullIntos = new closure_15();
    const self3 = this;
    const self4 = this;
    const tmp3 = new closure_15();
    _controlledReadableByteStream._queue = new closure_15();
    _controlledReadableByteStream._queueTotalSize = 0;
    _controlledReadableByteStream._pullAlgorithm = undefined;
    _controlledReadableByteStream._cancelAlgorithm = undefined;
    const tmp5 = new closure_15();
    jr(_controlledReadableByteStream, typeError);
  }
}
function He(_queue, _chunkSteps) {
  _queue = _queue._queue;
  const arr = _queue.shift();
  _queue._queueTotalSize = _queue._queueTotalSize - arr.byteLength;
  if (0 === _queue._queueTotalSize) {
    if (_queue._closeRequested) {
      _queue._pullAlgorithm = undefined;
      _queue._cancelAlgorithm = undefined;
      Br(_queue._controlledReadableByteStream);
    }
    const _Uint8Array = Uint8Array;
    const self = this;
    const self2 = this;
    const uint8Array = new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
    _chunkSteps._chunkSteps(uint8Array);
  }
  Pe(_queue);
}
function Xe(_associatedReadableByteStreamController, byteLength) {
  const _pendingPullIntos = _associatedReadableByteStreamController._pendingPullIntos;
  const peekResult = _pendingPullIntos.peek();
  if ("closed" === _associatedReadableByteStreamController._controlledReadableByteStream._state) {
    if (0 !== byteLength.byteLength) {
      const _TypeError2 = TypeError;
      const self9 = this;
      const self10 = this;
      const typeError = new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
      throw typeError;
    }
  } else if (0 === byteLength.byteLength) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError1 = new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
    throw typeError1;
  }
  if (peekResult.byteOffset + peekResult.bytesFilled !== byteLength.byteOffset) {
    const _RangeError3 = RangeError;
    const self7 = this;
    const self8 = this;
    const rangeError = new RangeError("The region specified by view does not match byobRequest");
    throw rangeError;
  } else if (peekResult.bufferByteLength !== byteLength.buffer.byteLength) {
    const _RangeError2 = RangeError;
    const self5 = this;
    const self6 = this;
    const rangeError1 = new RangeError("The buffer of view has different capacity than byobRequest");
    throw rangeError1;
  } else if (peekResult.bytesFilled + byteLength.byteLength > peekResult.byteLength) {
    const _RangeError = RangeError;
    const self3 = this;
    const self4 = this;
    const rangeError2 = new RangeError("The region specified by view is larger than byobRequest");
    throw rangeError2;
  } else {
    byteLength = byteLength.byteLength;
    peekResult.buffer = fn(byteLength.buffer);
    $e(_associatedReadableByteStreamController, byteLength);
  }
}
function Je(_controlledReadableByteStream, _readableStreamController, T, fn2, _cancelAlgorithm, _strategyHWM, _autoAllocateChunkSize) {
  _readableStreamController._controlledReadableByteStream = _controlledReadableByteStream;
  _readableStreamController._pullAgain = false;
  _readableStreamController._pulling = false;
  _readableStreamController._byobRequest = null;
  _readableStreamController._queueTotalSize = undefined;
  _readableStreamController._queue = undefined;
  _readableStreamController._queue = new closure_15();
  _readableStreamController._queueTotalSize = 0;
  _readableStreamController._closeRequested = false;
  _readableStreamController._started = false;
  _readableStreamController._strategyHWM = _strategyHWM;
  _readableStreamController._pullAlgorithm = fn2;
  _readableStreamController._cancelAlgorithm = _cancelAlgorithm;
  _readableStreamController._autoAllocateChunkSize = _autoAllocateChunkSize;
  const tmp = new closure_15();
  _readableStreamController._pendingPullIntos = new closure_15();
  _controlledReadableByteStream._readableStreamController = _readableStreamController;
  const tmp2 = new closure_15();
  _readableStreamController = T();
  const tmp3 = new Promise((fn) => fn(c0));
  then.call(then.call(tmp3, () => {
    _readableStreamController._started = true;
    Pe(_readableStreamController);
    return null;
  }, function(typeError) {
    const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
    if ("readable" === _controlledReadableByteStream._state) {
      if (null !== _readableStreamController._byobRequest) {
        _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
        _readableStreamController._byobRequest._view = null;
        _readableStreamController._byobRequest = null;
      }
      const self = this;
      const self2 = this;
      _readableStreamController._pendingPullIntos = new closure_15();
      const self3 = this;
      const self4 = this;
      const tmp4 = new closure_15();
      _readableStreamController._queue = new closure_15();
      _readableStreamController._queueTotalSize = 0;
      _readableStreamController._pullAlgorithm = undefined;
      _readableStreamController._cancelAlgorithm = undefined;
      const tmp6 = new closure_15();
      jr(_controlledReadableByteStream, typeError);
    }
    return null;
  }), undefined, fn);
}
function rt(_reader, arg1) {
  const _readIntoRequests = _reader._reader._readIntoRequests;
  _readIntoRequests.push(arg1);
}
function at(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  let callResult = tmp;
  if (callResult) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    callResult = hasOwnProperty.call(obj, "_readIntoRequests");
  }
  if (callResult) {
    callResult = obj instanceof _moduleResult3;
  }
  return callResult;
}
function it(_ownerReadableStream, buffer, arg2, _errorSteps) {
  _ownerReadableStream = _ownerReadableStream._ownerReadableStream;
  _ownerReadableStream._disturbed = true;
  if ("errored" === _ownerReadableStream._state) {
    _errorSteps._errorSteps(_ownerReadableStream._storedError);
  } else {
    (function Ie(_readableStreamController, buffer, arg2, _chunkSteps) {
      const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
      const constructor = buffer.constructor;
      const tmp = ((constructor) => {
        let num = 1;
        if (constructor !== DataView) {
          num = constructor.BYTES_PER_ELEMENT;
        }
        return num;
      })(constructor);
      try {
        const tmp6 = closure_1_30(buffer.buffer);
        const obj = { buffer: tmp6, bufferByteLength: tmp6.byteLength, byteOffset: tmp2, byteLength: tmp3, bytesFilled: 0, minimumFill: tmp4, elementSize: tmp, viewConstructor: constructor, readerType: "byob" };
        if (_readableStreamController._pendingPullIntos.length > 0) {
          const _pendingPullIntos = _readableStreamController._pendingPullIntos;
          _pendingPullIntos.push(obj);
          closure_1_59(_controlledReadableByteStream, _chunkSteps);
        } else if ("closed" !== _controlledReadableByteStream._state) {
          if (_readableStreamController._queueTotalSize > 0) {
            if (closure_1_50(_readableStreamController, obj)) {
              const tmp23 = closure_1_47(obj);
              closure_1_51(_readableStreamController);
              _chunkSteps._chunkSteps(tmp23);
            } else if (_readableStreamController._closeRequested) {
              const _TypeError = TypeError;
              const self3 = this;
              const self4 = this;
              const typeError = new TypeError("Insufficient bytes to fill elements in the given buffer");
              closure_1_55(_readableStreamController, typeError);
              _chunkSteps._errorSteps(typeError);
            }
          }
          const _pendingPullIntos1 = _readableStreamController._pendingPullIntos;
          _pendingPullIntos1.push(obj);
          closure_1_59(_controlledReadableByteStream, _chunkSteps);
          closure_1_46(_readableStreamController);
        } else {
          self = this;
          const self2 = this;
          let num = 0;
          const constructor1 = new constructor(obj.buffer, obj.byteOffset, 0);
          _chunkSteps._closeSteps(constructor1);
        }
      } catch (tmp30) {
        _chunkSteps._errorSteps(tmp30);
      }
    })(_ownerReadableStream._readableStreamController, buffer, arg2, _errorSteps);
  }
}
function st(arg0) {
  const typeError = new TypeError("ReadableStreamBYOBReader.prototype." + "read" + " can only be used on a ReadableStreamBYOBReader");
  return typeError;
}
function dt(highWaterMark, arg1) {
  if (undefined !== highWaterMark) {
    if (typeof highWaterMark !== "object") {
      if (typeof highWaterMark !== "function") {
        const _TypeError2 = TypeError;
        const _HermesInternal3 = HermesInternal;
        const self3 = this;
        const self4 = this;
        const typeError = new TypeError("" + arg1 + " is not an object.");
        throw typeError;
      }
    }
  }
  highWaterMark = undefined;
  if (null != highWaterMark) {
    highWaterMark = highWaterMark.highWaterMark;
  }
  size = undefined;
  if (null != highWaterMark) {
    size = highWaterMark.size;
  }
  let NumberResult;
  if (undefined !== highWaterMark) {
    const _Number = Number;
    NumberResult = Number(highWaterMark);
  }
  const obj = { highWaterMark: NumberResult, size: fn };
  fn = undefined;
  if (undefined !== size) {
    const _HermesInternal = HermesInternal;
    if (typeof size !== "function") {
      const _TypeError = TypeError;
      const _HermesInternal2 = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError1 = new TypeError("" + tmp6 + " is not a function.");
      throw typeError1;
    } else {
      fn = (arg0) => Number(size(arg0));
    }
  }
  return obj;
}
function gt(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  let callResult = tmp;
  if (callResult) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    callResult = hasOwnProperty.call(obj, "_writableStreamController");
  }
  if (callResult) {
    callResult = obj instanceof _moduleResult4;
  }
  return callResult;
}
function vt(_writer) {
  return undefined !== _writer._writer;
}
function wt(_ownerWritableStream, _abortReason) {
  let _writableStreamController;
  let _writer;
  let closure_0 = _ownerWritableStream;
  let c1 = _abortReason;
  if ("closed" !== _ownerWritableStream._state) {
    if ("errored" !== _ownerWritableStream._state) {
      _ownerWritableStream._writableStreamController._abortReason = _abortReason;
      const _abortController = _ownerWritableStream._writableStreamController._abortController;
      const tmp = null === _abortController || undefined === _abortController;
      if (!tmp) {
        _abortController.abort(_abortReason);
      }
      const _state = _ownerWritableStream._state;
      if ("closed" !== _state) {
        if ("errored" !== _state) {
          if (undefined !== _ownerWritableStream._pendingAbortRequest) {
            return _ownerWritableStream._pendingAbortRequest._promise;
          } else {
            let flag2 = false;
            let c2 = false;
            if ("erroring" === _state) {
              c2 = true;
              c1 = undefined;
              flag2 = true;
            }
            const self = this;
            const self2 = this;
            const tmp5 = new Promise((_resolve, _reject) => {
              const obj = { _promise: "y", _resolve, _reject, _reason, _wasAlreadyErroring };
              closure_0._pendingAbortRequest = obj;
            });
            _ownerWritableStream._pendingAbortRequest._promise = tmp5;
            if (!flag2) {
              _ownerWritableStream._state = "erroring";
              _ownerWritableStream._storedError = _abortReason;
              ({ _writer, _writableStreamController } = _ownerWritableStream);
              if (undefined !== _writer) {
                kt(_writer, _abortReason);
              }
              const tmp10 = !(undefined !== _ownerWritableStream._inFlightWriteRequest || undefined !== _ownerWritableStream._inFlightCloseRequest) && _writableStreamController._started;
              if (tmp10) {
                Pt(_ownerWritableStream);
              }
            }
            return tmp5;
          }
        }
      }
      const self3 = this;
      const self4 = this;
      const tmp14 = new Promise((fn) => fn(c0));
      return tmp14;
    }
  }
  const tmp16 = new Promise((fn) => fn(c0));
  return tmp16;
}
function Rt(_state) {
  let closure_0 = _state;
  _state = _state._state;
  if ("closed" !== _state) {
    if ("errored" !== _state) {
      const self3 = this;
      const self4 = this;
      const _writer = _state._writer;
      const tmp = undefined !== _writer && _state._backpressure && "writable" === _state;
      const tmp13 = new Promise((_resolve, _reject) => {
        const obj = { _resolve, _reject };
        closure_0._closeRequest = obj;
      });
      if (tmp) {
        if (undefined !== _writer._readyPromise_resolve) {
          const result = _writer._readyPromise_resolve(undefined);
          _writer._readyPromise_resolve = undefined;
          _writer._readyPromise_reject = undefined;
          _writer._readyPromiseState = "fulfilled";
        }
      }
      const _writableStreamController = _state._writableStreamController;
      if (typeof 0 === "number") {
        if (!fn4(0)) {
          const _queue = _writableStreamController._queue;
          let obj = { value: tmp3, size: 0 };
          _queue.push(obj);
          _writableStreamController._queueTotalSize = _writableStreamController._queueTotalSize;
          Mt(_writableStreamController);
          return tmp13;
        }
      }
      const _RangeError = RangeError;
      const self = this;
      const self2 = this;
      const rangeError = new RangeError("Size must be a finite, non-NaN, non-negative number.");
      throw rangeError;
    }
  }
  const typeError = new TypeError("The stream (in " + _state + " state) is not in the writable state and cannot be closed");
  return closure_5(typeError);
}
function Pt(_controlledWritableStream) {
  let _pendingAbortRequest;
  _controlledWritableStream._state = "errored";
  const _writableStreamController = _controlledWritableStream._writableStreamController;
  _writableStreamController[SymbolResult1]();
  const _storedError = _controlledWritableStream._storedError;
  const _writeRequests = _controlledWritableStream._writeRequests;
  const item = _writeRequests.forEach((_reject) => {
    _reject._reject(_storedError);
  });
  _controlledWritableStream._writeRequests = new closure_15();
  new closure_15();
  if (undefined !== _controlledWritableStream._pendingAbortRequest) {
    _pendingAbortRequest = _controlledWritableStream._pendingAbortRequest;
    _controlledWritableStream._pendingAbortRequest = undefined;
    if (_pendingAbortRequest._wasAlreadyErroring) {
      _pendingAbortRequest._reject(_storedError);
      if (undefined !== _controlledWritableStream._closeRequest) {
        const _closeRequest2 = _controlledWritableStream._closeRequest;
        _closeRequest2._reject(_controlledWritableStream._storedError);
        _controlledWritableStream._closeRequest = undefined;
      }
      const _writer2 = _controlledWritableStream._writer;
      if (undefined !== _writer2) {
        if (undefined !== _writer2._closedPromise_reject) {
          then.call(_writer2._closedPromise, undefined, _pendingAbortRequest);
          let result = _writer2._closedPromise_reject(tmp9);
          _writer2._closedPromise_resolve = undefined;
          _writer2._closedPromise_reject = undefined;
          _writer2._closedPromiseState = "rejected";
        }
      }
    } else {
      const _writableStreamController2 = _controlledWritableStream._writableStreamController;
      then.call(then.call(_writableStreamController2[c16](_pendingAbortRequest._reason), () => {
        _pendingAbortRequest._resolve();
        if (undefined !== _controlledWritableStream._closeRequest) {
          const _closeRequest = tmp2._closeRequest;
          _closeRequest._reject(_controlledWritableStream._storedError);
          _controlledWritableStream._closeRequest = undefined;
        }
        const _writer = tmp2._writer;
        if (undefined !== _writer) {
          if (undefined !== _writer._closedPromise_reject) {
            then.call(_writer._closedPromise, undefined, fn);
            const result = _writer._closedPromise_reject(tmp4);
            _writer._closedPromise_resolve = undefined;
            _writer._closedPromise_reject = undefined;
            _writer._closedPromiseState = "rejected";
          }
        }
        return null;
      }, (arg0) => {
        _pendingAbortRequest._reject(arg0);
        if (undefined !== _controlledWritableStream._closeRequest) {
          const _closeRequest = tmp2._closeRequest;
          _closeRequest._reject(_controlledWritableStream._storedError);
          _controlledWritableStream._closeRequest = undefined;
        }
        const _writer = tmp2._writer;
        if (undefined !== _writer) {
          if (undefined !== _writer._closedPromise_reject) {
            then.call(_writer._closedPromise, undefined, fn);
            const result = _writer._closedPromise_reject(tmp4);
            _writer._closedPromise_resolve = undefined;
            _writer._closedPromise_reject = undefined;
            _writer._closedPromiseState = "rejected";
          }
        }
        return null;
      }), undefined, _pendingAbortRequest);
    }
  } else {
    if (undefined !== _controlledWritableStream._closeRequest) {
      let _closeRequest = _controlledWritableStream._closeRequest;
      _closeRequest._reject(_controlledWritableStream._storedError);
      _controlledWritableStream._closeRequest = undefined;
    }
    let _writer = _controlledWritableStream._writer;
    if (undefined !== _writer) {
      if (undefined !== _writer._closedPromise_reject) {
        then.call(_writer._closedPromise, undefined, _pendingAbortRequest);
        const result1 = _writer._closedPromise_reject(tmp11);
        _writer._closedPromise_resolve = undefined;
        _writer._closedPromise_reject = undefined;
        _writer._closedPromiseState = "rejected";
      }
    }
  }
}
function qt(_closeRequest) {
  return undefined !== _closeRequest._closeRequest || undefined !== _closeRequest._inFlightCloseRequest;
}
function Wt(_writer, _backpressure) {
  _writer = _writer._writer;
  const tmp = undefined !== _writer && _backpressure !== _writer._backpressure;
  if (tmp) {
    if (_backpressure) {
      const self = this;
      const self2 = this;
      _writer._readyPromise = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
        _writer._readyPromise_resolve = _readyPromise_resolve;
        _writer._readyPromise_reject = _readyPromise_reject;
      });
      _writer._readyPromiseState = "pending";
      const tmp4 = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
        _writer._readyPromise_resolve = _readyPromise_resolve;
        _writer._readyPromise_reject = _readyPromise_reject;
      });
    } else if (undefined !== _writer._readyPromise_resolve) {
      const result = _writer._readyPromise_resolve(undefined);
      _writer._readyPromise_resolve = undefined;
      _writer._readyPromise_reject = undefined;
      _writer._readyPromiseState = "fulfilled";
    }
  }
  _writer._backpressure = _backpressure;
}
function kt(_writer, typeError) {
  if ("pending" === _writer._readyPromiseState) {
    if (undefined !== _writer._readyPromise_reject) {
      then.call(_writer._readyPromise, undefined, fn);
      _writer._readyPromise_reject(typeError);
      _writer._readyPromise_resolve = undefined;
      _writer._readyPromise_reject = undefined;
      _writer._readyPromiseState = "rejected";
    }
  } else {
    let closure_0 = _writer;
    const self = this;
    const self2 = this;
    _writer._readyPromise = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
      _writer._readyPromise_resolve = _readyPromise_resolve;
      _writer._readyPromise_reject = _readyPromise_reject;
    });
    _writer._readyPromiseState = "pending";
    const tmp4 = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
      _writer._readyPromise_resolve = _readyPromise_resolve;
      _writer._readyPromise_reject = _readyPromise_reject;
    });
    if (undefined !== _writer._readyPromise_reject) {
      then.call(_writer._readyPromise, undefined, fn);
      _writer._readyPromise_reject(typeError);
      _writer._readyPromise_resolve = undefined;
      _writer._readyPromise_reject = undefined;
      _writer._readyPromiseState = "rejected";
    }
  }
}
function At(_ownerWritableStream) {
  _ownerWritableStream = _ownerWritableStream._ownerWritableStream;
  const typeError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
  kt(_ownerWritableStream, typeError);
  if ("pending" === _ownerWritableStream._closedPromiseState) {
    if (undefined !== _ownerWritableStream._closedPromise_reject) {
      then.call(_ownerWritableStream._closedPromise, undefined, fn);
      const result = _ownerWritableStream._closedPromise_reject(typeError);
      _ownerWritableStream._closedPromise_resolve = undefined;
      _ownerWritableStream._closedPromise_reject = undefined;
      _ownerWritableStream._closedPromiseState = "rejected";
    }
  } else {
    let closure_0 = _ownerWritableStream;
    const self = this;
    const self2 = this;
    _ownerWritableStream._closedPromise = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      self._closedPromise_resolve = _closedPromise_resolve;
      self._closedPromise_reject = _closedPromise_reject;
      self._closedPromiseState = "pending";
    });
    const tmp6 = new Promise((_closedPromise_resolve, _closedPromise_reject) => {
      self._closedPromise_resolve = _closedPromise_resolve;
      self._closedPromise_reject = _closedPromise_reject;
      self._closedPromiseState = "pending";
    });
    if (undefined !== _ownerWritableStream._closedPromise_reject) {
      then.call(_ownerWritableStream._closedPromise, undefined, fn);
      const result1 = _ownerWritableStream._closedPromise_reject(typeError);
      _ownerWritableStream._closedPromise_resolve = undefined;
      _ownerWritableStream._closedPromise_reject = undefined;
      _ownerWritableStream._closedPromiseState = "rejected";
    }
  }
  _ownerWritableStream._writer = undefined;
  _ownerWritableStream._ownerWritableStream = undefined;
}
function zt(self, arg1) {
  const _ownerWritableStream = self._ownerWritableStream;
  const _writableStreamController = _ownerWritableStream._writableStreamController;
  if (_ownerWritableStream !== self._ownerWritableStream) {
    const _TypeError2 = TypeError;
    const self5 = this;
    const self6 = this;
    const typeError = new TypeError("Cannot write to a stream using a released writer");
    return closure_5(typeError);
  } else {
    const _state = _ownerWritableStream._state;
    if ("errored" === _state) {
      const tmp12 = closure_5;
      return closure_5(_ownerWritableStream._storedError);
    } else {
      const tmp2 = undefined !== _ownerWritableStream._closeRequest || undefined !== _ownerWritableStream._inFlightCloseRequest;
      if (!tmp2) {
        if ("closed" !== _state) {
          if ("erroring" === _state) {
            return closure_5(_ownerWritableStream._storedError);
          } else {
            self = this;
            const self2 = this;
            const tmp4 = new Promise((_resolve, _reject) => {
              const _writeRequests = _ownerWritableStream._writeRequests;
              const obj = { _resolve, _reject };
              _writeRequests.push(obj);
            });
            ((_writableStreamController, arg1, arg2) => {
              try {
                ve(_writableStreamController, arg1, arg2);
                const _controlledWritableStream = _writableStreamController._controlledWritableStream;
                const tmp6 = qt(_controlledWritableStream) || "writable" !== _controlledWritableStream._state;
                if (!tmp6) {
                  Wt(_controlledWritableStream, Qt(_writableStreamController));
                }
                Mt(_writableStreamController);
              } catch (tmp12) {
                Yt(_writableStreamController, tmp12);
              }
            })(_writableStreamController, arg1, tmp);
            let tmp6 = tmp4;
            return tmp4;
          }
        }
      }
      const _TypeError = TypeError;
      const self3 = this;
      const self4 = this;
      const typeError1 = new TypeError("The stream is closing or closed and cannot be written to");
      return closure_5(typeError1);
    }
  }
}
function Ft(_controlledWritableStream, _writableStreamController, fn, _writeAlgorithm, _closeAlgorithm, _abortAlgorithm, _strategyHWM, _strategySizeAlgorithm) {
  let _state = _controlledWritableStream;
  let closure_1 = _writableStreamController;
  _writableStreamController._controlledWritableStream = _controlledWritableStream;
  _controlledWritableStream._writableStreamController = _writableStreamController;
  _writableStreamController._queue = undefined;
  _writableStreamController._queueTotalSize = undefined;
  const tmp = new closure_15();
  _writableStreamController._queue = tmp;
  _writableStreamController._queueTotalSize = 0;
  _writableStreamController._abortReason = undefined;
  let abortController;
  if (typeof AbortController === "function") {
    const _AbortController = AbortController;
    const self3 = this;
    const self4 = this;
    abortController = new AbortController();
  }
  _writableStreamController._abortController = abortController;
  _writableStreamController._started = false;
  _writableStreamController._strategySizeAlgorithm = _strategySizeAlgorithm;
  _writableStreamController._strategyHWM = _strategyHWM;
  _writableStreamController._writeAlgorithm = _writeAlgorithm;
  _writableStreamController._closeAlgorithm = _closeAlgorithm;
  _writableStreamController._abortAlgorithm = _abortAlgorithm;
  let _writer = _controlledWritableStream._writer;
  const tmp4 = undefined !== _writer && _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0 !== _controlledWritableStream._backpressure;
  if (tmp4) {
    if (_writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0) {
      let tmp6 = Promise;
      const self = this;
      const self2 = this;
      const tmp7 = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
        _writer._readyPromise_resolve = _readyPromise_resolve;
        _writer._readyPromise_reject = _readyPromise_reject;
      });
      _writer._readyPromise = tmp7;
      _writer._readyPromiseState = "pending";
    } else if (undefined !== _writer._readyPromise_resolve) {
      const result = _writer._readyPromise_resolve(undefined);
      _writer._readyPromise_resolve = undefined;
      _writer._readyPromise_reject = undefined;
      _writer._readyPromiseState = "fulfilled";
    }
  }
  _controlledWritableStream._backpressure = _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0;
  _state = fn();
  const tmp9 = new Promise((fn) => fn(c0));
  then.call(then.call(tmp9, () => {
    _writableStreamController._started = true;
    Mt(_writableStreamController);
    return null;
  }, (_storedError) => {
    closure_1._started = true;
    if ("writable" !== _state._state) {
      Pt(_state);
    } else {
      _state._state = "erroring";
      _state._storedError = _storedError;
      const _writer = tmp._writer;
      _writableStreamController = tmp._writableStreamController;
      if (undefined !== _writer) {
        kt(_writer, _storedError);
      }
      const tmp6 = !(undefined !== _state._inFlightWriteRequest || undefined !== _state._inFlightCloseRequest) && _writableStreamController._started;
      if (tmp6) {
        Pt(_state);
      }
    }
    return null;
  }), undefined, fn);
}
function Mt(_writableStreamController) {
  const _controlledWritableStream = _writableStreamController._controlledWritableStream;
  if (_writableStreamController._started) {
    if (undefined === _controlledWritableStream._inFlightWriteRequest) {
      if ("erroring" !== _controlledWritableStream._state) {
        if (0 !== _writableStreamController._queue.length) {
          let _queue = _writableStreamController._queue;
          const value2 = _queue.peek().value;
          if (value2 === closure_77) {
            const _controlledWritableStream2 = _writableStreamController._controlledWritableStream;
            _controlledWritableStream2._inFlightCloseRequest = _controlledWritableStream2._closeRequest;
            _controlledWritableStream2._closeRequest = undefined;
            const _queue1 = _writableStreamController._queue;
            const iter = _queue1.shift();
            _writableStreamController._queueTotalSize = _writableStreamController._queueTotalSize - iter.size;
            if (_writableStreamController._queueTotalSize < 0) {
              _writableStreamController._queueTotalSize = 0;
            }
            const value = iter.value;
            _writableStreamController._writeAlgorithm = undefined;
            _writableStreamController._closeAlgorithm = undefined;
            _writableStreamController._abortAlgorithm = undefined;
            _writableStreamController._strategySizeAlgorithm = undefined;
            then.call(then.call(_writableStreamController._closeAlgorithm(), () => {
              const _inFlightCloseRequest = _controlledWritableStream2._inFlightCloseRequest;
              _inFlightCloseRequest._resolve(undefined);
              _controlledWritableStream2._inFlightCloseRequest = undefined;
              if ("erroring" === _controlledWritableStream2._state) {
                _controlledWritableStream2._storedError = undefined;
                if (undefined !== _controlledWritableStream2._pendingAbortRequest) {
                  const _pendingAbortRequest = tmp._pendingAbortRequest;
                  _pendingAbortRequest._resolve();
                  _controlledWritableStream2._pendingAbortRequest = undefined;
                }
              }
              _controlledWritableStream2._state = "closed";
              const _writer = tmp._writer;
              if (undefined !== _writer) {
                if (undefined !== _writer._closedPromise_resolve) {
                  const result = _writer._closedPromise_resolve(undefined);
                  _writer._closedPromise_resolve = undefined;
                  _writer._closedPromise_reject = undefined;
                  _writer._closedPromiseState = "resolved";
                }
              }
              return null;
            }, (_storedError) => {
              let _writer;
              const _inFlightCloseRequest = _controlledWritableStream2._inFlightCloseRequest;
              _inFlightCloseRequest._reject(_storedError);
              _controlledWritableStream2._inFlightCloseRequest = undefined;
              if (undefined !== _controlledWritableStream2._pendingAbortRequest) {
                const _pendingAbortRequest = tmp._pendingAbortRequest;
                _pendingAbortRequest._reject(_storedError);
                _controlledWritableStream2._pendingAbortRequest = undefined;
              }
              if ("writable" !== _controlledWritableStream2._state) {
                Pt(_controlledWritableStream2);
              } else {
                _controlledWritableStream2._state = "erroring";
                _controlledWritableStream2._storedError = _storedError;
                ({ _writer, _writableStreamController } = _controlledWritableStream2);
                if (undefined !== _writer) {
                  kt(_writer, _storedError);
                }
                const tmp7 = !(undefined !== _controlledWritableStream2._inFlightWriteRequest || undefined !== _controlledWritableStream2._inFlightCloseRequest) && _writableStreamController._started;
                if (tmp7) {
                  Pt(_controlledWritableStream2);
                }
              }
              return null;
            }), undefined, fn);
          } else {
            const _controlledWritableStream3 = _writableStreamController._controlledWritableStream;
            const _writeRequests = _controlledWritableStream3._writeRequests;
            _controlledWritableStream3._inFlightWriteRequest = _writeRequests.shift();
            then.call(then.call(_writableStreamController._writeAlgorithm(value2), function() {
              const _inFlightWriteRequest = _controlledWritableStream3._inFlightWriteRequest;
              _inFlightWriteRequest._resolve(undefined);
              _controlledWritableStream3._inFlightWriteRequest = undefined;
              const _queue = _writableStreamController._queue;
              const _state = _controlledWritableStream3._state;
              _writableStreamController._queueTotalSize = _writableStreamController._queueTotalSize - _queue.shift().size;
              _queue.shift();
              if (_writableStreamController._queueTotalSize < 0) {
                _writableStreamController._queueTotalSize = 0;
              }
              const tmp5 = undefined !== _controlledWritableStream3._closeRequest || undefined !== _controlledWritableStream3._inFlightCloseRequest;
              if (!tmp5) {
                if ("writable" === _state) {
                  const _writer = tmp._writer;
                  const tmp6 = undefined !== _writer && _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0 !== _controlledWritableStream3._backpressure;
                  if (tmp6) {
                    if (_writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0) {
                      const self = this;
                      const self2 = this;
                      _writer._readyPromise = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
                        _writer._readyPromise_resolve = _readyPromise_resolve;
                        _writer._readyPromise_reject = _readyPromise_reject;
                      });
                      _writer._readyPromiseState = "pending";
                      const tmp9 = new Promise((_readyPromise_resolve, _readyPromise_reject) => {
                        _writer._readyPromise_resolve = _readyPromise_resolve;
                        _writer._readyPromise_reject = _readyPromise_reject;
                      });
                    } else if (undefined !== _writer._readyPromise_resolve) {
                      const result = _writer._readyPromise_resolve(undefined);
                      _writer._readyPromise_resolve = undefined;
                      _writer._readyPromise_reject = undefined;
                      _writer._readyPromiseState = "fulfilled";
                    }
                  }
                  _controlledWritableStream3._backpressure = _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize <= 0;
                }
              }
              Mt(_writableStreamController);
              return null;
            }, (_storedError) => {
              let _writer;
              if ("writable" === _controlledWritableStream3._state) {
                closure_0._writeAlgorithm = undefined;
                closure_0._closeAlgorithm = undefined;
                closure_0._abortAlgorithm = undefined;
                closure_0._strategySizeAlgorithm = undefined;
              }
              const _inFlightWriteRequest = tmp._inFlightWriteRequest;
              _inFlightWriteRequest._reject(_storedError);
              _controlledWritableStream3._inFlightWriteRequest = undefined;
              if ("writable" !== _controlledWritableStream3._state) {
                Pt(_controlledWritableStream3);
              } else {
                _controlledWritableStream3._state = "erroring";
                _controlledWritableStream3._storedError = _storedError;
                ({ _writer, _writableStreamController } = _controlledWritableStream3);
                if (undefined !== _writer) {
                  kt(_writer, _storedError);
                }
                const tmp7 = !(undefined !== _controlledWritableStream3._inFlightWriteRequest || undefined !== _controlledWritableStream3._inFlightCloseRequest) && _writableStreamController._started;
                if (tmp7) {
                  Pt(_controlledWritableStream3);
                }
              }
              return null;
            }), undefined, fn);
          }
        }
      } else {
        const tmp = Pt;
        Pt(_controlledWritableStream);
      }
    }
  }
}
function Yt(_controlledWritableStream, _storedError) {
  let _writableStreamController;
  let _writer;
  if ("writable" === _controlledWritableStream._controlledWritableStream._state) {
    _controlledWritableStream = _controlledWritableStream._controlledWritableStream;
    _controlledWritableStream._writeAlgorithm = undefined;
    _controlledWritableStream._closeAlgorithm = undefined;
    _controlledWritableStream._abortAlgorithm = undefined;
    _controlledWritableStream._strategySizeAlgorithm = undefined;
    _controlledWritableStream._state = "erroring";
    _controlledWritableStream._storedError = _storedError;
    ({ _writer, _writableStreamController } = _controlledWritableStream);
    if (undefined !== _writer) {
      kt(_writer, _storedError);
    }
    const tmp4 = !(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest) && _writableStreamController._started;
    if (tmp4) {
      Pt(_controlledWritableStream);
    }
  }
}
function Qt(_strategyHWM) {
  return _strategyHWM._strategyHWM - _strategyHWM._queueTotalSize <= 0;
}
function ir(self, arg1, preventClose, preventAbort, preventCancel, signal) {
  let closure_0 = self;
  let closure_1 = arg1;
  let closure_2 = preventClose;
  let closure_3 = preventAbort;
  let closure_4 = preventCancel;
  closure_5 = signal;
  let closure_6 = new c29(self);
  new c29(self);
  let closure_7 = new _moduleResult5(arg1);
  self._disturbed = true;
  let c8 = false;
  let c0;
  new _moduleResult5(arg1);
  let closure_9 = new closure_3((fn) => fn(c0));
  new closure_3((fn) => fn(c0));
  const tmp4 = new closure_3(function(arg0, arg1) {
    let _readyPromise;
    let no;
    let tmp3;
    let typeError;
    const f141230 = () => {
      let callResult;
      if (closure_0 !== closure_9) {
        closure_0 = closure_1_9;
        callResult = fn.call(closure_1_9, f141230, undefined);
      }
      return callResult;
    };
    const f141238 = () => {
      _ownerWritableStream = _ownerWritableStream._ownerWritableStream;
      const _state = _ownerWritableStream._state;
      let tmp2 = undefined !== _ownerWritableStream._closeRequest;
      const tmp = _ownerWritableStream;
      if (!tmp2) {
        tmp2 = undefined !== _ownerWritableStream._inFlightCloseRequest;
      }
      if (!tmp2) {
        let tmp4;
        if ("closed" !== _state) {
          if ("errored" === _state) {
            tmp4 = E(_ownerWritableStream._storedError);
          } else {
            tmp4 = closure_2_69(tmp._ownerWritableStream);
          }
        }
        return tmp4;
      }
      tmp4 = new typeError((fn) => fn(c0));
    };
    _self = arg0;
    writable = arg1;
    fn = function q(fn, arg1, _storedError) {
      const f142189 = () => {
        closure_2_75(closure_1_7);
        closure_2_22(closure_1_6);
        const obj = closure_1_5;
        const tmp = closure_1_1;
        const tmp2 = closure_1_2;
        if (undefined !== closure_1_5) {
          const removed = obj.removeEventListener("abort", closure_2);
        }
        if (tmp) {
          closure_1(tmp2);
        } else {
          fn(undefined);
        }
        return null;
      };
      const f142190 = (arg0) => {
        closure_3_75(_readyPromise);
        closure_3_22(closure_2_6);
        const obj = closure_2_5;
        if (undefined !== closure_2_5) {
          const removed = obj.removeEventListener("abort", _storedError);
        }
        closure_1_1(arg0);
        return null;
      };
      closure_0 = fn;
      closure_1 = arg1;
      fn = _storedError;
      let tmp = c8;
      if (!tmp) {
        c8 = true;
        let tmp2 = closure_1;
        if ("writable" === closure_1._state) {
          const tmp3 = undefined !== tmp2._closeRequest || undefined !== tmp2._inFlightCloseRequest;
          if (!tmp3) {
            closure_0 = closure_1_9;
            then.call(then.call(then.call(closure_1_9, f141230, undefined), function n() {
              let obj = then;
              obj.call(then.call(closure_0(), f142189, f142190), undefined, fn);
              return null;
            }, undefined), undefined, fn);
          }
        }
        then.call(then.call(fn(), f142189, f142190), undefined, fn);
      }
    };
    class E {
      constructor(arg0, arg1) {
        closure_0 = arg0;
        closure_1 = arg1;
        let tmp = c8;
        if (!tmp) {
          c8 = true;
          let tmp2 = closure_1;
          if ("writable" === closure_1._state) {
            const tmp3 = undefined !== tmp2._closeRequest || undefined !== tmp2._inFlightCloseRequest;
            if (!tmp3) {
              closure_0 = closure_1_9;
              let obj = then;
              let callResult = obj.call(obj.call(then.call(closure_1_9, f141230, undefined), () => {
                closure_2_75(_readyPromise);
                closure_2_22(closure_1_6);
                const obj = closure_1_5;
                const tmp = closure_0;
                const tmp2 = closure_1;
                if (undefined !== closure_1_5) {
                  const removed = obj.removeEventListener("abort", no);
                }
                if (tmp) {
                  closure_1(tmp2);
                } else {
                  closure_0(undefined);
                }
                return null;
              }, undefined), undefined, fn);
            }
          }
          At(_readyPromise);
          closure_2_22(closure_1_6);
          const obj2 = E;
          if (undefined !== E) {
            let removed = obj2.removeEventListener("abort", no);
          }
          if (arg0) {
            closure_1(arg1);
          } else {
            closure_0(undefined);
          }
        }
      }
    }
    let obj = E;
    if (undefined !== E) {
      no = function no() {
        let _state;
        let _state2;
        let reason;
        if (undefined !== closure_5.reason) {
          reason = closure_5.reason;
        } else {
          const tmp = e;
          let self = this;
          let self2 = this;
          reason = new e("Aborted", "AbortError");
        }
        const items = [];
        const tmp2 = Promise;
        if (!tmp2) {
          items.push(function() {
            let tmp3;
            if ("writable" === _state2._state) {
              tmp3 = closure_3_68(tmp, reason);
            } else {
              const self = this;
              const self2 = this;
              tmp3 = new typeError((fn) => fn(c0));
            }
            return tmp3;
          });
        }
        const tmp4 = then;
        if (!tmp4) {
          items.push(function() {
            let tmp3;
            if ("readable" === _state._state) {
              tmp3 = closure_3_96(tmp, reason);
            } else {
              const self = this;
              const self2 = this;
              tmp3 = new typeError((fn) => fn(c0));
            }
            return tmp3;
          });
        }
        fn(() => Promise.all(items.map((fn) => fn())), true, reason);
      };
      if (obj.aborted) {
        let reason;
        if (undefined !== obj.reason) {
          reason = obj.reason;
        } else {
          const self3 = this;
          const self4 = this;
          reason = new closure_1_83("Aborted", "AbortError");
        }
        let items = [];
        const tmp24 = typeError;
        if (!tmp24) {
          items.push(function() {
            let tmp3;
            if ("writable" === _state2._state) {
              tmp3 = closure_3_68(tmp, reason);
            } else {
              const self = this;
              const self2 = this;
              tmp3 = new typeError((fn) => fn(c0));
            }
            return tmp3;
          });
        }
        class E {
          constructor(arg0, arg1) {
            closure_0 = arg0;
            closure_1 = arg1;
            let tmp = c8;
            if (!tmp) {
              c8 = true;
              let tmp2 = closure_1;
              if ("writable" === closure_1._state) {
                const tmp3 = undefined !== tmp2._closeRequest || undefined !== tmp2._inFlightCloseRequest;
                if (!tmp3) {
                  closure_0 = closure_1_9;
                  let obj = then;
                  let callResult = obj.call(obj.call(then.call(closure_1_9, f141230, undefined), () => {
                    closure_2_75(_readyPromise);
                    closure_2_22(closure_1_6);
                    const obj = closure_1_5;
                    const tmp = closure_0;
                    const tmp2 = closure_1;
                    if (undefined !== closure_1_5) {
                      const removed = obj.removeEventListener("abort", no);
                    }
                    if (tmp) {
                      closure_1(tmp2);
                    } else {
                      closure_0(undefined);
                    }
                    return null;
                  }, undefined), undefined, fn);
                }
              }
              At(_readyPromise);
              closure_2_22(closure_1_6);
              const obj2 = E;
              if (undefined !== E) {
                let removed = obj2.removeEventListener("abort", no);
              }
              if (arg0) {
                closure_1(arg1);
              } else {
                closure_0(undefined);
              }
            }
          }
        }
        if (!tmp26) {
          items.push(function() {
            let tmp3;
            if ("readable" === _state._state) {
              tmp3 = closure_3_96(tmp, reason);
            } else {
              const self = this;
              const self2 = this;
              tmp3 = new typeError((fn) => fn(c0));
            }
            return tmp3;
          });
        }
        fn(() => Promise.all(items.map((fn) => fn())), true, reason);
      } else {
        str = "abort";
        const listener = obj.addEventListener("abort", no);
      }
    }
    let tmp2 = _self;
    if ("errored" === _self._state) {
      const _storedError = tmp2._storedError;
      let tmp4 = typeError;
      if (typeError) {
        E(true, _storedError);
      } else {
        fn(() => closure_3_68(closure_2_1, closure_0), true, _storedError);
      }
    } else {
      let callResult = then.call(then.call(tmp3, undefined, (length) => {
        closure_0 = length;
        const tmp = Promise;
        if (tmp) {
          E(true, length);
        } else {
          fn(() => closure_3_68(closure_2_1, closure_0), true, length);
        }
        return null;
      }), undefined, closure_1_2);
    }
    const tmp7 = writable;
    if ("errored" === writable._state) {
      const _storedError2 = tmp7._storedError;
      if (fn) {
        E(true, _storedError2);
      } else {
        fn(() => closure_3_96(closure_2_0, closure_0), true, _storedError2);
      }
    } else {
      then.call(then.call(tmp8, undefined, (length) => {
        closure_0 = length;
        const tmp = then;
        if (tmp) {
          E(true, length);
        } else {
          fn(() => closure_3_96(closure_2_0, closure_0), true, length);
        }
        return null;
      }), undefined, closure_1_2);
    }
    if ("closed" === tmp2._state) {
      const tmp13 = no;
      if (tmp13) {
        E();
      } else {
        fn(f141238);
      }
    } else {
      then.call(then.call(tmp12, function lo() {
        let tmp = fn;
        if (tmp) {
          let tmp4 = E;
          E();
        } else {
          let tmp2 = fn;
          fn(f141238);
        }
        return null;
      }, undefined), undefined, closure_1_2);
    }
    const tmp16 = undefined !== tmp7._closeRequest || undefined !== tmp7._inFlightCloseRequest;
    if (tmp16) {
      const _TypeError = TypeError;
      let self = this;
      let self2 = this;
      typeError = new TypeError("the destination writable stream closed before all data could be piped to it");
      class E {
        constructor(arg0, arg1) {
          closure_0 = arg0;
          closure_1 = arg1;
          let tmp = c8;
          if (!tmp) {
            c8 = true;
            let tmp2 = closure_1;
            if ("writable" === closure_1._state) {
              const tmp3 = undefined !== tmp2._closeRequest || undefined !== tmp2._inFlightCloseRequest;
              if (!tmp3) {
                closure_0 = closure_1_9;
                let obj = then;
                let callResult = obj.call(obj.call(then.call(closure_1_9, f141230, undefined), () => {
                  closure_2_75(_readyPromise);
                  closure_2_22(closure_1_6);
                  const obj = closure_1_5;
                  const tmp = closure_0;
                  const tmp2 = closure_1;
                  if (undefined !== closure_1_5) {
                    const removed = obj.removeEventListener("abort", no);
                  }
                  if (tmp) {
                    closure_1(tmp2);
                  } else {
                    closure_0(undefined);
                  }
                  return null;
                }, undefined), undefined, fn);
              }
            }
            At(_readyPromise);
            closure_2_22(closure_1_6);
            const obj2 = E;
            if (undefined !== E) {
              let removed = obj2.removeEventListener("abort", no);
            }
            if (arg0) {
              closure_1(arg1);
            } else {
              closure_0(undefined);
            }
          }
        }
      }
      if (fn) {
        E(true, typeError);
      } else {
        fn(() => Or(self, typeError), true, typeError);
      }
    }
    const tmp22 = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      fn = function o(arg0) {
        let tmp = arg0;
        if (tmp) {
          closure_0();
        } else {
          let callResult;
          const tmp2 = c8;
          if (tmp2) {
            let c0 = true;
            const self = this;
            const self2 = this;
            callResult = new Promise((fn) => fn(c0));
          } else {
            callResult = then.call(_readyPromise._readyPromise, () => {
              const tmp = new typeError((arg0, _errorSteps) => {
                closure_0 = arg0;
                const obj = {
                  _chunkSteps(arg0) {
                    closure_9 = closure_3_4.call(closure_3_76(closure_2_7, arg0), undefined, closure_3_0);
                    closure_0(false);
                  },
                  _closeSteps() {
                    return closure_0(true);
                  },
                  _errorSteps
                };
                _ownerReadableStream = _ownerReadableStream._ownerReadableStream;
                _ownerReadableStream._disturbed = true;
                if ("closed" === _ownerReadableStream._state) {
                  obj._closeSteps();
                } else if ("errored" === _ownerReadableStream._state) {
                  obj._errorSteps(_ownerReadableStream._storedError);
                } else {
                  const _readableStreamController = _ownerReadableStream._readableStreamController;
                  _readableStreamController[closure_1_19](obj);
                }
              });
              return tmp;
            }, undefined);
          }
          then.call(callResult, fn, closure_1);
        }
      };
      fn(false);
    });
    then.call(tmp22, undefined, closure_1_2);
  });
  return tmp4;
}
function sr(_pulling) {
  let closure_0 = _pulling;
  if (ur(_pulling)) {
    if (_pulling._pulling) {
      _pulling._pullAgain = true;
    } else {
      _pulling._pulling = true;
      then.call(then.call(_pulling._pullAlgorithm(), f126072, f126073), undefined, fn);
    }
  }
}
function ur(self) {
  let _closeRequested;
  let _controlledReadableStream;
  ({ _controlledReadableStream, _closeRequested } = self);
  let tmp3 = !_closeRequested && "readable" === tmp;
  const tmp2 = !_closeRequested && "readable" === tmp;
  if (tmp3) {
    let _started = self._started;
    if (_started) {
      let tmp6 = undefined !== _controlledReadableStream._reader && _controlledReadableStream._reader._readRequests.length > 0;
      const tmp5 = undefined !== _controlledReadableStream._reader && _controlledReadableStream._reader._readRequests.length > 0;
      if (!tmp6) {
        const _state = self._controlledReadableStream._state;
        let tmp7 = null;
        if ("errored" !== _state) {
          let num2 = 0;
          if ("closed" !== _state) {
            num2 = self._strategyHWM - self._queueTotalSize;
          }
          tmp7 = num2;
        }
        tmp6 = tmp7 > 0;
      }
      _started = tmp6;
    }
    tmp3 = _started;
  }
  return tmp3;
}
function fr(_controlledReadableStream, arg1) {
  if (mr(_controlledReadableStream)) {
    _controlledReadableStream = _controlledReadableStream._controlledReadableStream;
    if (Wr(_controlledReadableStream)) {
      if (G(_controlledReadableStream) > 0) {
        U(_controlledReadableStream, arg1, false);
      }
      sr(_controlledReadableStream);
    }
    try {
      try {
        ve(_controlledReadableStream, arg1, tmp4);
      } catch (tmp7) {
        br(_controlledReadableStream, tmp7);
        throw tmp7;
      }
    } catch (tmp10) {
      br(_controlledReadableStream, tmp10);
      throw tmp10;
    }
  }
}
function br(_controlledReadableStream, typeError) {
  _controlledReadableStream = _controlledReadableStream._controlledReadableStream;
  if ("readable" === _controlledReadableStream._state) {
    const self = this;
    const self2 = this;
    _controlledReadableStream._queue = new closure_15();
    _controlledReadableStream._queueTotalSize = 0;
    _controlledReadableStream._pullAlgorithm = undefined;
    _controlledReadableStream._cancelAlgorithm = undefined;
    _controlledReadableStream._strategySizeAlgorithm = undefined;
    const tmp3 = new closure_15();
    jr(_controlledReadableStream, typeError);
  }
}
function mr(_closeRequested) {
  return !_closeRequested._closeRequested && "readable" === tmp;
}
function _r(_controlledReadableStream, _readableStreamController, S, fn, _cancelAlgorithm, _strategyHWM, _strategySizeAlgorithm) {
  _readableStreamController._controlledReadableStream = _controlledReadableStream;
  _readableStreamController._queue = undefined;
  _readableStreamController._queueTotalSize = undefined;
  _readableStreamController._queue = new closure_15();
  _readableStreamController._queueTotalSize = 0;
  _readableStreamController._started = false;
  _readableStreamController._closeRequested = false;
  _readableStreamController._pullAgain = false;
  _readableStreamController._pulling = false;
  _readableStreamController._strategySizeAlgorithm = _strategySizeAlgorithm;
  _readableStreamController._strategyHWM = _strategyHWM;
  _readableStreamController._pullAlgorithm = fn;
  _readableStreamController._cancelAlgorithm = _cancelAlgorithm;
  _controlledReadableStream._readableStreamController = _readableStreamController;
  const tmp = new closure_15();
  _readableStreamController = S();
  const tmp2 = new Promise((fn) => fn(c0));
  then.call(then.call(tmp2, () => {
    _readableStreamController._started = true;
    if (ur(_readableStreamController)) {
      if (_readableStreamController._pulling) {
        _readableStreamController._pullAgain = true;
      } else {
        _readableStreamController._pulling = true;
        then.call(then.call(_readableStreamController._pullAlgorithm(), f126072, f126073), undefined, fn);
      }
    }
    return null;
  }, function(typeError) {
    const _controlledReadableStream = _readableStreamController._controlledReadableStream;
    if ("readable" === _controlledReadableStream._state) {
      const self = this;
      const self2 = this;
      _readableStreamController._queue = new closure_15();
      _readableStreamController._queueTotalSize = 0;
      _readableStreamController._pullAlgorithm = undefined;
      _readableStreamController._cancelAlgorithm = undefined;
      _readableStreamController._strategySizeAlgorithm = undefined;
      const tmp4 = new closure_15();
      jr(_controlledReadableStream, typeError);
    }
    return null;
  }), undefined, fn);
}
function Tr(preventAbort, arg1) {
  if (undefined !== preventAbort) {
    if (typeof preventAbort !== "object") {
      if (typeof preventAbort !== "function") {
        const _TypeError2 = TypeError;
        const _HermesInternal3 = HermesInternal;
        const self3 = this;
        const self4 = this;
        const typeError = new TypeError("" + "Second parameter" + " is not an object.");
        throw typeError;
      }
    }
  }
  preventAbort = undefined;
  if (null != preventAbort) {
    preventAbort = preventAbort.preventAbort;
  }
  let preventCancel;
  if (null != preventAbort) {
    preventCancel = preventAbort.preventCancel;
  }
  let preventClose;
  if (null != preventAbort) {
    preventClose = preventAbort.preventClose;
  }
  let signal;
  if (null != preventAbort) {
    signal = preventAbort.signal;
  }
  if (undefined !== signal) {
    const _HermesInternal = HermesInternal;
    const combined = "" + "Second parameter" + " has member 'signal' that";
    if (!((signal) => {
      if (typeof signal === "object") {
        if (null !== signal) {
          try {
            return typeof signal.aborted === "boolean";
          } catch (err) {
            return false;
          }
        }
      }
      return false;
    })(signal)) {
      const _TypeError = TypeError;
      const _HermesInternal2 = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError1 = new TypeError("" + combined + " is not an AbortSignal.");
      throw typeError1;
    }
  }
  const obj = { preventAbort: Boolean(preventAbort), preventCancel: Boolean(preventCancel), preventClose: Boolean(preventClose), signal };
  return obj;
}
function Er(obj) {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (!tmp) {
    tmp = typeof obj === "function";
  }
  let callResult = tmp;
  if (callResult) {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    callResult = hasOwnProperty.call(obj, "_readableStreamController");
  }
  if (callResult) {
    callResult = obj instanceof _moduleResult8;
  }
  return callResult;
}
function Wr(_controlledReadableStream) {
  return undefined !== _controlledReadableStream._reader;
}
function Or(self, typeError) {
  self._disturbed = true;
  if ("closed" === self._state) {
    const self3 = this;
    const self4 = this;
    const tmp13 = new Promise((fn) => fn(c0));
    return tmp13;
  } else if ("errored" === self._state) {
    return closure_5(self._storedError);
  } else {
    Br(self);
    const _reader = self._reader;
    if (undefined !== _reader) {
      let tmp = typeof _reader === "object";
      if (typeof _reader === "object") {
        tmp = null !== _reader;
      }
      if (!tmp) {
        tmp = typeof _reader === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(_reader, "_readIntoRequests");
      }
      if (callResult) {
        callResult = _reader instanceof _moduleResult3;
      }
      if (callResult) {
        const _readIntoRequests = _reader._readIntoRequests;
        self = this;
        const self2 = this;
        _reader._readIntoRequests = new closure_15();
        const tmp6 = new closure_15();
        const item = _readIntoRequests.forEach((_closeSteps) => {
          _closeSteps._closeSteps(undefined);
        });
      }
    }
    const _readableStreamController = self._readableStreamController;
    return then.call(_readableStreamController[SymbolResult2](typeError), fn, undefined);
  }
}
function Br(_controlledReadableByteStream) {
  _controlledReadableByteStream._state = "closed";
  const _reader = _controlledReadableByteStream._reader;
  if (undefined !== _reader) {
    if (undefined !== _reader._closedPromise_resolve) {
      const result = _reader._closedPromise_resolve(undefined);
      _reader._closedPromise_resolve = undefined;
      _reader._closedPromise_reject = undefined;
    }
    let tmp2 = typeof _reader === "object";
    if (typeof _reader === "object") {
      tmp2 = null !== _reader;
    }
    if (!tmp2) {
      tmp2 = typeof _reader === "function";
    }
    let callResult = tmp2;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(_reader, "_readRequests");
    }
    if (callResult) {
      callResult = _reader instanceof c29;
    }
    if (callResult) {
      const _readRequests = _reader._readRequests;
      const self = this;
      const self2 = this;
      _reader._readRequests = new closure_15();
      const tmp7 = new closure_15();
      const item = _readRequests.forEach((_closeSteps) => {
        _closeSteps._closeSteps();
      });
    }
  }
}
function jr(_controlledReadableStream, typeError) {
  _controlledReadableStream._state = "errored";
  _controlledReadableStream._storedError = typeError;
  const _reader = _controlledReadableStream._reader;
  if (undefined !== _reader) {
    if (undefined !== _reader._closedPromise_reject) {
      then.call(_reader._closedPromise, undefined, fn);
      const result = _reader._closedPromise_reject(typeError);
      _reader._closedPromise_resolve = undefined;
      _reader._closedPromise_reject = undefined;
    }
    let tmp2 = typeof _reader === "object";
    if (typeof _reader === "object") {
      tmp2 = null !== _reader;
    }
    if (!tmp2) {
      tmp2 = typeof _reader === "function";
    }
    let callResult1 = tmp2;
    if (callResult1) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult1 = hasOwnProperty.call(_reader, "_readRequests");
    }
    if (callResult1) {
      callResult1 = _reader instanceof c29;
    }
    if (callResult1) {
      let closure_0 = typeError;
      const _readRequests = _reader._readRequests;
      const self3 = this;
      const self4 = this;
      _reader._readRequests = new closure_15();
      const tmp11 = new closure_15();
      const item = _readRequests.forEach((_errorSteps) => {
        _errorSteps._errorSteps(typeError);
      });
    } else {
      closure_0 = typeError;
      const _readIntoRequests = _reader._readIntoRequests;
      const self = this;
      const self2 = this;
      _reader._readIntoRequests = new closure_15();
      const tmp7 = new closure_15();
      const item1 = _readIntoRequests.forEach((_errorSteps) => {
        _errorSteps._errorSteps(typeError);
      });
    }
  }
}
function kr(pipeTo) {
  const typeError = new TypeError("ReadableStream.prototype." + "pipeTo" + " can only be used on a ReadableStream");
  return typeError;
}
function Vr(_controlledTransformStream, typeError) {
  let _writableStreamController2;
  let _writer;
  const _transformStreamController = _controlledTransformStream._transformStreamController;
  _transformStreamController._transformAlgorithm = undefined;
  _transformStreamController._flushAlgorithm = undefined;
  _transformStreamController._cancelAlgorithm = undefined;
  const _writableStreamController = _controlledTransformStream._writable._writableStreamController;
  if ("writable" === _writableStreamController._controlledWritableStream._state) {
    const _controlledWritableStream = _writableStreamController._controlledWritableStream;
    _writableStreamController._writeAlgorithm = undefined;
    _writableStreamController._closeAlgorithm = undefined;
    _writableStreamController._abortAlgorithm = undefined;
    _writableStreamController._strategySizeAlgorithm = undefined;
    _controlledWritableStream._state = "erroring";
    _controlledWritableStream._storedError = typeError;
    ({ _writer, _writableStreamController: _writableStreamController2 } = _controlledWritableStream);
    if (undefined !== _writer) {
      kt(_writer, typeError);
    }
    const tmp4 = !(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest) && _writableStreamController2._started;
    if (tmp4) {
      Pt(_controlledWritableStream);
    }
  }
  if (_controlledTransformStream._backpressure) {
    let closure_0 = _controlledTransformStream;
    if (undefined !== _controlledTransformStream._backpressureChangePromise) {
      const result = _controlledTransformStream._backpressureChangePromise_resolve();
    }
    const self = this;
    const self2 = this;
    _controlledTransformStream._backpressureChangePromise = new Promise((_backpressureChangePromise_resolve) => {
      obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
    });
    _controlledTransformStream._backpressure = false;
    const tmp9 = new Promise((_backpressureChangePromise_resolve) => {
      obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
    });
  }
}
function Gr(_controlledTransformStream, arg1) {
  let closure_0 = _controlledTransformStream;
  if (undefined !== _controlledTransformStream._backpressureChangePromise) {
    const result = _controlledTransformStream._backpressureChangePromise_resolve();
  }
  _controlledTransformStream._backpressureChangePromise = new Promise((_backpressureChangePromise_resolve) => {
    obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
  });
  _controlledTransformStream._backpressure = true;
  new Promise((_backpressureChangePromise_resolve) => {
    obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
  });
}
function Kr(self, arg1) {
  const _controlledTransformStream = self._controlledTransformStream;
  const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
  if (mr(_readableStreamController)) {
    try {
      fr(_readableStreamController, arg1);
      if (((_readableStreamController) => !ur(_readableStreamController))(_readableStreamController) !== _controlledTransformStream._backpressure) {
        Gr(_controlledTransformStream, true);
      }
    } catch (tmp9) {
      Vr(_controlledTransformStream, tmp9);
      throw _controlledTransformStream._readable._storedError;
    }
  } else {
    const _TypeError = TypeError;
    self = this;
    const self2 = this;
    const typeError = new TypeError("Readable side is not in a state that permits enqueue");
    throw typeError;
  }
}
const bindResult = resolve.bind(Promise);
let closure_5 = reject.bind(Promise);
let c6 = bindResult;
function y(arg0) {
  if (typeof queueMicrotask === "function") {
    const _queueMicrotask = queueMicrotask;
    fn = queueMicrotask;
    fn = queueMicrotask;
  } else {
    const self = this;
    const self2 = this;
    let closure_0 = new Promise((fn) => fn(c0));
    fn = function y(arg0) {
      return then.call(closure_0, arg0, undefined);
    };
    const tmp2 = new Promise((fn) => fn(c0));
  }
  return fn(arg0);
}
let fn2 = function v() {
  _classCallCheck(this, fn2);
  this._cursor = 0;
  this._size = 0;
  this._front = { _elements: [], _next: "a" };
  this._back = this._front;
  this._cursor = 0;
  this._size = 0;
};
let obj = {
  key: "length",
  get() {
    return this._size;
  }
};
let items = [
  obj,
  {
    key: "push",
    value: function push(arg0) {
      const self = this;
      const _back = this._back;
      let tmp = _back;
      if (16383 === _back._elements.length) {
        tmp = { _elements: [], _next: "a" };
        const obj = { _elements: [], _next: "a" };
      }
      const _elements = _back._elements;
      _elements.push(arg0);
      if (tmp !== _back) {
        self._back = tmp;
        _back._next = tmp;
      }
      self._size = self._size + 1;
    }
  },
  {
    key: "shift",
    value: function shift() {
      let _cursor;
      let _front;
      const self = this;
      ({ _front, _cursor } = this);
      let num = _cursor + 1;
      const _elements = _front._elements;
      let _next = _front;
      const tmp = _elements[_cursor];
      if (16384 === num) {
        _next = _front._next;
        num = 0;
      }
      self._size = self._size - 1;
      self._cursor = num;
      if (_front !== _next) {
        self._front = _next;
      }
      _elements[_cursor] = undefined;
      return tmp;
    }
  },
  {
    key: "forEach",
    value: function forEach(fn) {
      let _cursor;
      let _front;
      ({ _cursor, _front } = this);
      let _elements = _front._elements;
      if (_cursor !== _elements.length) {
        let tmp = _front;
        if (_cursor !== _elements.length) {
          while (true) {
            let tmp2 = fn(_elements[_cursor]);
            let sum = _cursor + 1;
            if (sum !== _elements.length) {
              _cursor = sum;
              if (sum !== _elements.length) {
                continue;
              } else {
                let _next2 = tmp5._next;
                let _elements1 = _next2._elements;
                _elements = _elements1;
                tmp = _next2;
                _cursor = 0;
                if (0 === _elements1.length) {
                  break;
                }
              }
              continue;
            } else if (undefined === tmp._next) {
              break;
            }
            break;
          }
        } else {
          const _next = _front._next;
          const _elements2 = _next._elements;
          _elements = _elements2;
          tmp = _next;
          _cursor = 0;
        }
      }
    }
  },
  {
    key: "peek",
    value: function peek() {
      return this._front._elements[this._cursor];
    }
  }
];
let closure_15 = _createClass(fn2, items);
const SymbolResult = Symbol("[[AbortSteps]]");
let c16 = SymbolResult;
const SymbolResult1 = Symbol("[[ErrorSteps]]");
const SymbolResult2 = Symbol("[[CancelSteps]]");
const SymbolResult3 = Symbol("[[PullSteps]]");
const SymbolResult4 = Symbol("[[ReleaseSteps]]");
let closure_24 = Number.isFinite || ((num) => {
  let isFiniteResult = typeof num === "number";
  if (typeof num === "number") {
    const _isFinite = isFinite;
    isFiniteResult = isFinite(num);
  }
  return isFiniteResult;
});
let tmp8 = Math.trunc || ((endImportTime) => {
  let rounded;
  if (endImportTime < 0) {
    const _Math2 = Math;
    rounded = Math.ceil(endImportTime);
  } else {
    const _Math = Math;
    rounded = Math.floor(endImportTime);
  }
  return rounded;
});
let fn3 = function o(close, close2) {
  try {
    const _Object = Object;
    const obj = { value: close2, configurable: true };
    Object.defineProperty(close, "name", obj);
  } catch (err) {
  }
};
let closure_25 = tmp8;
class ReadableStreamDefaultReader {
  constructor(_reader) {
    const self = this;
    _window(this, ReadableStreamDefaultReader);
    if (undefined === _reader) {
      const _TypeError3 = TypeError;
      const _HermesInternal2 = HermesInternal;
      const self8 = this;
      const self9 = this;
      const typeError = new TypeError("Parameter " + 1 + " is required in '" + "ReadableStreamDefaultReader" + "'.");
      throw typeError;
    } else {
      let tmp2 = typeof _reader === "object";
      if (typeof _reader === "object") {
        tmp2 = null !== _reader;
      }
      if (!tmp2) {
        tmp2 = typeof _reader === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(_reader, "_readableStreamController");
      }
      if (callResult) {
        callResult = _reader instanceof closure_2_93;
      }
      if (callResult) {
        if (undefined !== _reader._reader) {
          const _TypeError2 = TypeError;
          const self6 = this;
          const self7 = this;
          const typeError1 = new TypeError("This stream has already been locked for exclusive reading by another reader");
          throw typeError1;
        } else {
          closure_2_21(self, _reader);
          const self4 = this;
          const self5 = this;
          self._readRequests = new closure_2_15();
          const tmp12 = new closure_2_15();
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError2 = new TypeError("" + "First parameter" + " is not a ReadableStream.");
        throw typeError2;
      }
    }
  }
}
let obj2 = {
  key: "closed",
  get() {
    let _closedPromise;
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_readRequests");
    }
    if (callResult) {
      callResult = self instanceof c29;
    }
    if (callResult) {
      _closedPromise = self._closedPromise;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ReadableStreamDefaultReader.prototype." + "closed" + " can only be used on a ReadableStreamDefaultReader");
      _closedPromise = closure_5(typeError);
    }
    return _closedPromise;
  }
};
let items1 = [
  obj2,
  {
    key: "cancel",
    value: function cancel(typeError) {
      let tmp10;
      const self = this;
      let tmp2 = typeof this === "object";
      const tmp = typeError;
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_readRequests");
      }
      if (callResult) {
        callResult = self instanceof c29;
      }
      if (callResult) {
        let tmp12;
        if (undefined === self._ownerReadableStream) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          typeError = new TypeError("Cannot cancel a stream using a released reader");
          tmp12 = closure_5(typeError);
        } else {
          tmp12 = Or(self._ownerReadableStream, tmp);
        }
        tmp10 = tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStreamDefaultReader.prototype." + "cancel" + " can only be used on a ReadableStreamDefaultReader");
        tmp10 = closure_5(typeError1);
      }
      return tmp10;
    }
  },
  {
    key: "read",
    value: function read() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_readRequests");
      }
      if (callResult) {
        callResult = self instanceof c29;
      }
      if (callResult) {
        if (undefined === self._ownerReadableStream) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("Cannot read from a stream using a released reader");
          return closure_5(typeError);
        } else {
          const self6 = this;
          const self7 = this;
          let obj = {
            _chunkSteps(value) {
                  const obj = { value, done: false };
                  return closure_1_0(obj);
                },
            _closeSteps() {
                  return closure_1_0({ value: "HermesInternal", done: null });
                },
            _errorSteps(arg0) {
                  return closure_1_1(arg0);
                }
          };
          const _ownerReadableStream = self._ownerReadableStream;
          _ownerReadableStream._disturbed = true;
          const tmp20 = new Promise((arg0, arg1) => {
            let closure_1_0 = arg0;
            let closure_1_1 = arg1;
          });
          if ("closed" === _ownerReadableStream._state) {
            obj._closeSteps();
          } else if ("errored" === _ownerReadableStream._state) {
            obj._errorSteps(_ownerReadableStream._storedError);
          } else {
            const _readableStreamController = _ownerReadableStream._readableStreamController;
            _readableStreamController[SymbolResult3](obj);
          }
          return tmp20;
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStreamDefaultReader.prototype." + "read" + " can only be used on a ReadableStreamDefaultReader");
        return closure_5(typeError1);
      }
    }
  },
  {
    key: "releaseLock",
    value: function releaseLock() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_readRequests");
      }
      if (callResult) {
        callResult = self instanceof c29;
      }
      if (callResult) {
        if (undefined !== self._ownerReadableStream) {
          W(self);
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("Reader was released");
          const _readRequests = self._readRequests;
          const self6 = this;
          const self7 = this;
          self._readRequests = new closure_15();
          const tmp14 = new closure_15();
          const item = _readRequests.forEach((_errorSteps) => {
            _errorSteps._errorSteps(typeError);
          });
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStreamDefaultReader.prototype." + "releaseLock" + " can only be used on a ReadableStreamDefaultReader");
        throw typeError1;
      }
    }
  }
];
const _moduleResult = _createClass(ReadableStreamDefaultReader, items1);
c29 = _moduleResult;
Object.defineProperties(_moduleResult.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } });
fn3(_moduleResult.prototype.cancel, "cancel");
fn3(_moduleResult.prototype.read, "read");
fn3(_moduleResult.prototype.releaseLock, "releaseLock");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object3 = Object;
  let _Symbol2 = Symbol;
  Object.defineProperty(_moduleResult.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
}
fn = function ie(transfer) {
  if (typeof transfer.transfer === "function") {
    fn = (transfer) => transfer.transfer();
  } else {
    const _structuredClone = structuredClone;
    if (typeof structuredClone === "function") {
      fn = (source) => {
        let items;
        const obj = { transfer: items };
        items = [source];
        return structuredClone(source, obj);
      };
    } else {
      fn = (transfer) => transfer;
    }
  }
  return fn(transfer);
};
fn = function le(detached) {
  if (typeof detached.detached === "boolean") {
    fn = (detached) => detached.detached;
  } else {
    fn = (byteLength) => 0 === byteLength.byteLength;
  }
  return fn(detached);
};
if (null === asyncIterator) {
  let _Symbol = Symbol;
  const _for = Symbol.for;
  let callResult;
  if (null !== _for) {
    if (undefined !== _for) {
      const str4 = "Symbol.asyncIterator";
      callResult = _for.call(Symbol, "Symbol.asyncIterator");
    }
  }
  asyncIterator = callResult;
}
str = "@@asyncIterator";
if (null !== asyncIterator) {
  str = "@@asyncIterator";
  if (undefined !== asyncIterator) {
    str = asyncIterator;
  }
}
function he(_reader, _preventCancel) {
  _window(this, he);
  this._ongoingPromise = undefined;
  this._isFinished = false;
  this._reader = _reader;
  this._preventCancel = _preventCancel;
}
const entry = {
  key: "next",
  value: function next() {
    let callResult;
    const self = this;
    if (this._ongoingPromise) {
      fn = function e() {
        return self._nextSteps();
      };
      callResult = then.call(self._ongoingPromise, fn, fn);
    } else {
      callResult = self._nextSteps();
    }
    self._ongoingPromise = callResult;
    return self._ongoingPromise;
  }
};
let items2 = [
  entry,
  {
    key: "return",
    value: function _return(value) {
      let callResult;
      const self = this;
      let closure_0 = value;
      if (this._ongoingPromise) {
        fn = function t() {
          return self._returnSteps(closure_0);
        };
        callResult = then.call(self._ongoingPromise, fn, fn);
      } else {
        callResult = self._returnSteps(value);
      }
      self._ongoingPromise = callResult;
      return self._ongoingPromise;
    }
  },
  {
    key: "_nextSteps",
    value: function _nextSteps() {
      let self = this;
      if (this._isFinished) {
        return Promise.resolve({ value: "HermesInternal", done: null });
      } else {
        const _reader = tmp._reader;
        self = this;
        const self2 = this;
        let obj = {
          _chunkSteps(value) {
              self._ongoingPromise = undefined;
              closure_1_12(() => {
                const obj = { value, done: false };
                return closure_2_1(obj);
              });
            },
          _closeSteps() {
              self._ongoingPromise = undefined;
              self._isFinished = true;
              W(_reader);
              closure_1_1({ value: "HermesInternal", done: null });
            },
          _errorSteps(arg0) {
              self._ongoingPromise = undefined;
              self._isFinished = true;
              W(_reader);
              fn(arg0);
            }
        };
        const _ownerReadableStream = _reader._ownerReadableStream;
        _ownerReadableStream._disturbed = true;
        const tmp3 = new self((arg0, arg1) => {
          let closure_1_1 = arg0;
          let closure_1_2 = arg1;
        });
        if ("closed" === _ownerReadableStream._state) {
          obj._closeSteps();
        } else if ("errored" === _ownerReadableStream._state) {
          obj._errorSteps(_ownerReadableStream._storedError);
        } else {
          const _readableStreamController = _ownerReadableStream._readableStreamController;
          _readableStreamController[SymbolResult3](obj);
        }
        return tmp3;
      }
    }
  },
  {
    key: "_returnSteps",
    value: function _returnSteps(value) {
      const self = this;
      let closure_0 = value;
      if (this._isFinished) {
        const obj2 = { value, done: true };
        return Promise.resolve(obj2);
      } else {
        self._isFinished = true;
        const _reader = self._reader;
        if (self._preventCancel) {
          W(_reader);
          const self2 = this;
          const self3 = this;
          const tmp8 = new Promise((fn) => fn(c0));
          return tmp8;
        } else {
          const tmp2 = Or(_reader._ownerReadableStream, value);
          W(_reader);
          return then.call(tmp2, () => ({ value, done: true }), undefined);
        }
      }
    }
  }
];
closure_38 = _createClass(he, items2);
obj3 = {
  next() {
    let nextResult;
    if (_e(this)) {
      const iter = this._asyncIteratorImpl;
      nextResult = iter.next();
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("ReadableStreamAsyncIterator." + "next" + " can only be used on a ReadableSteamAsyncIterator");
      nextResult = closure_5(typeError);
    }
    return nextResult;
  },
  return: function(arg0) {
    let returnResult;
    if (_e(this)) {
      const _asyncIteratorImpl = this._asyncIteratorImpl;
      returnResult = _asyncIteratorImpl.return(arg0);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("ReadableStreamAsyncIterator." + "return" + " can only be used on a ReadableSteamAsyncIterator");
      returnResult = closure_5(typeError);
    }
    return returnResult;
  }
};
obj3[str] = function() {
  return this;
};
Object.defineProperty(obj3, str, { enumerable: false });
fn4 = Number.isNaN || ((arg0) => arg0 != arg0);
class ReadableStreamBYOBRequest {
  constructor() {
    _window(this, ReadableStreamBYOBRequest);
    const typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
const items3 = [, , ];
const obj4 = {
  key: "view",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_associatedReadableByteStreamController");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult1;
    }
    if (callResult) {
      return self._view;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ReadableStreamBYOBRequest.prototype." + "view" + " can only be used on a ReadableStreamBYOBRequest");
      throw typeError;
    }
  }
};
items3[0] = obj4;
items3[1] = {
  key: "respond",
  value: function respond(arg0) {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_associatedReadableByteStreamController");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult1;
    }
    if (callResult) {
      if (undefined === arg0) {
        const _TypeError8 = TypeError;
        const _HermesInternal4 = HermesInternal;
        const self18 = this;
        const self19 = this;
        const typeError = new TypeError("Parameter " + 1 + " is required in '" + "respond" + "'.");
        throw typeError;
      } else {
        const _Number = Number;
        const _Number2 = Number;
        const NumberResult = Number(arg0);
        let num = 0;
        if (0 !== NumberResult) {
          num = NumberResult;
        }
        const tmp9 = closure_24;
        if (closure_24(num)) {
          const tmp13 = closure_25(num);
          let num2 = 0;
          if (0 !== tmp13) {
            num2 = tmp13;
          }
          if (num2 >= 0) {
            if (num2 <= MAX_SAFE_INTEGER) {
              let num3 = 0;
              if (tmp9(num2)) {
                num3 = 0;
                if (0 !== num2) {
                  num3 = num2;
                }
              }
              if (undefined === self._associatedReadableByteStreamController) {
                const _TypeError6 = TypeError;
                const self14 = this;
                const self15 = this;
                const typeError1 = new TypeError("This BYOB request has been invalidated");
                throw typeError1;
              } else if (fn(self._view.buffer)) {
                const _TypeError5 = TypeError;
                const self12 = this;
                const self13 = this;
                const typeError2 = new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
                throw typeError2;
              } else {
                const _associatedReadableByteStreamController = self._associatedReadableByteStreamController;
                const _pendingPullIntos = _associatedReadableByteStreamController._pendingPullIntos;
                const peekResult = _pendingPullIntos.peek();
                if ("closed" === _associatedReadableByteStreamController._controlledReadableByteStream._state) {
                  if (0 !== num3) {
                    const _TypeError4 = TypeError;
                    const self10 = this;
                    const self11 = this;
                    const typeError3 = new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
                    throw typeError3;
                  }
                } else if (0 === num3) {
                  const _TypeError3 = TypeError;
                  const self8 = this;
                  const self9 = this;
                  const typeError4 = new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                  throw typeError4;
                } else if (peekResult.bytesFilled + num3 > peekResult.byteLength) {
                  const _RangeError = RangeError;
                  const self6 = this;
                  const self7 = this;
                  const rangeError = new RangeError("bytesWritten out of range");
                  throw rangeError;
                }
                peekResult.buffer = fn(peekResult.buffer);
                $e(_associatedReadableByteStreamController, num3);
              }
            }
          }
          const _TypeError7 = TypeError;
          const _HermesInternal3 = HermesInternal;
          const self16 = this;
          const self17 = this;
          const typeError5 = new TypeError("" + "First parameter" + " is outside the accepted range of 0 to " + MAX_SAFE_INTEGER + ", inclusive");
          throw typeError5;
        } else {
          const _TypeError2 = TypeError;
          const _HermesInternal2 = HermesInternal;
          const self4 = this;
          const self5 = this;
          const typeError6 = new TypeError("" + "First parameter" + " is not a finite number");
          throw typeError6;
        }
      }
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError7 = new TypeError("ReadableStreamBYOBRequest.prototype." + "respond" + " can only be used on a ReadableStreamBYOBRequest");
      throw typeError7;
    }
  }
};
items3[2] = {
  key: "respondWithNewView",
  value: function respondWithNewView(buffer) {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_associatedReadableByteStreamController");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult1;
    }
    if (callResult) {
      if (undefined === buffer) {
        const _TypeError5 = TypeError;
        const _HermesInternal2 = HermesInternal;
        const self10 = this;
        const self11 = this;
        const typeError = new TypeError("Parameter " + 1 + " is required in '" + "respondWithNewView" + "'.");
        throw typeError;
      } else {
        const _ArrayBuffer = ArrayBuffer;
        if (ArrayBuffer.isView(buffer)) {
          if (undefined === self._associatedReadableByteStreamController) {
            const _TypeError4 = TypeError;
            const self8 = this;
            const self9 = this;
            const typeError1 = new TypeError("This BYOB request has been invalidated");
            throw typeError1;
          } else if (fn(buffer.buffer)) {
            const _TypeError3 = TypeError;
            const self6 = this;
            const self7 = this;
            const typeError2 = new TypeError("The given view's buffer has been detached and so cannot be used as a response");
            throw typeError2;
          } else {
            Xe(self._associatedReadableByteStreamController, buffer);
          }
        } else {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError3 = new TypeError("You can only respond with array buffer views");
          throw typeError3;
        }
      }
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError4 = new TypeError("ReadableStreamBYOBRequest.prototype." + "respondWithNewView" + " can only be used on a ReadableStreamBYOBRequest");
      throw typeError4;
    }
  }
};
_moduleResult1 = _createClass(ReadableStreamBYOBRequest, items3);
Object.defineProperties(_moduleResult1.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } });
fn3(_moduleResult1.prototype.respond, "respond");
fn3(_moduleResult1.prototype.respondWithNewView, "respondWithNewView");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object4 = Object;
  const _Symbol3 = Symbol;
  Object.defineProperty(_moduleResult1.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
}
class ReadableByteStreamController {
  constructor() {
    _window(this, ReadableByteStreamController);
    const typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
const items4 = [, , , , , , , ];
const obj5 = {
  key: "byobRequest",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledReadableByteStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult2;
    }
    if (callResult) {
      if (null === self._byobRequest) {
        if (self._pendingPullIntos.length > 0) {
          const _pendingPullIntos = self._pendingPullIntos;
          const peekResult = _pendingPullIntos.peek();
          const _Uint8Array = Uint8Array;
          const self4 = this;
          const self5 = this;
          const uint8Array = new Uint8Array(peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled, peekResult.byteLength - peekResult.bytesFilled);
          const _Object2 = Object;
          const obj = Object.create(_moduleResult1.prototype);
          obj._associatedReadableByteStreamController = self;
          obj._view = uint8Array;
          self._byobRequest = obj;
        }
      }
      return self._byobRequest;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ReadableByteStreamController.prototype." + "byobRequest" + " can only be used on a ReadableByteStreamController");
      throw typeError;
    }
  }
};
items4[0] = obj5;
items4[1] = {
  key: "desiredSize",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledReadableByteStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult2;
    }
    if (callResult) {
      const _state = self._controlledReadableByteStream._state;
      let tmp8 = null;
      if ("errored" !== _state) {
        let num = 0;
        if ("closed" !== _state) {
          num = self._strategyHWM - self._queueTotalSize;
        }
        tmp8 = num;
      }
      return tmp8;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ReadableByteStreamController.prototype." + "desiredSize" + " can only be used on a ReadableByteStreamController");
      throw typeError;
    }
  }
};
items4[2] = {
  key: "close",
  value: function close() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledReadableByteStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult2;
    }
    if (callResult) {
      if (self._closeRequested) {
        const _TypeError3 = TypeError;
        const self6 = this;
        const self7 = this;
        const typeError = new TypeError("The stream has already been closed; do not close it again!");
        throw typeError;
      } else {
        const _state = self._controlledReadableByteStream._state;
        if ("readable" !== _state) {
          const _TypeError2 = TypeError;
          const _HermesInternal2 = HermesInternal;
          const self4 = this;
          const self5 = this;
          const typeError1 = new TypeError("The stream (in " + _state + " state) is not in the readable state and cannot be closed");
          throw typeError1;
        } else {
          Qe(self);
        }
      }
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError2 = new TypeError("ReadableByteStreamController.prototype." + "close" + " can only be used on a ReadableByteStreamController");
      throw typeError2;
    }
  }
};
items4[3] = {
  key: "enqueue",
  value: function enqueue(byteLength) {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledReadableByteStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult2;
    }
    if (callResult) {
      if (undefined === byteLength) {
        const _TypeError7 = TypeError;
        const _HermesInternal3 = HermesInternal;
        const self14 = this;
        const self15 = this;
        const typeError = new TypeError("Parameter " + 1 + " is required in '" + "enqueue" + "'.");
        throw typeError;
      } else {
        const _ArrayBuffer = ArrayBuffer;
        if (ArrayBuffer.isView(byteLength)) {
          if (0 === byteLength.byteLength) {
            const _TypeError6 = TypeError;
            const self12 = this;
            const self13 = this;
            const typeError1 = new TypeError("chunk must have non-zero byteLength");
            throw typeError1;
          } else if (0 === byteLength.buffer.byteLength) {
            const _TypeError5 = TypeError;
            const self10 = this;
            const self11 = this;
            const typeError2 = new TypeError("chunk's buffer must have non-zero byteLength");
            throw typeError2;
          } else if (self._closeRequested) {
            const _TypeError4 = TypeError;
            const self8 = this;
            const self9 = this;
            const typeError3 = new TypeError("stream is closed or draining");
            throw typeError3;
          } else {
            const _state = self._controlledReadableByteStream._state;
            if ("readable" !== _state) {
              const _TypeError3 = TypeError;
              const _HermesInternal2 = HermesInternal;
              const self6 = this;
              const self7 = this;
              const typeError4 = new TypeError("The stream (in " + _state + " state) is not in the readable state and cannot be enqueued to");
              throw typeError4;
            } else {
              xe(self, byteLength);
            }
          }
        } else {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError5 = new TypeError("chunk must be an array buffer view");
          throw typeError5;
        }
      }
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError6 = new TypeError("ReadableByteStreamController.prototype." + "enqueue" + " can only be used on a ReadableByteStreamController");
      throw typeError6;
    }
  }
};
items4[4] = {
  key: "error",
  value: function error(typeError) {
    const self = this;
    let tmp2 = typeof this === "object";
    const tmp = typeError;
    if (typeof this === "object") {
      tmp2 = null !== self;
    }
    if (!tmp2) {
      tmp2 = typeof self === "function";
    }
    let callResult = tmp2;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledReadableByteStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult2;
    }
    if (callResult) {
      const _controlledReadableByteStream = self._controlledReadableByteStream;
      if ("readable" === _controlledReadableByteStream._state) {
        if (null !== self._byobRequest) {
          self._byobRequest._associatedReadableByteStreamController = undefined;
          self._byobRequest._view = null;
          self._byobRequest = null;
        }
        const self4 = this;
        const self5 = this;
        self._pendingPullIntos = new closure_15();
        const self6 = this;
        const self7 = this;
        const tmp11 = new closure_15();
        self._queue = new closure_15();
        self._queueTotalSize = 0;
        self._pullAlgorithm = undefined;
        self._cancelAlgorithm = undefined;
        const tmp13 = new closure_15();
        jr(_controlledReadableByteStream, tmp);
      }
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      typeError = new TypeError("ReadableByteStreamController.prototype." + "error" + " can only be used on a ReadableByteStreamController");
      throw typeError;
    }
  }
};
items4[5] = {
  key: SymbolResult2,
  value(arg0) {
    const self = this;
    if (null !== this._byobRequest) {
      self._byobRequest._associatedReadableByteStreamController = undefined;
      self._byobRequest._view = null;
      self._byobRequest = null;
    }
    self._pendingPullIntos = new closure_15();
    new closure_15();
    self._queue = new closure_15();
    self._queueTotalSize = 0;
    self._pullAlgorithm = undefined;
    self._cancelAlgorithm = undefined;
    new closure_15();
    return self._cancelAlgorithm(arg0);
  }
};
items4[6] = {
  key: SymbolResult3,
  value(_errorSteps) {
    const self = this;
    if (this._queueTotalSize > 0) {
      He(self, _errorSteps);
    } else {
      const _autoAllocateChunkSize = self._autoAllocateChunkSize;
      if (undefined !== _autoAllocateChunkSize) {
        try {
          const _ArrayBuffer = ArrayBuffer;
          const self2 = this;
          const self3 = this;
          const arrayBuffer = new ArrayBuffer(_autoAllocateChunkSize);
          const _Uint8Array = Uint8Array;
          const _pendingPullIntos = self._pendingPullIntos;
          const obj = { buffer: arrayBuffer, bufferByteLength: _autoAllocateChunkSize, byteOffset: 0, byteLength: _autoAllocateChunkSize, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
          _pendingPullIntos.push(obj);
        } catch (tmp11) {
          _errorSteps._errorSteps(tmp11);
        }
      }
      V(tmp, _errorSteps);
      Pe(self);
    }
  }
};
items4[7] = {
  key: SymbolResult4,
  value() {
    const self = this;
    if (this._pendingPullIntos.length > 0) {
      const _pendingPullIntos = self._pendingPullIntos;
      const peekResult = _pendingPullIntos.peek();
      peekResult.readerType = "none";
      const self2 = this;
      const self3 = this;
      self._pendingPullIntos = new closure_15();
      const _pendingPullIntos1 = self._pendingPullIntos;
      const tmp3 = new closure_15();
      _pendingPullIntos1.push(peekResult);
    }
  }
};
_moduleResult2 = _createClass(ReadableByteStreamController, items4);
Object.defineProperties(_moduleResult2.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } });
fn3(_moduleResult2.prototype.close, "close");
fn3(_moduleResult2.prototype.enqueue, "enqueue");
fn3(_moduleResult2.prototype.error, "error");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object5 = Object;
  const _Symbol4 = Symbol;
  Object.defineProperty(_moduleResult2.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true });
}
class ReadableStreamBYOBReader {
  constructor(_reader) {
    const self = this;
    _window(this, ReadableStreamBYOBReader);
    if (undefined === _reader) {
      const _TypeError4 = TypeError;
      const _HermesInternal2 = HermesInternal;
      const self10 = this;
      const self11 = this;
      const typeError = new TypeError("Parameter " + 1 + " is required in '" + "ReadableStreamBYOBReader" + "'.");
      throw typeError;
    } else {
      let tmp2 = typeof _reader === "object";
      if (typeof _reader === "object") {
        tmp2 = null !== _reader;
      }
      if (!tmp2) {
        tmp2 = typeof _reader === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(_reader, "_readableStreamController");
      }
      if (callResult) {
        callResult = _reader instanceof closure_2_93;
      }
      if (callResult) {
        if (undefined !== _reader._reader) {
          const _TypeError3 = TypeError;
          const self8 = this;
          const self9 = this;
          const typeError1 = new TypeError("This stream has already been locked for exclusive reading by another reader");
          throw typeError1;
        } else {
          const _readableStreamController = _reader._readableStreamController;
          let tmp9 = typeof _readableStreamController === "object";
          if (typeof _readableStreamController === "object") {
            tmp9 = null !== _readableStreamController;
          }
          if (!tmp9) {
            tmp9 = typeof _readableStreamController === "function";
          }
          let callResult1 = tmp9;
          if (callResult1) {
            const _Object2 = Object;
            const hasOwnProperty2 = Object.prototype.hasOwnProperty;
            callResult1 = hasOwnProperty2.call(_readableStreamController, "_controlledReadableByteStream");
          }
          if (callResult1) {
            callResult1 = _readableStreamController instanceof closure_2_45;
          }
          if (callResult1) {
            closure_2_21(self, _reader);
            const self6 = this;
            const self7 = this;
            self._readIntoRequests = new closure_2_15();
            const tmp19 = new closure_2_15();
          } else {
            const _TypeError2 = TypeError;
            const self4 = this;
            const self5 = this;
            const typeError2 = new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
            throw typeError2;
          }
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError3 = new TypeError("" + "First parameter" + " is not a ReadableStream.");
        throw typeError3;
      }
    }
  }
}
let obj6 = {
  key: "closed",
  get() {
    let _closedPromise;
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_readIntoRequests");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult3;
    }
    if (callResult) {
      _closedPromise = self._closedPromise;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ReadableStreamBYOBReader.prototype." + "closed" + " can only be used on a ReadableStreamBYOBReader");
      _closedPromise = closure_5(typeError);
    }
    return _closedPromise;
  }
};
const items5 = [
  obj6,
  {
    key: "cancel",
    value: function cancel(typeError) {
      let tmp10;
      const self = this;
      let tmp2 = typeof this === "object";
      const tmp = typeError;
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_readIntoRequests");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult3;
      }
      if (callResult) {
        let tmp12;
        if (undefined === self._ownerReadableStream) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          typeError = new TypeError("Cannot cancel a stream using a released reader");
          tmp12 = closure_5(typeError);
        } else {
          tmp12 = Or(self._ownerReadableStream, tmp);
        }
        tmp10 = tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStreamBYOBReader.prototype." + "cancel" + " can only be used on a ReadableStreamBYOBReader");
        tmp10 = closure_5(typeError1);
      }
      return tmp10;
    }
  },
  {
    key: "read",
    value: function read(byteLength, min) {
      let _undefined2;
      let obj = min;
      if (min === undefined) {
        obj = {};
      }
      let self = this;
      let c0;
      let c1;
      if (at(this)) {
        let tmp4 = globalThis;
        const _ArrayBuffer = ArrayBuffer;
        if (ArrayBuffer.isView(byteLength)) {
          if (0 === byteLength.byteLength) {
            const _TypeError5 = TypeError;
            const self14 = this;
            const self15 = this;
            let typeError = new TypeError("view must have non-zero byteLength");
            return d(typeError);
          } else if (0 === byteLength.buffer.byteLength) {
            const _TypeError4 = TypeError;
            const self12 = this;
            const self13 = this;
            let typeError1 = new TypeError("view's buffer must have non-zero byteLength");
            return d(typeError1);
          } else if (fn(byteLength.buffer)) {
            let _TypeError3 = TypeError;
            const self10 = this;
            const self11 = this;
            let typeError2 = new TypeError("view's buffer has been detached");
            return d(typeError2);
          } else {
            try {
              min = (function(min, options) {
                if (undefined !== min) {
                  if (typeof min !== "object") {
                    if (typeof min !== "function") {
                      const _TypeError3 = TypeError;
                      const _HermesInternal3 = HermesInternal;
                      const self5 = this;
                      const self6 = this;
                      const typeError = new TypeError("" + "options" + " is not an object.");
                      throw typeError;
                    }
                  }
                }
                min = undefined;
                if (null != min) {
                  min = min.min;
                }
                let num = 1;
                if (null !== min) {
                  num = 1;
                  if (undefined !== min) {
                    num = min;
                  }
                }
                const combined = "" + "options" + " has member 'min' that";
                const NumberResult = Number(num);
                let num2 = 0;
                if (0 !== NumberResult) {
                  num2 = NumberResult;
                }
                const tmp4 = closure_1_24;
                if (closure_1_24(num2)) {
                  const tmp8 = closure_1_25(num2);
                  let num3 = 0;
                  if (0 !== tmp8) {
                    num3 = tmp8;
                  }
                  if (num3 >= 0) {
                    if (num3 <= MAX_SAFE_INTEGER) {
                      let num4 = 0;
                      if (tmp4(num3)) {
                        num4 = 0;
                        if (0 !== num3) {
                          num4 = num3;
                        }
                      }
                      return { min: num4 };
                    }
                  }
                  const _TypeError2 = TypeError;
                  const _HermesInternal2 = HermesInternal;
                  const self3 = this;
                  const self4 = this;
                  const typeError1 = new TypeError("" + combined + " is outside the accepted range of 0 to " + MAX_SAFE_INTEGER + ", inclusive");
                  throw typeError1;
                } else {
                  const _TypeError = TypeError;
                  const _HermesInternal = HermesInternal;
                  const self = this;
                  const self2 = this;
                  const typeError2 = new TypeError("" + combined + " is not a finite number");
                  throw typeError2;
                }
              })(obj, "options").min;
              if (0 === min) {
                let _TypeError2 = TypeError;
                const self8 = this;
                const self9 = this;
                const typeError3 = new TypeError("options.min must be greater than 0");
                return d(typeError3);
              } else {
                if (((byteLength) => byteLength.constructor === DataView)(byteLength)) {
                  if (min > byteLength.byteLength) {
                    const _RangeError2 = RangeError;
                    let self6 = this;
                    const self7 = this;
                    const rangeError = new RangeError("options.min must be less than or equal to view's byteLength");
                    return d(rangeError);
                  }
                } else if (min > byteLength.length) {
                  let tmp8 = d;
                  const _RangeError = RangeError;
                  let self4 = this;
                  let self5 = this;
                  const rangeError1 = new RangeError("options.min must be less than or equal to view's length");
                  return d(rangeError1);
                }
                if (undefined === self._ownerReadableStream) {
                  return d(O("read from"));
                } else {
                  let num = 0;
                  const obj2 = {
                    _chunkSteps(value) {
                                  const obj = { value, done: false };
                                  return _undefined(obj);
                                },
                    _closeSteps(value) {
                                  const obj = { value, done: true };
                                  return _undefined(obj);
                                },
                    _errorSteps(arg0) {
                                  return _undefined2(arg0);
                                }
                  };
                  const tmp12 = u((arg0, arg1) => {
                    let c0 = arg0;
                    let c1 = arg1;
                  });
                  it(self, byteLength, min, obj2);
                  return tmp12;
                }
              }
            } catch (tmp27) {
              return d(tmp27);
            }
          }
        } else {
          let _TypeError = TypeError;
          let self2 = this;
          let self3 = this;
          const typeError4 = new TypeError("view must be an array buffer view");
          return d(typeError4);
        }
      } else {
        return d(st("read"));
      }
    }
  },
  {
    key: "releaseLock",
    value: function releaseLock() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_readIntoRequests");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult3;
      }
      if (callResult) {
        if (undefined !== self._ownerReadableStream) {
          W(self);
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("Reader was released");
          const _readIntoRequests = self._readIntoRequests;
          const self6 = this;
          const self7 = this;
          self._readIntoRequests = new closure_15();
          const tmp14 = new closure_15();
          const item = _readIntoRequests.forEach((_errorSteps) => {
            _errorSteps._errorSteps(typeError);
          });
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStreamBYOBReader.prototype." + "releaseLock" + " can only be used on a ReadableStreamBYOBReader");
        throw typeError1;
      }
    }
  }
];
_moduleResult3 = _createClass(ReadableStreamBYOBReader, items5);
Object.defineProperties(_moduleResult3.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } });
fn3(_moduleResult3.prototype.cancel, "cancel");
fn3(_moduleResult3.prototype.read, "read");
fn3(_moduleResult3.prototype.releaseLock, "releaseLock");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object6 = Object;
  const _Symbol5 = Symbol;
  Object.defineProperty(_moduleResult3.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
}
class WritableStream {
  constructor() {
    let fn2;
    let fn3;
    let fn4;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let obj2 = arg1;
    if (arg1 === undefined) {
      obj2 = {};
    }
    let self = this;
    let tmp = _window(this, WritableStream);
    let tmp2 = null;
    if (undefined !== obj) {
      let tmp3 = typeof obj === "object";
      if (typeof obj === "object") {
        tmp3 = null !== obj;
      }
      if (!tmp3) {
        tmp3 = typeof obj === "function";
      }
      tmp2 = obj;
      if (!tmp3) {
        let _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        let self2 = this;
        const self3 = this;
        let typeError = new TypeError("" + "First parameter" + " is not an object.");
        throw typeError;
      }
    }
    const tmp7 = closure_2_64(obj2, "Second parameter");
    if (undefined !== tmp2) {
      if (typeof tmp2 !== "object") {
        if (typeof tmp2 !== "function") {
          const _TypeError6 = TypeError;
          const _HermesInternal10 = HermesInternal;
          const self16 = this;
          const self17 = this;
          const typeError1 = new TypeError("" + "First parameter" + " is not an object.");
          throw typeError1;
        }
      }
    }
    let abort;
    if (null != tmp2) {
      abort = tmp2.abort;
    }
    let close;
    if (null != tmp2) {
      close = tmp2.close;
    }
    let start;
    if (null != tmp2) {
      start = tmp2.start;
    }
    let type;
    if (null != tmp2) {
      type = tmp2.type;
    }
    let write;
    if (null != tmp2) {
      write = tmp2.write;
    }
    let fn;
    if (undefined !== abort) {
      const _HermesInternal2 = HermesInternal;
      obj = tmp2;
      if (typeof abort !== "function") {
        const _TypeError2 = TypeError;
        const _HermesInternal3 = HermesInternal;
        const self4 = this;
        const self5 = this;
        const typeError2 = new TypeError("" + tmp14 + " is not a function.");
        throw typeError2;
      } else {
        fn = (arg0) => {
          const items = [arg0];
          return closure_2_14(abort, obj, items);
        };
      }
    }
    const obj3 = { abort: fn, close: fn2, start: fn3, write: fn4, type };
    fn2 = undefined;
    if (undefined !== close) {
      const _HermesInternal4 = HermesInternal;
      obj = tmp2;
      if (typeof close !== "function") {
        const _TypeError3 = TypeError;
        const _HermesInternal5 = HermesInternal;
        const self6 = this;
        const self7 = this;
        const typeError3 = new TypeError("" + tmp18 + " is not a function.");
        throw typeError3;
      } else {
        fn2 = () => closure_2_14(close, obj, []);
      }
    }
    fn3 = undefined;
    if (undefined !== start) {
      const _HermesInternal6 = HermesInternal;
      obj = tmp2;
      if (typeof start !== "function") {
        const _TypeError4 = TypeError;
        const _HermesInternal7 = HermesInternal;
        const self8 = this;
        const self9 = this;
        const typeError4 = new TypeError("" + tmp22 + " is not a function.");
        throw typeError4;
      } else {
        fn3 = function(arg0) {
          const items = [arg0];
          if (typeof start !== "function") {
            const _TypeError = TypeError;
            const self = this;
            const self2 = this;
            const typeError = new TypeError("Argument is not a function");
            throw typeError;
          } else {
            const _Function = Function;
            return apply.call(tmp, tmp2, items);
          }
        };
      }
    }
    fn4 = undefined;
    if (undefined !== write) {
      const _HermesInternal8 = HermesInternal;
      obj = tmp2;
      if (typeof write !== "function") {
        const _TypeError5 = TypeError;
        const _HermesInternal9 = HermesInternal;
        const self10 = this;
        const self11 = this;
        const typeError5 = new TypeError("" + tmp26 + " is not a function.");
        throw typeError5;
      } else {
        fn4 = (arg0, arg1) => {
          const items = [arg0, arg1];
          return closure_2_14(write, obj, items);
        };
      }
    }
    self._state = "writable";
    self._storedError = undefined;
    self._writer = undefined;
    self._writableStreamController = undefined;
    self._writeRequests = new closure_2_15();
    self._inFlightWriteRequest = undefined;
    self._closeRequest = undefined;
    self._inFlightCloseRequest = undefined;
    self._pendingAbortRequest = undefined;
    self._backpressure = false;
    new closure_2_15();
    if (undefined !== obj3.type) {
      const _RangeError2 = RangeError;
      const self14 = this;
      const self15 = this;
      const rangeError = new RangeError("Invalid type is specified");
      throw rangeError;
    } else {
      const highWaterMark = tmp7.highWaterMark;
      let num = 1;
      const tmp30 = tmp7.size || f126054;
      if (undefined !== highWaterMark) {
        if (!closure_2_41(highWaterMark)) {
          num = highWaterMark;
        }
        const _RangeError = RangeError;
        const self12 = this;
        const self13 = this;
        const rangeError1 = new RangeError("Invalid highWaterMark");
        throw rangeError1;
      }
      const _Object = Object;
      const obj6 = Object.create(internalBinaryWrite12.prototype);
      const tmp38 = undefined !== obj3.start ? (() => obj3.start(obj6)) : (() => {

      });
      const tmp39 = undefined !== obj3.write ? ((arg0) => obj3.write(arg0, obj6)) : (() => {
        const tmp = new closure_1_3((fn) => fn(c0));
        return tmp;
      });
      const tmp40 = undefined !== obj3.close ? (() => obj3.close()) : (() => {
        const tmp = new closure_1_3((fn) => fn(c0));
        return tmp;
      });
      const tmp41 = undefined !== obj3.abort ? ((arg0) => obj3.abort(arg0)) : (() => {
        const tmp = new closure_1_3((fn) => fn(c0));
        return tmp;
      });
      closure_2_79(self, obj6, tmp38, tmp39, tmp40, tmp41, num, tmp30);
    }
  }
}
let obj7 = {
  key: "locked",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_writableStreamController");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult4;
    }
    if (callResult) {
      return undefined !== self._writer;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("WritableStream.prototype." + "locked" + " can only be used on a WritableStream");
      throw typeError;
    }
  }
};
const items6 = [
  obj7,
  {
    key: "abort",
    value: function abort(_abortReason) {
      let tmp10;
      const self = this;
      let tmp2 = typeof this === "object";
      const tmp = _abortReason;
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_writableStreamController");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult4;
      }
      if (callResult) {
        let tmp12;
        if (undefined !== self._writer) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("Cannot abort a stream that already has a writer");
          tmp12 = closure_5(typeError);
        } else {
          tmp12 = wt(self, tmp);
        }
        tmp10 = tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("WritableStream.prototype." + "abort" + " can only be used on a WritableStream");
        tmp10 = closure_5(typeError1);
      }
      return tmp10;
    }
  },
  {
    key: "close",
    value: function close() {
      let tmp9;
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_writableStreamController");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult4;
      }
      if (callResult) {
        let tmp12;
        if (undefined !== self._writer) {
          const _TypeError3 = TypeError;
          const self6 = this;
          const self7 = this;
          const typeError = new TypeError("Cannot close a stream that already has a writer");
          tmp12 = closure_5(typeError);
        } else {
          const tmp10 = undefined !== self._closeRequest || undefined !== self._inFlightCloseRequest;
          if (tmp10) {
            const _TypeError2 = TypeError;
            const self4 = this;
            const self5 = this;
            const typeError1 = new TypeError("Cannot close an already-closing stream");
            tmp12 = closure_5(typeError1);
          } else {
            tmp12 = Rt(self);
          }
        }
        tmp9 = tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError2 = new TypeError("WritableStream.prototype." + "close" + " can only be used on a WritableStream");
        tmp9 = closure_5(typeError2);
      }
      return tmp9;
    }
  },
  {
    key: "getWriter",
    value: function getWriter() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_writableStreamController");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult4;
      }
      if (callResult) {
        const self4 = this;
        const self5 = this;
        const tmp10 = new _moduleResult5(self);
        return tmp10;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("WritableStream.prototype." + "getWriter" + " can only be used on a WritableStream");
        throw typeError;
      }
    }
  }
];
_moduleResult4 = _createClass(WritableStream, items6);
Object.defineProperties(_moduleResult4.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } });
fn3(_moduleResult4.prototype.abort, "abort");
fn3(_moduleResult4.prototype.close, "close");
fn3(_moduleResult4.prototype.getWriter, "getWriter");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object7 = Object;
  const _Symbol6 = Symbol;
  Object.defineProperty(_moduleResult4.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true });
}
class WritableStreamDefaultWriter {
  constructor(_writer) {
    const self = this;
    _window(this, WritableStreamDefaultWriter);
    if (undefined === _writer) {
      const _TypeError3 = TypeError;
      const _HermesInternal2 = HermesInternal;
      const self22 = this;
      const self23 = this;
      const typeError = new TypeError("Parameter " + 1 + " is required in '" + "WritableStreamDefaultWriter" + "'.");
      throw typeError;
    } else {
      let tmp2 = typeof _writer === "object";
      if (typeof _writer === "object") {
        tmp2 = null !== _writer;
      }
      if (!tmp2) {
        tmp2 = typeof _writer === "function";
      }
      let callResult3 = tmp2;
      if (callResult3) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult3 = hasOwnProperty.call(_writer, "_writableStreamController");
      }
      if (callResult3) {
        callResult3 = _writer instanceof set2;
      }
      if (callResult3) {
        if (undefined !== _writer._writer) {
          const _TypeError2 = TypeError;
          const self20 = this;
          const self21 = this;
          const typeError1 = new TypeError("This stream has already been locked for exclusive writing by another writer");
          throw typeError1;
        } else {
          self._ownerWritableStream = _writer;
          _writer._writer = self;
          const _state = _writer._state;
          if ("writable" === _state) {
            let tmp29;
            const tmp25 = undefined !== _writer._closeRequest || undefined !== _writer._inFlightCloseRequest;
            if (!tmp25) {
              if (_writer._backpressure) {
                const self14 = this;
                const self15 = this;
                self._readyPromise = new _false((_readyPromise_resolve, _readyPromise_reject) => {
                  _writer._readyPromise_resolve = _readyPromise_resolve;
                  _writer._readyPromise_reject = _readyPromise_reject;
                });
                self._readyPromiseState = "pending";
                tmp29 = _false;
                const tmp27 = new _false((_readyPromise_resolve, _readyPromise_reject) => {
                  _writer._readyPromise_resolve = _readyPromise_resolve;
                  _writer._readyPromise_reject = _readyPromise_reject;
                });
              }
              const self18 = this;
              const self19 = this;
              self._closedPromise = new tmp29((_closedPromise_resolve, _closedPromise_reject) => {
                self._closedPromise_resolve = _closedPromise_resolve;
                self._closedPromise_reject = _closedPromise_reject;
                self._closedPromiseState = "pending";
              });
              const tmp292 = new tmp29((_closedPromise_resolve, _closedPromise_reject) => {
                self._closedPromise_resolve = _closedPromise_resolve;
                self._closedPromise_reject = _closedPromise_reject;
                self._closedPromiseState = "pending";
              });
            }
            const self16 = this;
            const self17 = this;
            self._readyPromise = new _false((_readyPromise_resolve, _readyPromise_reject) => {
              _writer._readyPromise_resolve = _readyPromise_resolve;
              _writer._readyPromise_reject = _readyPromise_reject;
            });
            self._readyPromiseState = "pending";
            tmp29 = _false;
            const tmp30 = _false;
            const tmp31 = new _false((_readyPromise_resolve, _readyPromise_reject) => {
              _writer._readyPromise_resolve = _readyPromise_resolve;
              _writer._readyPromise_reject = _readyPromise_reject;
            });
            if (undefined !== self._readyPromise_resolve) {
              const result = self._readyPromise_resolve(undefined);
              self._readyPromise_resolve = undefined;
              self._readyPromise_reject = undefined;
              self._readyPromiseState = "fulfilled";
              tmp29 = tmp30;
            }
          } else if ("erroring" === _state) {
            const self10 = this;
            const self11 = this;
            const _storedError = _writer._storedError;
            self._readyPromise = new _false((_readyPromise_resolve, _readyPromise_reject) => {
              _writer._readyPromise_resolve = _readyPromise_resolve;
              _writer._readyPromise_reject = _readyPromise_reject;
            });
            self._readyPromiseState = "pending";
            const tmp19 = _false;
            const tmp20 = new _false((_readyPromise_resolve, _readyPromise_reject) => {
              _writer._readyPromise_resolve = _readyPromise_resolve;
              _writer._readyPromise_reject = _readyPromise_reject;
            });
            if (undefined !== self._readyPromise_reject) {
              React3.call(self._readyPromise, undefined, React2);
              self._readyPromise_reject(_storedError);
              self._readyPromise_resolve = undefined;
              self._readyPromise_reject = undefined;
              self._readyPromiseState = "rejected";
            }
            const self12 = this;
            const self13 = this;
            self._closedPromise = new tmp19((_closedPromise_resolve, _closedPromise_reject) => {
              self._closedPromise_resolve = _closedPromise_resolve;
              self._closedPromise_reject = _closedPromise_reject;
              self._closedPromiseState = "pending";
            });
            const tmp192 = new tmp19((_closedPromise_resolve, _closedPromise_reject) => {
              self._closedPromise_resolve = _closedPromise_resolve;
              self._closedPromise_reject = _closedPromise_reject;
              self._closedPromiseState = "pending";
            });
          } else if ("closed" === _state) {
            const self6 = this;
            const self7 = this;
            self._readyPromise = new _false((_readyPromise_resolve, _readyPromise_reject) => {
              _writer._readyPromise_resolve = _readyPromise_resolve;
              _writer._readyPromise_reject = _readyPromise_reject;
            });
            self._readyPromiseState = "pending";
            const tmp13 = _false;
            const tmp14 = new _false((_readyPromise_resolve, _readyPromise_reject) => {
              _writer._readyPromise_resolve = _readyPromise_resolve;
              _writer._readyPromise_reject = _readyPromise_reject;
            });
            if (undefined !== self._readyPromise_resolve) {
              const result1 = self._readyPromise_resolve(undefined);
              self._readyPromise_resolve = undefined;
              self._readyPromise_reject = undefined;
              self._readyPromiseState = "fulfilled";
            }
            const self8 = this;
            const self9 = this;
            self._closedPromise = new tmp13((_closedPromise_resolve, _closedPromise_reject) => {
              self._closedPromise_resolve = _closedPromise_resolve;
              self._closedPromise_reject = _closedPromise_reject;
              self._closedPromiseState = "pending";
            });
            const tmp132 = new tmp13((_closedPromise_resolve, _closedPromise_reject) => {
              self._closedPromise_resolve = _closedPromise_resolve;
              self._closedPromise_reject = _closedPromise_reject;
              self._closedPromiseState = "pending";
            });
            if (undefined !== self._closedPromise_resolve) {
              const result2 = self._closedPromise_resolve(undefined);
              self._closedPromise_resolve = undefined;
              self._closedPromise_reject = undefined;
              self._closedPromiseState = "resolved";
            }
          } else {
            const _storedError2 = _writer._storedError;
            const self24 = this;
            const self25 = this;
            self._readyPromise = new _false((_readyPromise_resolve, _readyPromise_reject) => {
              _writer._readyPromise_resolve = _readyPromise_resolve;
              _writer._readyPromise_reject = _readyPromise_reject;
            });
            self._readyPromiseState = "pending";
            const tmp43 = _false;
            const tmp44 = new _false((_readyPromise_resolve, _readyPromise_reject) => {
              _writer._readyPromise_resolve = _readyPromise_resolve;
              _writer._readyPromise_reject = _readyPromise_reject;
            });
            if (undefined !== self._readyPromise_reject) {
              React3.call(self._readyPromise, undefined, React2);
              self._readyPromise_reject(_storedError2);
              self._readyPromise_resolve = undefined;
              self._readyPromise_reject = undefined;
              self._readyPromiseState = "rejected";
            }
            const self4 = this;
            const self5 = this;
            self._closedPromise = new tmp43((_closedPromise_resolve, _closedPromise_reject) => {
              self._closedPromise_resolve = _closedPromise_resolve;
              self._closedPromise_reject = _closedPromise_reject;
              self._closedPromiseState = "pending";
            });
            const tmp432 = new tmp43((_closedPromise_resolve, _closedPromise_reject) => {
              self._closedPromise_resolve = _closedPromise_resolve;
              self._closedPromise_reject = _closedPromise_reject;
              self._closedPromiseState = "pending";
            });
            if (undefined !== self._closedPromise_reject) {
              React3.call(self._closedPromise, undefined, React2);
              const result3 = self._closedPromise_reject(_storedError2);
              self._closedPromise_resolve = undefined;
              self._closedPromise_reject = undefined;
              self._closedPromiseState = "rejected";
            }
          }
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError2 = new TypeError("" + "First parameter" + " is not a WritableStream.");
        throw typeError2;
      }
    }
  }
}
let obj8 = {
  key: "closed",
  get() {
    let _closedPromise;
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_ownerWritableStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult5;
    }
    if (callResult) {
      _closedPromise = self._closedPromise;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("WritableStreamDefaultWriter.prototype." + "closed" + " can only be used on a WritableStreamDefaultWriter");
      _closedPromise = closure_5(typeError);
    }
    return _closedPromise;
  }
};
const items7 = [
  obj8,
  {
    key: "desiredSize",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_ownerWritableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult5;
      }
      if (callResult) {
        if (undefined === self._ownerWritableStream) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("Cannot desiredSize a stream using a released writer");
          throw typeError;
        } else {
          const _ownerWritableStream = self._ownerWritableStream;
          const _state = _ownerWritableStream._state;
          let tmp8 = null;
          if ("errored" !== _state) {
            tmp8 = null;
            if ("erroring" !== _state) {
              let num = 0;
              if ("closed" !== _state) {
                const _writableStreamController = _ownerWritableStream._writableStreamController;
                num = _writableStreamController._strategyHWM - _writableStreamController._queueTotalSize;
              }
              tmp8 = num;
            }
          }
          return tmp8;
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("WritableStreamDefaultWriter.prototype." + "desiredSize" + " can only be used on a WritableStreamDefaultWriter");
        throw typeError1;
      }
    }
  },
  {
    key: "ready",
    get() {
      let _readyPromise;
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_ownerWritableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult5;
      }
      if (callResult) {
        _readyPromise = self._readyPromise;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("WritableStreamDefaultWriter.prototype." + "ready" + " can only be used on a WritableStreamDefaultWriter");
        _readyPromise = closure_5(typeError);
      }
      return _readyPromise;
    }
  },
  {
    key: "abort",
    value: function abort(_abortReason) {
      let tmp10;
      const self = this;
      let tmp2 = typeof this === "object";
      const tmp = _abortReason;
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_ownerWritableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult5;
      }
      if (callResult) {
        let tmp12;
        if (undefined === self._ownerWritableStream) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("Cannot abort a stream using a released writer");
          tmp12 = closure_5(typeError);
        } else {
          tmp12 = wt(self._ownerWritableStream, tmp);
        }
        tmp10 = tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("WritableStreamDefaultWriter.prototype." + "abort" + " can only be used on a WritableStreamDefaultWriter");
        tmp10 = closure_5(typeError1);
      }
      return tmp10;
    }
  },
  {
    key: "close",
    value: function close() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_ownerWritableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult5;
      }
      if (callResult) {
        let tmp11;
        const _ownerWritableStream = self._ownerWritableStream;
        if (undefined === _ownerWritableStream) {
          const _TypeError3 = TypeError;
          const self6 = this;
          const self7 = this;
          const typeError = new TypeError("Cannot close a stream using a released writer");
          tmp11 = closure_5(typeError);
        } else {
          const tmp9 = undefined !== _ownerWritableStream._closeRequest || undefined !== _ownerWritableStream._inFlightCloseRequest;
          if (tmp9) {
            const _TypeError2 = TypeError;
            const self4 = this;
            const self5 = this;
            const typeError1 = new TypeError("Cannot close an already-closing stream");
            tmp11 = closure_5(typeError1);
          } else {
            tmp11 = Rt(self._ownerWritableStream);
          }
        }
        return tmp11;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError2 = new TypeError("WritableStreamDefaultWriter.prototype." + "close" + " can only be used on a WritableStreamDefaultWriter");
        return closure_5(typeError2);
      }
    }
  },
  {
    key: "releaseLock",
    value: function releaseLock() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_ownerWritableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult5;
      }
      if (callResult) {
        if (undefined !== self._ownerWritableStream) {
          At(self);
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError = new TypeError("WritableStreamDefaultWriter.prototype." + "releaseLock" + " can only be used on a WritableStreamDefaultWriter");
        throw typeError;
      }
    }
  },
  {
    key: "write",
    value: function write() {
      let tmp10;
      const self = this;
      let tmp2 = typeof this === "object";
      const tmp = arg0;
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_ownerWritableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult5;
      }
      if (callResult) {
        let tmp12;
        if (undefined === self._ownerWritableStream) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("Cannot write to a stream using a released writer");
          tmp12 = closure_5(typeError);
        } else {
          tmp12 = zt(self, tmp);
        }
        tmp10 = tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("WritableStreamDefaultWriter.prototype." + "write" + " can only be used on a WritableStreamDefaultWriter");
        tmp10 = closure_5(typeError1);
      }
      return tmp10;
    }
  }
];
_moduleResult5 = _createClass(WritableStreamDefaultWriter, items7);
Object.defineProperties(_moduleResult5.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } });
fn3(_moduleResult5.prototype.abort, "abort");
fn3(_moduleResult5.prototype.close, "close");
fn3(_moduleResult5.prototype.releaseLock, "releaseLock");
fn3(_moduleResult5.prototype.write, "write");
if (typeof Symbol.toStringTag === "symbol") {
  let _Object8 = Object;
  const _Symbol7 = Symbol;
  Object.defineProperty(_moduleResult5.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
}
closure_77 = {};
class WritableStreamDefaultController {
  constructor() {
    _window(this, WritableStreamDefaultController);
    const typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
let obj9 = {
  key: "abortReason",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledWritableStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult6;
    }
    if (callResult) {
      return self._abortReason;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("WritableStreamDefaultController.prototype." + "abortReason" + " can only be used on a WritableStreamDefaultController");
      throw typeError;
    }
  }
};
const items8 = [
  obj9,
  {
    key: "signal",
    get() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_controlledWritableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult6;
      }
      if (callResult) {
        if (undefined === self._abortController) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          throw typeError;
        } else {
          return self._abortController.signal;
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("WritableStreamDefaultController.prototype." + "signal" + " can only be used on a WritableStreamDefaultController");
        throw typeError1;
      }
    }
  },
  {
    key: "error",
    value: function error(typeError) {
      let _writableStreamController;
      let _writer;
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_controlledWritableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult6;
      }
      if (callResult) {
        if ("writable" === self._controlledWritableStream._state) {
          const _controlledWritableStream = self._controlledWritableStream;
          self._writeAlgorithm = undefined;
          self._closeAlgorithm = undefined;
          self._abortAlgorithm = undefined;
          self._strategySizeAlgorithm = undefined;
          _controlledWritableStream._state = "erroring";
          _controlledWritableStream._storedError = typeError;
          ({ _writer, _writableStreamController } = _controlledWritableStream);
          if (undefined !== _writer) {
            kt(_writer, typeError);
          }
          const tmp12 = !(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest) && _writableStreamController._started;
          if (tmp12) {
            Pt(_controlledWritableStream);
          }
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        typeError = new TypeError("WritableStreamDefaultController.prototype." + "error" + " can only be used on a WritableStreamDefaultController");
        throw typeError;
      }
    }
  },
  {
    key: SymbolResult,
    value(arg0) {
      this._writeAlgorithm = undefined;
      this._closeAlgorithm = undefined;
      this._abortAlgorithm = undefined;
      this._strategySizeAlgorithm = undefined;
      return this._abortAlgorithm(arg0);
    }
  },
  {
    key: SymbolResult1,
    value() {
      this._queue = new closure_15();
      this._queueTotalSize = 0;
      new closure_15();
    }
  }
];
_moduleResult6 = _createClass(WritableStreamDefaultController, items8);
Object.defineProperties(_moduleResult6.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } });
if (typeof Symbol.toStringTag === "symbol") {
  let _Object9 = Object;
  const _Symbol8 = Symbol;
  Object.defineProperty(_moduleResult6.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
}
if (typeof globalThis !== "undefined") {
  _self = globalThis;
} else {
  const _self2 = self;
  if (typeof self !== "undefined") {
    _self = self;
  } else if (undefined !== global) {
    _self = global;
  }
}
let DOMException;
if (null != _self) {
  DOMException = _self.DOMException;
}
let tmp44;
if ((function(DOMException) {
  if (typeof DOMException !== "function") {
    if (typeof DOMException !== "object") {
      return false;
    }
  }
  if ("DOMException" !== DOMException.name) {
    return false;
  } else {
    try {
      const self = this;
      new DOMException();
      return true;
    } catch (err) {
      return false;
    }
  }
})(DOMException)) {
  tmp44 = DOMException;
}
if (!tmp44) {
  class e {
    constructor(arg0, arg1) {
      let str;
      let tmp;
      const obj = { message: tmp, name: str };
      str = arg1;
      tmp = arg0 || "";
      if (!arg1) {
        str = "Error";
      }
      if (Error.captureStackTrace) {
        const _Error = Error;
        Error.captureStackTrace(obj, obj.constructor);
      }
    }
  }
  let str2 = "DOMException";
  fn3(e, "DOMException");
  let _Object = Object;
  let _Error = Error;
  e.prototype = Object.create(Error.prototype);
  let _Object2 = Object;
  let obj10 = { value: e, writable: true, configurable: true };
  const str3 = "constructor";
  Object.defineProperty(e.prototype, "constructor", obj10);
  tmp44 = e;
}
e = tmp44;
class ReadableStreamDefaultController {
  constructor() {
    _window(this, ReadableStreamDefaultController);
    const typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
let obj11 = {
  key: "desiredSize",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledReadableStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult7;
    }
    if (callResult) {
      const _state = self._controlledReadableStream._state;
      let tmp8 = null;
      if ("errored" !== _state) {
        let num = 0;
        if ("closed" !== _state) {
          num = self._strategyHWM - self._queueTotalSize;
        }
        tmp8 = num;
      }
      return tmp8;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ReadableStreamDefaultController.prototype." + "desiredSize" + " can only be used on a ReadableStreamDefaultController");
      throw typeError;
    }
  }
};
const items9 = [
  obj11,
  {
    key: "close",
    value: function close() {
      const self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult = tmp;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_controlledReadableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult7;
      }
      if (callResult) {
        const tmp9 = !self._closeRequested && "readable" === tmp8;
        if (tmp9) {
          const tmp14 = !self._closeRequested && "readable" === tmp13;
          if (tmp14) {
            self._closeRequested = true;
            if (0 === self._queue.length) {
              self._pullAlgorithm = undefined;
              self._cancelAlgorithm = undefined;
              self._strategySizeAlgorithm = undefined;
              Br(tmp15);
            }
          }
        } else {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("The stream is not in a state that permits close");
          throw typeError;
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStreamDefaultController.prototype." + "close" + " can only be used on a ReadableStreamDefaultController");
        throw typeError1;
      }
    }
  },
  {
    key: "enqueue",
    value: function enqueue() {
      const self = this;
      let tmp2 = typeof this === "object";
      const tmp = arg0;
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_controlledReadableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult7;
      }
      if (callResult) {
        const tmp10 = !self._closeRequested && "readable" === tmp9;
        if (tmp10) {
          fr(self, tmp);
        } else {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          const typeError = new TypeError("The stream is not in a state that permits enqueue");
          throw typeError;
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStreamDefaultController.prototype." + "enqueue" + " can only be used on a ReadableStreamDefaultController");
        throw typeError1;
      }
    }
  },
  {
    key: "error",
    value: function error(typeError) {
      const self = this;
      let tmp2 = typeof this === "object";
      const tmp = typeError;
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_controlledReadableStream");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult7;
      }
      if (callResult) {
        const _controlledReadableStream = self._controlledReadableStream;
        if ("readable" === _controlledReadableStream._state) {
          const self4 = this;
          const self5 = this;
          self._queue = new closure_15();
          self._queueTotalSize = 0;
          self._pullAlgorithm = undefined;
          self._cancelAlgorithm = undefined;
          self._strategySizeAlgorithm = undefined;
          const tmp10 = new closure_15();
          jr(_controlledReadableStream, tmp);
        }
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        typeError = new TypeError("ReadableStreamDefaultController.prototype." + "error" + " can only be used on a ReadableStreamDefaultController");
        throw typeError;
      }
    }
  },
  {
    key: SymbolResult2,
    value(arg0) {
      this._queue = new closure_15();
      this._queueTotalSize = 0;
      this._pullAlgorithm = undefined;
      this._cancelAlgorithm = undefined;
      this._strategySizeAlgorithm = undefined;
      new closure_15();
      return this._cancelAlgorithm(arg0);
    }
  },
  {
    key: SymbolResult3,
    value(_chunkSteps) {
      let self = this;
      let _controlledReadableStream = this._controlledReadableStream;
      if (this._queue.length > 0) {
        const _queue = self._queue;
        self._queueTotalSize = self._queueTotalSize - _queue.shift().size;
        _queue.shift();
        if (self._queueTotalSize < 0) {
          self._queueTotalSize = 0;
        }
        if (self._closeRequested) {
          if (0 === self._queue.length) {
            self._pullAlgorithm = undefined;
            self._cancelAlgorithm = undefined;
            self._strategySizeAlgorithm = undefined;
            let tmp4 = Br;
            Br(_controlledReadableStream);
          }
          _chunkSteps._chunkSteps(tmp2);
        }
        if (ur(self)) {
          if (self._pulling) {
            self._pullAgain = true;
          } else {
            self._pulling = true;
            then.call(then.call(self._pullAlgorithm(), f126072, f126073), undefined, fn);
          }
        }
      } else {
        const _readRequests = _controlledReadableStream._reader._readRequests;
        _readRequests.push(_chunkSteps);
        if (ur(self)) {
          if (self._pulling) {
            self._pullAgain = true;
          } else {
            self._pulling = true;
            const obj = then;
            obj.call(then.call(self._pullAlgorithm(), f126072, f126073), undefined, fn);
          }
        }
      }
    }
  },
  {
    key: SymbolResult4,
    value() {

    }
  }
];
_moduleResult7 = _createClass(ReadableStreamDefaultController, items9);
Object.defineProperties(_moduleResult7.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } });
fn3(_moduleResult7.prototype.close, "close");
fn3(_moduleResult7.prototype.enqueue, "enqueue");
fn3(_moduleResult7.prototype.error, "error");
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      let str;
      let tmp;
      const obj = { message: tmp, name: str };
      str = arg1;
      tmp = arg0 || "";
      if (!arg1) {
        str = "Error";
      }
      if (Error.captureStackTrace) {
        const _Error = Error;
        Error.captureStackTrace(obj, obj.constructor);
      }
    }
  }
  const _Symbol9 = Symbol;
  Object.defineProperty(_moduleResult7.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
}
class ReadableStream {
  constructor(arg0) {
    let fn;
    let fn2;
    let fn3;
    let tmp35;
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let obj2 = arg1;
    if (arg1 === undefined) {
      obj2 = {};
    }
    let self = this;
    let tmp = _window(this, ReadableStream);
    let tmp2 = null;
    if (undefined !== obj) {
      let tmp3 = typeof obj === "object";
      if (typeof obj === "object") {
        tmp3 = null !== obj;
      }
      if (!tmp3) {
        tmp3 = typeof obj === "function";
      }
      tmp2 = obj;
      if (!tmp3) {
        let _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        let self2 = this;
        const self3 = this;
        let typeError = new TypeError("" + "First parameter" + " is not an object.");
        throw typeError;
      }
    }
    const tmp7 = closure_2_64(obj2, "Second parameter");
    if (undefined !== tmp2) {
      if (typeof tmp2 !== "object") {
        if (typeof tmp2 !== "function") {
          const _TypeError9 = TypeError;
          const _HermesInternal11 = HermesInternal;
          const self24 = this;
          const self25 = this;
          const typeError1 = new TypeError("" + "First parameter" + " is not an object.");
          throw typeError1;
        }
      }
    }
    let prop;
    if (null != tmp2) {
      prop = tmp2.autoAllocateChunkSize;
    }
    let cancel;
    if (null != tmp2) {
      cancel = tmp2.cancel;
    }
    let pull;
    if (null != tmp2) {
      pull = tmp2.pull;
    }
    let start;
    if (null != tmp2) {
      start = tmp2.start;
    }
    let type;
    if (null != tmp2) {
      type = tmp2.type;
    }
    let tmp13;
    if (undefined !== prop) {
      const _HermesInternal12 = HermesInternal;
      const combined = "" + "First parameter" + " has member 'autoAllocateChunkSize' that";
      const _Number = Number;
      const _Number2 = Number;
      const NumberResult = Number(prop);
      let num = 0;
      if (0 !== NumberResult) {
        num = NumberResult;
      }
      const tmp14 = closure_2_24;
      if (closure_2_24(num)) {
        const tmp18 = closure_2_25(num);
        let num2 = 0;
        if (0 !== tmp18) {
          num2 = tmp18;
        }
        if (num2 >= 0) {
          if (num2 <= MAX_SAFE_INTEGER) {
            let num3 = 0;
            if (tmp14(num2)) {
              num3 = 0;
              if (0 !== num2) {
                num3 = num2;
              }
            }
            tmp13 = num3;
          }
        }
        const _TypeError3 = TypeError;
        const _HermesInternal3 = HermesInternal;
        const self6 = this;
        const self7 = this;
        const typeError2 = new TypeError("" + combined + " is outside the accepted range of 0 to " + MAX_SAFE_INTEGER + ", inclusive");
        throw typeError2;
      } else {
        const _TypeError2 = TypeError;
        const _HermesInternal2 = HermesInternal;
        const self4 = this;
        const self5 = this;
        const typeError3 = new TypeError("" + combined + " is not a finite number");
        throw typeError3;
      }
    }
    const obj3 = { autoAllocateChunkSize: tmp13, cancel: fn, pull: fn2, start: fn3, type: tmp35 };
    fn = undefined;
    if (undefined !== cancel) {
      const _HermesInternal4 = HermesInternal;
      obj = tmp2;
      if (typeof cancel !== "function") {
        const _TypeError4 = TypeError;
        const _HermesInternal5 = HermesInternal;
        const self8 = this;
        const self9 = this;
        const typeError4 = new TypeError("" + tmp24 + " is not a function.");
        throw typeError4;
      } else {
        fn = (arg0) => {
          const items = [arg0];
          return closure_2_14(cancel, obj, items);
        };
      }
    }
    fn2 = undefined;
    if (undefined !== pull) {
      const _HermesInternal6 = HermesInternal;
      obj = tmp2;
      if (typeof pull !== "function") {
        const _TypeError5 = TypeError;
        const _HermesInternal7 = HermesInternal;
        const self10 = this;
        const self11 = this;
        const typeError5 = new TypeError("" + tmp28 + " is not a function.");
        throw typeError5;
      } else {
        fn2 = (arg0) => {
          const items = [arg0];
          return closure_2_14(pull, obj, items);
        };
      }
    }
    fn3 = undefined;
    if (undefined !== start) {
      const _HermesInternal8 = HermesInternal;
      obj = tmp2;
      if (typeof start !== "function") {
        const _TypeError6 = TypeError;
        const _HermesInternal9 = HermesInternal;
        const self12 = this;
        const self13 = this;
        const typeError6 = new TypeError("" + tmp32 + " is not a function.");
        throw typeError6;
      } else {
        fn3 = function(arg0) {
          const items = [arg0];
          if (typeof start !== "function") {
            const _TypeError = TypeError;
            const self = this;
            const self2 = this;
            const typeError = new TypeError("Argument is not a function");
            throw typeError;
          } else {
            const _Function = Function;
            return apply.call(tmp, tmp2, items);
          }
        };
      }
    }
    tmp35 = undefined;
    if (undefined !== type) {
      const _HermesInternal13 = HermesInternal;
      const combined1 = "" + "First parameter" + " has member 'type' that";
      const _HermesInternal14 = HermesInternal;
      const combined2 = "" + type;
      tmp35 = combined2;
      if ("bytes" != combined2) {
        const _TypeError7 = TypeError;
        const _HermesInternal10 = HermesInternal;
        const self14 = this;
        const self15 = this;
        const typeError7 = new TypeError("" + combined1 + " '" + combined2 + "' is not a valid enumeration value for ReadableStreamType");
        throw typeError7;
      }
    }
    self._state = "readable";
    self._reader = undefined;
    self._storedError = undefined;
    self._disturbed = false;
    if ("bytes" === obj3.type) {
      if (undefined !== tmp7.size) {
        const _RangeError3 = RangeError;
        const self22 = this;
        const self23 = this;
        const rangeError = new RangeError("The strategy for a byte stream cannot have a size function");
        throw rangeError;
      } else {
        const highWaterMark2 = tmp7.highWaterMark;
        let num6 = 0;
        if (undefined !== highWaterMark2) {
          if (!closure_2_41(highWaterMark2)) {
            num6 = highWaterMark2;
          }
          const _RangeError2 = RangeError;
          const self18 = this;
          const self19 = this;
          const rangeError1 = new RangeError("Invalid highWaterMark");
          throw rangeError1;
        }
        const _Object2 = Object;
        const obj7 = Object.create(closure_2_45.prototype);
        const autoAllocateChunkSize = obj3.autoAllocateChunkSize;
        const tmp67 = undefined !== obj3.start ? (() => obj3.start(obj7)) : (() => {

        });
        const tmp68 = undefined !== obj3.pull ? (() => obj3.pull(obj7)) : (() => {
          const tmp = new closure_1_3((fn) => fn(c0));
          return tmp;
        });
        const tmp69 = undefined !== obj3.cancel ? ((arg0) => obj3.cancel(arg0)) : (() => {
          const tmp = new closure_1_3((fn) => fn(c0));
          return tmp;
        });
        if (0 === autoAllocateChunkSize) {
          const _TypeError8 = TypeError;
          const self20 = this;
          const self21 = this;
          const typeError8 = new TypeError("autoAllocateChunkSize must be greater than 0");
          throw typeError8;
        } else {
          invites(self, obj7, tmp67, tmp68, tmp69, num6, autoAllocateChunkSize);
        }
      }
    } else {
      const highWaterMark = tmp7.highWaterMark;
      let num4 = 1;
      const tmp40 = tmp7.size || f126054;
      if (undefined !== highWaterMark) {
        if (!closure_2_41(highWaterMark)) {
          num4 = highWaterMark;
        }
        const _RangeError = RangeError;
        const self16 = this;
        const self17 = this;
        const rangeError2 = new RangeError("Invalid highWaterMark");
        throw rangeError2;
      }
      const _Object = Object;
      const obj8 = Object.create(closure_2_85.prototype);
      const tmp48 = undefined !== obj3.start ? (() => obj3.start(obj8)) : (() => {

      });
      const tmp49 = undefined !== obj3.pull ? (() => obj3.pull(obj8)) : (() => {
        const tmp = new closure_1_3((fn) => fn(c0));
        return tmp;
      });
      const tmp50 = undefined !== obj3.cancel ? ((arg0) => obj3.cancel(arg0)) : (() => {
        const tmp = new closure_1_3((fn) => fn(c0));
        return tmp;
      });
      closure_2_91(self, obj8, tmp48, tmp49, tmp50, num4, tmp40);
    }
  }
}
let obj12 = {
  key: "locked",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_readableStreamController");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult8;
    }
    if (callResult) {
      return undefined !== self._reader;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ReadableStream.prototype." + "locked" + " can only be used on a ReadableStream");
      throw typeError;
    }
  }
};
const items10 = [
  obj12,
  {
    key: "cancel",
    value: function cancel(typeError) {
      let tmp10;
      const self = this;
      let tmp2 = typeof this === "object";
      const tmp = typeError;
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_readableStreamController");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult8;
      }
      if (callResult) {
        let tmp12;
        if (undefined !== self._reader) {
          const _TypeError2 = TypeError;
          const self4 = this;
          const self5 = this;
          typeError = new TypeError("Cannot cancel a stream that already has a reader");
          tmp12 = closure_5(typeError);
        } else {
          tmp12 = Or(self, tmp);
        }
        tmp10 = tmp12;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStream.prototype." + "cancel" + " can only be used on a ReadableStream");
        tmp10 = closure_5(typeError1);
      }
      return tmp10;
    }
  },
  {
    key: "getReader",
    value: function getReader() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_readableStreamController");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult8;
      }
      if (callResult) {
        let tmp18;
        if (undefined !== arg0) {
          if (typeof arg0 !== "object") {
            if (typeof arg0 !== "function") {
              const _TypeError3 = TypeError;
              const _HermesInternal3 = HermesInternal;
              const self10 = this;
              const self11 = this;
              const typeError = new TypeError("" + "First parameter" + " is not an object.");
              throw typeError;
            }
          }
        }
        let mode;
        if (null != arg0) {
          mode = tmp.mode;
        }
        let tmp11;
        if (undefined !== mode) {
          const _HermesInternal4 = HermesInternal;
          const combined = "" + "First parameter" + " has member 'mode' that";
          const _HermesInternal5 = HermesInternal;
          const combined1 = "" + mode;
          tmp11 = combined1;
          if ("byob" != combined1) {
            const _TypeError2 = TypeError;
            const _HermesInternal2 = HermesInternal;
            const self4 = this;
            const self5 = this;
            const typeError1 = new TypeError("" + combined + " '" + combined1 + "' is not a valid enumeration value for ReadableStreamReaderMode");
            throw typeError1;
          }
        }
        if (undefined === tmp11) {
          const self8 = this;
          const self9 = this;
          tmp18 = new c29(self);
        } else {
          const self6 = this;
          const self7 = this;
          tmp18 = new _moduleResult3(self);
        }
        return tmp18;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError2 = new TypeError("ReadableStream.prototype." + "getReader" + " can only be used on a ReadableStream");
        throw typeError2;
      }
    }
  },
  {
    key: "pipeThrough",
    value: function pipeThrough(decompressionStream, preventAbort) {
      let obj = preventAbort;
      if (preventAbort === undefined) {
        obj = {};
      }
      let self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult1 = tmp;
      if (callResult1) {
        let tmp3 = globalThis;
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult1 = hasOwnProperty.call(self, "_readableStreamController");
      }
      if (callResult1) {
        let tmp4 = _moduleResult8;
        callResult1 = self instanceof _moduleResult8;
      }
      if (callResult1) {
        const tmp8 = decompressionStream;
        if (undefined === decompressionStream) {
          const _TypeError9 = TypeError;
          const _HermesInternal7 = HermesInternal;
          const self18 = this;
          const self19 = this;
          let typeError = new TypeError("Parameter " + 1 + " is required in '" + "pipeThrough" + "'.");
          throw typeError;
        } else {
          if (undefined !== decompressionStream) {
            if (typeof decompressionStream !== "object") {
              if (typeof decompressionStream !== "function") {
                const _TypeError8 = TypeError;
                const _HermesInternal6 = HermesInternal;
                const self16 = this;
                const self17 = this;
                const typeError1 = new TypeError("" + "First parameter" + " is not an object.");
                throw typeError1;
              }
            }
          }
          let tmp9 = null;
          let readable;
          if (null != decompressionStream) {
            readable = decompressionStream.readable;
          }
          if (undefined === readable) {
            const _TypeError7 = TypeError;
            const _HermesInternal5 = HermesInternal;
            const self14 = this;
            const self15 = this;
            const typeError2 = new TypeError("" + "readable" + " is required in '" + "ReadableWritablePair" + "'.");
            throw typeError2;
          } else {
            const _HermesInternal8 = HermesInternal;
            let tmp11 = typeof readable === "object";
            const combined = "" + "First parameter" + " has member 'readable' that";
            if (typeof readable === "object") {
              tmp11 = null !== readable;
            }
            if (!tmp11) {
              tmp11 = typeof readable === "function";
            }
            let callResult2 = tmp11;
            if (callResult2) {
              const _Object2 = Object;
              const hasOwnProperty2 = Object.prototype.hasOwnProperty;
              callResult2 = hasOwnProperty2.call(readable, "_readableStreamController");
            }
            if (callResult2) {
              let tmp13 = _moduleResult8;
              callResult2 = readable instanceof _moduleResult8;
            }
            if (callResult2) {
              let writable;
              if (null != decompressionStream) {
                writable = decompressionStream.writable;
              }
              if (undefined === writable) {
                const _TypeError6 = TypeError;
                const _HermesInternal4 = HermesInternal;
                const self12 = this;
                const self13 = this;
                const typeError3 = new TypeError("" + "writable" + " is required in '" + "ReadableWritablePair" + "'.");
                throw typeError3;
              } else {
                const _HermesInternal9 = HermesInternal;
                let tmp17 = typeof writable === "object";
                const combined1 = "" + "First parameter" + " has member 'writable' that";
                if (typeof writable === "object") {
                  tmp17 = null !== writable;
                }
                if (!tmp17) {
                  tmp17 = typeof writable === "function";
                }
                let callResult3 = tmp17;
                if (callResult3) {
                  const _Object3 = Object;
                  const hasOwnProperty3 = Object.prototype.hasOwnProperty;
                  callResult3 = hasOwnProperty3.call(writable, "_writableStreamController");
                }
                if (callResult3) {
                  callResult3 = writable instanceof _moduleResult4;
                }
                if (callResult3) {
                  let tmp22 = Tr;
                  let num = 0;
                  const tmp23 = Tr(obj, "Second parameter");
                  if (undefined !== self._reader) {
                    const _TypeError5 = TypeError;
                    const self10 = this;
                    const self11 = this;
                    const typeError4 = new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
                    throw typeError4;
                  } else if (undefined !== writable._writer) {
                    const _TypeError4 = TypeError;
                    const self8 = this;
                    const self9 = this;
                    const typeError5 = new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
                    throw typeError5;
                  } else {
                    ({ preventClose: fn, preventAbort: Promise, preventCancel: then, signal: closure_5 } = tmp23);
                    const self20 = this;
                    const self21 = this;
                    let closure_6 = new c29(self);
                    const self22 = this;
                    const self23 = this;
                    const tmp45 = new c29(self);
                    let closure_7 = new _moduleResult5(writable);
                    const flag = true;
                    self._disturbed = true;
                    const flag2 = false;
                    let c8 = false;
                    let c0;
                    const self24 = this;
                    const self25 = this;
                    const tmp49 = new _moduleResult5(writable);
                    let closure_9 = new Promise((fn) => fn(c0));
                    const self26 = this;
                    const self27 = this;
                    const tmp52 = new Promise((fn) => fn(c0));
                    const tmp54 = new Promise(function(arg0, arg1) {
                      let _readyPromise;
                      let no;
                      let tmp3;
                      let typeError;
                      const f141230 = () => {
                        let callResult;
                        if (closure_0 !== closure_9) {
                          closure_0 = closure_1_9;
                          callResult = fn.call(closure_1_9, f141230, undefined);
                        }
                        return callResult;
                      };
                      const f141238 = () => {
                        _ownerWritableStream = _ownerWritableStream._ownerWritableStream;
                        const _state = _ownerWritableStream._state;
                        let tmp2 = undefined !== _ownerWritableStream._closeRequest;
                        const tmp = _ownerWritableStream;
                        if (!tmp2) {
                          tmp2 = undefined !== _ownerWritableStream._inFlightCloseRequest;
                        }
                        if (!tmp2) {
                          let tmp4;
                          if ("closed" !== _state) {
                            if ("errored" === _state) {
                              tmp4 = E(_ownerWritableStream._storedError);
                            } else {
                              tmp4 = closure_2_69(tmp._ownerWritableStream);
                            }
                          }
                          return tmp4;
                        }
                        tmp4 = new typeError((fn) => fn(c0));
                      };
                      _self = arg0;
                      writable = arg1;
                      fn = function q(fn, arg1, _storedError) {
                        const f142189 = () => {
                          closure_2_75(closure_1_7);
                          closure_2_22(closure_1_6);
                          const obj = closure_1_5;
                          const tmp = closure_1_1;
                          const tmp2 = closure_1_2;
                          if (undefined !== closure_1_5) {
                            const removed = obj.removeEventListener("abort", closure_2);
                          }
                          if (tmp) {
                            closure_1(tmp2);
                          } else {
                            fn(undefined);
                          }
                          return null;
                        };
                        const f142190 = (arg0) => {
                          closure_3_75(_readyPromise);
                          closure_3_22(closure_2_6);
                          const obj = closure_2_5;
                          if (undefined !== closure_2_5) {
                            const removed = obj.removeEventListener("abort", _storedError);
                          }
                          closure_1_1(arg0);
                          return null;
                        };
                        closure_0 = fn;
                        closure_1 = arg1;
                        fn = _storedError;
                        let tmp = c8;
                        if (!tmp) {
                          c8 = true;
                          let tmp2 = closure_1;
                          if ("writable" === closure_1._state) {
                            const tmp3 = undefined !== tmp2._closeRequest || undefined !== tmp2._inFlightCloseRequest;
                            if (!tmp3) {
                              closure_0 = closure_1_9;
                              then.call(then.call(then.call(closure_1_9, f141230, undefined), function n() {
                                let obj = then;
                                obj.call(then.call(closure_0(), f142189, f142190), undefined, fn);
                                return null;
                              }, undefined), undefined, fn);
                            }
                          }
                          then.call(then.call(fn(), f142189, f142190), undefined, fn);
                        }
                      };
                      class E {
                        constructor(arg0, arg1) {
                          closure_0 = arg0;
                          closure_1 = arg1;
                          let tmp = c8;
                          if (!tmp) {
                            c8 = true;
                            let tmp2 = closure_1;
                            if ("writable" === closure_1._state) {
                              const tmp3 = undefined !== tmp2._closeRequest || undefined !== tmp2._inFlightCloseRequest;
                              if (!tmp3) {
                                closure_0 = closure_1_9;
                                let obj = then;
                                let callResult = obj.call(obj.call(then.call(closure_1_9, f141230, undefined), () => {
                                  closure_2_75(_readyPromise);
                                  closure_2_22(closure_1_6);
                                  const obj = closure_1_5;
                                  const tmp = closure_0;
                                  const tmp2 = closure_1;
                                  if (undefined !== closure_1_5) {
                                    const removed = obj.removeEventListener("abort", no);
                                  }
                                  if (tmp) {
                                    closure_1(tmp2);
                                  } else {
                                    closure_0(undefined);
                                  }
                                  return null;
                                }, undefined), undefined, fn);
                              }
                            }
                            At(_readyPromise);
                            closure_2_22(closure_1_6);
                            const obj2 = E;
                            if (undefined !== E) {
                              let removed = obj2.removeEventListener("abort", no);
                            }
                            if (arg0) {
                              closure_1(arg1);
                            } else {
                              closure_0(undefined);
                            }
                          }
                        }
                      }
                      let obj = E;
                      if (undefined !== E) {
                        no = function no() {
                          let _state;
                          let _state2;
                          let reason;
                          if (undefined !== closure_5.reason) {
                            reason = closure_5.reason;
                          } else {
                            const tmp = e;
                            let self = this;
                            let self2 = this;
                            reason = new e("Aborted", "AbortError");
                          }
                          const items = [];
                          const tmp2 = Promise;
                          if (!tmp2) {
                            items.push(function() {
                              let tmp3;
                              if ("writable" === _state2._state) {
                                tmp3 = closure_3_68(tmp, reason);
                              } else {
                                const self = this;
                                const self2 = this;
                                tmp3 = new typeError((fn) => fn(c0));
                              }
                              return tmp3;
                            });
                          }
                          const tmp4 = then;
                          if (!tmp4) {
                            items.push(function() {
                              let tmp3;
                              if ("readable" === _state._state) {
                                tmp3 = closure_3_96(tmp, reason);
                              } else {
                                const self = this;
                                const self2 = this;
                                tmp3 = new typeError((fn) => fn(c0));
                              }
                              return tmp3;
                            });
                          }
                          fn(() => Promise.all(items.map((fn) => fn())), true, reason);
                        };
                        if (obj.aborted) {
                          let reason;
                          if (undefined !== obj.reason) {
                            reason = obj.reason;
                          } else {
                            const self3 = this;
                            const self4 = this;
                            reason = new closure_1_83("Aborted", "AbortError");
                          }
                          let items = [];
                          const tmp24 = typeError;
                          if (!tmp24) {
                            items.push(function() {
                              let tmp3;
                              if ("writable" === _state2._state) {
                                tmp3 = closure_3_68(tmp, reason);
                              } else {
                                const self = this;
                                const self2 = this;
                                tmp3 = new typeError((fn) => fn(c0));
                              }
                              return tmp3;
                            });
                          }
                          class E {
                            constructor(arg0, arg1) {
                              closure_0 = arg0;
                              closure_1 = arg1;
                              let tmp = c8;
                              if (!tmp) {
                                c8 = true;
                                let tmp2 = closure_1;
                                if ("writable" === closure_1._state) {
                                  const tmp3 = undefined !== tmp2._closeRequest || undefined !== tmp2._inFlightCloseRequest;
                                  if (!tmp3) {
                                    closure_0 = closure_1_9;
                                    let obj = then;
                                    let callResult = obj.call(obj.call(then.call(closure_1_9, f141230, undefined), () => {
                                      closure_2_75(_readyPromise);
                                      closure_2_22(closure_1_6);
                                      const obj = closure_1_5;
                                      const tmp = closure_0;
                                      const tmp2 = closure_1;
                                      if (undefined !== closure_1_5) {
                                        const removed = obj.removeEventListener("abort", no);
                                      }
                                      if (tmp) {
                                        closure_1(tmp2);
                                      } else {
                                        closure_0(undefined);
                                      }
                                      return null;
                                    }, undefined), undefined, fn);
                                  }
                                }
                                At(_readyPromise);
                                closure_2_22(closure_1_6);
                                const obj2 = E;
                                if (undefined !== E) {
                                  let removed = obj2.removeEventListener("abort", no);
                                }
                                if (arg0) {
                                  closure_1(arg1);
                                } else {
                                  closure_0(undefined);
                                }
                              }
                            }
                          }
                          if (!tmp26) {
                            items.push(function() {
                              let tmp3;
                              if ("readable" === _state._state) {
                                tmp3 = closure_3_96(tmp, reason);
                              } else {
                                const self = this;
                                const self2 = this;
                                tmp3 = new typeError((fn) => fn(c0));
                              }
                              return tmp3;
                            });
                          }
                          fn(() => Promise.all(items.map((fn) => fn())), true, reason);
                        } else {
                          str = "abort";
                          const listener = obj.addEventListener("abort", no);
                        }
                      }
                      let tmp2 = _self;
                      if ("errored" === _self._state) {
                        const _storedError = tmp2._storedError;
                        let tmp4 = typeError;
                        if (typeError) {
                          E(true, _storedError);
                        } else {
                          fn(() => closure_3_68(closure_2_1, closure_0), true, _storedError);
                        }
                      } else {
                        let callResult = then.call(then.call(tmp3, undefined, (length) => {
                          closure_0 = length;
                          const tmp = Promise;
                          if (tmp) {
                            E(true, length);
                          } else {
                            fn(() => closure_3_68(closure_2_1, closure_0), true, length);
                          }
                          return null;
                        }), undefined, closure_1_2);
                      }
                      const tmp7 = writable;
                      if ("errored" === writable._state) {
                        const _storedError2 = tmp7._storedError;
                        if (fn) {
                          E(true, _storedError2);
                        } else {
                          fn(() => closure_3_96(closure_2_0, closure_0), true, _storedError2);
                        }
                      } else {
                        then.call(then.call(tmp8, undefined, (length) => {
                          closure_0 = length;
                          const tmp = then;
                          if (tmp) {
                            E(true, length);
                          } else {
                            fn(() => closure_3_96(closure_2_0, closure_0), true, length);
                          }
                          return null;
                        }), undefined, closure_1_2);
                      }
                      if ("closed" === tmp2._state) {
                        const tmp13 = no;
                        if (tmp13) {
                          E();
                        } else {
                          fn(f141238);
                        }
                      } else {
                        then.call(then.call(tmp12, function lo() {
                          let tmp = fn;
                          if (tmp) {
                            let tmp4 = E;
                            E();
                          } else {
                            let tmp2 = fn;
                            fn(f141238);
                          }
                          return null;
                        }, undefined), undefined, closure_1_2);
                      }
                      const tmp16 = undefined !== tmp7._closeRequest || undefined !== tmp7._inFlightCloseRequest;
                      if (tmp16) {
                        const _TypeError = TypeError;
                        let self = this;
                        let self2 = this;
                        typeError = new TypeError("the destination writable stream closed before all data could be piped to it");
                        class E {
                          constructor(arg0, arg1) {
                            closure_0 = arg0;
                            closure_1 = arg1;
                            let tmp = c8;
                            if (!tmp) {
                              c8 = true;
                              let tmp2 = closure_1;
                              if ("writable" === closure_1._state) {
                                const tmp3 = undefined !== tmp2._closeRequest || undefined !== tmp2._inFlightCloseRequest;
                                if (!tmp3) {
                                  closure_0 = closure_1_9;
                                  let obj = then;
                                  let callResult = obj.call(obj.call(then.call(closure_1_9, f141230, undefined), () => {
                                    closure_2_75(_readyPromise);
                                    closure_2_22(closure_1_6);
                                    const obj = closure_1_5;
                                    const tmp = closure_0;
                                    const tmp2 = closure_1;
                                    if (undefined !== closure_1_5) {
                                      const removed = obj.removeEventListener("abort", no);
                                    }
                                    if (tmp) {
                                      closure_1(tmp2);
                                    } else {
                                      closure_0(undefined);
                                    }
                                    return null;
                                  }, undefined), undefined, fn);
                                }
                              }
                              At(_readyPromise);
                              closure_2_22(closure_1_6);
                              const obj2 = E;
                              if (undefined !== E) {
                                let removed = obj2.removeEventListener("abort", no);
                              }
                              if (arg0) {
                                closure_1(arg1);
                              } else {
                                closure_0(undefined);
                              }
                            }
                          }
                        }
                        if (fn) {
                          E(true, typeError);
                        } else {
                          fn(() => Or(self, typeError), true, typeError);
                        }
                      }
                      const tmp22 = new Promise((arg0, arg1) => {
                        closure_0 = arg0;
                        closure_1 = arg1;
                        fn = function o(arg0) {
                          let tmp = arg0;
                          if (tmp) {
                            closure_0();
                          } else {
                            let callResult;
                            const tmp2 = c8;
                            if (tmp2) {
                              let c0 = true;
                              const self = this;
                              const self2 = this;
                              callResult = new Promise((fn) => fn(c0));
                            } else {
                              callResult = then.call(_readyPromise._readyPromise, () => {
                                const tmp = new typeError((arg0, _errorSteps) => {
                                  closure_0 = arg0;
                                  const obj = {
                                    _chunkSteps(arg0) {
                                      closure_9 = closure_3_4.call(closure_3_76(closure_2_7, arg0), undefined, closure_3_0);
                                      closure_0(false);
                                    },
                                    _closeSteps() {
                                      return closure_0(true);
                                    },
                                    _errorSteps
                                  };
                                  _ownerReadableStream = _ownerReadableStream._ownerReadableStream;
                                  _ownerReadableStream._disturbed = true;
                                  if ("closed" === _ownerReadableStream._state) {
                                    obj._closeSteps();
                                  } else if ("errored" === _ownerReadableStream._state) {
                                    obj._errorSteps(_ownerReadableStream._storedError);
                                  } else {
                                    const _readableStreamController = _ownerReadableStream._readableStreamController;
                                    _readableStreamController[closure_1_19](obj);
                                  }
                                });
                                return tmp;
                              }, undefined);
                            }
                            then.call(callResult, fn, closure_1);
                          }
                        };
                        fn(false);
                      });
                      then.call(tmp22, undefined, closure_1_2);
                    });
                    let callResult = then.call(tmp54, undefined, fn);
                    return readable;
                  }
                } else {
                  const _TypeError3 = TypeError;
                  const _HermesInternal3 = HermesInternal;
                  const self6 = this;
                  const self7 = this;
                  const typeError6 = new TypeError("" + combined1 + " is not a WritableStream.");
                  throw typeError6;
                }
              }
            } else {
              const _TypeError2 = TypeError;
              const _HermesInternal2 = HermesInternal;
              let self4 = this;
              const self5 = this;
              const typeError7 = new TypeError("" + combined + " is not a ReadableStream.");
              throw typeError7;
            }
          }
        }
      } else {
        const tmp5 = globalThis;
        let _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        str = " can only be used on a ReadableStream";
        const str2 = "pipeThrough";
        let self2 = this;
        let self3 = this;
        const typeError8 = new TypeError("ReadableStream.prototype." + "pipeThrough" + " can only be used on a ReadableStream");
        let tmp7 = typeError8;
        throw typeError8;
      }
    }
  },
  {
    key: "pipeTo",
    value: function pipeTo(arg0, preventAbort) {
      let obj = preventAbort;
      if (preventAbort === undefined) {
        obj = {};
      }
      const self = this;
      if (Er(this)) {
        if (undefined === arg0) {
          return d("Parameter 1 is required in 'pipeTo'.");
        } else if (gt(arg0)) {
          try {
            let tmp15;
            const tmp9 = Tr(obj, "Second parameter");
            if (Wr(self)) {
              const _TypeError3 = TypeError;
              const self6 = this;
              const self7 = this;
              const typeError = new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream");
              tmp15 = d(typeError);
            } else if (vt(arg0)) {
              const _TypeError2 = TypeError;
              const self4 = this;
              const self5 = this;
              const typeError1 = new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream");
              tmp15 = d(typeError1);
            } else {
              tmp15 = ir(self, arg0, tmp9.preventClose, tmp9.preventAbort, tmp9.preventCancel, tmp9.signal);
            }
            return tmp15;
          } catch (tmp24) {
            return d(tmp24);
          }
        } else {
          const _TypeError = TypeError;
          const self2 = this;
          const self3 = this;
          const typeError2 = new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream");
          return d(typeError2);
        }
      } else {
        return d(kr("pipeTo"));
      }
    }
  },
  {
    key: "tee",
    value: function tee() {
      let obj8;
      let obj9;
      let tmp6;
      const f142198 = (arg0) => {
        let closure_1_5 = arg0;
      };
      let self = this;
      let tmp = typeof this === "object";
      if (typeof this === "object") {
        tmp = null !== self;
      }
      if (!tmp) {
        tmp = typeof self === "function";
      }
      let callResult2 = tmp;
      if (callResult2) {
        let tmp3 = globalThis;
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult2 = hasOwnProperty.call(self, "_readableStreamController");
      }
      if (callResult2) {
        let tmp4 = _moduleResult8;
        callResult2 = self instanceof _moduleResult8;
      }
      if (callResult2) {
        let _readableStreamController = self._readableStreamController;
        let tmp8 = typeof _readableStreamController === "object";
        if (typeof _readableStreamController === "object") {
          tmp8 = null !== _readableStreamController;
        }
        if (!tmp8) {
          tmp8 = typeof _readableStreamController === "function";
        }
        let callResult3 = tmp8;
        if (callResult3) {
          let tmp10 = globalThis;
          const _Object2 = Object;
          const hasOwnProperty2 = Object.prototype.hasOwnProperty;
          callResult3 = hasOwnProperty2.call(_readableStreamController, "_controlledReadableByteStream");
        }
        if (callResult3) {
          let tmp11 = _moduleResult2;
          callResult3 = _readableStreamController instanceof _moduleResult2;
        }
        if (callResult3) {
          function p() {
            let tmp = closure_6;
            let flag = typeof closure_6 === "object";
            if (typeof closure_6 === "object") {
              flag = true;
            }
            if (!flag) {
              flag = typeof tmp === "function";
            }
            let callResult1 = flag;
            if (callResult1) {
              let tmp3 = globalThis;
              const _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              callResult1 = hasOwnProperty.call(tmp, "_readIntoRequests");
            }
            if (callResult1) {
              let tmp4 = closure_1_60;
              callResult1 = tmp instanceof closure_1_60;
            }
            if (callResult1) {
              let tmp5 = closure_1_22;
              const tmp6 = closure_6;
              closure_1_22(closure_6);
              self = this;
              let self2 = this;
              const tmp10 = new closure_1_29(closure_0);
              closure_6 = tmp10;
              closure_0 = tmp10;
              obj7.call(obj7.call(tmp10._closedPromise, undefined, function(arg0) {
                if (closure_0 === closure_6) {
                  const _readableStreamController2 = obj6._readableStreamController;
                  const _controlledReadableByteStream2 = _readableStreamController2._controlledReadableByteStream;
                  if ("readable" === _controlledReadableByteStream2._state) {
                    if (null !== _readableStreamController2._byobRequest) {
                      _readableStreamController2._byobRequest._associatedReadableByteStreamController = undefined;
                      _readableStreamController2._byobRequest._view = null;
                      _readableStreamController2._byobRequest = null;
                    }
                    self = this;
                    const self2 = this;
                    _readableStreamController2._pendingPullIntos = new fn2();
                    const self3 = this;
                    const self4 = this;
                    const tmp2 = new fn2();
                    _readableStreamController2._queue = new fn2();
                    _readableStreamController2._queueTotalSize = 0;
                    _readableStreamController2._pullAlgorithm = undefined;
                    _readableStreamController2._cancelAlgorithm = undefined;
                    const tmp4 = new fn2();
                    closure_3_98(_controlledReadableByteStream2, arg0);
                  }
                  const _readableStreamController = obj7._readableStreamController;
                  const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
                  if ("readable" === _controlledReadableByteStream._state) {
                    if (null !== _readableStreamController._byobRequest) {
                      _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
                      _readableStreamController._byobRequest._view = null;
                      _readableStreamController._byobRequest = null;
                    }
                    const self5 = this;
                    const self6 = this;
                    _readableStreamController._pendingPullIntos = new fn2();
                    const self7 = this;
                    const self8 = this;
                    const tmp10 = new fn2();
                    _readableStreamController._queue = new fn2();
                    _readableStreamController._queueTotalSize = 0;
                    _readableStreamController._pullAlgorithm = undefined;
                    _readableStreamController._cancelAlgorithm = undefined;
                    const tmp12 = new fn2();
                    closure_3_98(_controlledReadableByteStream, arg0);
                  }
                  const tmp16 = closure_2_10 && closure_2_11;
                  if (!tmp16) {
                    closure_2_5(undefined);
                  }
                }
                return null;
              }), undefined, closure_1_2);
            }
            const obj2 = {
              _chunkSteps(arg0) {
                closure_0 = arg0;
                const tmp = closure_1_12(() => {
                  c8 = false;
                  c9 = false;
                  let tmp2 = closure_0;
                  const tmp3 = closure_2_10;
                  if (!tmp3) {
                    const tmp4 = closure_2_11;
                    if (!tmp4) {
                      try {
                        tmp2 = closure_3_42(tmp);
                      } catch (tmp6) {
                        closure_3_55(obj6._readableStreamController, tmp6);
                        closure_3_55(obj7._readableStreamController, tmp6);
                        closure_2_5(closure_3_96(closure_0, tmp6));
                      }
                    }
                  }
                  const tmp16 = closure_2_10;
                  if (!tmp16) {
                    closure_3_54(obj6._readableStreamController, closure_0);
                  }
                  const tmp20 = closure_2_11;
                  if (!tmp20) {
                    closure_3_54(obj7._readableStreamController, tmp2);
                  }
                  c7 = false;
                  const tmp25 = c8;
                  if (tmp25) {
                    fn2();
                  } else {
                    const tmp26 = c9;
                    if (tmp26) {
                      fn3();
                    }
                  }
                });
              },
              _closeSteps() {
                c7 = false;
                const tmp = closure_1_10;
                if (!tmp) {
                  closure_2_53(obj6._readableStreamController);
                }
                const tmp5 = closure_1_11;
                if (!tmp5) {
                  closure_2_53(obj7._readableStreamController);
                }
                if (obj6._readableStreamController._pendingPullIntos.length > 0) {
                  const _readableStreamController = obj6._readableStreamController;
                  const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                  const peekResult = _pendingPullIntos.peek();
                  if ("closed" === _readableStreamController._controlledReadableByteStream._state) {
                    peekResult.buffer = closure_2_30(peekResult.buffer);
                    closure_2_52(_readableStreamController, 0);
                  } else {
                    const _TypeError = TypeError;
                    self = this;
                    const self2 = this;
                    const typeError = new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                    throw typeError;
                  }
                }
                if (obj7._readableStreamController._pendingPullIntos.length > 0) {
                  const _readableStreamController2 = obj7._readableStreamController;
                  const _pendingPullIntos2 = _readableStreamController2._pendingPullIntos;
                  const peekResult1 = _pendingPullIntos2.peek();
                  if ("closed" === _readableStreamController2._controlledReadableByteStream._state) {
                    peekResult1.buffer = closure_2_30(peekResult1.buffer);
                    closure_2_52(_readableStreamController2, 0);
                  } else {
                    const _TypeError2 = TypeError;
                    const self3 = this;
                    const self4 = this;
                    const typeError1 = new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                    throw typeError1;
                  }
                }
                const tmp23 = closure_1_10 && closure_1_11;
                if (!tmp23) {
                  closure_1_5(undefined);
                }
              },
              _errorSteps() {
                c7 = false;
              }
            };
            _ownerReadableStream = closure_6._ownerReadableStream;
            _ownerReadableStream._disturbed = true;
            if ("closed" === _ownerReadableStream._state) {
              obj2._closeSteps();
            } else if ("errored" === _ownerReadableStream._state) {
              obj2._errorSteps(_ownerReadableStream._storedError);
            } else {
              let _readableStreamController = _ownerReadableStream._readableStreamController;
              _readableStreamController[closure_1_19](obj2);
            }
          }
          S = function S(buffer, arg1) {
            let closure_0 = arg1;
            let tmp = closure_6;
            let flag = typeof closure_6 === "object";
            if (typeof closure_6 === "object") {
              flag = true;
            }
            if (!flag) {
              flag = typeof tmp === "function";
            }
            let callResult1 = flag;
            if (callResult1) {
              const tmp3 = globalThis;
              const _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              callResult1 = hasOwnProperty.call(tmp, "_readRequests");
            }
            if (callResult1) {
              let tmp4 = closure_1_29;
              callResult1 = tmp instanceof closure_1_29;
            }
            if (callResult1) {
              let tmp5 = closure_1_22;
              let tmp6 = closure_6;
              let num = 0;
              closure_1_22(closure_6);
              self = this;
              let self2 = this;
              let tmp10 = new closure_1_60(closure_0);
              closure_6 = tmp10;
              closure_0 = tmp10;
              let obj = obj7;
              obj.call(obj7.call(tmp10._closedPromise, undefined, function(arg0) {
                if (closure_0 === closure_6) {
                  const _readableStreamController2 = obj6._readableStreamController;
                  const _controlledReadableByteStream2 = _readableStreamController2._controlledReadableByteStream;
                  if ("readable" === _controlledReadableByteStream2._state) {
                    if (null !== _readableStreamController2._byobRequest) {
                      _readableStreamController2._byobRequest._associatedReadableByteStreamController = undefined;
                      _readableStreamController2._byobRequest._view = null;
                      _readableStreamController2._byobRequest = null;
                    }
                    self = this;
                    const self2 = this;
                    _readableStreamController2._pendingPullIntos = new fn2();
                    const self3 = this;
                    const self4 = this;
                    const tmp2 = new fn2();
                    _readableStreamController2._queue = new fn2();
                    _readableStreamController2._queueTotalSize = 0;
                    _readableStreamController2._pullAlgorithm = undefined;
                    _readableStreamController2._cancelAlgorithm = undefined;
                    const tmp4 = new fn2();
                    closure_3_98(_controlledReadableByteStream2, arg0);
                  }
                  const _readableStreamController = obj7._readableStreamController;
                  const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
                  if ("readable" === _controlledReadableByteStream._state) {
                    if (null !== _readableStreamController._byobRequest) {
                      _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
                      _readableStreamController._byobRequest._view = null;
                      _readableStreamController._byobRequest = null;
                    }
                    const self5 = this;
                    const self6 = this;
                    _readableStreamController._pendingPullIntos = new fn2();
                    const self7 = this;
                    const self8 = this;
                    const tmp10 = new fn2();
                    _readableStreamController._queue = new fn2();
                    _readableStreamController._queueTotalSize = 0;
                    _readableStreamController._pullAlgorithm = undefined;
                    _readableStreamController._cancelAlgorithm = undefined;
                    const tmp12 = new fn2();
                    closure_3_98(_controlledReadableByteStream, arg0);
                  }
                  const tmp16 = closure_2_10 && closure_2_11;
                  if (!tmp16) {
                    closure_2_5(undefined);
                  }
                }
                return null;
              }), undefined, closure_1_2);
            }
            let closure_1 = arg1 ? obj7 : obj6;
            let closure_2 = arg1 ? obj6 : obj7;
            const obj2 = {
              _chunkSteps(arg0) {
                closure_0 = arg0;
                let tmp = closure_12(() => {
                  c8 = false;
                  c9 = false;
                  const tmp = closure_0 ? c11 : c10;
                  if (closure_0 ? c10 : c11) {
                    if (!tmp) {
                      Xe(closure_1._readableStreamController, closure_0);
                    }
                  } else {
                    try {
                      const tmp4 = closure_0;
                      const tmp5 = Se(closure_0);
                      if (!tmp) {
                        Xe(closure_1._readableStreamController, tmp4);
                      }
                      xe(closure_2._readableStreamController, tmp5);
                    } catch (tmp13) {
                      Ne(closure_1._readableStreamController, tmp13);
                      Ne(closure_2._readableStreamController, tmp13);
                      closure_3_5(Or(self, tmp13));
                    }
                  }
                  c7 = false;
                  const tmp28 = c8;
                  if (tmp28) {
                    fn2();
                  } else {
                    const tmp29 = c9;
                    if (tmp29) {
                      fn3();
                    }
                  }
                });
              },
              _closeSteps(arg0) {
                c7 = false;
                let tmp = closure_0 ? c11 : c10;
                const tmp2 = closure_0 ? c10 : c11;
                if (!tmp) {
                  Qe(closure_1._readableStreamController);
                }
                if (!tmp2) {
                  Qe(closure_2._readableStreamController);
                }
                if (undefined !== arg0) {
                  if (!tmp) {
                    Xe(closure_1._readableStreamController, arg0);
                  }
                  const tmp12 = !tmp2 && closure_2._readableStreamController._pendingPullIntos.length > 0;
                  if (tmp12) {
                    const _readableStreamController = closure_2._readableStreamController;
                    const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                    const peekResult = _pendingPullIntos.peek();
                    if ("closed" === _readableStreamController._controlledReadableByteStream._state) {
                      peekResult.buffer = fn(peekResult.buffer);
                      $e(_readableStreamController, 0);
                    } else {
                      const _TypeError = TypeError;
                      self = this;
                      const self2 = this;
                      const typeError = new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
                      throw typeError;
                    }
                  }
                }
                if (tmp) {
                  tmp = tmp2;
                }
                if (!tmp) {
                  closure_2_5(undefined);
                }
              },
              _errorSteps() {
                c7 = false;
              }
            };
            _ownerReadableStream = closure_6._ownerReadableStream;
            _ownerReadableStream._disturbed = true;
            if ("errored" === _ownerReadableStream._state) {
              obj2._errorSteps(_ownerReadableStream._storedError);
            } else {
              let tmp12 = buffer;
              const tmp13 = obj2;
              (function Ie(_readableStreamController, buffer, arg2, _chunkSteps) {
                const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
                const constructor = buffer.constructor;
                const tmp = ((constructor) => {
                  let num = 1;
                  if (constructor !== DataView) {
                    num = constructor.BYTES_PER_ELEMENT;
                  }
                  return num;
                })(constructor);
                try {
                  const tmp6 = closure_1_30(buffer.buffer);
                  const obj = { buffer: tmp6, bufferByteLength: tmp6.byteLength, byteOffset: tmp2, byteLength: tmp3, bytesFilled: 0, minimumFill: tmp4, elementSize: tmp, viewConstructor: constructor, readerType: "byob" };
                  if (_readableStreamController._pendingPullIntos.length > 0) {
                    const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                    _pendingPullIntos.push(obj);
                    closure_1_59(_controlledReadableByteStream, _chunkSteps);
                  } else if ("closed" !== _controlledReadableByteStream._state) {
                    if (_readableStreamController._queueTotalSize > 0) {
                      if (closure_1_50(_readableStreamController, obj)) {
                        const tmp23 = closure_1_47(obj);
                        closure_1_51(_readableStreamController);
                        _chunkSteps._chunkSteps(tmp23);
                      } else if (_readableStreamController._closeRequested) {
                        const _TypeError = TypeError;
                        const self3 = this;
                        const self4 = this;
                        const typeError = new TypeError("Insufficient bytes to fill elements in the given buffer");
                        closure_1_55(_readableStreamController, typeError);
                        _chunkSteps._errorSteps(typeError);
                      }
                    }
                    const _pendingPullIntos1 = _readableStreamController._pendingPullIntos;
                    _pendingPullIntos1.push(obj);
                    closure_1_59(_controlledReadableByteStream, _chunkSteps);
                    closure_1_46(_readableStreamController);
                  } else {
                    self = this;
                    const self2 = this;
                    let num = 0;
                    const constructor1 = new constructor(obj.buffer, obj.byteOffset, 0);
                    _chunkSteps._closeSteps(constructor1);
                  }
                } catch (tmp30) {
                  _chunkSteps._errorSteps(tmp30);
                }
              })(_ownerReadableStream._readableStreamController, buffer, 1, obj2);
            }
          };
          const fn2 = function g() {
            if (c7) {
              c8 = true;
              let c0;
              const self5 = this;
              const self6 = this;
              const tmp17 = new obj8((fn) => fn(c0));
              return tmp17;
            } else {
              c7 = true;
              const _readableStreamController = obj6._readableStreamController;
              if (null === _readableStreamController._byobRequest) {
                if (_readableStreamController._pendingPullIntos.length > 0) {
                  const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                  const peekResult = _pendingPullIntos.peek();
                  const _Uint8Array = Uint8Array;
                  self = this;
                  const self2 = this;
                  const uint8Array = new Uint8Array(peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled, peekResult.byteLength - peekResult.bytesFilled);
                  const _Object = Object;
                  const obj = Object.create(_moduleResult1.prototype);
                  obj._associatedReadableByteStreamController = _readableStreamController;
                  obj._view = uint8Array;
                  _readableStreamController._byobRequest = obj;
                }
              }
              const _byobRequest = _readableStreamController._byobRequest;
              if (null === _byobRequest) {
                p();
              } else {
                S(_byobRequest._view, false);
              }
              const self3 = this;
              const self4 = this;
              const tmp14 = new obj8((fn) => fn(c0));
              return tmp14;
            }
          };
          const fn3 = function v() {
            if (c7) {
              c9 = true;
              let c0;
              const self5 = this;
              const self6 = this;
              const tmp17 = new obj8((fn) => fn(c0));
              return tmp17;
            } else {
              c7 = true;
              const _readableStreamController = obj7._readableStreamController;
              if (null === _readableStreamController._byobRequest) {
                if (_readableStreamController._pendingPullIntos.length > 0) {
                  const _pendingPullIntos = _readableStreamController._pendingPullIntos;
                  const peekResult = _pendingPullIntos.peek();
                  const _Uint8Array = Uint8Array;
                  self = this;
                  const self2 = this;
                  const uint8Array = new Uint8Array(peekResult.buffer, peekResult.byteOffset + peekResult.bytesFilled, peekResult.byteLength - peekResult.bytesFilled);
                  const _Object = Object;
                  const obj = Object.create(_moduleResult1.prototype);
                  obj._associatedReadableByteStreamController = _readableStreamController;
                  obj._view = uint8Array;
                  _readableStreamController._byobRequest = obj;
                }
              }
              const _byobRequest = _readableStreamController._byobRequest;
              if (null === _byobRequest) {
                p();
              } else {
                S(_byobRequest._view, true);
              }
              const self3 = this;
              const self4 = this;
              const tmp14 = new obj8((fn) => fn(c0));
              return tmp14;
            }
          };
          class T {
            constructor() {

            }
          }
          let self8 = this;
          const self9 = this;
          _undefined = new c29(self);
          let c7 = false;
          let c8 = false;
          let c9 = false;
          let c10 = false;
          let c11 = false;
          const self10 = this;
          const self11 = this;
          const tmp34 = new c29(self);
          let closure_12 = new obj8(f142198);
          const _Object7 = Object;
          const tmp37 = new obj8(f142198);
          const obj6 = Object.create(_moduleResult8.prototype);
          obj6._state = "readable";
          obj6._reader = undefined;
          obj6._storedError = undefined;
          obj6._disturbed = false;
          const _Object8 = Object;
          Je(obj6, Object.create(_moduleResult2.prototype), T, fn2, function w(arg0) {
            c10 = true;
            let closure_1_1 = arg0;
            const tmp = c11;
            if (tmp) {
              const items = [arg0, closure_1_2];
              closure_1_5(Or(self, items.slice()));
            }
            return closure_12;
          }, 0, undefined);
          const _Object9 = Object;
          const obj7 = Object.create(_moduleResult8.prototype);
          obj7._state = "readable";
          obj7._reader = undefined;
          obj7._storedError = undefined;
          obj7._disturbed = false;
          const _Object10 = Object;
          Je(obj7, Object.create(_moduleResult2.prototype), T, fn3, function R(arg0) {
            c11 = true;
            let closure_1_2 = arg0;
            const tmp = c10;
            if (tmp) {
              const items = [closure_1_1, arg0];
              closure_1_5(Or(self, items.slice()));
            }
            return closure_12;
          }, 0, undefined);
          let closure_0 = _undefined;
          let obj2 = obj9;
          obj2.call(obj9.call(_undefined._closedPromise, undefined, function(arg0) {
            if (closure_0 === closure_6) {
              const _readableStreamController2 = obj6._readableStreamController;
              const _controlledReadableByteStream2 = _readableStreamController2._controlledReadableByteStream;
              if ("readable" === _controlledReadableByteStream2._state) {
                if (null !== _readableStreamController2._byobRequest) {
                  _readableStreamController2._byobRequest._associatedReadableByteStreamController = undefined;
                  _readableStreamController2._byobRequest._view = null;
                  _readableStreamController2._byobRequest = null;
                }
                self = this;
                const self2 = this;
                _readableStreamController2._pendingPullIntos = new fn2();
                const self3 = this;
                const self4 = this;
                const tmp2 = new fn2();
                _readableStreamController2._queue = new fn2();
                _readableStreamController2._queueTotalSize = 0;
                _readableStreamController2._pullAlgorithm = undefined;
                _readableStreamController2._cancelAlgorithm = undefined;
                const tmp4 = new fn2();
                closure_3_98(_controlledReadableByteStream2, arg0);
              }
              const _readableStreamController = obj7._readableStreamController;
              const _controlledReadableByteStream = _readableStreamController._controlledReadableByteStream;
              if ("readable" === _controlledReadableByteStream._state) {
                if (null !== _readableStreamController._byobRequest) {
                  _readableStreamController._byobRequest._associatedReadableByteStreamController = undefined;
                  _readableStreamController._byobRequest._view = null;
                  _readableStreamController._byobRequest = null;
                }
                const self5 = this;
                const self6 = this;
                _readableStreamController._pendingPullIntos = new fn2();
                const self7 = this;
                const self8 = this;
                const tmp10 = new fn2();
                _readableStreamController._queue = new fn2();
                _readableStreamController._queueTotalSize = 0;
                _readableStreamController._pullAlgorithm = undefined;
                _readableStreamController._cancelAlgorithm = undefined;
                const tmp12 = new fn2();
                closure_3_98(_controlledReadableByteStream, arg0);
              }
              const tmp16 = closure_2_10 && closure_2_11;
              if (!tmp16) {
                closure_2_5(undefined);
              }
            }
            return null;
          }), undefined, fn);
          let items = [obj6, obj7];
          let items1 = items;
        } else {
          fn = function h() {
            let tmp7;
            if (c7) {
              c8 = true;
              let c0;
              let tmp8 = Promise;
              const self3 = this;
              const self4 = this;
              tmp7 = new Promise((fn) => fn(c0));
            } else {
              c7 = true;
              let tmp = _ownerReadableStream;
              const obj = {
                _chunkSteps(arg0) {
                    let closure_0 = arg0;
                    fn(() => {
                      c8 = false;
                      const tmp2 = closure_2_9;
                      if (!tmp2) {
                        fr(obj8._readableStreamController, closure_0);
                      }
                      const tmp6 = closure_2_10;
                      if (!tmp6) {
                        fr(obj9._readableStreamController, closure_0);
                      }
                      c7 = false;
                      const tmp10 = c8;
                      if (tmp10) {
                        fn();
                      }
                    });
                  },
                _closeSteps() {
                    c7 = false;
                    const tmp = closure_1_9;
                    if (!tmp) {
                      const _readableStreamController = obj8._readableStreamController;
                      const tmp4 = !_readableStreamController._closeRequested && "readable" === tmp3;
                      if (tmp4) {
                        _readableStreamController._closeRequested = true;
                        if (0 === _readableStreamController._queue.length) {
                          _readableStreamController._pullAlgorithm = undefined;
                          _readableStreamController._cancelAlgorithm = undefined;
                          _readableStreamController._strategySizeAlgorithm = undefined;
                          Br(tmp5);
                        }
                      }
                    }
                    const tmp8 = closure_1_10;
                    if (!tmp8) {
                      const _readableStreamController2 = obj9._readableStreamController;
                      const tmp11 = !_readableStreamController2._closeRequested && "readable" === tmp10;
                      if (tmp11) {
                        _readableStreamController2._closeRequested = true;
                        if (0 === _readableStreamController2._queue.length) {
                          _readableStreamController2._pullAlgorithm = undefined;
                          _readableStreamController2._cancelAlgorithm = undefined;
                          _readableStreamController2._strategySizeAlgorithm = undefined;
                          Br(tmp12);
                        }
                      }
                    }
                    const tmp15 = closure_1_9 && closure_1_10;
                    if (!tmp15) {
                      closure_1_5(undefined);
                    }
                  },
                _errorSteps() {
                    c7 = false;
                  }
              };
              _ownerReadableStream = _ownerReadableStream._ownerReadableStream;
              _ownerReadableStream._disturbed = true;
              if ("closed" === _ownerReadableStream._state) {
                obj._closeSteps();
              } else if ("errored" === _ownerReadableStream._state) {
                obj._errorSteps(_ownerReadableStream._storedError);
              } else {
                let _readableStreamController = _ownerReadableStream._readableStreamController;
                let tmp2 = SymbolResult3;
                const tmp3 = _readableStreamController[SymbolResult3](obj);
              }
              let tmp6 = Promise;
              self = this;
              const self2 = this;
              tmp7 = new Promise((fn) => fn(c0));
            }
            return tmp7;
          };
          class S {
            constructor() {

            }
          }
          let tmp12 = c29;
          let self4 = this;
          let self5 = this;
          class T {
            constructor() {

            }
          }
          let tmp13 = new c29(self);
          let tmp14 = tmp13;
          _undefined = tmp13;
          let flag = false;
          c7 = false;
          c8 = false;
          c9 = false;
          c10 = false;
          let tmp15 = obj8;
          let self6 = this;
          let self7 = this;
          let tmp16 = new obj8((arg0) => {
            let closure_1_5 = arg0;
          });
          let tmp17 = tmp16;
          let closure_11 = tmp16;
          const _Object3 = Object;
          obj8 = Object.create(_moduleResult8.prototype);
          obj8._state = "readable";
          obj8._reader = undefined;
          obj8._storedError = undefined;
          obj8._disturbed = false;
          const _Object4 = Object;
          let num = 1;
          let tmp23 = obj8;
          let tmp25 = fn;
          let tmp26 = _r(obj8, Object.create(_moduleResult7.prototype), S, fn, function _(arg0) {
            c9 = true;
            let closure_1_1 = arg0;
            const tmp = c10;
            if (tmp) {
              const items = [arg0, fn];
              closure_1_5(Or(self, items.slice()));
            }
            return closure_11;
          }, 1, te2);
          const _Object5 = Object;
          obj9 = Object.create(_moduleResult8.prototype);
          obj9._state = "readable";
          obj9._reader = undefined;
          obj9._storedError = undefined;
          obj9._disturbed = false;
          const _Object6 = Object;
          let tmp28 = obj9;
          let tmp29 = S;
          const tmp30 = fn;
          _r(obj9, Object.create(_moduleResult7.prototype), S, fn, function p(arg0) {
            c10 = true;
            const tmp = c9;
            if (tmp) {
              const items = [closure_1_1, arg0];
              closure_1_5(Or(self, items.slice()));
            }
            return closure_11;
          }, 1, te2);
          let obj = obj9;
          let callResult1 = obj.call(obj9.call(tmp13._closedPromise, undefined, function(typeError) {
            const _readableStreamController = obj8._readableStreamController;
            const _controlledReadableStream = _readableStreamController._controlledReadableStream;
            if ("readable" === _controlledReadableStream._state) {
              self = this;
              const self2 = this;
              _readableStreamController._queue = new closure_15();
              _readableStreamController._queueTotalSize = 0;
              _readableStreamController._pullAlgorithm = undefined;
              _readableStreamController._cancelAlgorithm = undefined;
              _readableStreamController._strategySizeAlgorithm = undefined;
              const tmp2 = new closure_15();
              jr(_controlledReadableStream, typeError);
            }
            const _readableStreamController2 = obj9._readableStreamController;
            const _controlledReadableStream2 = _readableStreamController2._controlledReadableStream;
            if ("readable" === _controlledReadableStream2._state) {
              const self3 = this;
              const self4 = this;
              _readableStreamController2._queue = new closure_15();
              _readableStreamController2._queueTotalSize = 0;
              _readableStreamController2._pullAlgorithm = undefined;
              _readableStreamController2._cancelAlgorithm = undefined;
              _readableStreamController2._strategySizeAlgorithm = undefined;
              const tmp7 = new closure_15();
              jr(_controlledReadableStream2, typeError);
            }
            const tmp11 = c9 && c10;
            if (!tmp11) {
              closure_1_5(undefined);
            }
            return null;
          }), undefined, fn);
          items1 = [obj8, obj9];
        }
      } else {
        let tmp5 = globalThis;
        let _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        str = " can only be used on a ReadableStream";
        class S {
          constructor() {

          }
        }
        const str2 = "ReadableStream.prototype.";
        let self2 = this;
        let self3 = this;
        class T {
          constructor() {

          }
        }
        let tmp7 = tmp6;
        throw tmp6;
      }
    }
  },
  {
    key: "values",
    value: function values() {
      const self = this;
      let tmp2 = typeof this === "object";
      if (typeof this === "object") {
        tmp2 = null !== self;
      }
      if (!tmp2) {
        tmp2 = typeof self === "function";
      }
      let callResult = tmp2;
      if (callResult) {
        const _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(self, "_readableStreamController");
      }
      if (callResult) {
        callResult = self instanceof _moduleResult8;
      }
      if (callResult) {
        if (undefined !== arg0) {
          if (typeof arg0 !== "object") {
            if (typeof arg0 !== "function") {
              const _TypeError2 = TypeError;
              const _HermesInternal2 = HermesInternal;
              const self8 = this;
              const self9 = this;
              const typeError = new TypeError("" + "First parameter" + " is not an object.");
              throw typeError;
            }
          }
        }
        let preventCancel;
        if (null != arg0) {
          preventCancel = tmp.preventCancel;
        }
        const _Boolean = Boolean;
        const self4 = this;
        const self5 = this;
        const BooleanResult = Boolean(preventCancel);
        const self6 = this;
        const self7 = this;
        const tmp15 = new c29(self);
        const _Object2 = Object;
        const tmp18 = new closure_38(tmp15, BooleanResult);
        const obj = Object.create(obj3);
        obj._asyncIteratorImpl = tmp18;
        return obj;
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("ReadableStream.prototype." + "values" + " can only be used on a ReadableStream");
        throw typeError1;
      }
    }
  },
  {
    key: str,
    value(arg0) {
      return this.values(arg0);
    }
  }
];
const entry1 = {
  key: "from",
  value: function from(getReader) {
    let obj2;
    let tmp = typeof getReader === "object";
    if (typeof getReader === "object") {
      tmp = null !== getReader;
    }
    if (!tmp) {
      tmp = typeof getReader === "function";
    }
    if (tmp) {
      if (undefined !== getReader.getReader) {
        const reader = getReader.getReader();
        const tmp4 = obj2;
        const tmp5 = globalThis;
        const _Object = Object;
        const obj = Object.create(_moduleResult8.prototype);
        str = "readable";
        obj._state = "readable";
        obj._reader = undefined;
        obj._storedError = undefined;
        obj._disturbed = false;
        let tmp8 = _r;
        const _Object2 = Object;
        const tmp9 = _moduleResult7;
        let tmp10 = obj;
        const tmp11 = _r(obj, Object.create(_moduleResult7.prototype), obj2, function n() {
          try {
            let tmp = closure_0;
            const readResult = closure_0.read();
            return closure_2_11(readResult, function(done) {
              let tmp = typeof done === "object";
              if (typeof done === "object") {
                tmp = null !== done;
              }
              if (!tmp) {
                tmp = typeof done === "function";
              }
              if (tmp) {
                if (done.done) {
                  const _readableStreamController = obj._readableStreamController;
                  const tmp10 = !_readableStreamController._closeRequested && "readable" === tmp9;
                  if (tmp10) {
                    _readableStreamController._closeRequested = true;
                    if (0 === _readableStreamController._queue.length) {
                      _readableStreamController._pullAlgorithm = undefined;
                      _readableStreamController._cancelAlgorithm = undefined;
                      _readableStreamController._strategySizeAlgorithm = undefined;
                      closure_2_97(tmp11);
                    }
                  }
                } else {
                  closure_2_88(obj._readableStreamController, done.value);
                }
              } else {
                const _TypeError = TypeError;
                const self = this;
                const self2 = this;
                const typeError = new TypeError("The promise returned by the reader.read() method must fulfill with an object");
                throw typeError;
              }
            });
          } catch (tmp5) {
            return closure_2_9(tmp5);
          }
        }, function a(arg0) {
          try {
            return closure_2_8(closure_0.cancel(arg0));
          } catch (tmp4) {
            return closure_2_9(tmp4);
          }
        }, 0, te2);
        obj2 = obj;
      }
      return obj2;
    }
    let iterator = fe(getReader, "async");
    obj2 = Object.create(_moduleResult8.prototype);
    obj2._state = "readable";
    obj2._reader = undefined;
    obj2._storedError = undefined;
    obj2._disturbed = false;
    _r(obj2, Object.create(_moduleResult7.prototype), obj2, function a() {
      try {
        let tmp = be;
        return _(c(be(iterator)), function(done) {
          let tmp = typeof done === "object";
          if (typeof done === "object") {
            tmp = null !== done;
          }
          if (!tmp) {
            tmp = typeof done === "function";
          }
          if (tmp) {
            if (done.done) {
              const _readableStreamController = obj2._readableStreamController;
              const tmp10 = !_readableStreamController._closeRequested && "readable" === tmp9;
              if (tmp10) {
                _readableStreamController._closeRequested = true;
                if (0 === _readableStreamController._queue.length) {
                  _readableStreamController._pullAlgorithm = undefined;
                  _readableStreamController._cancelAlgorithm = undefined;
                  _readableStreamController._strategySizeAlgorithm = undefined;
                  Br(tmp11);
                }
              }
            } else {
              fr(obj2._readableStreamController, done.value);
            }
          } else {
            const _TypeError = TypeError;
            const self = this;
            const self2 = this;
            const typeError = new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
            throw typeError;
          }
        });
      } catch (tmp5) {
        return d(tmp5);
      }
    }, function i(arg0) {
      iterator = iterator.iterator;
      try {
        let tmp8;
        let tmp = ue;
        const tmp2 = ue(iterator, "return");
        if (undefined === tmp2) {
          tmp8 = c(undefined);
        } else {
          const items = [arg0];
          tmp8 = _(g(tmp2, iterator, items), function(obj) {
            let tmp = typeof obj === "object";
            if (typeof obj === "object") {
              tmp = null !== obj;
            }
            if (!tmp) {
              tmp = typeof obj === "function";
            }
            if (!tmp) {
              const _TypeError = TypeError;
              const self = this;
              const self2 = this;
              const typeError = new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
              throw typeError;
            }
          });
        }
        return tmp8;
      } catch (tmp10) {
        return d(tmp10);
      }
    }, 0, te2);
  }
};
const items11 = [entry1];
_moduleResult8 = _createClass(ReadableStream, items10, items11);
Object.defineProperties(_moduleResult8, { from: { enumerable: true } });
Object.defineProperties(_moduleResult8.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } });
fn3(_moduleResult8.from, "from");
fn3(_moduleResult8.prototype.cancel, "cancel");
fn3(_moduleResult8.prototype.getReader, "getReader");
fn3(_moduleResult8.prototype.pipeThrough, "pipeThrough");
fn3(_moduleResult8.prototype.pipeTo, "pipeTo");
fn3(_moduleResult8.prototype.tee, "tee");
fn3(_moduleResult8.prototype.values, "values");
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      let str;
      let tmp;
      const obj = { message: tmp, name: str };
      str = arg1;
      tmp = arg0 || "";
      if (!arg1) {
        str = "Error";
      }
      if (Error.captureStackTrace) {
        const _Error = Error;
        Error.captureStackTrace(obj, obj.constructor);
      }
    }
  }
  const _Symbol10 = Symbol;
  Object.defineProperty(_moduleResult8.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true });
}
const obj13 = { value: _moduleResult8.prototype.values, writable: true, configurable: true };
Object.defineProperty(_moduleResult8.prototype, str, obj13);
zr = function zr(byteLength) {
  return byteLength.byteLength;
};
fn3(zr, "size");
class ByteLengthQueuingStrategy {
  constructor(highWaterMark) {
    _window(this, ByteLengthQueuingStrategy);
    if (undefined === highWaterMark) {
      const _TypeError3 = TypeError;
      const _HermesInternal3 = HermesInternal;
      const self5 = this;
      const self6 = this;
      const typeError = new TypeError("Parameter " + 1 + " is required in '" + "ByteLengthQueuingStrategy" + "'.");
      throw typeError;
    } else {
      if (undefined !== highWaterMark) {
        if (typeof highWaterMark !== "object") {
          if (typeof highWaterMark !== "function") {
            const _TypeError2 = TypeError;
            const _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            const typeError1 = new TypeError("" + "First parameter" + " is not an object.");
            throw typeError1;
          }
        }
      }
      highWaterMark = undefined;
      if (null != highWaterMark) {
        highWaterMark = highWaterMark.highWaterMark;
      }
      if (undefined === highWaterMark) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const typeError2 = new TypeError("" + "highWaterMark" + " is required in '" + "QueuingStrategyInit" + "'.");
        throw typeError2;
      } else {
        const _Number = Number;
        this._byteLengthQueuingStrategyHighWaterMark = Number(highWaterMark);
      }
    }
  }
}
const items12 = [, ];
const obj14 = {
  key: "highWaterMark",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_byteLengthQueuingStrategyHighWaterMark");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult9;
    }
    if (callResult) {
      return self._byteLengthQueuingStrategyHighWaterMark;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ByteLengthQueuingStrategy.prototype." + "highWaterMark" + " can only be used on a ByteLengthQueuingStrategy");
      throw typeError;
    }
  }
};
items12[0] = obj14;
items12[1] = {
  key: "size",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_byteLengthQueuingStrategyHighWaterMark");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult9;
    }
    if (callResult) {
      return zr;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("ByteLengthQueuingStrategy.prototype." + "size" + " can only be used on a ByteLengthQueuingStrategy");
      throw typeError;
    }
  }
};
_moduleResult9 = _createClass(ByteLengthQueuingStrategy, items12);
Object.defineProperties(_moduleResult9.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } });
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      let str;
      let tmp;
      const obj = { message: tmp, name: str };
      str = arg1;
      tmp = arg0 || "";
      if (!arg1) {
        str = "Error";
      }
      if (Error.captureStackTrace) {
        const _Error = Error;
        Error.captureStackTrace(obj, obj.constructor);
      }
    }
  }
  const _Symbol11 = Symbol;
  Object.defineProperty(_moduleResult9.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
}
class Fr {
  constructor() {
    return 1;
  }
}
fn3(Fr, "size");
class CountQueuingStrategy {
  constructor(highWaterMark) {
    _window(this, CountQueuingStrategy);
    if (undefined === highWaterMark) {
      const _TypeError3 = TypeError;
      const _HermesInternal3 = HermesInternal;
      const self5 = this;
      const self6 = this;
      const typeError = new TypeError("Parameter " + 1 + " is required in '" + "CountQueuingStrategy" + "'.");
      throw typeError;
    } else {
      if (undefined !== highWaterMark) {
        if (typeof highWaterMark !== "object") {
          if (typeof highWaterMark !== "function") {
            const _TypeError2 = TypeError;
            const _HermesInternal2 = HermesInternal;
            const self3 = this;
            const self4 = this;
            const typeError1 = new TypeError("" + "First parameter" + " is not an object.");
            throw typeError1;
          }
        }
      }
      highWaterMark = undefined;
      if (null != highWaterMark) {
        highWaterMark = highWaterMark.highWaterMark;
      }
      if (undefined === highWaterMark) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const typeError2 = new TypeError("" + "highWaterMark" + " is required in '" + "QueuingStrategyInit" + "'.");
        throw typeError2;
      } else {
        const _Number = Number;
        this._countQueuingStrategyHighWaterMark = Number(highWaterMark);
      }
    }
  }
}
const items13 = [, ];
const obj15 = {
  key: "highWaterMark",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_countQueuingStrategyHighWaterMark");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult10;
    }
    if (callResult) {
      return self._countQueuingStrategyHighWaterMark;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("CountQueuingStrategy.prototype." + "highWaterMark" + " can only be used on a CountQueuingStrategy");
      throw typeError;
    }
  }
};
items13[0] = obj15;
items13[1] = {
  key: "size",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_countQueuingStrategyHighWaterMark");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult10;
    }
    if (callResult) {
      return Fr;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("CountQueuingStrategy.prototype." + "size" + " can only be used on a CountQueuingStrategy");
      throw typeError;
    }
  }
};
_moduleResult10 = _createClass(CountQueuingStrategy, items13);
Object.defineProperties(_moduleResult10.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } });
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      let str;
      let tmp;
      const obj = { message: tmp, name: str };
      str = arg1;
      tmp = arg0 || "";
      if (!arg1) {
        str = "Error";
      }
      if (Error.captureStackTrace) {
        const _Error = Error;
        Error.captureStackTrace(obj, obj.constructor);
      }
    }
  }
  const _Symbol12 = Symbol;
  Object.defineProperty(_moduleResult10.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true });
}
class TransformStream {
  constructor() {
    let fn2;
    let fn3;
    let fn4;
    const f137866 = (arg0) => {
      c0 = arg0;
    };
    let obj2 = arg0;
    if (arg0 === undefined) {
      obj2 = {};
    }
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let obj3 = arg2;
    if (arg2 === undefined) {
      obj3 = {};
    }
    let self = this;
    _TransformStream = undefined;
    let tmp2 = _window(this, TransformStream);
    if (undefined === obj2) {
      obj2 = null;
    }
    let tmp3 = closure_2_64(obj, "Second parameter");
    let tmp4 = closure_2_64(obj3, "Third parameter");
    if (undefined !== obj2) {
      if (typeof obj2 !== "object") {
        if (typeof obj2 !== "function") {
          const _TypeError5 = TypeError;
          const _HermesInternal9 = HermesInternal;
          const self24 = this;
          const self25 = this;
          let typeError = new TypeError("" + "First parameter" + " is not an object.");
          throw typeError;
        }
      }
    }
    let cancel;
    if (null != obj2) {
      cancel = obj2.cancel;
    }
    let flush;
    if (null != obj2) {
      flush = obj2.flush;
    }
    let readableType;
    if (null != obj2) {
      readableType = obj2.readableType;
    }
    let start;
    if (null != obj2) {
      start = obj2.start;
    }
    let transform;
    if (null != obj2) {
      transform = obj2.transform;
    }
    let writableType;
    if (null != obj2) {
      writableType = obj2.writableType;
    }
    let fn;
    if (undefined !== cancel) {
      const _HermesInternal = HermesInternal;
      if (typeof cancel !== "function") {
        let _TypeError = TypeError;
        const _HermesInternal2 = HermesInternal;
        let self2 = this;
        const self3 = this;
        const typeError1 = new TypeError("" + tmp12 + " is not a function.");
        throw typeError1;
      } else {
        fn = (arg0) => {
          const items = [arg0];
          return closure_2_14(cancel, obj2, items);
        };
      }
    }
    const obj9 = { cancel: fn, flush: fn2, readableType, start: fn3, transform: fn4, writableType };
    fn2 = undefined;
    if (undefined !== flush) {
      const _HermesInternal3 = HermesInternal;
      if (typeof flush !== "function") {
        const _TypeError2 = TypeError;
        const _HermesInternal4 = HermesInternal;
        const self4 = this;
        const self5 = this;
        const typeError2 = new TypeError("" + tmp16 + " is not a function.");
        throw typeError2;
      } else {
        fn2 = (arg0) => {
          const items = [arg0];
          return closure_2_14(flush, obj2, items);
        };
      }
    }
    fn3 = undefined;
    if (undefined !== start) {
      const _HermesInternal5 = HermesInternal;
      if (typeof start !== "function") {
        const _TypeError3 = TypeError;
        const _HermesInternal6 = HermesInternal;
        const self6 = this;
        const self7 = this;
        const typeError3 = new TypeError("" + tmp20 + " is not a function.");
        throw typeError3;
      } else {
        fn3 = function(arg0) {
          const items = [arg0];
          if (typeof start !== "function") {
            const _TypeError = TypeError;
            const self = this;
            const self2 = this;
            const typeError = new TypeError("Argument is not a function");
            throw typeError;
          } else {
            const _Function = Function;
            return apply.call(tmp, tmp2, items);
          }
        };
      }
    }
    fn4 = undefined;
    if (undefined !== transform) {
      const _HermesInternal7 = HermesInternal;
      if (typeof transform !== "function") {
        const _TypeError4 = TypeError;
        const _HermesInternal8 = HermesInternal;
        const self8 = this;
        const self9 = this;
        const typeError4 = new TypeError("" + tmp24 + " is not a function.");
        throw typeError4;
      } else {
        fn4 = (arg0, arg1) => {
          const items = [arg0, arg1];
          return closure_2_14(transform, obj2, items);
        };
      }
    }
    if (undefined !== obj9.readableType) {
      const _RangeError4 = RangeError;
      const self22 = this;
      const self23 = this;
      const rangeError = new RangeError("Invalid readableType specified");
      throw rangeError;
    } else if (undefined !== obj9.writableType) {
      const _RangeError3 = RangeError;
      const self20 = this;
      const self21 = this;
      const rangeError1 = new RangeError("Invalid writableType specified");
      throw rangeError1;
    } else {
      const highWaterMark2 = tmp4.highWaterMark;
      let num = 0;
      if (undefined !== highWaterMark2) {
        if (!closure_2_41(highWaterMark2)) {
          num = highWaterMark2;
        }
        const _RangeError = RangeError;
        const self10 = this;
        const self11 = this;
        const rangeError2 = new RangeError("Invalid highWaterMark");
        throw rangeError2;
      }
      let te = tmp4.size || f126054;
      const highWaterMark = tmp3.highWaterMark;
      let num3 = 1;
      if (undefined !== highWaterMark) {
        if (!closure_2_41(highWaterMark)) {
          num3 = highWaterMark;
        }
        const _RangeError2 = RangeError;
        const self12 = this;
        const self13 = this;
        const rangeError3 = new RangeError("Invalid highWaterMark");
        throw rangeError3;
      }
      let oe = tmp3.size || f126054;
      const self14 = this;
      const self15 = this;
      let closure_1 = new _false(f137866);
      const tmp35 = _false;
      const tmp36 = new _false(f137866);
      if (num3 === undefined) {
        num3 = 1;
      }
      if (oe === undefined) {
        oe = function oe() {
          return 1;
        };
      }
      const fn5 = function i() {
        return closure_1;
      };
      const _Object = Object;
      const fn6 = function l(arg0) {
        let callResult;
        const f126088 = function(arg0) {
          const _controlledTransformStream = closure_0._controlledTransformStream;
          const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
          const _controlledReadableStream = _readableStreamController._controlledReadableStream;
          if ("readable" === _controlledReadableStream._state) {
            self = this;
            const self2 = this;
            _readableStreamController._queue = new closure_2_15();
            _readableStreamController._queueTotalSize = 0;
            _readableStreamController._pullAlgorithm = undefined;
            _readableStreamController._cancelAlgorithm = undefined;
            _readableStreamController._strategySizeAlgorithm = undefined;
            const tmp2 = new closure_2_15();
            closure_2_98(_controlledReadableStream, arg0);
          }
          closure_2_105(_controlledTransformStream, arg0);
          throw arg0;
        };
        let closure_0 = self;
        closure_1 = arg0;
        const _transformStreamController = self._transformStreamController;
        if (self._backpressure) {
          callResult = closure_2_4.call(self._backpressureChangePromise, () => {
            _writable = _writable._writable;
            if ("erroring" === _writable._state) {
              throw _writable._storedError;
            } else {
              let tmp2 = closure_1;
              _writable = _transformStreamController;
              return closure_2_4.call(_transformStreamController._transformAlgorithm(closure_1), undefined, f126088);
            }
          }, undefined);
        } else {
          callResult = closure_2_4.call(_transformStreamController._transformAlgorithm(arg0), undefined, f126088);
        }
        return callResult;
      };
      const fn7 = function c() {
        let _finishPromise;
        let tmp;
        const _transformStreamController = self._transformStreamController;
        if (undefined !== _transformStreamController._finishPromise) {
          _finishPromise = _transformStreamController._finishPromise;
        } else {
          const _readable = tmp._readable;
          let tmp2 = closure_2_3;
          self = this;
          let self2 = this;
          const tmp3 = new closure_2_3((_finishPromise_resolve, _finishPromise_reject) => {
            _transformStreamController._finishPromise_resolve = _finishPromise_resolve;
            _transformStreamController._finishPromise_reject = _finishPromise_reject;
          });
          _transformStreamController._finishPromise = tmp3;
          _transformStreamController._transformAlgorithm = undefined;
          _transformStreamController._flushAlgorithm = undefined;
          _transformStreamController._cancelAlgorithm = undefined;
          const obj = closure_2_4;
          obj.call(closure_2_4.call(_transformStreamController._flushAlgorithm(), () => {
            const tmp = _readable;
            if ("errored" === _readable._state) {
              if (undefined !== _transformStreamController._finishPromise_reject) {
                closure_2_4.call(_transformStreamController._finishPromise, undefined, closure_2_2);
                const result = obj2._finishPromise_reject(tmp7);
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            } else {
              const _readableStreamController = tmp._readableStreamController;
              const tmp2 = !_readableStreamController._closeRequested && "readable" === tmp9;
              if (tmp2) {
                _readableStreamController._closeRequested = true;
                if (0 === _readableStreamController._queue.length) {
                  _readableStreamController._pullAlgorithm = undefined;
                  _readableStreamController._cancelAlgorithm = undefined;
                  _readableStreamController._strategySizeAlgorithm = undefined;
                  closure_2_97(tmp3);
                }
              }
              if (undefined !== _transformStreamController._finishPromise_resolve) {
                const result1 = obj._finishPromise_resolve();
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            }
            return null;
          }, function(arg0) {
            const _readableStreamController = _readable._readableStreamController;
            const _controlledReadableStream = _readableStreamController._controlledReadableStream;
            if ("readable" === _controlledReadableStream._state) {
              self = this;
              const self2 = this;
              _readableStreamController._queue = new closure_2_15();
              _readableStreamController._queueTotalSize = 0;
              _readableStreamController._pullAlgorithm = undefined;
              _readableStreamController._cancelAlgorithm = undefined;
              _readableStreamController._strategySizeAlgorithm = undefined;
              const tmp2 = new closure_2_15();
              closure_2_98(_controlledReadableStream, arg0);
            }
            if (undefined !== _transformStreamController._finishPromise_reject) {
              closure_2_4.call(_transformStreamController._finishPromise, undefined, closure_2_2);
              const result = obj._finishPromise_reject(arg0);
              _transformStreamController._finishPromise_resolve = undefined;
              _transformStreamController._finishPromise_reject = undefined;
            }
            return null;
          }), undefined, closure_2_2);
          _finishPromise = _transformStreamController._finishPromise;
        }
        return _finishPromise;
      };
      const fn8 = function s(arg0) {
        let _finishPromise;
        let tmp;
        let closure_0 = arg0;
        const _transformStreamController = self._transformStreamController;
        if (undefined !== _transformStreamController._finishPromise) {
          _finishPromise = _transformStreamController._finishPromise;
        } else {
          const _readable = tmp._readable;
          let tmp2 = closure_2_3;
          self = this;
          let self2 = this;
          let tmp3 = new closure_2_3((_finishPromise_resolve, _finishPromise_reject) => {
            _transformStreamController._finishPromise_resolve = _finishPromise_resolve;
            _transformStreamController._finishPromise_reject = _finishPromise_reject;
          });
          _transformStreamController._finishPromise = tmp3;
          _transformStreamController._transformAlgorithm = undefined;
          _transformStreamController._flushAlgorithm = undefined;
          _transformStreamController._cancelAlgorithm = undefined;
          const obj = closure_2_4;
          obj.call(closure_2_4.call(_transformStreamController._cancelAlgorithm(arg0), function() {
            const tmp = _readable;
            if ("errored" === _readable._state) {
              if (undefined !== _transformStreamController._finishPromise_reject) {
                closure_2_4.call(_transformStreamController._finishPromise, undefined, closure_2_2);
                const result = obj2._finishPromise_reject(tmp8);
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            } else {
              const _readableStreamController = tmp._readableStreamController;
              const _controlledReadableStream = _readableStreamController._controlledReadableStream;
              if ("readable" === _controlledReadableStream._state) {
                self = this;
                const self2 = this;
                _readableStreamController._queue = new closure_2_15();
                _readableStreamController._queueTotalSize = 0;
                _readableStreamController._pullAlgorithm = undefined;
                _readableStreamController._cancelAlgorithm = undefined;
                _readableStreamController._strategySizeAlgorithm = undefined;
                const tmp3 = new closure_2_15();
                closure_2_98(_controlledReadableStream, tmp10);
              }
              if (undefined !== _transformStreamController._finishPromise_resolve) {
                const result1 = obj._finishPromise_resolve();
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            }
            return null;
          }, function(arg0) {
            const _readableStreamController = _readable._readableStreamController;
            const _controlledReadableStream = _readableStreamController._controlledReadableStream;
            if ("readable" === _controlledReadableStream._state) {
              self = this;
              const self2 = this;
              _readableStreamController._queue = new closure_2_15();
              _readableStreamController._queueTotalSize = 0;
              _readableStreamController._pullAlgorithm = undefined;
              _readableStreamController._cancelAlgorithm = undefined;
              _readableStreamController._strategySizeAlgorithm = undefined;
              const tmp2 = new closure_2_15();
              closure_2_98(_controlledReadableStream, arg0);
            }
            if (undefined !== _transformStreamController._finishPromise_reject) {
              closure_2_4.call(_transformStreamController._finishPromise, undefined, closure_2_2);
              const result = obj._finishPromise_reject(arg0);
              _transformStreamController._finishPromise_resolve = undefined;
              _transformStreamController._finishPromise_reject = undefined;
            }
            return null;
          }), undefined, closure_2_2);
          _finishPromise = _transformStreamController._finishPromise;
        }
        return _finishPromise;
      };
      const obj10 = Object.create(set2.prototype);
      obj10._state = "writable";
      obj10._storedError = undefined;
      obj10._writer = undefined;
      obj10._writableStreamController = undefined;
      const self16 = this;
      const self17 = this;
      obj10._writeRequests = new closure_2_15();
      obj10._inFlightWriteRequest = undefined;
      obj10._closeRequest = undefined;
      obj10._inFlightCloseRequest = undefined;
      obj10._pendingAbortRequest = undefined;
      obj10._backpressure = false;
      const _Object2 = Object;
      const tmp42 = new closure_2_15();
      closure_2_79(obj10, Object.create(internalBinaryWrite12.prototype), fn5, fn6, fn7, fn8, num3, oe);
      self._writable = obj10;
      if (num === undefined) {
        num = 1;
      }
      if (te === undefined) {
        te = te2;
      }
      const _Object3 = Object;
      const fn9 = function d() {
        let closure_0 = self;
        if (undefined !== self._backpressureChangePromise) {
          const result = obj._backpressureChangePromise_resolve();
        }
        self._backpressureChangePromise = new closure_2_3((_backpressureChangePromise_resolve) => {
          obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
        });
        self._backpressure = false;
        new closure_2_3((_backpressureChangePromise_resolve) => {
          obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
        });
        return self._backpressureChangePromise;
      };
      const fn10 = function f(arg0) {
        let _finishPromise;
        let tmp;
        let closure_0 = self;
        closure_1 = arg0;
        const _transformStreamController = self._transformStreamController;
        if (undefined !== _transformStreamController._finishPromise) {
          _finishPromise = _transformStreamController._finishPromise;
        } else {
          const _writable = tmp._writable;
          self = this;
          let self2 = this;
          const tmp3 = new closure_2_3((_finishPromise_resolve, _finishPromise_reject) => {
            _transformStreamController._finishPromise_resolve = _finishPromise_resolve;
            _transformStreamController._finishPromise_reject = _finishPromise_reject;
          });
          let tmp4 = tmp3;
          _transformStreamController._finishPromise = tmp3;
          _transformStreamController._transformAlgorithm = undefined;
          _transformStreamController._flushAlgorithm = undefined;
          _transformStreamController._cancelAlgorithm = undefined;
          let obj = closure_2_4;
          obj.call(closure_2_4.call(_transformStreamController._cancelAlgorithm(arg0), function() {
            let _writableStreamController2;
            let _writer;
            const tmp = _writable;
            if ("errored" === _writable._state) {
              if (undefined !== _transformStreamController._finishPromise_reject) {
                closure_2_4.call(_transformStreamController._finishPromise, undefined, closure_2_2);
                const result = obj3._finishPromise_reject(tmp13);
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            } else {
              const _writableStreamController = tmp._writableStreamController;
              if ("writable" === _writableStreamController._controlledWritableStream._state) {
                const _controlledWritableStream = _writableStreamController._controlledWritableStream;
                _writableStreamController._writeAlgorithm = undefined;
                _writableStreamController._closeAlgorithm = undefined;
                _writableStreamController._abortAlgorithm = undefined;
                _writableStreamController._strategySizeAlgorithm = undefined;
                _controlledWritableStream._state = "erroring";
                _controlledWritableStream._storedError = _storedError;
                ({ _writer, _writableStreamController: _writableStreamController2 } = _controlledWritableStream);
                if (undefined !== _writer) {
                  closure_2_74(_writer, _storedError);
                }
                const tmp5 = !(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest) && _writableStreamController2._started;
                if (tmp5) {
                  closure_2_70(_controlledWritableStream);
                }
              }
              if (closure_0._backpressure) {
                if (undefined !== closure_0._backpressureChangePromise) {
                  const result1 = obj._backpressureChangePromise_resolve();
                }
                self = this;
                const self2 = this;
                closure_0._backpressureChangePromise = new closure_2_3((_backpressureChangePromise_resolve) => {
                  obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
                });
                closure_0._backpressure = false;
                const tmp10 = new closure_2_3((_backpressureChangePromise_resolve) => {
                  obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
                });
              }
              if (undefined !== _transformStreamController._finishPromise_resolve) {
                const result2 = obj2._finishPromise_resolve();
                _transformStreamController._finishPromise_resolve = undefined;
                _transformStreamController._finishPromise_reject = undefined;
              }
            }
            return null;
          }, function(_storedError) {
            let _writableStreamController2;
            let _writer;
            const _writableStreamController = _writable._writableStreamController;
            if ("writable" === _writableStreamController._controlledWritableStream._state) {
              const _controlledWritableStream = _writableStreamController._controlledWritableStream;
              _writableStreamController._writeAlgorithm = undefined;
              _writableStreamController._closeAlgorithm = undefined;
              _writableStreamController._abortAlgorithm = undefined;
              _writableStreamController._strategySizeAlgorithm = undefined;
              _controlledWritableStream._state = "erroring";
              _controlledWritableStream._storedError = _storedError;
              ({ _writer, _writableStreamController: _writableStreamController2 } = _controlledWritableStream);
              if (undefined !== _writer) {
                closure_2_74(_writer, _storedError);
              }
              const tmp4 = !(undefined !== _controlledWritableStream._inFlightWriteRequest || undefined !== _controlledWritableStream._inFlightCloseRequest) && _writableStreamController2._started;
              if (tmp4) {
                closure_2_70(_controlledWritableStream);
              }
            }
            const obj = closure_0;
            if (closure_0._backpressure) {
              if (undefined !== obj._backpressureChangePromise) {
                const result = obj._backpressureChangePromise_resolve();
              }
              self = this;
              const self2 = this;
              obj._backpressureChangePromise = new closure_2_3((_backpressureChangePromise_resolve) => {
                obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
              });
              obj._backpressure = false;
              const tmp9 = new closure_2_3((_backpressureChangePromise_resolve) => {
                obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
              });
            }
            if (undefined !== _transformStreamController._finishPromise_reject) {
              closure_2_4.call(_transformStreamController._finishPromise, undefined, closure_2_2);
              const result1 = obj2._finishPromise_reject(_storedError);
              _transformStreamController._finishPromise_resolve = undefined;
              _transformStreamController._finishPromise_reject = undefined;
            }
            return null;
          }), undefined, closure_2_2);
          _finishPromise = _transformStreamController._finishPromise;
        }
        return _finishPromise;
      };
      const obj11 = Object.create(closure_2_93.prototype);
      obj11._state = "readable";
      obj11._reader = undefined;
      obj11._storedError = undefined;
      obj11._disturbed = false;
      const _Object4 = Object;
      closure_2_91(obj11, Object.create(closure_2_85.prototype), fn5, fn9, fn10, num, te);
      self._readable = obj11;
      self._backpressure = undefined;
      self._backpressureChangePromise = undefined;
      self._backpressureChangePromise_resolve = undefined;
      if (undefined !== self._backpressureChangePromise) {
        let result = self._backpressureChangePromise_resolve();
      }
      const self18 = this;
      const self19 = this;
      self._backpressureChangePromise = new tmp35((_backpressureChangePromise_resolve) => {
        obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
      });
      self._backpressure = true;
      self._transformStreamController = undefined;
      const _Object5 = Object;
      const tmp352 = new tmp35((_backpressureChangePromise_resolve) => {
        obj._backpressureChangePromise_resolve = _backpressureChangePromise_resolve;
      });
      const obj12 = Object.create(closure_2_107.prototype);
      obj12._controlledTransformStream = self;
      self._transformStreamController = obj12;
      obj12._transformAlgorithm = undefined !== obj9.transform ? ((arg0) => obj9.transform(arg0, obj12)) : ((arg0) => {
        try {
          closure_2_108(obj12, arg0);
          return closure_2_8(undefined);
        } catch (tmp6) {
          return closure_2_9(tmp6);
        }
      });
      obj12._flushAlgorithm = undefined !== obj9.flush ? (() => obj9.flush(obj12)) : (() => {
        const tmp = new closure_1_3((fn) => fn(c0));
        return tmp;
      });
      obj12._cancelAlgorithm = undefined !== obj9.cancel ? ((arg0) => obj9.cancel(arg0)) : (() => {
        const tmp = new closure_1_3((fn) => fn(c0));
        return tmp;
      });
      obj12._finishPromise = undefined;
      obj12._finishPromise_resolve = undefined;
      obj12._finishPromise_reject = undefined;
      if (undefined !== obj9.start) {
        _TransformStream(obj9.start(self._transformStreamController));
      } else {
        _TransformStream(undefined);
      }
    }
  }
}
const items14 = [, ];
const obj16 = {
  key: "readable",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_transformStreamController");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult11;
    }
    if (callResult) {
      return self._readable;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("TransformStream.prototype." + "readable" + " can only be used on a TransformStream");
      throw typeError;
    }
  }
};
items14[0] = obj16;
items14[1] = {
  key: "writable",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_transformStreamController");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult11;
    }
    if (callResult) {
      return self._writable;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("TransformStream.prototype." + "writable" + " can only be used on a TransformStream");
      throw typeError;
    }
  }
};
_moduleResult11 = _createClass(TransformStream, items14);
Object.defineProperties(_moduleResult11.prototype, { readable: { enumerable: true }, writable: { enumerable: true } });
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      let str;
      let tmp;
      const obj = { message: tmp, name: str };
      str = arg1;
      tmp = arg0 || "";
      if (!arg1) {
        str = "Error";
      }
      if (Error.captureStackTrace) {
        const _Error = Error;
        Error.captureStackTrace(obj, obj.constructor);
      }
    }
  }
  const _Symbol13 = Symbol;
  Object.defineProperty(_moduleResult11.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true });
}
class TransformStreamDefaultController {
  constructor() {
    _window(this, TransformStreamDefaultController);
    const typeError = new TypeError("Illegal constructor");
    throw typeError;
  }
}
const items15 = [, , , ];
const obj17 = {
  key: "desiredSize",
  get() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledTransformStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult12;
    }
    if (callResult) {
      const _readableStreamController = self._controlledTransformStream._readable._readableStreamController;
      const _state = _readableStreamController._controlledReadableStream._state;
      let tmp8 = null;
      if ("errored" !== _state) {
        let num = 0;
        if ("closed" !== _state) {
          num = _readableStreamController._strategyHWM - _readableStreamController._queueTotalSize;
        }
        tmp8 = num;
      }
      return tmp8;
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("TransformStreamDefaultController.prototype." + "desiredSize" + " can only be used on a TransformStreamDefaultController");
      throw typeError;
    }
  }
};
items15[0] = obj17;
items15[1] = {
  key: "enqueue",
  value: function enqueue() {
    const self = this;
    let tmp2 = typeof this === "object";
    const tmp = arg0;
    if (typeof this === "object") {
      tmp2 = null !== self;
    }
    if (!tmp2) {
      tmp2 = typeof self === "function";
    }
    let callResult = tmp2;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledTransformStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult12;
    }
    if (callResult) {
      Kr(self, tmp);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError = new TypeError("TransformStreamDefaultController.prototype." + "enqueue" + " can only be used on a TransformStreamDefaultController");
      throw typeError;
    }
  }
};
items15[2] = {
  key: "error",
  value: function error(typeError) {
    const self = this;
    let tmp2 = typeof this === "object";
    if (typeof this === "object") {
      tmp2 = null !== self;
    }
    if (!tmp2) {
      tmp2 = typeof self === "function";
    }
    let callResult = tmp2;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledTransformStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult12;
    }
    if (callResult) {
      const _controlledTransformStream = self._controlledTransformStream;
      const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
      const _controlledReadableStream = _readableStreamController._controlledReadableStream;
      if ("readable" === _controlledReadableStream._state) {
        const self4 = this;
        const self5 = this;
        _readableStreamController._queue = new closure_15();
        _readableStreamController._queueTotalSize = 0;
        _readableStreamController._pullAlgorithm = undefined;
        _readableStreamController._cancelAlgorithm = undefined;
        _readableStreamController._strategySizeAlgorithm = undefined;
        const tmp10 = new closure_15();
        jr(_controlledReadableStream, typeError);
      }
      Vr(_controlledTransformStream, typeError);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      typeError = new TypeError("TransformStreamDefaultController.prototype." + "error" + " can only be used on a TransformStreamDefaultController");
      throw typeError;
    }
  }
};
items15[3] = {
  key: "terminate",
  value: function terminate() {
    const self = this;
    let tmp = typeof this === "object";
    if (typeof this === "object") {
      tmp = null !== self;
    }
    if (!tmp) {
      tmp = typeof self === "function";
    }
    let callResult = tmp;
    if (callResult) {
      const _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      callResult = hasOwnProperty.call(self, "_controlledTransformStream");
    }
    if (callResult) {
      callResult = self instanceof _moduleResult12;
    }
    if (callResult) {
      const _controlledTransformStream = self._controlledTransformStream;
      const _readableStreamController = _controlledTransformStream._readable._readableStreamController;
      const tmp9 = !_readableStreamController._closeRequested && "readable" === tmp8;
      if (tmp9) {
        _readableStreamController._closeRequested = true;
        if (0 === _readableStreamController._queue.length) {
          _readableStreamController._pullAlgorithm = undefined;
          _readableStreamController._cancelAlgorithm = undefined;
          _readableStreamController._strategySizeAlgorithm = undefined;
          Br(tmp10);
        }
      }
      const _TypeError2 = TypeError;
      const self4 = this;
      const self5 = this;
      const typeError = new TypeError("TransformStream terminated");
      Vr(_controlledTransformStream, typeError);
    } else {
      const _TypeError = TypeError;
      const _HermesInternal = HermesInternal;
      const self2 = this;
      const self3 = this;
      const typeError1 = new TypeError("TransformStreamDefaultController.prototype." + "terminate" + " can only be used on a TransformStreamDefaultController");
      throw typeError1;
    }
  }
};
_moduleResult12 = _createClass(TransformStreamDefaultController, items15);
Object.defineProperties(_moduleResult12.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } });
fn3(_moduleResult12.prototype.enqueue, "enqueue");
fn3(_moduleResult12.prototype.error, "error");
fn3(_moduleResult12.prototype.terminate, "terminate");
if (typeof Symbol.toStringTag === "symbol") {
  class e {
    constructor(arg0, arg1) {
      let str;
      let tmp;
      const obj = { message: tmp, name: str };
      str = arg1;
      tmp = arg0 || "";
      if (!arg1) {
        str = "Error";
      }
      if (Error.captureStackTrace) {
        const _Error = Error;
        Error.captureStackTrace(obj, obj.constructor);
      }
    }
  }
  const _Symbol14 = Symbol;
  Object.defineProperty(_moduleResult12.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
}
const obj18 = { ReadableStream: _moduleResult8, ReadableStreamDefaultController: _moduleResult7, ReadableByteStreamController: _moduleResult2, ReadableStreamBYOBRequest: _moduleResult1, ReadableStreamDefaultReader: _moduleResult, ReadableStreamBYOBReader: _moduleResult3, WritableStream: _moduleResult4, WritableStreamDefaultController: _moduleResult6, WritableStreamDefaultWriter: _moduleResult5, ByteLengthQueuingStrategy: _moduleResult9, CountQueuingStrategy: _moduleResult10, TransformStream: _moduleResult11, TransformStreamDefaultController: _moduleResult12 };
for (const key10620 in obj18) {
  class e {
    constructor(arg0, arg1) {
      let str;
      let tmp;
      const obj = { message: tmp, name: str };
      str = arg1;
      tmp = arg0 || "";
      if (!arg1) {
        str = "Error";
      }
      if (Error.captureStackTrace) {
        const _Error = Error;
        Error.captureStackTrace(obj, obj.constructor);
      }
    }
  }
  let _Object10 = Object;
  if (!hasOwnProperty.call(obj18, key10620)) {
    class e {
      constructor(arg0, arg1) {
        let str;
        let tmp;
        const obj = { message: tmp, name: str };
        str = arg1;
        tmp = arg0 || "";
        if (!arg1) {
          str = "Error";
        }
        if (Error.captureStackTrace) {
          const _Error = Error;
          Error.captureStackTrace(obj, obj.constructor);
        }
      }
    }
  } else {
    class e {
      constructor(arg0, arg1) {
        let str;
        let tmp;
        const obj = { message: tmp, name: str };
        str = arg1;
        tmp = arg0 || "";
        if (!arg1) {
          str = "Error";
        }
        if (Error.captureStackTrace) {
          const _Error = Error;
          Error.captureStackTrace(obj, obj.constructor);
        }
      }
    }
    let obj19 = { value: obj18[key10620], writable: true, configurable: true };
    let definePropertyResult16 = Object.defineProperty(_self, key10620, obj19);
    continue;
  }
  continue;
}
