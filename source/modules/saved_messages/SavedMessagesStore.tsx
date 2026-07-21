// Module ID: 9524
// Function ID: 74171
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9524 (_isNativeReflectConstruct)
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
function getTimeSafe(dueAt) {
  if (null == dueAt) {
    return closure_8;
  } else {
    const _Date = Date;
    const date = new Date(tmp);
    return date.getTime();
  }
}
function getComparator(dueAt) {
  if (null != dueAt.dueAt) {
    let diff = getTimeSafe(dueAt.dueAt);
  } else {
    diff = closure_8 - getTimeSafe(dueAt.savedAt);
  }
  return diff;
}
function isChannelRelevant(id) {
  const value = map.get(id);
  let tmp2 = null != value;
  if (tmp2) {
    tmp2 = value.size > 0;
  }
  return tmp2;
}
function getSavedMessageKey(saveData) {
  return "" + saveData.channelId + "-" + saveData.messageId;
}
function upsertSavedMessage(saveData) {
  const tmp = getSavedMessageKey(saveData.saveData);
  if (null == secondaryIndexMap.get(tmp)) {
    const _Date = Date;
    let closure_11 = Date.now();
  }
  const result = secondaryIndexMap.set(tmp, saveData);
  const messageId = saveData.saveData.messageId;
  const channelId = saveData.saveData.channelId;
  let set = map.get(channelId);
  if (null == set) {
    const _Set = Set;
    set = new Set();
  }
  set.add(messageId);
  const result1 = map.set(channelId, set);
  if (null == saveData.message) {
    set1.add(messageId);
  }
  if (null != saveData.saveData.dueAt) {
    const _Date2 = Date;
    const date = new Date();
    if (date > saveData.saveData.dueAt) {
      set.add(messageId);
    }
  }
  set.delete(messageId);
}
function nullifyMessageObject(messageId) {
  let obj = { messageId: messageId.messageId, channelId: messageId.channelId };
  let message;
  const tmp2 = getSavedMessageKey(obj);
  const value = secondaryIndexMap.get(tmp2);
  if (null != value) {
    message = value.message;
  }
  if (null == message) {
    return false;
  } else {
    obj = {};
    const merged = Object.assign(value);
    obj.message = null;
    const result = secondaryIndexMap.set(tmp2, obj);
    return true;
  }
}
function handleGuild() {
  let tmp = 0 !== set1.size;
  if (tmp) {
    if (!closure_10) {
      closure_10 = true;
    }
    tmp = !closure_10;
    const tmp3 = !closure_10;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = 10000000000000;
const secondaryIndexMap = new arg1(dependencyMap[6]).SecondaryIndexMap((saveData) => {
  const items = [arg1(dependencyMap[7]).SavedMessageSortTypes.ALL, ];
  if (null != saveData.saveData.dueAt) {
    let BOOKMARK = arg1(dependencyMap[7]).SavedMessageSortTypes.REMINDER;
  } else {
    BOOKMARK = arg1(dependencyMap[7]).SavedMessageSortTypes.BOOKMARK;
  }
  items[1] = BOOKMARK;
  return items;
}, (saveData) => getComparator(saveData.saveData));
let closure_10 = true;
let closure_11 = 0;
const set = new Set();
const set1 = new Set();
const map = new Map();
let tmp6 = (Store) => {
  class SavedMessagesStore {
    constructor() {
      self = this;
      tmp = closure_2(this, SavedMessagesStore);
      obj = closure_5(SavedMessagesStore);
      tmp2 = closure_4;
      if (closure_15()) {
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
  const arg1 = SavedMessagesStore;
  callback2(SavedMessagesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getSavedMessages",
    value() {
      return store.values(SavedMessagesStore(closure_1[7]).SavedMessageSortTypes.ALL);
    }
  };
  items[1] = obj;
  obj = {
    key: "getSavedMessage",
    value(channelId, messageId) {
      return store.get(callback4({ channelId, messageId }));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMessageBookmarks",
    value() {
      return store.values(SavedMessagesStore(closure_1[7]).SavedMessageSortTypes.BOOKMARK);
    }
  };
  items[4] = {
    key: "getMessageReminders",
    value() {
      return store.values(SavedMessagesStore(closure_1[7]).SavedMessageSortTypes.REMINDER);
    }
  };
  items[5] = {
    key: "getOverdueMessageReminderCount",
    value() {
      return closure_12.size;
    }
  };
  items[6] = {
    key: "hasOverdueReminder",
    value() {
      return closure_12.size > 0;
    }
  };
  items[7] = {
    key: "getSavedMessageCount",
    value() {
      return store.size();
    }
  };
  items[8] = {
    key: "getIsStale",
    value() {
      return closure_10;
    }
  };
  items[9] = {
    key: "getLastChanged",
    value() {
      return closure_11;
    }
  };
  items[10] = {
    key: "isMessageBookmarked",
    value(channelId, messageId) {
      const value = store.get(callback4({ channelId, messageId }));
      return null != value && null == value.saveData.dueAt;
    }
  };
  items[11] = {
    key: "isMessageReminder",
    value(channelId, messageId) {
      const value = store.get(callback4({ channelId, messageId }));
      return null != value && null != value.saveData.dueAt;
    }
  };
  return callback(SavedMessagesStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp6.displayName = "SavedMessagesStore";
tmp6 = new tmp6(importDefault(dependencyMap[10]), {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    let closure_10 = true;
  },
  LOGOUT: function handleLogout() {
    let closure_10 = true;
    secondaryIndexMap.clear();
    map.clear();
    set1.clear();
  },
  SAVED_MESSAGES_UPDATE: function handleUpdate(savedMessages) {
    let done;
    let closure_10 = false;
    secondaryIndexMap.clear();
    map.clear();
    set1.clear();
    const tmp4 = _createForOfIteratorHelperLoose(savedMessages.savedMessages);
    let iter = tmp4();
    if (!iter.done) {
      do {
        let tmp5 = closure_22;
        let tmp6 = closure_22(iter.value);
        let iter2 = tmp4();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  SAVED_MESSAGE_CREATE: function handleCreate(savedMessage) {
    upsertSavedMessage(savedMessage.savedMessage);
  },
  SAVED_MESSAGE_DELETE: function handleDelete(savedMessageData) {
    savedMessageData = savedMessageData.savedMessageData;
    const tmp = getSavedMessageKey(savedMessageData);
    let value = secondaryIndexMap.get(tmp);
    if (null != value) {
      secondaryIndexMap.delete(tmp);
      const messageId = savedMessageData.messageId;
      value = map.get(value.saveData.channelId);
      if (null != value) {
        value.delete(messageId);
      }
      set1.delete(messageId);
      set.delete(messageId);
      const _Date = Date;
      let closure_11 = Date.now();
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    return nullifyMessageObject({ messageId: id.id, channelId: id.channelId });
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    let done;
    const tmp2 = _createForOfIteratorHelperLoose(ids.ids);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_23;
        let obj = { messageId: iter.value, channelId: tmp };
        let tmp4 = closure_23(obj);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    if (null != message.id) {
      if (null != message.channel_id) {
        let obj = {};
        ({ id: obj3.messageId, channel_id: obj3.channelId } = message);
        const tmp10 = getSavedMessageKey(obj);
        const value = secondaryIndexMap.get(tmp10);
        message = undefined;
        if (null != value) {
          message = value.message;
        }
        if (null == message) {
          return false;
        } else {
          obj = {};
          const merged = Object.assign(value);
          obj.message = arg1(dependencyMap[8]).updateMessageRecord(value.message, message);
          const result = secondaryIndexMap.set(tmp10, obj);
        }
      }
    }
    return false;
  },
  GUILD_CREATE: handleGuild,
  GUILD_UPDATE: handleGuild,
  GUILD_DELETE: handleGuild,
  CHANNEL_CREATE: function handleChannelCreate(arg0) {
    let tmp2 = 0 !== set1.size;
    if (tmp2) {
      let tmp4 = !closure_10;
      if (!closure_10) {
        const tmp6 = isChannelRelevant(tmp.id);
        if (tmp6) {
          closure_10 = true;
        }
        tmp4 = tmp6;
        const tmp7 = tmp6;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let iter3;
    if (0 === set1.size) {
      return false;
    } else if (closure_10) {
      return false;
    } else {
      const tmp4 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp4();
      let iter2 = iter;
      let flag2 = false;
      let flag3 = false;
      if (!iter.done) {
        do {
          let tmp5 = closure_20;
          if (closure_20(iter2.value.id)) {
            closure_10 = true;
            flag2 = true;
          }
          iter3 = tmp4();
          iter2 = iter3;
          flag3 = flag2;
        } while (!iter3.done);
      }
      return flag3;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    let tmp2 = 0 !== set1.size;
    if (tmp2) {
      let tmp4 = !closure_10;
      if (!closure_10) {
        const tmp6 = isChannelRelevant(tmp.id);
        if (tmp6) {
          closure_10 = true;
        }
        tmp4 = tmp6;
        const tmp7 = tmp6;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(arg0) {
    let tmp2 = 0 !== set1.size;
    if (tmp2) {
      let tmp4 = !closure_10;
      if (!closure_10) {
        const currentUser = currentUser.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        if (tmp.id === id) {
          closure_10 = true;
        }
        tmp4 = tmp9;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_ROLE_CREATE: handleGuild,
  GUILD_ROLE_UPDATE: handleGuild,
  GUILD_ROLE_DELETE: handleGuild,
  MESSAGE_REMINDER_DUE: function handleMessageReminderDue(savedMessage) {
    set.add(savedMessage.savedMessage.saveData.messageId);
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/saved_messages/SavedMessagesStore.tsx");

export default tmp6;
export { getComparator };
