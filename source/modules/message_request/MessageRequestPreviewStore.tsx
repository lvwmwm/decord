// Module ID: 11629
// Function ID: 90286
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1849, 5604, 5605, 4351, 566, 686, 2]

// Module 11629 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

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
function isMessagePreviewEnabledForChannel(id) {
  let isMessageRequestResult = messageRequest.isMessageRequest(id);
  if (!isMessageRequestResult) {
    isMessageRequestResult = spam.isSpam(id);
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
        let obj = require(4351) /* createMinimalMessageRecord */;
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
let closure_10 = {};
let set = new Set();
let tmp3 = ((Store) => {
  class MessageRequestPreviewStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, MessageRequestPreviewStore);
      obj = outer1_5(MessageRequestPreviewStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
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
  callback2(MessageRequestPreviewStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_7);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "shouldLoadMessageRequestPreview",
    value(arg0) {
      return !outer1_11.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessageRequestPreview",
    value(arg0) {
      if (!(arg0 in outer1_10)) {
        outer1_10[arg0] = { loaded: false, error: false, message: null };
      }
      return outer1_10[arg0];
    }
  };
  items[2] = obj;
  return callback(MessageRequestPreviewStore, items);
})(require("initialize").Store);
tmp3.displayName = "MessageRequestPreviewStore";
tmp3 = new tmp3(require("dispatcher"), {
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
    const tmp3 = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp4 = isMessagePreviewEnabledForChannel;
        if (!isMessagePreviewEnabledForChannel(value.id)) {
          let tmp5 = set;
          let deleteResult = set.delete(value.id);
          let tmp7 = closure_10;
          let id = value.id;
          delete tmp2[tmp];
        }
        iter2 = tmp3();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    set.delete(channel.channel.id);
    delete tmp2[tmp];
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
          obj["message"] = require(4351) /* createMinimalMessageRecord */.updateMessageRecord(tmp2.message, message.message);
          table[channel_id] = obj;
          const obj2 = require(4351) /* createMinimalMessageRecord */;
        }
        tmp3 = tmp4;
      }
      return tmp3;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    if (isMessagePreviewEnabledForChannel(channelId.channelId)) {
      closure_10[channelId.channelId] = { loaded: true, error: false, message: null };
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
    const item = supplementalData.forEach((channel_id) => {
      outer1_16(channel_id.channel_id, channel_id.message_preview);
      set.delete(channel_id.channel_id);
    });
    const arr = Array.from(set);
    if (0 < arr.length) {
      do {
        let tmp3 = storeMessagePreview;
        let tmp4 = storeMessagePreview(arr[num], null);
        num = num + 1;
        length = arr.length;
      } while (num < length);
    }
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function handleLoadMessageRequestsSupplementalDataError(requestedChannelIds) {
    requestedChannelIds = requestedChannelIds.requestedChannelIds;
    const item = requestedChannelIds.forEach((arg0) => {
      outer1_16(arg0, null, true);
    });
  }
});
let result = set.fileFinishedImporting("modules/message_request/MessageRequestPreviewStore.tsx");

export default tmp3;
