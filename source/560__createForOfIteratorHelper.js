// Module ID: 560
// Function ID: 6770
// Name: _createForOfIteratorHelper
// Dependencies: []

// Module 560 (_createForOfIteratorHelper)
let length;
function _createForOfIteratorHelper(@@iterator) {
  let closure_0 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  let closure_1 = Symbol_iterator;
  if (Symbol_iterator) {
    const _arrayLikeToArray = true;
    let closure_5 = false;
    let obj = {
      s() {

        },
      n() {
          const iter = arr.next();
          const done = iter.done;
          return iter;
        },
      e(arg0) {
          let closure_5 = true;
        },
      f() {
          let tmp = closure_4;
          if (!closure_4) {
            tmp = null == arr.return;
          }
          if (!tmp) {
            arr.return();
          }
          if (closure_5) {
            throw closure_3;
          }
        }
    };
    return obj;
  } else {
    const _Array = Array;
    if (!Array.isArray(Symbol_iterator)) {
      let arr;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          arr = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const _Object = Object;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          class F {
            constructor() {
              return;
            }
          }
          let name = substr;
          if (tmp2) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp2 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      closure_1 = arr;
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
    if (closure_1) {
      closure_0 = closure_1;
    }
    let closure_2 = 0;
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
let closure_0 = require(dependencyMap[0]);
let closure_1 = 0;
const items = ["<string:373358592>", "<string:4026532428>", "<string:448568340>", "<string:785150208>", "<string:882432768>", "<string:2606347776>", "<string:3911082752>", "<string:4056157952>", "<string:3867025920>", "<string:3880532992>", "<string:2510661120>", "<string:1618840320>", "<string:293628416>", "<string:529222656>", "<string:543593472>", "<string:1899399680>", "<string:2903791360>", "<string:3262909952>", "<string:2822963200>", "<string:2569871872>", "<string:2543623936>", "<string:1416526336>"];
if (0 < items.length) {
  do {
    let tmp = function _loop() {
      let closure_0 = tmp;
      Agent.prototype[items[closure_1]] = function() {
        const self = this;
        const length = arguments.length;
        const array = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          array[num] = arguments[num];
        }
        self._defaults.push({ fn: tmp, args: array });
        return self;
      };
    }();
    num = num + 1;
    closure_1 = num;
    length = items.length;
  } while (num < length);
}

export default Agent;
