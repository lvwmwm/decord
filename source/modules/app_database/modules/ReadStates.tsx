// Module ID: 6717
// Function ID: 52210
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6717 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("ReadStates");
let tmp4 = () => {
  class ReadStates {
    constructor() {
      f52221 = this;
      tmp = closure_3(this, ReadStates);
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
  const dependencyMap = ReadStates;
  let obj = { key: "getAll" };
  let closure_0 = callback(async (arg0) => {
    const nowResult = performance.now();
    const states = callback(closure_1[6]).readStates(arg0);
    const arr = yield states.getMany();
    closure_7.log("asynchronously loaded in " + performance.now() - nowResult + "ms (readStates: " + arr.length + ")");
    return arr;
  });
  obj.value = function getAll() {
    return callback(...arguments);
  };
  const items = [obj, , , , ];
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
          closure_7.log("Received null read states version", version);
        }
      }
    }
  };
  items[4] = {
    key: "handleWriteCaches",
    value(arg0, arg1) {
      let iter2;
      const self = this;
      const allReadStates = allReadStates.getAllReadStates(false);
      if (arg1) {
        if (null != self.readStateVersion) {
          const _Object = Object;
          const keys = Object.keys(mutablePrivateChannels.getMutablePrivateChannels());
          const _Set = Set;
          const set = new Set(keys);
          const sorted = callback(ReadStates[7])(keys).sort(callback(ReadStates[8]).compare);
          const obj10 = callback(ReadStates[7])(keys);
          const first = sorted.reverse().value()[0];
          let str = "0";
          if (null != first) {
            str = first;
          }
          const tmp3 = callback3(allReadStates);
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
                let tmp26 = closure_0;
                let tmp27 = closure_1;
                let obj12 = closure_0(closure_1[8]);
                let _lastMessageId = str2;
                if (1 === obj12.compare(value._lastMessageId, `0`)) {
                  _lastMessageId = value._lastMessageId;
                }
                let hasItem = set.has(value.channelId);
                if (hasItem) {
                  let tmp9 = closure_0;
                  let tmp10 = closure_1;
                  let obj = closure_0(closure_1[8]);
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
      const callback = statesTransaction;
      statesTransaction.delete();
      const item = allReadStates.forEach((type) => statesTransaction.put("" + type.type + "-" + type.channelId, type));
    }
  };
  return callback2(ReadStates, items);
}();
tmp4 = new tmp4();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_database/modules/ReadStates.tsx");

export default tmp4;
