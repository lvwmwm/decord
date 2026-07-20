// Module ID: 12
// Function ID: 154
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: clear, getAllForDebugPanel, report, stringify

// Module 12 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
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
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
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
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult(5000);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/debug/LogAggregator.tsx");

export const report = function report(category) {
  let length;
  const tmp = _createForOfIteratorHelperLoose(HermesBuiltin.copyRestArgs());
  const iter = tmp();
  let iter2 = iter;
  let str = "";
  let str2 = "";
  if (!iter.done) {
    while (true) {
      let value = iter2.value;
      let tmp2 = typeof value;
      if ("string" !== tmp2) {
        if ("number" !== tmp2) {
          if ("boolean" !== tmp2) {
            let _Error = Error;
            if (value instanceof Error) {
              let text = `${value.message + "\n" + value.stack + " "}`;
            } else {
              let _JSON = JSON;
              text = `${JSON.stringify(value) + " "}`;
            }
          }
          let iter3 = tmp();
          str = text;
          iter2 = iter3;
          str2 = text;
          if (iter3.done) {
            break;
          }
        }
      }
      text = `${str}${value} `;
    }
  }
  if ("string" === typeof category) {
    let obj = {};
    const _Date2 = Date;
    obj.time = Date.now();
    obj.category = category;
    obj.message = str2;
    importDefaultResult.push(obj);
  } else {
    obj = {};
    const _Date = Date;
    obj.time = Date.now();
    ({ name: obj.category, timing: obj.timing } = category);
    obj.message = str2;
    importDefaultResult.push(obj);
  }
  if (importDefaultResult.length > 5000) {
    do {
      let tmp8 = closure_0;
      let arr1 = closure_0.shift();
      length = closure_0.length;
    } while (length > 5000);
  }
};
export const clear = function clear() {
  importDefaultResult.clear();
};
export const stringify = function stringify(arg0) {
  const found = arg0.toArray().filter((category) => {
    let hasItem = null == category;
    if (!hasItem) {
      hasItem = category.includes(category.category);
    }
    return hasItem;
  });
  const mapped = found.map((time) => {
    const items = [];
    items.push(new Date(time.time).toISOString());
    if (null != time.timing) {
      items.push(time.timing);
    }
    items.push(time.category, time.message);
    return items.join(" -> ");
  });
  return mapped.join("\n");
};
export const getAllForDebugPanel = function getAllForDebugPanel(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const toArrayResult = importDefaultResult.toArray();
  if (flag) {
    let reversed = toArrayResult.reverse();
  } else {
    reversed = toArrayResult;
  }
  return reversed;
};
