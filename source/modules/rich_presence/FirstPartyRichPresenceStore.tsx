// Module ID: 10434
// Function ID: 80490
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10434 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function updateActivities() {
  let iter2;
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(items);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let activity = value.getActivity();
      if (null != activity) {
        let arr = items.push(activity);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  let flag = !importDefault(dependencyMap[6])(items, closure_8);
  if (flag) {
    closure_8 = items;
    flag = true;
  }
  return flag;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const items = [importDefault(dependencyMap[5])];
let closure_8 = [];
let tmp2 = (Store) => {
  class FirstPartyRichPresenceStore {
    constructor() {
      self = this;
      tmp = closure_2(this, FirstPartyRichPresenceStore);
      obj = closure_5(FirstPartyRichPresenceStore);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = FirstPartyRichPresenceStore;
  callback2(FirstPartyRichPresenceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.syncWith(closure_7, closure_12);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getActivities",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  return callback(FirstPartyRichPresenceStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "FirstPartyRichPresenceStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]));
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/rich_presence/FirstPartyRichPresenceStore.tsx");

export default tmp2;
