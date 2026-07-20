// Module ID: 509
// Function ID: 6545
// Name: _createForOfIteratorHelper
// Dependencies: []

// Module 509 (_createForOfIteratorHelper)
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
  let _createForOfIteratorHelper = Symbol_iterator;
  if (Symbol_iterator) {
    let closure_4 = true;
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
      _createForOfIteratorHelper = arr;
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
    if (_createForOfIteratorHelper) {
      closure_0 = _createForOfIteratorHelper;
    }
    const _arrayLikeToArray = 0;
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
arg5.type = (str) => {
  const parts = str.split(/ *; */);
  return parts.shift();
};
arg5.params = (str) => {
  let iter3;
  const obj = {};
  const obj2 = _createForOfIteratorHelper(str.split(/ *; */));
  obj2.s();
  const iter = obj2.n();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let tmp2 = iter2;
      str = iter2.value;
      let parts = str.split(/ *= */);
      let arr = parts.shift();
      let tmp4 = arr;
      arr = parts.shift();
      let tmp6 = arr;
      if (arr) {
        tmp6 = arr;
      }
      if (tmp6) {
        let tmp7 = obj;
        let tmp8 = arr;
        let tmp9 = arr;
        obj[tmp4] = arr;
      }
      let tmp10 = obj2;
      iter3 = obj2.n();
      iter2 = iter3;
    } while (!iter3.done);
  }
  obj2.f();
};
arg5.parseLinks = (str) => {
  let done;
  const obj = {};
  const obj2 = _createForOfIteratorHelper(str.split(/ *, */));
  obj2.s();
  const iter = obj2.n();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let tmp2 = iter2;
      str = iter2.value;
      let parts = str.split(/ *; */);
      let first = parts[0];
      let tmp5 = obj;
      let str2 = parts[1];
      let substr = first.slice(1, -1);
      let arr2 = str2.split(/ *= */)[1];
      obj[arr2.slice(1, -1)] = substr;
      let tmp6 = obj2;
      let iter3 = obj2.n();
      iter2 = iter3;
      done = iter3.done;
    } while (!done);
  }
  obj2.f();
};
arg5.cleanHeader = (arg0, arg1) => {
  delete r0.content-type;
  delete r0.content-length;
  delete r0.transfer-encoding;
  delete r0.host;
  if (arg1) {
    delete r0.authorization;
    delete r0.cookie;
  }
  return arg0;
};
arg5.isObject = (arg0) => {
  let tmp = null !== arg0;
  if (tmp) {
    tmp = "object" === typeof arg0;
  }
  return tmp;
};
arg5.hasOwn = Object.hasOwn || (arg0, arg1) => {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("Cannot convert undefined or null to object");
    throw typeError;
  } else {
    const _Object = Object;
    const _Object2 = Object;
    const object = new Object(arg0);
    return hasOwnProperty.call(object, arg1);
  }
};
arg5.mixin = (arg0, obj) => {
  for (const key10004 in arg1) {
    let tmp = key10004;
    let tmp2 = closure_0;
    if (!closure_0.hasOwn(arg1, key10004)) {
      continue;
    } else {
      arg0[key10004] = arg1[key10004];
      // continue
    }
    continue;
  }
};
