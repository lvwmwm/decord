// Module ID: 4329
// Function ID: 38017
// Name: n
// Dependencies: [4330]
// Exports: match

// Module 4329 (n)
import _regeneratorRuntime from "_regeneratorRuntime";

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
function t(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = n(iterable, undefined);
        } else {
          const _Object = Object;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = n(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
let fn = function s() {
  const slice = [].slice;
  const callResult = slice.call(arguments);
  if (1 === callResult.length) {
    let closure_0 = callResult[0];
    return (arg0) => outer1_6(closure_0, arg0, () => {

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
      return outer1_34(closure_0);
    },
    and(arg0) {
      return outer1_35(closure_0, arg0);
    },
    or(arg0) {
      return outer1_36(closure_0, arg0);
    },
    select(arg0) {
      if (undefined === arg0) {
        let tmp3 = outer1_38(closure_0);
      } else {
        tmp3 = outer1_38(arg0, closure_0);
      }
      return tmp3;
    }
  });
};
function h(arg0) {
  let closure_0 = arg0;
  return Object.assign(((arg0) => {
    let closure_0 = arg0;
    return Object.assign(arg0, {
      [Symbol.iterator]: () => {
        const fn = function t() {
          return closure_0.wrap((next) => {
            next = next.next;
            next.prev = next;
            while (0 !== next) {
              return next.stop();
            }
            next.next = 2;
            const obj = {};
            obj[outer4_2] = true;
            return Object.assign(fn, obj);
          }, fn);
        };
        return closure_0.mark(fn)();
      }
    });
  })(arg0), {
    optional() {
      return outer1_33(outer1_34(closure_0));
    },
    select(arg0) {
      if (undefined === arg0) {
        let tmp4 = outer1_38(closure_0);
      } else {
        tmp4 = outer1_38(arg0, closure_0);
      }
      return outer1_33(tmp4);
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
          const item = outer2_7(outer1_0).forEach((prototype) => {
            fn(prototype, undefined);
          });
          obj = { matched: true };
          obj.selections = obj;
          const arr = outer2_7(outer1_0);
        } else {
          obj = { matched: outer2_6(outer1_0, arg0, fn) };
          obj.selections = obj;
        }
        return obj;
      },
      getSelectionKeys() {
        return outer2_7(outer1_0);
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
        let closure_0 = arg0;
        let obj = {};
        function r(arg0, arg1) {
          obj[arg0] = arg1;
        }
        obj = { matched: outer1_0.every((arg0) => outer3_6(arg0, closure_0, r)), selections: obj };
        return obj;
      },
      getSelectionKeys() {
        return outer2_8(outer1_0, outer2_7);
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
        let closure_0 = arg0;
        let obj = {};
        function r(arg0, arg1) {
          obj[arg0] = arg1;
        }
        const item = outer2_8(outer1_0, outer2_7).forEach((arg0) => {
          r(arg0, undefined);
        });
        obj = { matched: outer1_0.some((arg0) => outer3_6(arg0, closure_0, r)), selections: obj };
        return obj;
      },
      getSelectionKeys() {
        return outer2_8(outer1_0, outer2_7);
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
        return { matched: Boolean(outer1_0(arg0)) };
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
  if (2 === callResult.length) {
    let first1 = callResult[1];
  } else if ("string" !== typeof callResult[0]) {
    first1 = callResult[0];
  }
  return fn2({
    [closure_1]: () => ({
      match(arg0) {
        let obj = { [null != outer1_0 ? outer1_0 : outer2_3]: arg0 };
        obj = {};
        let tmp = undefined === outer1_1;
        if (!tmp) {
          tmp = outer2_6(outer1_1, arg0, (arg0, arg1) => {
            obj[arg0] = arg1;
          });
        }
        obj.matched = tmp;
        obj.selections = obj;
        return obj;
      },
      getSelectionKeys() {
        const items = [null != outer1_0 ? outer1_0 : outer2_3];
        if (undefined === outer1_1) {
          let items1 = [];
        } else {
          items1 = outer2_7(outer1_1);
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
let closure_40 = S;
const fn9 = function j(arg0) {
  return "bigint" === typeof arg0;
};
const forResult = Symbol.for("@ts-pattern/matcher");
let closure_2 = Symbol.for("@ts-pattern/isVariadic");
let c3 = "@ts-pattern/anonymous-select-key";
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
  let closure_1 = arr2;
  let closure_2 = arg2;
  if (items3(arr)) {
    const match = arr[closure_1]().match(arr2);
    ({ matched, selections } = match);
    let tmp24 = matched;
    if (matched) {
      tmp24 = selections;
    }
    if (tmp24) {
      const _Object3 = Object;
      const keys = Object.keys(selections);
      const item = keys.forEach((arg0) => callback(arg0, selections[arg0]));
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
              let tmp8 = items3;
              if (items3(tmp7)) {
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
              i = arr2.slice(0, items.length);
              if (0 === items1.length) {
                items3 = [];
              } else {
                items3 = arr2.slice(-items1.length);
              }
              let num2 = Infinity;
              if (0 !== items1.length) {
                num2 = -items1.length;
              }
              const substr = arr2.slice(items.length, num2);
              let tmp15 = items.every((arg0, arg1) => outer1_42(arg0, table[arg1], closure_2)) && items1.every((arg0, arg1) => outer1_42(arg0, items3[arg1], closure_2));
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
            return arr.length === arr2.length && arr.every((arg0, arg1) => outer1_42(arg0, arr2[arg1], closure_2));
          }
        } else {
          return false;
        }
      } else {
        const _Object2 = Object;
        const keys1 = Object.keys(arr);
        return keys1.every((arg0) => {
          let tmp2 = arg0 in arr2;
          if (!tmp2) {
            let tmp4 = items3(tmp);
            if (tmp4) {
              tmp4 = "optional" === tmp[arr2]().matcherType;
            }
            tmp2 = tmp4;
          }
          if (tmp2) {
            tmp2 = outer1_42(tmp, arr2[arg0], closure_2);
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
  return arr.reduce((arr) => arr.concat(callback(arg1)), []);
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
      let closure_0 = arg0;
      return outer1_44(outer1_35(closure_0, outer1_37((str) => {
        let startsWithResult = outer2_40(str);
        if (startsWithResult) {
          startsWithResult = str.startsWith(closure_0);
        }
        return startsWithResult;
      })));
    },
    endsWith(arg0) {
      let closure_0 = arg0;
      return outer1_44(outer1_35(closure_0, outer1_37((str) => {
        let endsWithResult = outer2_40(str);
        if (endsWithResult) {
          endsWithResult = str.endsWith(closure_0);
        }
        return endsWithResult;
      })));
    },
    minLength(minItems, arg1) {
      return outer1_44(outer1_35(closure_0, ((minItems) => {
        let closure_0 = minItems;
        return outer2_37((arg0) => {
          let tmp = outer3_40(arg0);
          if (tmp) {
            tmp = arg0.length >= closure_0;
          }
          return tmp;
        });
      })(minItems)));
    },
    maxLength(maxItems, arg1) {
      return outer1_44(outer1_35(closure_0, ((maxItems) => {
        let closure_0 = maxItems;
        return outer2_37((arg0) => {
          let tmp = outer3_40(arg0);
          if (tmp) {
            tmp = arg0.length <= closure_0;
          }
          return tmp;
        });
      })(maxItems)));
    },
    includes(arg0) {
      let closure_0 = arg0;
      return outer1_44(outer1_35(closure_0, outer1_37((arr) => {
        let hasItem = outer2_40(arr);
        if (hasItem) {
          hasItem = arr.includes(closure_0);
        }
        return hasItem;
      })));
    },
    regex(arg0) {
      let closure_0 = arg0;
      return outer1_44(outer1_35(closure_0, outer1_37((str) => {
        let BooleanResult = outer2_40(str);
        if (BooleanResult) {
          const _Boolean = Boolean;
          BooleanResult = Boolean(str.match(closure_0));
        }
        return BooleanResult;
      })));
    }
  });
};
class B {
  constructor(arg0, arg1) {
    closure_0 = global;
    closure_1 = require;
    return d((arg0) => {
      let tmp = outer1_39(arg0);
      if (tmp) {
        tmp = closure_0 <= arg0;
      }
      if (tmp) {
        tmp = closure_1 >= arg0;
      }
      return tmp;
    });
  }
}
let closure_11 = B;
class I {
  constructor(arg0) {
    closure_0 = global;
    return d((arg0) => {
      let tmp = outer1_39(arg0);
      if (tmp) {
        tmp = arg0 < closure_0;
      }
      return tmp;
    });
  }
}
let closure_12 = I;
class E {
  constructor(arg0) {
    closure_0 = global;
    return d((arg0) => {
      let tmp = outer1_39(arg0);
      if (tmp) {
        tmp = arg0 > closure_0;
      }
      return tmp;
    });
  }
}
let closure_13 = E;
class K {
  constructor(arg0) {
    closure_0 = global;
    return d((arg0) => {
      let tmp = outer1_39(arg0);
      if (tmp) {
        tmp = arg0 <= closure_0;
      }
      return tmp;
    });
  }
}
let closure_14 = K;
class T {
  constructor(arg0) {
    closure_0 = global;
    return d((arg0) => {
      let tmp = outer1_39(arg0);
      if (tmp) {
        tmp = arg0 >= closure_0;
      }
      return tmp;
    });
  }
}
let closure_15 = T;
const fn13 = function k() {
  return fn6((arg0) => {
    let isIntegerResult = outer1_39(arg0);
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
      let isFiniteResult = outer1_39(arg0);
      if (isFiniteResult) {
        const _Number = Number;
        isFiniteResult = Number.isFinite(arg0);
      }
      return isFiniteResult;
    });
  }
}
let closure_17 = P;
const fn14 = function _() {
  return fn6((arg0) => {
    let tmp = outer1_39(arg0);
    if (tmp) {
      tmp = arg0 > 0;
    }
    return tmp;
  });
};
class M {
  constructor() {
    return d((arg0) => {
      let tmp = outer1_39(arg0);
      if (tmp) {
        tmp = arg0 < 0;
      }
      return tmp;
    });
  }
}
let closure_19 = M;
const fn15 = function n(arg0) {
  let closure_0 = arg0;
  return Object.assign(fn2(arg0), {
    between(arg0, arg1) {
      return outer1_45(outer1_35(closure_0, outer1_11(arg0, arg1)));
    },
    lt(arg0) {
      return outer1_45(outer1_35(closure_0, outer1_12(arg0)));
    },
    gt(arg0) {
      return outer1_45(outer1_35(closure_0, outer1_13(arg0)));
    },
    lte(arg0) {
      return outer1_45(outer1_35(closure_0, outer1_14(arg0)));
    },
    gte(arg0) {
      return outer1_45(outer1_35(closure_0, outer1_15(arg0)));
    },
    int() {
      return outer1_45(outer1_35(closure_0, outer1_16()));
    },
    finite() {
      return outer1_45(outer1_35(closure_0, outer1_17()));
    },
    positive() {
      return outer1_45(outer1_35(closure_0, outer1_18()));
    },
    negative() {
      return outer1_45(outer1_35(closure_0, outer1_19()));
    }
  });
};
class N {
  constructor(arg0, arg1) {
    closure_0 = global;
    closure_1 = require;
    return d((arg0) => {
      let tmp = outer1_41(arg0);
      if (tmp) {
        tmp = closure_0 <= arg0;
      }
      if (tmp) {
        tmp = closure_1 >= arg0;
      }
      return tmp;
    });
  }
}
let closure_20 = N;
const fn16 = function z(arg0) {
  let closure_0 = arg0;
  return fn6((arg0) => {
    let tmp = outer1_41(arg0);
    if (tmp) {
      tmp = arg0 < closure_0;
    }
    return tmp;
  });
};
class L {
  constructor(arg0) {
    closure_0 = global;
    return d((arg0) => {
      let tmp = outer1_41(arg0);
      if (tmp) {
        tmp = arg0 > closure_0;
      }
      return tmp;
    });
  }
}
let closure_22 = L;
class R {
  constructor(arg0) {
    closure_0 = global;
    return d((arg0) => {
      let tmp = outer1_41(arg0);
      if (tmp) {
        tmp = arg0 <= closure_0;
      }
      return tmp;
    });
  }
}
let closure_23 = R;
class U {
  constructor(arg0) {
    closure_0 = global;
    return d((arg0) => {
      let tmp = outer1_41(arg0);
      if (tmp) {
        tmp = arg0 >= closure_0;
      }
      return tmp;
    });
  }
}
let closure_24 = U;
class C {
  constructor() {
    return d((arg0) => {
      let tmp = outer1_41(arg0);
      if (tmp) {
        tmp = arg0 > 0;
      }
      return tmp;
    });
  }
}
let closure_25 = C;
class F {
  constructor() {
    return d((arg0) => {
      let tmp = outer1_41(arg0);
      if (tmp) {
        tmp = arg0 < 0;
      }
      return tmp;
    });
  }
}
let closure_26 = F;
const fn17 = function n(arg0) {
  let closure_0 = arg0;
  return Object.assign(fn2(arg0), {
    between(arg0, arg1) {
      return outer1_46(outer1_35(closure_0, outer1_20(arg0, arg1)));
    },
    lt(arg0) {
      return outer1_46(outer1_35(closure_0, outer1_21(arg0)));
    },
    gt(arg0) {
      return outer1_46(outer1_35(closure_0, outer1_22(arg0)));
    },
    lte(arg0) {
      return outer1_46(outer1_35(closure_0, outer1_23(arg0)));
    },
    gte(arg0) {
      return outer1_46(outer1_35(closure_0, outer1_24(arg0)));
    },
    positive() {
      return outer1_46(outer1_35(closure_0, outer1_25()));
    },
    negative() {
      return outer1_46(outer1_35(closure_0, outer1_26()));
    }
  });
};
const fn12Result = fn12(fn6(S));
const fn15Result = fn15(fn6(fn8));
const fn17Result = fn17(fn6(fn9));
const fn2Result1 = fn2(fn6((arg0) => "boolean" === typeof arg0));
const fn2Result2 = fn2(fn6((arg0) => "symbol" === typeof arg0));
let obj = Object.create(null);
obj.matcher = forResult;
obj.optional = fn3;
obj.array = function array() {
  const slice = [].slice;
  let closure_0 = slice.call(arguments);
  return h({
    [closure_1]: () => ({
      match(arr) {
        if (Array.isArray(arr)) {
          if (0 === outer1_0.length) {
            let obj = { matched: true };
            return obj;
          } else {
            const first = outer1_0[0];
            obj = {};
            if (0 === arr.length) {
              const item = outer2_7(first).forEach((arg0) => {
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
              const obj2 = { matched: arr.every((arg0) => outer3_6(first, arg0, u)), selections: obj };
              return obj2;
            }
          }
        } else {
          obj = { matched: false };
          return obj;
        }
      },
      getSelectionKeys() {
        if (0 === outer1_0.length) {
          let items = [];
        } else {
          items = outer2_7(outer1_0[0]);
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
          } else if (0 === outer1_0.length) {
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
            let closure_2 = outer1_0[0];
            const obj2 = { matched: outer2_9(size, (arg0) => outer3_6(closure_2, arg0, r)), selections: obj };
            return obj2;
          }
        } else {
          obj = { matched: false };
          return obj;
        }
      },
      getSelectionKeys() {
        if (0 === outer1_0.length) {
          let items = [];
        } else {
          items = outer2_7(outer1_0[0]);
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
        let closure_2;
        let closure_3;
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
            if (0 === outer1_0.length) {
              const obj1 = { matched: true };
              return obj1;
            } else if (1 === outer1_0.length) {
              let _Error = Error;
              let str = outer1_0[0];
              str = undefined;
              if (null != str) {
                str = str.toString();
              }
              const prototype = _Error.prototype;
              _Error = new _Error("`P.map` wasn't given enough arguments. Expected (key, value), received " + str);
              throw _Error;
            } else {
              [closure_2, closure_3] = outer1_0;
              const obj2 = {
                matched: outer2_10(size, (arg0, arg1) => {
                        let tmp = outer3_6(closure_2, arg1, u);
                        if (tmp) {
                          tmp = outer3_6(closure_3, arg0, u);
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
        if (0 === outer1_0.length) {
          let items = [];
        } else {
          const items1 = [];
          items = items1.concat(outer2_7(outer1_0[0]), outer2_7(outer1_0[1]));
          const tmp3 = outer2_7(outer1_0[0]);
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
          matched: !outer2_6(outer1_0, arg0, () => {

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
  return fn2(fn6(((Value) => {
    let closure_0 = Value;
    return (arg0) => arg0 instanceof closure_0;
  })(Value)));
};
obj.shape = function shape(get_ActivityIndicator) {
  return fn2(fn6(fn(get_ActivityIndicator)));
};
let closure_27 = { matched: false, value: undefined };
let closure_28 = (() => {
  const fn = function n(input, state) {
    this.input = undefined;
    this.state = undefined;
    this.input = input;
    this.state = state;
  };
  let prototype = fn.prototype;
  prototype.with = function() {
    let self = this;
    self = this;
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
        let c1 = false;
        let obj = {};
        function s(arg0, arg1) {
          let c1 = true;
          obj[arg0] = arg1;
        }
        if (items.some((arg0) => outer2_6(arg0, self.input, s))) {
          if (tmp2) {
            const _Boolean = Boolean;
          }
          obj = { matched: true };
          if (c1) {
            let tmp9 = obj;
            if (outer1_3 in obj) {
              tmp9 = obj[outer1_3];
            }
            let input = tmp9;
          } else {
            input = self.input;
          }
          obj.value = tmp(input, self.input);
        }
        const prototype = self.prototype;
        const tmp16 = new self(self.input, outer1_27);
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
        tmp4 = outer1_27;
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
})();

export const P = obj;
export const Pattern = obj;
export const isMatching = fn;
export const match = (arg0) => new closure_28(arg0, closure_27);
