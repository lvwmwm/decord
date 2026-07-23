// Module ID: 560
// Function ID: 6770
// Name: _createForOfIteratorHelper
// Dependencies: [65]

// Module 560 (_createForOfIteratorHelper)
import _toConsumableArray from "_toConsumableArray";

let length;
function _createForOfIteratorHelper(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  let arr = iterable;
  if (iterable) {
    const _arrayLikeToArray = true;
    let c5 = false;
    let obj = {
      s() {

        },
      n() {
          const iter = arr.next();
          const done = iter.done;
          return iter;
        },
      e(arg0) {
          let c5 = true;
          let closure_3 = arg0;
        },
      f() {
          let tmp = c4;
          if (!c4) {
            tmp = null == arr.return;
          }
          if (!tmp) {
            arr.return();
          }
          if (c5) {
            throw closure_3;
          }
        }
    };
    return obj;
  } else {
    const _Array = Array;
    if (!Array.isArray(iterable)) {
      arr = undefined;
      if (iterable) {
        if ("string" === typeof iterable) {
          arr = _arrayLikeToArray(iterable, undefined);
        } else {
          const _Object = Object;
          const substr = toString.call(iterable).slice(8, -1);
          class F {
            constructor() {
              return;
            }
          }
          let name = substr;
          if (tmp2) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                arr = _arrayLikeToArray(iterable, undefined);
              } else {
                obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp2 = "Object" === substr && iterable.constructor;
        }
      }
      if (!arr) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        class F {
          constructor() {
            return;
          }
        }
        throw typeError;
      }
    }
    if (arr) {
      closure_0 = arr;
    }
    let c2 = 0;
    class F {
      constructor() {
        return;
      }
    }
    obj = {
      s: F,
      n() {
          if (closure_2 >= length.length) {
            let obj = { done: true };
          } else {
            obj = { done: false };
            closure_2 = tmp3 + 1;
            obj.value = length[+closure_2];
          }
          return obj;
        },
      e(arg0) {
          throw arg0;
        },
      f: F
    };
    return obj;
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const array = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    array[num] = arg0[num];
  }
  return array;
}
class Agent {
  constructor() {
    this._defaults = [];
    return;
  }
  _setDefaults(arg0) {
    obj = _createForOfIteratorHelper(this._defaults);
    sResult = obj.s();
    iter = obj.n();
    iter2 = iter;
    if (!iter.done) {
      do {
        tmp2 = iter2;
        value = iter2.value;
        tmp3 = global;
        obj2 = global[value.fn];
        tmp4 = closure_0;
        applyResult = obj2.apply(global, closure_0(value.args));
        tmp6 = obj;
        iter3 = obj.n();
        iter2 = iter3;
        done = iter3.done;
      } while (!done);
    }
    fResult = obj.f();
    return;
  }
}
let num = 0;
let c1 = 0;
const items = ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"];
if (0 < items.length) {
  do {
    let tmp = (function _loop() {
      const _toConsumableArray = tmp;
      Agent.prototype[items[c1]] = function() {
        const self = this;
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        self._defaults.push({ fn: closure_0, args: array });
        return self;
      };
    })();
    num = num + 1;
    c1 = num;
    length = items.length;
  } while (num < length);
}

export default Agent;
