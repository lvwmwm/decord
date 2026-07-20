// Module ID: 7831
// Function ID: 62459
// Name: ANALYTICS_NAME
// Dependencies: []
// Exports: getFilterMap, getNotificationsInboxGuild

// Module 7831 (ANALYTICS_NAME)
const NOTIFICATIONS_INBOX = require(dependencyMap[0]).NOTIFICATIONS_INBOX;
let obj = { UNREAD: "UNREAD", TODAY: "TODAY", YESTERDAY: "YESTERDAY", OLDER: "OLDER" };
obj = { ALL: "all", MENTIONS: "mentions", BOOKMARKS: "bookmarks" };
obj = {};
obj[obj.UNREAD] = require(dependencyMap[2]).t.sRUdB8;
obj[obj.TODAY] = require(dependencyMap[2]).t.F4jZQs;
obj[obj.YESTERDAY] = require(dependencyMap[2]).t.gnv4pE;
obj[obj.OLDER] = require(dependencyMap[2]).t.exrPZv;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/notifications_inbox/NotificationsInboxConstants.tsx");

export const ANALYTICS_NAME = "Notifications Inbox";
export const NOTIFICATIONS_INBOX_RAW_GUILD_ID = "notifications_inbox_guild_id";
export const GUILD_HEADER_HEIGHT = 88;
export const INBOX_MESSAGE_AGE_THRESHOLD = importDefault(dependencyMap[1]).Millis.WEEK;
export const MAX_MESSAGES_PER_CHANNEL = 50;
export const MAX_UNREAD_MESSAGES_PER_CHANNEL = 10;
export const NOTIFICATIONS_INBOX_FEATURE = "notifications-inbox";
export const getNotificationsInboxGuild = function getNotificationsInboxGuild(arg0) {
  if (arg0 === obj.BOOKMARKS) {
    const intl3 = require(dependencyMap[2]).intl;
    let stringResult = intl3.string(require(dependencyMap[2]).t.2pAkDA);
  } else if (arg0 === obj.MENTIONS) {
    const intl2 = require(dependencyMap[2]).intl;
    stringResult = intl2.string(require(dependencyMap[2]).t.jbV6MM);
  } else {
    const intl = require(dependencyMap[2]).intl;
    stringResult = intl.string(require(dependencyMap[2]).t.HcoRu0);
  }
  let obj = require(dependencyMap[3]);
  obj = { id: NOTIFICATIONS_INBOX, name: stringResult, description: "", icon: undefined, features: [] };
  return obj.fromGuildBasic(obj);
};
export const MessageCategory = obj;
export const InboxFilters = obj;
export const InboxReadState = { READ: "READ", UNREAD: "UNREAD" };
export const InboxMessageType = { ALL_MESSAGES_CHANNEL: "ALL_MESSAGES_CHANNEL", MENTION: "MENTION", BOOKMARK: "BOOKMARK" };
export const MESSAGE_CATEGORY_DISPLAY_MAP = obj;
export const getFilterMap = function getFilterMap() {
  const obj = {};
  const intl = require(dependencyMap[2]).intl;
  obj[obj.ALL] = intl.string(require(dependencyMap[2]).t.iWyjNt);
  const intl2 = require(dependencyMap[2]).intl;
  obj[obj.MENTIONS] = intl2.string(require(dependencyMap[2]).t.jbV6MM);
  const intl3 = require(dependencyMap[2]).intl;
  obj[obj.BOOKMARKS] = intl3.string(require(dependencyMap[2]).t.+rlGYW);
  return obj;
};
export const ChannelLoadState = { UNLOADED: "unloaded", LOADED: "loaded", LOADED_UNREAD: "loadedUnread" };
export const LoadingTrigger = { AUTO_LOAD: "auto_load", ON_OPEN: "on_open", FILL_SCROLLER: "fill_scroller", USER_SCROLL: "user_scroll", UNKNOWN: "unknown" };
export const NotificationInboxItemType = { MENTION: "MENTION", REPLY: "REPLY", REACTION: "REACTION", ANNOUNCEMENT: "ANNOUNCEMENT", MESSAGE: "MESSAGE" };
export const NotificationInboxActionType = { ACK: "ACK", BOOKMARK: "BOOKMARK", SETTINGS: "SETTINGS" };
