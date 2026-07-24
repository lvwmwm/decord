// Module ID: 13525
// Function ID: 104030
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 99, 100, 5, 57, 3768, 1194, 1348, 4349, 653, 13526, 3, 664, 587, 3712, 3800, 6994, 6691, 686, 10926, 9898, 1934, 9910, 4803, 4530, 2]

// Module 13525 (_createForOfIteratorHelperLoose)
import _classPrivateFieldKey from "_classPrivateFieldKey";
import asyncGeneratorStep from "asyncGeneratorStep";
import timestamp from "timestamp";
import Storage from "Storage";
import closure_7 from "t";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import closure_9 from "_classPrivateFieldBase";
import _slicedToArray from "_slicedToArray";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { MessageStates } from "ME";
import createLock from "createLock";
import importDefaultResult1 from "_getPrototypeOf";
import tmp5 from "LifecycleManager";
import importDefaultResult from "_classPrivateFieldKey";

let require = arg1;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _getKeyForFileId(arg0) {
  let first;
  const entries = Object.entries(_getMessages());
  let num = 0;
  if (0 < entries.length) {
    while (true) {
      let tmp = callback4;
      let tmp2 = callback4(entries[num], 2);
      let file = tmp2[1].file;
      let id;
      first = tmp2[0];
      if (null != file) {
        id = file.id;
      }
      if (id === arg0) {
        break;
      } else {
        num = num + 1;
      }
    }
    return first;
  }
}
function cacheSendingMessage(arg0) {
  let _slicedToArray;
  let _callSuper;
  let _classPrivateFieldKey;
  let asyncGeneratorStep;
  let timestamp;
  let Storage;
  let closure_7;
  let _classPrivateFieldBase;
  let closure_9;
  let dependencyMap;
  let importDefault;
  let message;
  let require;
  ({ key: require, message, file: importDefault, sendMessageOptions: dependencyMap } = arg0);
  ({ content: _classPrivateFieldKey, id: asyncGeneratorStep, channel_id: timestamp, tts: Storage, nonce: closure_7, timestamp: _classPrivateFieldBase, type: closure_9, flags: _slicedToArray, state: _callSuper } = message);
  return createLock(() => {
    const tmp2 = outer1_21(closure_0);
    let obj = { content: _classPrivateFieldKey, type: closure_9 };
    if (null != _callSuper) {
      let SENDING = _callSuper;
    } else {
      SENDING = outer1_15.SENDING;
    }
    obj.state = SENDING;
    obj.channel_id = timestamp;
    obj.tts = Storage;
    obj.id = asyncGeneratorStep;
    obj.nonce = closure_7;
    if ("string" === typeof _classPrivateFieldBase) {
      let toISOStringResult = _classPrivateFieldBase;
    } else {
      toISOStringResult = _classPrivateFieldBase.toISOString();
    }
    obj.timestamp = toISOStringResult;
    obj.flags = _slicedToArray;
    if (null != closure_1) {
      let file = closure_1;
    } else if (null != tmp2) {
      file = tmp2.file;
    }
    obj.file = file;
    if (null != closure_2) {
      obj = {};
      const tmp9 = null != closure_2 ? closure_2 : {};
      const merged = Object.assign(tmp9);
    } else {
      let sendMessageOptions;
      if (null != tmp2) {
        sendMessageOptions = tmp2.sendMessageOptions;
      }
      obj.sendMessageOptions = sendMessageOptions;
      outer1_22(closure_0, obj);
    }
  });
}
function removeCachedMessage(arg0) {
  let closure_0 = arg0;
  return createLock(() => outer1_22(closure_0, null));
}
function removeCachedMessageWithMessageId(arg0) {
  let closure_0 = arg0;
  return createLock(() => {
    const entries = Object.entries(outer1_20());
    let num = 0;
    let first;
    if (0 < entries.length) {
      const tmp4 = outer1_10(entries[num], 2);
      first = tmp4[0];
      while (tmp4[1].id !== closure_0) {
        num = num + 1;
        if (num >= entries.length) {
          break;
        }
      }
    }
    if (null != first) {
      outer1_22(first, null);
    }
  });
}
function updateCachedMessage(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return createLock(() => {
    const tmp = outer1_21(closure_0);
    if (null != tmp) {
      const obj = {};
      const merged = Object.assign(tmp);
      const merged1 = Object.assign(closure_1);
      outer1_22(closure_0, obj);
    }
  });
}
function getAllCachedMessages() {
  return createLock(_getMessages);
}
function messageTimestampIsInInterval(arg0, arg1) {
  if (null != arg0) {
    const tmp3 = importDefault(3712)();
    const tmp4 = importDefault(3712)(arg0);
    return require(3800) /* resetCache */.isWithinInterval(tmp3, tmp4, arg1);
  } else {
    return false;
  }
}
function createFailedMessage(channel_id) {
  let content;
  let file;
  let state;
  let tts;
  channel_id = channel_id.channel_id;
  ({ content, tts, state } = channel_id);
  let obj = { channelId: channel_id, content, tts, state: MessageStates.SEND_FAILED };
  const tmp = file(6994)(obj);
  const require = tmp;
  ({ timestamp: tmp.timestamp, file } = channel_id);
  obj = { isHydratingExpiredPendingMessage: state === MessageStates.SENDING };
  file(6691).receiveMessage(channel_id, tmp, true, obj);
  if (null != file) {
    file(686).wait(() => file(outer1_2[23]).restoreFailedUpload(tmp.id, file));
    const obj4 = file(686);
  }
}
function resumeSendingMessage() {
  return _resumeSendingMessage(...arguments);
}
function _resumeSendingMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  return obj(...arguments);
}
function _rehydrateFailedMessages() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  return obj(...arguments);
}
createLock = createLock.createLock();
importDefaultResult1 = new importDefaultResult1("LocalMessageCacheManager");
let closure_18 = 5 * require("set").Millis.MINUTE;
let closure_19 = 14 * require("set").Millis.DAY;
function _getMessages(arg0) {
  const Storage = require(587) /* Storage */.Storage;
  let obj = Storage.get("LocalMessageCacheManagerMessageCacheKey");
  if (null == obj) {
    obj = {};
  }
  return obj;
}
function _getMessage(arg0) {
  return _getMessages()[arg0];
}
function _writeMessage(arg0, id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  let channel_id;
  if (null != id) {
    channel_id = id.channel_id;
  }
  importDefaultResult1.verbose("_writeMessage", id, channel_id);
  const tmp7 = _getMessages();
  if (null != id) {
    const obj = {};
    const merged = Object.assign(id);
    const content = id.content;
    let str = "";
    if (null != content) {
      str = content;
    }
    obj["content"] = str;
    tmp7[arg0] = obj;
    importDefaultResult1.verbose("_writeMessage after write", tmp7[arg0].id, tmp7[arg0].channel_id);
  } else {
    delete tmp[tmp2];
  }
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set("LocalMessageCacheManagerMessageCacheKey", tmp7);
  return tmp7;
}
let closure_23 = require("_classPrivateFieldKey")("loadedChannels");
tmp5 = new tmp5();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/local_message_caching/LocalMessageCacheManager.native.tsx");

export default tmp5;
