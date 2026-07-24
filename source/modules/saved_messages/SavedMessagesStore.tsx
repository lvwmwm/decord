// Module ID: 9568
// Function ID: 74434
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1849, 3754, 9569, 4351, 566, 686, 2]

// Module 9568 (_isNativeReflectConstruct)
import sortedInsert from "sortedInsert";
import savedMessageDataToClient from "savedMessageDataToClient";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
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
function getTimeSafe(dueAt) {
  if (null == dueAt) {
    return c8;
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
    diff = c8 - getTimeSafe(dueAt.savedAt);
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
    if (!c10) {
      c10 = true;
    }
    tmp = !c10;
    const tmp3 = !c10;
  }
  return tmp;
}
let c8 = 10000000000000;
const secondaryIndexMap = new require("sortedInsert").SecondaryIndexMap((saveData) => {
  const items = [require(9569) /* savedMessageDataToClient */.SavedMessageSortTypes.ALL, ];
  if (null != saveData.saveData.dueAt) {
    let BOOKMARK = require(9569) /* savedMessageDataToClient */.SavedMessageSortTypes.REMINDER;
  } else {
    BOOKMARK = require(9569) /* savedMessageDataToClient */.SavedMessageSortTypes.BOOKMARK;
  }
  items[1] = BOOKMARK;
  return items;
}, (saveData) => getComparator(saveData.saveData));
let c10 = true;
let c11 = 0;
let set = new Set();
const set1 = new Set();
const map = new Map();
let tmp6 = ((Store) => {
  class SavedMessagesStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, SavedMessagesStore);
      obj = outer1_5(SavedMessagesStore);
      tmp2 = outer1_4;
      if (outer1_15()) {
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
  callback2(SavedMessagesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "getSavedMessages",
    value() {
      return outer1_9.values(SavedMessagesStore(outer1_1[7]).SavedMessageSortTypes.ALL);
    }
  };
  items[1] = obj;
  obj = {
    key: "getSavedMessage",
    value(channelId, messageId) {
      return outer1_9.get(outer1_21({ channelId, messageId }));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMessageBookmarks",
    value() {
      return outer1_9.values(SavedMessagesStore(outer1_1[7]).SavedMessageSortTypes.BOOKMARK);
    }
  };
  items[4] = {
    key: "getMessageReminders",
    value() {
      return outer1_9.values(SavedMessagesStore(outer1_1[7]).SavedMessageSortTypes.REMINDER);
    }
  };
  items[5] = {
    key: "getOverdueMessageReminderCount",
    value() {
      return outer1_12.size;
    }
  };
  items[6] = {
    key: "hasOverdueReminder",
    value() {
      return outer1_12.size > 0;
    }
  };
  items[7] = {
    key: "getSavedMessageCount",
    value() {
      return outer1_9.size();
    }
  };
  items[8] = {
    key: "getIsStale",
    value() {
      return outer1_10;
    }
  };
  items[9] = {
    key: "getLastChanged",
    value() {
      return outer1_11;
    }
  };
  items[10] = {
    key: "isMessageBookmarked",
    value(channelId, messageId) {
      const value = outer1_9.get(outer1_21({ channelId, messageId }));
      return null != value && null == value.saveData.dueAt;
    }
  };
  items[11] = {
    key: "isMessageReminder",
    value(channelId, messageId) {
      const value = outer1_9.get(outer1_21({ channelId, messageId }));
      return null != value && null != value.saveData.dueAt;
    }
  };
  return callback(SavedMessagesStore, items);
})(require("initialize").Store);
tmp6.displayName = "SavedMessagesStore";
tmp6 = new tmp6(require("dispatcher"), {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    let c10 = true;
  },
  LOGOUT: function handleLogout() {
    let c10 = true;
    secondaryIndexMap.clear();
    map.clear();
    set1.clear();
  },
  SAVED_MESSAGES_UPDATE: function handleUpdate(savedMessages) {
    let done;
    let c10 = false;
    secondaryIndexMap.clear();
    map.clear();
    set1.clear();
    const tmp4 = _createForOfIteratorHelperLoose(savedMessages.savedMessages);
    let iter = tmp4();
    if (!iter.done) {
      do {
        let tmp5 = upsertSavedMessage;
        let tmp6 = upsertSavedMessage(iter.value);
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
        let tmp3 = nullifyMessageObject;
        let obj = { messageId: iter.value, channelId: tmp };
        let tmp4 = nullifyMessageObject(obj);
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
          obj.message = require(4351) /* createMinimalMessageRecord */.updateMessageRecord(value.message, message);
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
      let tmp4 = !c10;
      if (!c10) {
        const tmp6 = isChannelRelevant(tmp.id);
        if (tmp6) {
          c10 = true;
        }
        tmp4 = tmp6;
        const tmp7 = tmp6;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let c10;
    let iter3;
    if (0 === set1.size) {
      return false;
    } else if (c10) {
      return false;
    } else {
      const tmp4 = _createForOfIteratorHelperLoose(tmp);
      const iter = tmp4();
      let iter2 = iter;
      let flag2 = false;
      let flag3 = false;
      if (!iter.done) {
        do {
          let tmp5 = isChannelRelevant;
          if (isChannelRelevant(iter2.value.id)) {
            c10 = true;
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
      let tmp4 = !c10;
      if (!c10) {
        const tmp6 = isChannelRelevant(tmp.id);
        if (tmp6) {
          c10 = true;
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
      let tmp4 = !c10;
      if (!c10) {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        if (tmp.id === id) {
          c10 = true;
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
let result = set.fileFinishedImporting("modules/saved_messages/SavedMessagesStore.tsx");

export default tmp6;
export { getComparator };
