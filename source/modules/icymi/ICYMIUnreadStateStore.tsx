// Module ID: 8312
// Function ID: 65797
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8312 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = 7 * importDefault(dependencyMap[5]).Millis.DAY;
let closure_8 = { readIdToTimestampMap: {} };
let tmp2 = (DeviceSettingsStore) => {
  class ICYMIUnreadStateStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ICYMIUnreadStateStore);
      obj = closure_5(ICYMIUnreadStateStore);
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
  const arg1 = ICYMIUnreadStateStore;
  callback2(ICYMIUnreadStateStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(readIdToTimestampMap) {
      let done;
      if (null != readIdToTimestampMap) {
        if (null != readIdToTimestampMap.readIdToTimestampMap) {
          const obj = { readIdToTimestampMap: readIdToTimestampMap.readIdToTimestampMap };
        }
        let closure_8 = { readIdToTimestampMap: {} };
        const _Date = Date;
        let closure_0 = Date.now() - closure_7;
        const _Object = Object;
        const keys = Object.keys(closure_8.readIdToTimestampMap);
        const tmp6 = callback4(keys.filter((arg0) => readIdToTimestampMap.readIdToTimestampMap[arg0] < closure_0));
        let iter = tmp6();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp7 = closure_8;
            readIdToTimestampMap = closure_8.readIdToTimestampMap;
            delete r1[r5];
            let iter2 = tmp6();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getReadTimestamp",
    value(arg0) {
      return closure_8.readIdToTimestampMap[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return closure_8;
    }
  };
  return callback(ICYMIUnreadStateStore, items);
}(importDefault(dependencyMap[8]).DeviceSettingsStore);
tmp2.displayName = "ICYMIUnreadStateStore";
tmp2.persistKey = "ICYMIUnreadStateStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  ICYMI_ACK_ITEMS: function handleTabAck(arg0) {
    let items;
    ({ items, override: closure_0 } = arg0);
    const item = items.forEach((id) => {
      let tmp = null != id;
      if (tmp) {
        tmp = null == closure_8.readIdToTimestampMap[id.id] || closure_0;
        const tmp3 = null == closure_8.readIdToTimestampMap[id.id] || closure_0;
      }
      if (tmp) {
        closure_8.readIdToTimestampMap[id.id] = id.timestamp;
      }
    });
  },
  LOAD_ICYMI_DEHYDRATED: function handleLoadDehydrated(items) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(items.items);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp3 = closure_0;
        let tmp4 = closure_1;
        let tmp5 = tmp2;
        if (value.type === closure_0(closure_1[6]).ICYMIItemTypes.MESSAGE) {
          let tmp11 = closure_8;
          let result = null != closure_8.readIdToTimestampMap[value.id];
          if (!result) {
            let message_context = value.data.message_context;
            let prop;
            if (null != message_context) {
              prop = message_context.external_content_application_id;
            }
            result = null != prop;
            let tmp2 = message_context;
          }
          if (!result) {
            let tmp8 = closure_0;
            let tmp9 = closure_1;
            let obj = closure_0(closure_1[7]);
            result = obj.isItemUnreadInChannel(value.data.channel_id, value.data.message_id);
          }
          tmp5 = tmp2;
          if (!result) {
            let tmp10 = closure_8;
            closure_8.readIdToTimestampMap[value.id] = 0;
            tmp5 = tmp2;
          }
        }
        iter3 = tmp();
        tmp2 = tmp5;
        iter2 = iter3;
      } while (!iter3.done);
    }
  },
  CLEAR_ICYMI_READ_STATES: function handleClearReadStates() {
    closure_8.readIdToTimestampMap = {};
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/icymi/ICYMIUnreadStateStore.tsx");

export default tmp2;
