// Module ID: 12656
// Function ID: 98498
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 12656 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import closure_1 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let dispatcher = iterable;
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
      dispatcher = tmp;
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
function reset() {
  let closure_8 = {};
}
let c5 = false;
let closure_6 = {};
let set = new Set();
let closure_8 = {};
let tmp3 = ((Store) => {
  class ScheduledMessageStore {
    constructor() {
      self = this;
      tmp = ScheduledMessageStore(this, ScheduledMessageStore);
      obj = outer1_3(ScheduledMessageStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ScheduledMessageStore, Store);
  let obj = {
    key: "getMessagesPendingDeletion",
    value() {
      return outer1_7;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getScheduledMessagesForInbox",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPendingScheduledMessage",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "loading",
    get() {
      return outer1_5;
    }
  };
  return callback(ScheduledMessageStore, items);
})(require("initialize").Store);
tmp3.displayName = "scheduledMessageStore";
tmp3 = new tmp3(require("dispatcher"), {
  SCHEDULED_MESSAGES_CREATE_SUCCESS: function handleScheduledMessageCreateSuccess(arg0) {
    let channelId;
    let scheduledMessageSend;
    ({ channelId, scheduledMessageSend } = arg0);
    let obj = {};
    const merged = Object.assign(obj);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
    obj = {};
    const merged1 = Object.assign(obj);
    delete tmp[tmp2];
  },
  SCHEDULED_MESSAGES_UPDATE_SUCCESS: function handleScheduledMessageUpdateSuccess(scheduledMessageSend) {
    scheduledMessageSend = scheduledMessageSend.scheduledMessageSend;
    const obj = {};
    const merged = Object.assign(obj);
    obj[scheduledMessageSend.scheduledMessageId] = scheduledMessageSend;
  },
  SCHEDULED_MESSAGES_DELETE_START: function handleScheduledMessageDeleteStart(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      set.add(scheduledMessageId);
    }
  },
  SCHEDULED_MESSAGES_DELETE_SUCCESS: function handleScheduledMessageDeleteSuccess(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      const _Set = Set;
      set = new Set(set);
      set.delete(scheduledMessageId);
      const obj = {};
      const merged = Object.assign(obj);
      delete tmp[tmp2];
    } else {
      return false;
    }
  },
  SCHEDULED_MESSAGES_DELETE_FAILURE: function handleScheduledMessageDeleteFailure(scheduledMessageId) {
    scheduledMessageId = scheduledMessageId.scheduledMessageId;
    if (set.has(scheduledMessageId)) {
      const _Set = Set;
      set = new Set(set);
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
      let c5 = true;
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
    let c5 = false;
  },
  FETCH_SCHEDULED_MESSAGES_FAILURE: function handleFetchScheduledMessagesFailure(arg0) {
    if (arg0 == null) {
      HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
      throw undefined;
    } else {
      let c5 = false;
    }
  },
  CREATE_PENDING_SCHEDULED_MESSAGE: function handleCreatePendingScheduledMessage(channelId) {
    channelId = channelId.channelId;
    const obj = {};
    const merged = Object.assign(obj);
    obj[channelId] = { channelId, scheduledTimestamp: channelId.scheduledTimestamp };
  },
  DELETE_PENDING_SCHEDULED_MESSAGE: function handleDeletePendingScheduledMessage(arg0) {
    const obj = {};
    const merged = Object.assign(obj);
    delete tmp[tmp2];
  },
  LOGOUT: reset,
  CONNECTION_OPEN: reset
});
let result = set.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageStore.tsx");

export default tmp3;
