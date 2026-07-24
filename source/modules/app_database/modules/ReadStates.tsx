// Module ID: 6722
// Function ID: 52275
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 1348, 4142, 3, 1882, 22, 21, 2]

// Module 6722 (_createForOfIteratorHelperLoose)
import timestamp from "timestamp";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import apply from "apply";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

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
importDefaultResult = new importDefaultResult("ReadStates");
let tmp4 = (() => {
  class ReadStates {
    constructor() {
      self = this;
      tmp = outer1_3(this, ReadStates);
      this.readStateVersion = null;
      this.actions = {
        CONNECTION_OPEN(arg0) {
              return self.handleConnectionOpen(arg0);
            },
        CHANNEL_PINS_ACK(arg0) {
              return self.handleReadStateAction(arg0);
            },
        MESSAGE_ACK(arg0) {
              return self.handleReadStateAction(arg0);
            },
        BACKGROUND_SYNC_FINISHED(messagesOnly) {
              if (!messagesOnly.messagesOnly) {
                self.handleWriteCaches(arg1, false);
              }
            },
        WRITE_CACHES(arg0, arg1) {
              return self.handleWriteCaches(arg1, true);
            }
      };
      return;
    }
  }
  let obj = { key: "getAll" };
  let closure_0 = callback(async (arg0) => {
    const nowResult = performance.now();
    const states = callback(ReadStates[6]).readStates(arg0);
    const arr = yield states.getMany();
    outer2_7.log("asynchronously loaded in " + performance.now() - nowResult + "ms (readStates: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAll() {
    return callback(...arguments);
  };
  let items = [obj, , , , ];
  obj = {
    key: "resetInMemoryState",
    value() {
      this.readStateVersion = null;
    }
  };
  items[1] = obj;
  obj = {
    key: "handleConnectionOpen",
    value(readState) {
      this.readStateVersion = readState.readState.version;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleReadStateAction",
    value(version) {
      if (null != this.readStateVersion) {
        if (null != version.version) {
          tmp.readStateVersion = version.version;
        } else {
          outer1_7.log("Received null read states version", version);
        }
      }
    }
  };
  items[4] = {
    key: "handleWriteCaches",
    value(arg0, arg1) {
      let iter2;
      const self = this;
      const allReadStates = outer1_6.getAllReadStates(false);
      if (arg1) {
        if (null != self.readStateVersion) {
          const _Object = Object;
          const keys = Object.keys(outer1_5.getMutablePrivateChannels());
          const _Set = Set;
          const set = new Set(keys);
          const sorted = callback(ReadStates[7])(keys).sort(callback(ReadStates[8]).compare);
          const obj10 = callback(ReadStates[7])(keys);
          const first = sorted.reverse().value()[0];
          let str = "0";
          if (null != first) {
            str = first;
          }
          const tmp3 = outer1_8(allReadStates);
          let iter = tmp3();
          let tmp4 = str;
          let str2 = "0";
          let str3 = "0";
          let tmp5 = str;
          if (!iter.done) {
            do {
              let value = iter.value;
              let tmp6 = str2;
              let tmp7 = tmp4;
              if (null != value._lastMessageId) {
                let tmp26 = callback;
                let tmp27 = ReadStates;
                let obj12 = callback(ReadStates[8]);
                let _lastMessageId = str2;
                if (1 === obj12.compare(value._lastMessageId, `0`)) {
                  _lastMessageId = value._lastMessageId;
                }
                let hasItem = set.has(value.channelId);
                if (hasItem) {
                  let tmp9 = callback;
                  let tmp10 = ReadStates;
                  let obj = callback(ReadStates[8]);
                  hasItem = 1 === obj.compare(value._lastMessageId, tmp4);
                }
                let _lastMessageId2 = tmp4;
                if (hasItem) {
                  _lastMessageId2 = value._lastMessageId;
                }
                tmp7 = _lastMessageId2;
                tmp6 = _lastMessageId;
              }
              iter2 = tmp3();
              str2 = tmp6;
              tmp4 = tmp7;
              iter = iter2;
              str3 = tmp6;
              tmp5 = tmp7;
            } while (!iter2.done);
          }
          let obj1 = callback(ReadStates[6]);
          const result = obj1.nonGuildVersionsTransaction(arg0);
          obj = { id: "highest_last_message_id", versionString: str3 };
          const items = [obj, , ];
          obj = { id: "private_channels_version", versionString: tmp5 };
          items[1] = obj;
          obj1 = { id: "read_state_version", version: self.readStateVersion };
          items[2] = obj1;
          result.putAll(items);
          const iter3 = sorted.reverse();
        }
      }
      const statesTransaction = callback(ReadStates[6]).readStatesTransaction(arg0);
      statesTransaction.delete();
      const item = allReadStates.forEach((type) => statesTransaction.put("" + type.type + "-" + type.channelId, type));
    }
  };
  return callback2(ReadStates, items);
})();
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/ReadStates.tsx");

export default tmp4;
