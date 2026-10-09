// Module ID: 9651
// Function ID: 9652
// Name: SavedMessagesStore
// Dependencies: [1390, 4704, 9652, 5431, 504, 584, 2]
// Exports: getComparator

// Module 9651 (SavedMessagesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SecondaryIndexMap from "SecondaryIndexMap" /* 4704 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5431 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9652 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

function getTimeSafe(dueAt) {
  if (null == dueAt) {
    return c3;
  } else {
    try {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(dueAt);
      return date.getTime();
    } catch (err) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const error = new Error("Invalid date given (" + dueAt + ")");
      throw error;
    }
  }
}
function isChannelRelevant(id) {
  const value = map.get(id);
  return null != value && value.size > 0;
}
function upsertSavedMessage(saveData) {
  saveData = saveData.saveData;
  const combined = "" + saveData.channelId + "-" + saveData.messageId;
  const obj = secondaryIndexMap;
  if (null == secondaryIndexMap.get(combined)) {
    const _Date = Date;
    closure_7 = Date.now();
  }
  const result = obj.set(combined, saveData);
  const messageId = saveData.saveData.messageId;
  if (null == saveData.saveData.dueAt) {
    set1.add(messageId);
  } else {
    set1.delete(messageId);
  }
  const channelId = saveData.saveData.channelId;
  set = map.get(channelId);
  const obj2 = map;
  if (set == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
  }
  set.add(messageId);
  const result1 = obj2.set(channelId, set);
  if (null == saveData.message) {
    set2.add(messageId);
  }
  if (null != saveData.saveData.dueAt) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date();
    if (date > saveData.saveData.dueAt) {
      set.add(messageId);
    }
  }
  set.delete(messageId);
}
function resetSavedMessages(bookmarkIds) {
  secondaryIndexMap.clear();
  map.clear();
  set2.clear();
  set1.clear();
  const tmp5 = bookmarkIds[Symbol.iterator]();
  while (tmp5 !== undefined) {
    let addResult = set1.add(tmp6);
    continue;
  }
  c10 = null;
  requestId = null;
  c12 = false;
  if (set1.size > 0) {
    LOADED_FINISHED = SavedMessagesTypes.BookmarksFetchState.LOADED_HAS_MORE;
  } else {
    LOADED_FINISHED = SavedMessagesTypes.BookmarksFetchState.LOADED_FINISHED;
  }
}
function nullifyMessageObject(channelId) {
  const combined = "" + channelId.channelId + "-" + channelId.messageId;
  const value = secondaryIndexMap.get(combined);
  let message;
  const obj = secondaryIndexMap;
  if (value != null) {
    message = value.message;
  }
  if (null == message) {
    return false;
  } else {
    const obj2 = { message: null };
    const merged = Object.assign(value);
    const result = obj.set(combined, obj2);
    return true;
  }
}
function handleGuild() {
  let tmp = 0 !== set2.size;
  if (tmp) {
    if (!c6) {
      c6 = true;
    }
    tmp = tmp3;
  }
  return tmp;
}
let c3 = 10000000000000;
const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap((saveData) => {
  let BOOKMARK;
  saveData = saveData.saveData;
  const items = [SavedMessagesTypes.SavedMessageSortTypes.ALL, ];
  if (null != saveData.dueAt) {
    BOOKMARK = tmp(9652).SavedMessageSortTypes.REMINDER;
  } else {
    BOOKMARK = tmp(9652).SavedMessageSortTypes.BOOKMARK;
  }
  items[1] = BOOKMARK;
  return items;
}, (saveData) => {
  let diff;
  saveData = saveData.saveData;
  if (null != saveData.dueAt) {
    diff = getTimeSafe(saveData.dueAt);
  } else {
    diff = c3 - getTimeSafe(saveData.savedAt);
  }
  return diff;
});
let c6 = true;
let closure_7 = 0;
let set = new Set();
const set1 = new Set();
let c10 = null;
let LOADED_FINISHED = SavedMessagesTypes.BookmarksFetchState.LOADED_FINISHED;
let c12 = false;
let requestId = null;
const set2 = new Set();
const map = new Map();
const Store = get_initializedDefault.Store;
class SavedMessagesStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getSavedMessages() {
    return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.ALL);
  }
  getSavedMessage(channelId, messageId) {
    return secondaryIndexMap.get("" + channelId + "-" + messageId);
  }
  getMessageBookmarks() {
    return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
  }
  getMessageReminders() {
    return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
  }
  getOverdueMessageReminderCount() {
    return set.size;
  }
  hasOverdueReminder() {
    return set.size > 0;
  }
  getMostRecentOverdueDueAt() {
    let num = 0;
    const timestamp = Date.now();
    const values = secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.REMINDER);
    for (const item10021 of values) {
      let tmp4 = getTimeSafe(item10021.saveData.dueAt);
      if (tmp4 > timestamp) {
        obj.return();
        break;
      } else {
        num = tmp4;
        continue;
      }
      return num;
    }
  }
  getSavedMessageCount() {
    return secondaryIndexMap.values(SavedMessagesTypes.SavedMessageSortTypes.REMINDER).length + set1.size;
  }
  getBookmarkCount() {
    return set1.size;
  }
  getBookmarksCursor() {
    return c10;
  }
  getBookmarksFetchState() {
    return LOADED_FINISHED;
  }
  hasFetchedBookmarks() {
    return c12;
  }
  getIsStale() {
    return c6;
  }
  getLastChanged() {
    return closure_7;
  }
  isMessageBookmarked(id, id2) {
    return set1.has(id2);
  }
  isMessageReminder(id, id2) {
    const value = secondaryIndexMap.get("" + id + "-" + id2);
    return null != value && null != value.saveData.dueAt;
  }
}
const prototype = SavedMessagesStore.prototype;
SavedMessagesStore.displayName = "SavedMessagesStore";
let obj = {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    c6 = true;
  },
  LOGOUT: function handleLogout() {
    c6 = true;
    resetSavedMessages([]);
  },
  SAVED_MESSAGES_UPDATE: function handleUpdate(reminders) {
    reminders = reminders.reminders;
    c6 = false;
    resetSavedMessages(reminders.bookmarkIds);
    for (const item10011 of reminders) {
      let tmp3 = upsertSavedMessage(item10011);
      continue;
    }
  },
  SAVED_MESSAGE_CREATE: function handleCreate(savedMessage) {
    upsertSavedMessage(savedMessage.savedMessage);
  },
  SAVED_MESSAGE_DELETE: function handleDelete(savedMessageData) {
    let flag;
    savedMessageData = savedMessageData.savedMessageData;
    const combined = "" + savedMessageData.channelId + "-" + savedMessageData.messageId;
    const messageId = savedMessageData.messageId;
    const value = secondaryIndexMap.get(combined);
    const obj = secondaryIndexMap;
    if (null == value) {
      flag = set1.delete(messageId);
    } else {
      obj.delete(combined);
      set1.delete(messageId);
      const value2 = map.get(value.saveData.channelId);
      if (value2 != null) {
        value2.delete(messageId);
      }
      set2.delete(messageId);
      set.delete(messageId);
      const _Date = Date;
      closure_7 = Date.now();
      flag = true;
    }
    return flag;
  },
  BOOKMARKS_FETCH: function handleBookmarksFetch(requestId) {
    requestId = requestId.requestId;
    LOADED_FINISHED = SavedMessagesTypes.BookmarksFetchState.LOADING;
  },
  BOOKMARKS_FETCH_SUCCESS: function handleBookmarksFetchSuccess(bookmarks) {
    bookmarks = bookmarks.bookmarks;
    if (bookmarks.requestId !== requestId) {
      return false;
    } else {
      requestId = null;
      const BookmarksFetchState = SavedMessagesTypes.BookmarksFetchState;
      LOADED_FINISHED = tmp2 ? BookmarksFetchState.LOADED_HAS_MORE : BookmarksFetchState.LOADED_FINISHED;
      c12 = true;
      c10 = tmp;
      const iter = bookmarks[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp7 = nextResult;
        if (set1.has(nextResult.saveData.messageId)) {
          let tmp11 = upsertSavedMessage(tmp7);
        }
        continue;
      }
    }
  },
  BOOKMARKS_FETCH_FAILURE: function handleBookmarksFetchFailure(requestId) {
    if (requestId.requestId !== requestId) {
      return false;
    } else {
      requestId = null;
      LOADED_FINISHED = SavedMessagesTypes.BookmarksFetchState.FAILED;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    const combined = "" + channelId.channelId + "-" + channelId.id;
    const value = secondaryIndexMap.get(combined);
    let message;
    const obj = secondaryIndexMap;
    if (value != null) {
      message = value.message;
    }
    let flag = false;
    if (null != message) {
      const obj2 = { message: null };
      const merged = Object.assign(value);
      const result = obj.set(combined, obj2);
      flag = true;
    }
    return flag;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(channelId) {
    channelId = channelId.channelId;
    const tmp = channelId.ids[Symbol.iterator]();
    while (tmp !== undefined) {
      let obj = { messageId: tmp2, channelId };
      let tmp4 = nullifyMessageObject(obj);
      continue;
    }
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let obj2;
    message = message.message;
    if (null != message.id) {
      if (null != message.channel_id) {
        const _HermesInternal = HermesInternal;
        const combined = "" + message.channel_id + "-" + message.id;
        const value = secondaryIndexMap.get(combined);
        let message1;
        const obj3 = secondaryIndexMap;
        if (value != null) {
          message1 = value.message;
        }
        if (null == message1) {
          return false;
        } else {
          const obj = { message: obj2.updateMessageRecord(value.message, message) };
          const merged = Object.assign(value);
          obj2 = MessageRecordUtils;
          const result = obj3.set(combined, obj);
        }
      }
    }
    return false;
  },
  GUILD_CREATE: handleGuild,
  GUILD_UPDATE: handleGuild,
  GUILD_DELETE: handleGuild,
  CHANNEL_CREATE: function handleChannelCreate(arg0) {
    let tmp2 = 0 !== set2.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (tmp4) {
        const value = map.get(tmp.id);
        if (null != value && value.size > 0) {
          c6 = true;
        }
        tmp4 = tmp9;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    if (0 === set2.size) {
      return false;
    } else if (c6) {
      return false;
    } else {
      let flag2 = false;
      const tmp3 = channels[Symbol.iterator]();
      while (tmp3 !== undefined) {
        if (isChannelRelevant(tmp5.id)) {
          c6 = true;
          flag2 = true;
        }
        continue;
      }
      return flag2;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(arg0) {
    let tmp2 = 0 !== set2.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (tmp4) {
        const value = map.get(tmp.id);
        if (null != value && value.size > 0) {
          c6 = true;
        }
        tmp4 = tmp9;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(arg0) {
    let tmp2 = 0 !== set2.size;
    if (tmp2) {
      let tmp4 = !c6;
      if (tmp4) {
        const id = tmp.id;
        const currentUser = UserStore.getCurrentUser();
        let id1;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        if (id === id1) {
          c6 = true;
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
};
const savedMessagesStore = new SavedMessagesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/saved_messages/SavedMessagesStore.tsx");

export default savedMessagesStore;
export const getComparator = function getComparator(dueAt) {
  let diff;
  if (null != dueAt.dueAt) {
    diff = getTimeSafe(dueAt.dueAt);
  } else {
    diff = c3 - getTimeSafe(dueAt.savedAt);
  }
  return diff;
};
