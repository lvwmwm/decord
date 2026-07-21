// Module ID: 13349
// Function ID: 101492
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 13349 (_createForOfIteratorHelperLoose)
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
  let message;
  ({ key: closure_0, message, file: closure_1, sendMessageOptions: closure_2 } = arg0);
  ({ content: closure_3, id: closure_4, channel_id: closure_5, tts: closure_6, nonce: closure_7, timestamp: closure_8, type: closure_9, flags: closure_10, state: closure_11 } = message);
  return callback5(() => {
    const tmp2 = callback(closure_0);
    let obj = { content: closure_3, type: closure_9 };
    if (null != closure_11) {
      let SENDING = closure_11;
    } else {
      SENDING = constants.SENDING;
    }
    obj.state = SENDING;
    obj.channel_id = closure_5;
    obj.tts = closure_6;
    obj.id = closure_4;
    obj.nonce = closure_7;
    if ("string" === typeof closure_8) {
      let toISOStringResult = closure_8;
    } else {
      toISOStringResult = closure_8.toISOString();
    }
    obj.timestamp = toISOStringResult;
    obj.flags = closure_10;
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
      closure_22(closure_0, obj);
    }
  });
}
function removeCachedMessage(arg0) {
  const arg1 = arg0;
  return callback5(() => callback(arg0, null));
}
function removeCachedMessageWithMessageId(arg0) {
  const arg1 = arg0;
  return callback5(() => {
    const entries = Object.entries(callback2());
    let num = 0;
    let first;
    if (0 < entries.length) {
      const tmp4 = callback(entries[num], 2);
      first = tmp4[0];
      while (tmp4[1].id !== arg0) {
        num = num + 1;
        if (num >= entries.length) {
          break;
        }
      }
    }
    if (null != first) {
      callback3(first, null);
    }
  });
}
function updateCachedMessage(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return callback5(() => {
    const tmp = callback(arg0);
    if (null != tmp) {
      const obj = {};
      const merged = Object.assign(tmp);
      const merged1 = Object.assign(arg1);
      callback2(arg0, obj);
    }
  });
}
function getAllCachedMessages() {
  return callback5(_getMessages);
}
function messageTimestampIsInInterval(arg0, arg1) {
  if (null != arg0) {
    const tmp3 = importDefault(dependencyMap[18])();
    const tmp4 = importDefault(dependencyMap[18])(arg0);
    return arg1(dependencyMap[19]).isWithinInterval(tmp3, tmp4, arg1);
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
  const tmp = importDefault(dependencyMap[20])(obj);
  const arg1 = tmp;
  ({ timestamp: tmp.timestamp, file } = channel_id);
  const importDefault = file;
  obj = { isHydratingExpiredPendingMessage: state === MessageStates.SENDING };
  importDefault(dependencyMap[21]).receiveMessage(channel_id, tmp, true, obj);
  if (null != file) {
    importDefault(dependencyMap[22]).wait(() => file(closure_2[23]).restoreFailedUpload(tmp.id, file));
    const obj4 = importDefault(dependencyMap[22]);
  }
}
function resumeSendingMessage() {
  return _resumeSendingMessage(...arguments);
}
function _resumeSendingMessage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _resumeSendingMessage = obj;
  return obj(...arguments);
}
function _rehydrateFailedMessages() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _rehydrateFailedMessages = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
let closure_14 = importDefault(dependencyMap[12]);
const MessageStates = arg1(dependencyMap[13]).MessageStates;
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_16 = arg1(dependencyMap[14]).createLock();
let importDefaultResult1 = importDefault(dependencyMap[15]);
importDefaultResult1 = new importDefaultResult1("LocalMessageCacheManager");
let closure_18 = 5 * importDefault(dependencyMap[16]).Millis.MINUTE;
let closure_19 = 14 * importDefault(dependencyMap[16]).Millis.DAY;
function _getMessages(arg0) {
  const Storage = arg1(dependencyMap[17]).Storage;
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
  const tmp5 = _getMessages();
  if (null != id) {
    const obj = {};
    const merged = Object.assign(id);
    const content = id.content;
    let str = "";
    if (null != content) {
      str = content;
    }
    obj["content"] = str;
    tmp5[arg0] = obj;
    importDefaultResult1.verbose("_writeMessage after write", tmp5[arg0].id, tmp5[arg0].channel_id);
  } else {
    delete r0[r2];
  }
  const Storage = id(dependencyMap[17]).Storage;
  const result = Storage.set("LocalMessageCacheManagerMessageCacheKey", tmp5);
  return tmp5;
}
let closure_23 = importDefaultResult("loadedChannels");
let tmp5 = (arg0) => {
  class LocalMessageCacheManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = closure_3(this, LocalMessageCacheManager);
      items1 = [...items];
      obj = closure_6(LocalMessageCacheManager);
      tmp3 = closure_5;
      if (closure_26()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      LocalMessageCacheManager = tmp3Result;
      obj = { writable: true };
      set = new Set();
      obj.value = set;
      definePropertyResult = Object.defineProperty(tmp3Result, closure_23, obj);
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.handlePostConnectionOpen = closure_9(tmp);
      tmp3Result.handleMessageDelete = (id) => {
        callback7(id.id);
      };
      tmp3Result.handleLogout = () => {
        !function removeAllCachedMessages() {
          return callback(() => {
            const Storage = callback(closure_2[17]).Storage;
            return Storage.remove("LocalMessageCacheManagerMessageCacheKey");
          });
        }();
      };
      tmp3Result.handleMessageCreate = (message) => {
        message = message.message;
        const author = message.author;
        let id;
        if (null != author) {
          id = author.id;
        }
        if (id === id.getId()) {
          id = message.nonce;
          if (null == id) {
            id = message.id;
          }
          if (message.state !== constants.SENDING) {
            if (message.state !== constants.SEND_FAILED) {
              callback6(id);
            }
          }
          let obj = callback(tmp3Result, closure_23)[closure_23];
          obj.add(message.channel_id);
          obj = { key: id, message, sendMessageOptions: message.sendMessageOptions };
          callback5(obj);
        }
      };
      tmp3Result.handleLoadMessagesSuccess = (channelId) => {
        tmp3Result.handleChannelLoaded(channelId.channelId);
      };
      tmp3Result.handleCacheLoaded = (arg0) => {
        const items = [, ];
        ({ privateChannels: arr[0], initialGuildChannels: arr[1] } = arg0);
        for (let num = 0; num < items.length; num = num + 1) {
          let tmp = callback4;
          let tmp2 = callback4(items[num]);
          let iter = tmp2();
          if (!iter.done) {
            do {
              let tmp3 = closure_0;
              let handleChannelLoadedResult = closure_0.handleChannelLoaded(iter.value.id);
              let iter2 = tmp2();
              iter = iter2;
              let done = iter2.done;
            } while (!done);
          }
        }
      };
      tmp3Result.handleChannelLoaded = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function(arg0) {
          return callback(...arguments);
        };
      }();
      tmp3Result.handleFileUploadStart = (message) => {
        message = message.message;
        if (null != message) {
          const obj = {};
          let id = message.nonce;
          if (null == id) {
            id = message.id;
          }
          obj.key = id;
          obj.message = message;
          obj.file = tmp;
          closure_28(obj);
          const tmp2 = closure_28;
        }
      };
      tmp3Result.handleUploadProgress = (file) => {
        callback3(() => {
          const tmp = callback(file.id);
          if (null != tmp) {
            const obj = { file };
            callback2(tmp, obj);
          }
        });
      };
      tmp3Result.handleUploadComplete = (aborted) => {
        if (aborted.aborted) {
          function removeCachedMessageForFile(arg0) {
            return callback(() => {
              const tmp = callback2(arg0.id);
              if (null != tmp) {
                callback(tmp, null);
              }
            });
          }(tmp);
        }
      };
      tmp3Result.handleRestoreFailedUpload = (file) => {
        callback8(file.messageId, { file: file.file });
      };
      tmp3Result.handleTextMessageFailed = (messageId) => {
        callback8(messageId.messageId, { state: constants.SEND_FAILED });
      };
      return tmp3Result;
    }
  }
  const arg1 = LocalMessageCacheManager;
  callback2(LocalMessageCacheManager, arg0);
  let obj = {
    key: "_terminate",
    value: function _terminate() {
      callback(closure_2[22]).unsubscribe("LOGOUT", this.handleLogout);
      const obj = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("MESSAGE_CREATE", this.handleMessageCreate);
      const obj2 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("MESSAGE_SEND_FAILED", this.handleTextMessageFailed);
      const obj3 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("UPLOAD_START", this.handleFileUploadStart);
      const obj4 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("MESSAGE_DELETE", this.handleMessageDelete);
      const obj5 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("UPLOAD_RESTORE_FAILED_UPLOAD", this.handleRestoreFailedUpload);
      const obj6 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("UPLOAD_COMPLETE", this.handleUploadComplete);
      const obj7 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("UPLOAD_PROGRESS", this.handleUploadProgress);
      const obj8 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("LOAD_MESSAGES_SUCCESS", this.handleLoadMessagesSuccess);
      const obj9 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("CACHE_LOADED", this.handleCacheLoaded);
      const obj10 = callback(closure_2[22]);
      callback(closure_2[22]).unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
  };
  const items = [obj, ];
  obj = {
    key: "_initialize",
    value: function _initialize() {
      const LocalMessageCacheManager = this;
      closure_17.verbose("cache manager initialize");
      const subscription = callback(closure_2[22]).subscribe("LOGOUT", this.handleLogout);
      const obj = callback(closure_2[22]);
      const subscription1 = callback(closure_2[22]).subscribe("MESSAGE_CREATE", this.handleMessageCreate);
      const obj2 = callback(closure_2[22]);
      const subscription2 = callback(closure_2[22]).subscribe("MESSAGE_SEND_FAILED", this.handleTextMessageFailed);
      const obj3 = callback(closure_2[22]);
      const subscription3 = callback(closure_2[22]).subscribe("UPLOAD_START", this.handleFileUploadStart);
      const obj4 = callback(closure_2[22]);
      const subscription4 = callback(closure_2[22]).subscribe("MESSAGE_DELETE", this.handleMessageDelete);
      const obj5 = callback(closure_2[22]);
      const subscription5 = callback(closure_2[22]).subscribe("UPLOAD_RESTORE_FAILED_UPLOAD", this.handleRestoreFailedUpload);
      const obj6 = callback(closure_2[22]);
      const subscription6 = callback(closure_2[22]).subscribe("UPLOAD_COMPLETE", this.handleUploadComplete);
      const obj7 = callback(closure_2[22]);
      const subscription7 = callback(closure_2[22]).subscribe("UPLOAD_PROGRESS", this.handleUploadProgress);
      const obj8 = callback(closure_2[22]);
      const subscription8 = callback(closure_2[22]).subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
      // CreateGeneratorClosureLongIndex (0x67)
      callback4(tmp)();
    }
  };
  items[1] = obj;
  return callback(LocalMessageCacheManager, items);
}(importDefault(dependencyMap[28]));
tmp5 = new tmp5();
const obj = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/local_message_caching/LocalMessageCacheManager.native.tsx");

export default tmp5;
