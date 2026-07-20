// Module ID: 11611
// Function ID: 90189
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11611 (_isNativeReflectConstruct)
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
function isMessagePreviewEnabledForChannel(channelId) {
  let isMessageRequestResult = messageRequest.isMessageRequest(channelId);
  if (!isMessageRequestResult) {
    isMessageRequestResult = spam.isSpam(channelId);
  }
  return isMessageRequestResult;
}
function storeMessagePreview(channel_id, message) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (isMessagePreviewEnabledForChannel(channel_id)) {
    if (null == message) {
      let messageRecord = null;
      if (null != message) {
        let obj = message(dependencyMap[8]);
        messageRecord = obj.createMessageRecord(message);
      }
      obj = { loaded: true, error: flag, message: messageRecord };
      closure_10[channel_id] = obj;
    } else {
      channel_id = undefined;
      if (null != message) {
        channel_id = message.channel_id;
      }
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = {};
const set = new Set();
let tmp3 = (Store) => {
  class MessageRequestPreviewStore {
    constructor() {
      self = this;
      tmp = closure_2(this, MessageRequestPreviewStore);
      obj = closure_5(MessageRequestPreviewStore);
      tmp2 = closure_4;
      if (closure_12()) {
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
  const arg1 = MessageRequestPreviewStore;
  callback2(MessageRequestPreviewStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9, closure_7);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "shouldLoadMessageRequestPreview",
    value(arg0) {
      return !set.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessageRequestPreview",
    value(arg0) {
      if (!(arg0 in closure_10)) {
        closure_10[arg0] = {};
      }
      return closure_10[arg0];
    }
  };
  items[2] = obj;
  return callback(MessageRequestPreviewStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp3.displayName = "MessageRequestPreviewStore";
tmp3 = new tmp3(importDefault(dependencyMap[10]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_10 = {};
    set.clear();
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    if (isMessagePreviewEnabledForChannel(channel.id)) {
      set.add(channel.id);
    }
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_15;
        if (!closure_15(value.id)) {
          let tmp3 = closure_11;
          let deleteResult = closure_11.delete(value.id);
          let tmp5 = closure_10;
          let id = value.id;
          delete r5[r1];
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    set.delete(channel.channel.id);
    delete r1[r0];
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    if (isPushNotification.isPushNotification) {
      return false;
    } else {
      storeMessagePreview(isPushNotification.message.channel_id, isPushNotification.message);
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const channel_id = message.message.channel_id;
    if (null == channel_id) {
      return false;
    } else {
      let tmp3 = null != tmp2;
      if (tmp3) {
        if (null != tmp2.message) {
          const obj = {};
          const merged = Object.assign(tmp2);
          obj["message"] = arg1(dependencyMap[8]).updateMessageRecord(tmp2.message, message.message);
          closure_10[channel_id] = obj;
          const obj2 = arg1(dependencyMap[8]);
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    if (isMessagePreviewEnabledForChannel(channelId.channelId)) {
      closure_10[channelId.channelId] = { -342011283: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, 1399185016: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986, -78206406: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005258204118426939 };
    } else {
      return false;
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
    let length;
    supplementalData = supplementalData.supplementalData;
    const items = [...supplementalData.requestedChannelIds];
    let num = 0;
    const set = new Set(items);
    const arg1 = set;
    const item = supplementalData.forEach((channel_id) => {
      callback(channel_id.channel_id, channel_id.message_preview);
      set.delete(channel_id.channel_id);
    });
    const arr = Array.from(set);
    if (0 < arr.length) {
      do {
        let tmp3 = closure_16;
        let tmp4 = closure_16(arr[num], null);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function handleLoadMessageRequestsSupplementalDataError(requestedChannelIds) {
    requestedChannelIds = requestedChannelIds.requestedChannelIds;
    const item = requestedChannelIds.forEach((arg0) => {
      callback(arg0, null, true);
    });
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/message_request/MessageRequestPreviewStore.tsx");

export default tmp3;
