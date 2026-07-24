// Module ID: 8363
// Function ID: 66074
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 664, 7086, 8364, 566, 686, 2]

// Module 8363 (_isNativeReflectConstruct)
import MessageEmbedTypes from "MessageEmbedTypes";
import generateHydrationId from "generateHydrationId";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
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
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
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
let closure_7 = 7 * require("set").Millis.DAY;
let closure_8 = { readIdToTimestampMap: {} };
let tmp2 = ((DeviceSettingsStore) => {
  class ICYMIUnreadStateStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ICYMIUnreadStateStore);
      obj = outer1_5(ICYMIUnreadStateStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ICYMIUnreadStateStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(readIdToTimestampMap) {
      let done;
      if (null != readIdToTimestampMap) {
        if (null != readIdToTimestampMap.readIdToTimestampMap) {
          const obj = { readIdToTimestampMap: readIdToTimestampMap.readIdToTimestampMap };
        }
        const outer1_8 = { readIdToTimestampMap: {} };
        const _Date = Date;
        let closure_0 = Date.now() - outer1_7;
        const _Object = Object;
        const keys = Object.keys(outer1_8.readIdToTimestampMap);
        const tmp8 = outer1_10(keys.filter((arg0) => outer2_8.readIdToTimestampMap[arg0] < closure_0));
        let iter = tmp8();
        if (!iter.done) {
          do {
            let value = iter.value;
            let tmp9 = outer1_8;
            readIdToTimestampMap = outer1_8.readIdToTimestampMap;
            delete tmp[tmp2];
            let iter2 = tmp8();
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
      return outer1_8.readIdToTimestampMap[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAgnosticState",
    value() {
      return outer1_8;
    }
  };
  return callback(ICYMIUnreadStateStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "ICYMIUnreadStateStore";
tmp2.persistKey = "ICYMIUnreadStateStore";
tmp2 = new tmp2(require("dispatcher"), {
  ICYMI_ACK_ITEMS: function handleTabAck(arg0) {
    let items;
    let require;
    ({ items, override: require } = arg0);
    const item = items.forEach((id) => {
      let tmp = null != id;
      if (tmp) {
        tmp = null == outer1_8.readIdToTimestampMap[id.id] || closure_0;
        const tmp3 = null == outer1_8.readIdToTimestampMap[id.id] || closure_0;
      }
      if (tmp) {
        outer1_8.readIdToTimestampMap[id.id] = id.timestamp;
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
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let tmp5 = tmp2;
        if (value.type === require(7086) /* MessageEmbedTypes */.ICYMIItemTypes.MESSAGE) {
          let tmp11 = closure_8;
          let result = null != closure_8.readIdToTimestampMap[value.id];
          if (!result) {
            let message_context = value.data.message_context;
            let prop;
            if (null != message_context) {
              prop = message_context.external_content_application_id;
            }
            result = null != prop;
            tmp2 = message_context;
          }
          if (!result) {
            let tmp8 = require;
            let tmp9 = dependencyMap;
            let obj = require(8364) /* generateHydrationId */;
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/icymi/ICYMIUnreadStateStore.tsx");

export default tmp2;
