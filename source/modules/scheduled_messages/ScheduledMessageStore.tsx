// Module ID: 12535
// Function ID: 96292
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12535 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
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
function reset() {
  let closure_8 = {};
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = false;
let closure_6 = {};
const set = new Set();
let closure_8 = {};
let tmp3 = (Store) => {
  class ScheduledMessageStore {
    constructor() {
      self = this;
      tmp = ScheduledMessageStore(this, ScheduledMessageStore);
      obj = closure_3(ScheduledMessageStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ScheduledMessageStore;
  callback2(ScheduledMessageStore, Store);
  let obj = {
    key: "getMessagesPendingDeletion",
    value() {
      return closure_7;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getScheduledMessagesForInbox",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPendingScheduledMessage",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "loading",
    get() {
      return closure_5;
    }
  };
  return callback(ScheduledMessageStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp3.displayName = "scheduledMessageStore";
tmp3 = new tmp3(importDefault(dependencyMap[6]), {
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function handleScheduledMessageCreateSuccess(arg0) {
    let channelId;
    let scheduledMessageSend;
    ({ channelId, scheduledMessageSend } = arg0);
    let obj = {};
    const merged = Object.assign(closure_6);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
    closure_6 = obj;
    obj = {};
    const merged1 = Object.assign(closure_8);
    closure_8 = obj;
    delete r0[r1];
  },
  SCHEDULED_MESSAGES_UPDATE_SUCCESS: function handleScheduledMessageUpdateSuccess(scheduledMessageSend) {
    scheduledMessageSend = scheduledMessageSend.scheduledMessageSend;
    const obj = {};
    const merged = Object.assign(closure_6);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
    closure_6 = obj;
  },
  SCHEDULED_MESSAGES_DELETE_START: function handleScheduledMessageDeleteStart(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(set);
      set.add(scheduledMessageId);
    }
  },
  SCHEDULED_MESSAGES_DELETE_SUCCESS: function handleScheduledMessageDeleteSuccess(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      const _Set = Set;
      const set = new Set(set);
      set.delete(scheduledMessageId);
      const obj = {};
      const merged = Object.assign(closure_6);
      closure_6 = obj;
      delete r0[r1];
    } else {
      return false;
    }
  },
  SCHEDULED_MESSAGES_DELETE_FAILURE: function handleScheduledMessageDeleteFailure(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      const _Set = Set;
      const set = new Set(set);
      set.delete(scheduledMessageId);
    } else {
      return false;
    }
  },
  FETCH_SCHEDULED_MESSAGES: function handleFetchScheduledMessages(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_5 = true;
    }
  },
  FETCH_SCHEDULED_MESSAGES_SUCCESS: function handleFetchScheduledMessagesSuccess(messages) {
    let done;
    let closure_6 = {};
    const tmp = _createForOfIteratorHelperLoose(messages.messages);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_6;
        closure_6[value.scheduledMessageId] = value;
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    let closure_5 = false;
  },
  FETCH_SCHEDULED_MESSAGES_FAILURE: function handleFetchScheduledMessagesFailure(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let closure_5 = false;
    }
  },
  CREATE_PENDING_SCHEDULED_MESSAGE: function handleCreatePendingScheduledMessage(channelId) {
    channelId = channelId.channelId;
    const obj = {};
    const merged = Object.assign(closure_8);
    obj[channelId] = { channelId, scheduledTimestamp: channelId.scheduledTimestamp };
    closure_8 = obj;
  },
  DELETE_PENDING_SCHEDULED_MESSAGE: function handleDeletePendingScheduledMessage(arg0) {
    const merged = Object.assign(closure_8);
    closure_8 = {};
    delete r0[r1];
  },
  LOGOUT: reset,
  CONNECTION_OPEN: reset
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/scheduled_messages/ScheduledMessageStore.tsx");

export default tmp3;
