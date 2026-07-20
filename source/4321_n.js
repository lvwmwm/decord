// Module ID: 4321
// Function ID: 37920
// Name: n
// Dependencies: []
// Exports: match

// Module 4321 (n)
function n(arg0, arg1) {
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
function t(@@iterator) {
  let closure_0 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = n(Symbol_iterator, undefined);
        } else {
          const _Object = Object;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = n(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
const fn = function s() {
  const slice = [].slice;
  const callResult = slice.call(arguments);
  if (1 === callResult.length) {
    let closure_0 = callResult[0];
    return (arg0) => callback(closure_0, arg0, () => {

    });
  } else if (2 === callResult.length) {
    return fn10(callResult[0], callResult[1], () => {

    });
  } else {
    const _Error = Error;
    const error = new Error("isMatching wasn't given the right number of arguments: expected 1 or 2, received " + callResult.length + ".");
    throw error;
  }
};
const fn2 = function l(arg0) {
  let closure_0 = arg0;
  return Object.assign(arg0, {
    optional() {
      return callback(arg0);
    },
    and(arg0) {
      return callback2(arg0, arg0);
    },
    or(arg0) {
      return callback3(arg0, arg0);
    },
    select(arg0) {
      if (undefined === arg0) {
        let tmp3 = callback4(arg0);
      } else {
        tmp3 = callback4(arg0, arg0);
      }
      return tmp3;
    }
  });
};
function h(arg0) {
  let closure_0 = arg0;
  return Object.assign((arg0) => Object.assign(arg0, {
    [Symbol.iterator]: () => {
      const fn = function t() {
        return fn.wrap((next) => {
          next = next.next;
          next.prev = next;
          while (0 !== next) {
            return next.stop();
          }
          next.next = 2;
          const obj = {};
          obj[closure_2] = true;
          return Object.assign(obj, obj);
        }, fn);
      };
      const arg0 = fn;
      return arg0.mark(fn)();
    }
  })(arg0), {
    optional() {
      return callback(callback2(arg0));
    },
    select(arg0) {
      if (undefined === arg0) {
        let tmp4 = callback3(arg0);
      } else {
        tmp4 = callback3(arg0, arg0);
      }
      return closure_33(tmp4);
    }
  });
}
const fn3 = function v(arg0) {
  let closure_0 = arg0;
  return fn2({
    [closure_1]: () => ({
      match(arg0) {
        let obj = {};
        const fn = function r(arg0, arg1) {
          obj[arg0] = arg1;
        };
        if (undefined === arg0) {
          const item = callback2(obj).forEach((arg0) => {
            fn(arg0, undefined);
          });
          obj = { matched: true };
          obj.selections = obj;
          const arr = callback2(obj);
        } else {
          obj = {};
          obj.matched = callback(obj, arg0, fn);
          obj.selections = obj;
        }
        return obj;
      },
      getSelectionKeys() {
        return callback2(closure_0);
      },
      matcherType: "optional"
    })
  });
};
const fn4 = function p() {
  const slice = [].slice;
  let closure_0 = slice.call(arguments);
  return fn2({
    [closure_1]: () => ({
      match(arg0) {
        let obj = {};
        function r(arg0, arg1) {
          obj[arg0] = arg1;
        }
        obj = { matched: arg0.every((arg0) => callback(arg0, arg0, r)), selections: obj };
        return obj;
      },
      getSelectionKeys() {
        return callback(closure_0, closure_7);
      },
      matcherType: "and"
    })
  });
};
const fn5 = function y() {
  const slice = [].slice;
  let closure_0 = slice.call(arguments);
  return fn2({
    [closure_1]: () => ({
      match(arg0) {
        let obj = {};
        function r(arg0, arg1) {
          obj[arg0] = arg1;
        }
        const item = callback(arg0, closure_7).forEach((arg0) => {
          r(arg0, undefined);
        });
        obj = { matched: arg0.some((arg0) => callback(arg0, arg0, r)), selections: obj };
        return obj;
      },
      getSelectionKeys() {
        return callback(closure_0, closure_7);
      },
      matcherType: "or"
    })
  });
};
const fn6 = function d(S) {
  let closure_0 = S;
  return {
    [closure_1]: () => ({
      match(arg0) {
        return { matched: Boolean(callback(arg0)) };
      }
    })
  };
};
const fn7 = function b() {
  const slice = [].slice;
  const callResult = slice.call(arguments);
  let first;
  if ("string" === typeof callResult[0]) {
    first = callResult[0];
  }
  let closure_0 = first;
  if (2 === callResult.length) {
    let first1 = callResult[1];
  } else if ("string" !== typeof callResult[0]) {
    first1 = callResult[0];
  }
  return fn2({
    [closure_1]: () => ({
      match(arg0) {
        let obj = { [null != closure_0 ? closure_0 : closure_3]: arg0 };
        obj = {};
        let tmp = undefined === closure_1;
        if (!tmp) {
          tmp = callback(closure_1, arg0, (arg0, arg1) => {
            obj[arg0] = arg1;
          });
        }
        obj.matched = tmp;
        obj.selections = obj;
        return obj;
      },
      getSelectionKeys() {
        const items = [null != closure_0 ? closure_0 : closure_3];
        if (undefined === closure_1) {
          let items1 = [];
        } else {
          items1 = callback2(closure_1);
        }
        return items.concat(items1);
      }
    })
  });
};
const fn8 = function w(arg0) {
  return "number" === typeof arg0;
};
class S {
  constructor(arg0) {
    return "string" === typeof global;
  }
}
const fn9 = function j(arg0) {
  return "bigint" === typeof arg0;
};
let closure_0 = require(dependencyMap[0]);
const forResult = Symbol.for("@ts-pattern/matcher");
let closure_2 = Symbol.for("@ts-pattern/isVariadic");
let closure_3 = "@ts-pattern/anonymous-select-key";
function i(arg0) {
  let tmp = arg0;
  if (arg0) {
    tmp = "object" === typeof arg0;
  }
  return Boolean(tmp);
}
function o(arg0) {
  let tmp = arg0;
  if (arg0) {
    tmp = arg0[closure_1];
  }
  return tmp;
}
const fn10 = function n(arr, arr2) {
  let matched;
  let selections;
  let closure_0 = arr;
  let closure_2 = arg2;
  if (o(arr)) {
    const match = arr[closure_1]().match(arr2);
    ({ matched, selections } = match);
    let closure_3 = selections;
    let tmp24 = matched;
    if (matched) {
      tmp24 = selections;
    }
    if (tmp24) {
      const _Object3 = Object;
      const keys = Object.keys(selections);
      const item = keys.forEach((arg0) => arg2(arg0, selections[arg0]));
    }
    return matched;
  } else if (i(arr)) {
    if (i(arr2)) {
      const _Array = Array;
      if (Array.isArray(arr)) {
        const _Array2 = Array;
        if (Array.isArray(arr2)) {
          const items = [];
          const items1 = [];
          const items2 = [];
          const tmp6 = t(arr.keys());
          let iter = tmp6();
          if (!iter.done) {
            while (true) {
              let tmp7 = arr[iter.value];
              let tmp8 = o;
              if (o(tmp7)) {
                let tmp9 = closure_2;
                if (tmp7[closure_2]) {
                  arr = items2.push(tmp7);
                  let iter2 = tmp6();
                  iter = iter2;
                  if (iter2.done) {
                    break;
                  }
                }
              }
              if (items2.length) {
                arr = items1.push(tmp7);
              } else {
                let arr1 = items.push(tmp7);
              }
            }
          }
          if (items2.length) {
            if (items2.length > 1) {
              const _Error = Error;
              const error = new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
              throw error;
            } else if (arr2.length < items.length + items1.length) {
              return false;
            } else {
              const i = arr2.slice(0, items.length);
              if (0 === items1.length) {
                let items3 = [];
              } else {
                items3 = arr2.slice(-items1.length);
              }
              const o = items3;
              let num2 = Infinity;
              if (0 !== items1.length) {
                num2 = -items1.length;
              }
              const substr = arr2.slice(items.length, num2);
              let tmp15 = items.every((arg0, arg1) => callback(arg0, closure_4[arg1], arg2)) && items1.every((arg0, arg1) => callback(arg0, items3[arg1], arg2));
              if (tmp15) {
                let tmp16 = 0 === items2.length;
                if (!tmp16) {
                  tmp16 = fn10(items2[0], substr, arg2);
                }
                tmp15 = tmp16;
              }
              return tmp15;
            }
          } else {
            return arr.length === arr2.length && arr.every((arg0, arg1) => callback(arg0, arg1[arg1], arg2));
          }
        } else {
          return false;
        }
      } else {
        const _Object2 = Object;
        const keys1 = Object.keys(arr);
        return keys1.every((arg0) => {
          let tmp2 = arg0 in arg1;
          if (!tmp2) {
            let tmp4 = items3(tmp);
            if (tmp4) {
              tmp4 = "optional" === tmp[closure_1]().matcherType;
            }
            tmp2 = tmp4;
          }
          if (tmp2) {
            tmp2 = callback(tmp, arg1[arg0], arg2);
          }
          return tmp2;
        });
      }
    } else {
      return false;
    }
  } else {
    const _Object = Object;
    return Object.is(arr2, arr);
  }
  const forResult = arr2;
};
const fn11 = function n(arg0) {
  let tmp = arg0;
  if (i(arg0)) {
    if (o(tmp)) {
      const tmp9 = tmp[closure_1]();
      const getSelectionKeys = tmp9.getSelectionKeys;
      tmp = null == getSelectionKeys;
      let callResult;
      if (!tmp) {
        callResult = getSelectionKeys.call(tmp9);
      }
      if (null == callResult) {
        callResult = [];
      }
      let tmp4Result = callResult;
    } else {
      const _Array = Array;
      if (Array.isArray(tmp)) {
        tmp4Result = tmp4(tmp, fn11);
      } else {
        const _Object = Object;
        tmp4Result = tmp4(Object.values(tmp), fn11);
      }
    }
  } else {
    return [];
  }
};
function f(arr) {
  let closure_0 = arg1;
  return arr.reduce((arr) => arr.concat(arg1(arg1)), []);
}
function g(arg0, arg1) {
  const tmp = t(arg0);
  let iter = tmp();
  if (!iter.done) {
    while (arg1(iter.value)) {
      let iter2 = tmp();
      iter = iter2;
    }
    return false;
  }
  return true;
}
function m(arr) {
  const tmp = t(arr.entries());
  let iter = tmp();
  if (!iter.done) {
    const value = iter.value;
    while (arg1(value[1], value[0])) {
      let iter2 = tmp();
      iter = iter2;
    }
    return false;
  }
  return true;
}
const fn2Result = fn2(fn6((arg0) => true));
const fn12 = function n(arg0) {
  let closure_0 = arg0;
  return Object.assign(fn2(arg0), {
    startsWith(arg0) {
      return callback3(callback(arg0, callback2((str) => {
        let startsWithResult = callback(str);
        if (startsWithResult) {
          startsWithResult = str.startsWith(str);
        }
        return startsWithResult;
      })));
    },
    endsWith(arg0) {
      return callback3(callback(arg0, callback2((str) => {
        let endsWithResult = callback(str);
        if (endsWithResult) {
          endsWithResult = str.endsWith(str);
        }
        return endsWithResult;
      })));
    },
    minLength(arg0) {
      return callback3(callback(arg0, (arg0) => callback((arg0) => {
        let tmp = callback(arg0);
        if (tmp) {
          tmp = arg0.length >= arg0;
        }
        return tmp;
      })(arg0)));
    },
    maxLength(arg0) {
      return callback3(callback(arg0, (arg0) => callback((arg0) => {
        let tmp = callback(arg0);
        if (tmp) {
          tmp = arg0.length <= arg0;
        }
        return tmp;
      })(arg0)));
    },
    includes(arg0) {
      return callback3(callback(arg0, callback2((arr) => {
        let hasItem = callback(arr);
        if (hasItem) {
          hasItem = arr.includes(arr);
        }
        return hasItem;
      })));
    },
    regex(arg0) {
      return callback3(callback(arg0, callback2((str) => {
        let BooleanResult = callback(str);
        if (BooleanResult) {
          const _Boolean = Boolean;
          BooleanResult = Boolean(str.match(str));
        }
        return BooleanResult;
      })));
    }
  });
};
class B {
  constructor(arg0, arg1) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 <= arg0;
      }
      if (tmp) {
        tmp = arg1 >= arg0;
      }
      return tmp;
    });
  }
}
class I {
  constructor(arg0) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 < arg0;
      }
      return tmp;
    });
  }
}
class E {
  constructor(arg0) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 > arg0;
      }
      return tmp;
    });
  }
}
class K {
  constructor(arg0) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 <= arg0;
      }
      return tmp;
    });
  }
}
class T {
  constructor(arg0) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 >= arg0;
      }
      return tmp;
    });
  }
}
const fn13 = function k() {
  return fn6((arg0) => {
    let isIntegerResult = callback(arg0);
    if (isIntegerResult) {
      const _Number = Number;
      isIntegerResult = Number.isInteger(arg0);
    }
    return isIntegerResult;
  });
};
class P {
  constructor() {
    return d((arg0) => {
      let isFiniteResult = callback(arg0);
      if (isFiniteResult) {
        const _Number = Number;
        isFiniteResult = Number.isFinite(arg0);
      }
      return isFiniteResult;
    });
  }
}
const fn14 = function _() {
  return fn6((arg0) => {
    let tmp = callback(arg0);
    if (tmp) {
      tmp = arg0 > 0;
    }
    return tmp;
  });
};
class M {
  constructor() {
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 < 0;
      }
      return tmp;
    });
  }
}
const fn15 = function n(arg0) {
  let closure_0 = arg0;
  return Object.assign(fn2(arg0), {
    between(arg0, arg1) {
      return callback11(callback10(arg0, callback(arg0, arg1)));
    },
    lt(arg0) {
      return callback11(callback10(arg0, callback2(arg0)));
    },
    gt(arg0) {
      return callback11(callback10(arg0, callback3(arg0)));
    },
    lte(arg0) {
      return callback11(callback10(arg0, callback4(arg0)));
    },
    gte(arg0) {
      return callback11(callback10(arg0, callback5(arg0)));
    },
    int() {
      return callback11(callback10(arg0, callback6()));
    },
    finite() {
      return callback11(callback10(arg0, callback7()));
    },
    positive() {
      return callback11(callback10(arg0, callback8()));
    },
    negative() {
      return callback11(callback10(arg0, callback9()));
    }
  });
};
class N {
  constructor(arg0, arg1) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 <= arg0;
      }
      if (tmp) {
        tmp = arg1 >= arg0;
      }
      return tmp;
    });
  }
}
const fn16 = function z(arg0) {
  let closure_0 = arg0;
  return fn6((arg0) => {
    let tmp = callback(arg0);
    if (tmp) {
      tmp = arg0 < arg0;
    }
    return tmp;
  });
};
class L {
  constructor(arg0) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 > arg0;
      }
      return tmp;
    });
  }
}
class R {
  constructor(arg0) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 <= arg0;
      }
      return tmp;
    });
  }
}
class U {
  constructor(arg0) {
    require = global;
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 >= arg0;
      }
      return tmp;
    });
  }
}
class C {
  constructor() {
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 > 0;
      }
      return tmp;
    });
  }
}
class F {
  constructor() {
    return d((arg0) => {
      let tmp = callback(arg0);
      if (tmp) {
        tmp = arg0 < 0;
      }
      return tmp;
    });
  }
}
const fn17 = function n(arg0) {
  let closure_0 = arg0;
  return Object.assign(fn2(arg0), {
    between(arg0, arg1) {
      return callback9(callback8(arg0, callback(arg0, arg1)));
    },
    lt(arg0) {
      return callback9(callback8(arg0, callback2(arg0)));
    },
    gt(arg0) {
      return callback9(callback8(arg0, callback3(arg0)));
    },
    lte(arg0) {
      return callback9(callback8(arg0, callback4(arg0)));
    },
    gte(arg0) {
      return callback9(callback8(arg0, callback5(arg0)));
    },
    positive() {
      return callback9(callback8(arg0, callback6()));
    },
    negative() {
      return callback9(callback8(arg0, callback7()));
    }
  });
};
const fn12Result = fn12(fn6(S));
const fn15Result = fn15(fn6(fn8));
const fn17Result = fn17(fn6(fn9));
const fn2Result1 = fn2(fn6((arg0) => "boolean" === typeof arg0));
const fn2Result2 = fn2(fn6((arg0) => "symbol" === typeof arg0));
const obj = Object.create(null);
obj.matcher = forResult;
obj.optional = fn3;
obj.array = function array() {
  const slice = [].slice;
  let closure_0 = slice.call(arguments);
  return h({
    [closure_1]: () => ({
      match(arr) {
        if (Array.isArray(arr)) {
          if (0 === first.length) {
            let obj = { matched: true };
            return obj;
          } else {
            const first = first[0];
            obj = {};
            if (0 === arr.length) {
              const item = callback(first).forEach((arg0) => {
                obj[arg0] = [];
              });
              const obj1 = { matched: true, selections: obj };
              return obj1;
            } else {
              function u(arg0, arg1) {
                let items = obj[arg0];
                if (!items) {
                  items = [];
                }
                const items1 = [arg1];
                obj[arg0] = items.concat(items1);
              }
              const obj2 = { matched: arr.every((arg0) => callback(first, arg0, u)), selections: obj };
              return obj2;
            }
          }
        } else {
          obj = { matched: false };
          return obj;
        }
      },
      getSelectionKeys() {
        if (0 === length.length) {
          let items = [];
        } else {
          items = callback(length[0]);
        }
        return items;
      }
    })
  });
};
obj.set = function set() {
  const slice = [].slice;
  let closure_0 = slice.call(arguments);
  return fn2({
    [closure_1]: () => ({
      match(size) {
        if (size instanceof Set) {
          let obj = {};
          if (0 === size.size) {
            obj = { matched: true };
            obj.selections = obj;
            return obj;
          } else if (0 === obj.length) {
            const obj1 = { matched: true };
            return obj1;
          } else {
            function r(arg0, arg1) {
              let items = obj[arg0];
              if (!items) {
                items = [];
              }
              const items1 = [arg1];
              obj[arg0] = items.concat(items1);
            }
            let closure_2 = obj[0];
            const obj2 = { matched: callback2(size, (arg0) => callback(closure_2, arg0, r)), selections: obj };
            return obj2;
          }
        } else {
          obj = { matched: false };
          return obj;
        }
      },
      getSelectionKeys() {
        if (0 === length.length) {
          let items = [];
        } else {
          items = callback(length[0]);
        }
        return items;
      }
    })
  });
};
obj.map = function map() {
  const slice = [].slice;
  let closure_0 = slice.call(arguments);
  return fn2({
    [closure_1]: () => ({
      match(size) {
        if (size instanceof Map) {
          let obj = {};
          if (0 === size.size) {
            obj = { matched: true };
            obj.selections = obj;
            return obj;
          } else {
            function u(arg0, arg1) {
              let items = obj[arg0];
              if (!items) {
                items = [];
              }
              const items1 = [arg1];
              obj[arg0] = items.concat(items1);
            }
            if (0 === obj.length) {
              const obj1 = { matched: true };
              return obj1;
            } else if (1 === obj.length) {
              let _Error = Error;
              let str = obj[0];
              str = undefined;
              if (null != str) {
                str = str.toString();
              }
              const prototype = _Error.prototype;
              _Error = new _Error("`P.map` wasn't given enough arguments. Expected (key, value), received " + str);
              throw _Error;
            } else {
              [closure_2, closure_3] = obj;
              const obj2 = {
                matched: callback2(size, (arg0, arg1) => {
                        let tmp = callback(closure_2, arg1, u);
                        if (tmp) {
                          tmp = callback(closure_3, arg0, u);
                        }
                        return tmp;
                      }),
                selections: obj
              };
              return obj2;
            }
          }
        } else {
          obj = { matched: false };
          return obj;
        }
      },
      getSelectionKeys() {
        if (0 === length.length) {
          let items = [];
        } else {
          const items1 = [];
          items = items1.concat(callback(length[0]), callback(length[1]));
          const tmp3 = callback(length[0]);
        }
        return items;
      }
    })
  });
};
obj.intersection = fn4;
obj.union = fn5;
obj.not = function not(nullish) {
  let closure_0 = nullish;
  return fn2({
    [closure_1]: () => ({
      match(arg0) {
        return {
          matched: !callback(closure_0, arg0, () => {

          })
        };
      },
      getSelectionKeys() {
        return [];
      },
      matcherType: "not"
    })
  });
};
obj.when = fn6;
obj.select = fn7;
obj.any = fn2Result;
obj._ = fn2Result;
obj.string = fn12Result;
obj.between = B;
obj.lt = I;
obj.gt = E;
obj.lte = K;
obj.gte = T;
obj.int = fn13;
obj.finite = P;
obj.positive = fn14;
obj.negative = M;
obj.number = fn15Result;
obj.betweenBigInt = N;
obj.ltBigInt = fn16;
obj.gtBigInt = L;
obj.lteBigInt = R;
obj.gteBigInt = U;
obj.positiveBigInt = C;
obj.negativeBigInt = F;
obj.bigint = fn17Result;
obj.boolean = fn2Result1;
obj.symbol = fn2Result2;
obj.nullish = fn2(fn6((arg0) => null == arg0));
obj.instanceOf = function instanceOf(Value) {
  return fn2(fn6((Value) => (arg0) => arg0 instanceof arg0(Value)));
};
obj.shape = function shape(arg0) {
  return fn2(fn6(fn(arg0)));
};
let closure_27 = { matched: false, value: undefined };
let closure_28 = () => {
  const fn = function n(input, state) {
    this.input = undefined;
    this.state = undefined;
    this.input = input;
    this.state = state;
  };
  let closure_0 = fn;
  const prototype = fn.prototype;
  prototype.with = function() {
    const self = this;
    const fn = this;
    const slice = [].slice;
    const callResult = slice.call(arguments);
    if (this.state.matched) {
      return self;
    } else {
      const items = [callResult[0]];
      if (3 === callResult.length) {
        if ("function" === typeof callResult[1]) {
          items.push(callResult[0]);
        }
        let closure_1 = false;
        let obj = {};
        function s(arg0, arg1) {
          let closure_1 = true;
          obj[arg0] = arg1;
        }
        if (items.some((arg0) => callback(arg0, self.input, s))) {
          if (tmp2) {
            const _Boolean = Boolean;
          }
          obj = { matched: true };
          if (closure_1) {
            let tmp9 = obj;
            if (s in obj) {
              tmp9 = obj[closure_3];
            }
            let input = tmp9;
          } else {
            input = self.input;
          }
          obj.value = tmp(input, self.input);
        }
        const prototype = fn.prototype;
        const tmp16 = new fn(self.input, closure_27);
        return tmp16;
      }
      if (callResult.length > 2) {
        const push = items.push;
        push.apply(items, callResult.slice(1, callResult.length - 1));
      }
    }
  };
  prototype.when = function(arg0, arg1) {
    const self = this;
    if (this.state.matched) {
      return self;
    } else {
      const _Boolean = Boolean;
      let tmp3 = fn;
      const input = self.input;
      if (Boolean(arg0(self.input))) {
        const obj = { matched: true, value: arg1(self.input, self.input) };
        let tmp4 = obj;
      } else {
        tmp4 = closure_27;
      }
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(input, tmp4);
      return tmp3;
    }
  };
  prototype.otherwise = function(arg0) {
    const self = this;
    if (this.state.matched) {
      let value = self.state.value;
    } else {
      value = arg0(self.input);
    }
    return value;
  };
  prototype.exhaustive = function() {
    return this.run();
  };
  prototype.run = function() {
    const self = this;
    if (this.state.matched) {
      return self.state.value;
    } else {
      const _JSON = JSON;
      const json = JSON.stringify(self.input);
      const _Error = Error;
      const error = new Error("Pattern matching error: no pattern matches value " + json);
    }
  };
  prototype.returnType = function() {
    return this;
  };
  return fn;
}();

export const P = obj;
export const Pattern = obj;
export const isMatching = fn;
export const match = (arg0) => new closure_28(arg0, closure_27);
