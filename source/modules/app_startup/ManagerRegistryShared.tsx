// Module ID: 16466
// Function ID: 127224
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: initialize

// Module 16466 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
    if (tmp) {
      importDefault = tmp;
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
function validateInDevMode(arg0, arg1) {

}
function populateMap(actions) {
  let iter2;
  actions = actions.actions;
  if (null == actions) {
    actions = [];
  }
  let obj = actions;
  if (tmp) {
    let tmp2 = actions;
    if (!actions.includes("POST_CONNECTION_OPEN")) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(actions, 0);
      items[arraySpreadResult] = "POST_CONNECTION_OPEN";
      const sum = arraySpreadResult + 1;
      tmp2 = items;
    }
    obj = tmp2;
  }
  let tmp7 = obj;
  if (actions.loadRightBeforeConnectionOpen) {
    let tmp8 = obj;
    if (!obj.includes("CONNECTION_OPEN")) {
      const items1 = [];
      arraySpreadResult = HermesBuiltin.arraySpread(obj, 0);
      items1[arraySpreadResult] = "CONNECTION_OPEN";
      const sum1 = arraySpreadResult + 1;
      tmp8 = items1;
    }
    tmp7 = tmp8;
  }
  const tmp13 = _createForOfIteratorHelperLoose(tmp7);
  let iter = tmp13();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp14 = closure_2;
      if (!(value in closure_2)) {
        let tmp15 = closure_2;
        closure_2[value] = [];
      }
      let tmp16 = closure_2;
      let arr4 = closure_2[value];
      let arr = arr4.push(actions);
      iter2 = tmp13();
      iter = iter2;
    } while (!iter2.done);
  }
}
function handleAction(type) {
  let tmp = "CONNECTION_OPEN" !== type.type;
  if (tmp) {
    tmp = "OVERLAY_INITIALIZE" !== type.type;
  }
  if (!tmp) {
    let closure_3 = true;
  }
  if (type.type in closure_2) {
    const items = [];
    const tmp4 = _createForOfIteratorHelperLoose(closure_2[type.type]);
    let iter = tmp4();
    if (!iter.done) {
      while (true) {
        let value = iter.value;
        let tmp5 = closure_3;
        if (!closure_3) {
          if (value.neverLoadBeforeConnectionOpen) {
            let arr = items.push(value);
          }
          let iter2 = tmp4();
          iter = iter2;
          if (iter2.done) {
            break;
          }
        }
        let inlineRequireResult = value.inlineRequire();
        let initializeResult = inlineRequireResult.initialize();
      }
    }
    if (items.length > 0) {
      closure_2[type.type] = items;
    } else {
      type = type.type;
      delete r4[r3];
    }
  }
  return false;
}
new Set([452933887, 486480895, 520035839]);
let closure_2 = {};
let closure_3 = false;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/app_startup/ManagerRegistryShared.tsx");

export const initialize = function initialize(obj) {
  for (const key10004 in arg0) {
    let tmp2 = key10004;
    let tmp3 = arg0[key10004];
    let tmp4 = closure_6;
    let tmp5 = closure_6(undefined, tmp3);
    let tmp6 = closure_7;
    let tmp7 = closure_7(tmp3);
  }
  importDefault(dependencyMap[0]).addInterceptor(handleAction);
};
