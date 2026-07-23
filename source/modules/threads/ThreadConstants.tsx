// Module ID: 1211
// Function ID: 13902
// Name: AbortCodes
// Dependencies: [653, 1212, 2]
// Exports: getThreadNotificationOptions

// Module 1211 (AbortCodes)
import { AbortCodes } from "ME";
import set from "set";

let obj = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
let items = [, , , ];
({ TOO_MANY_ATTACHMENTS: arr[0], EXPLICIT_CONTENT: arr[1], ENTITY_TOO_LARGE: arr[2], EXPLICIT_CONTENT: arr[3] } = AbortCodes);
let set = new Set(items);
const items1 = [, ];
({ AUTOMOD_MESSAGE_BLOCKED: arr2[0], AUTOMOD_TITLE_BLOCKED: arr2[1] } = AbortCodes);
const result = set.fileFinishedImporting("modules/threads/ThreadConstants.tsx");

export const DEFAULT_AUTO_ARCHIVE_DURATION = 4320;
export const MAX_THREAD_MESSAGE_COUNT_OLD = 50;
export const MAX_THREAD_MESSAGE_COUNT = 100000;
export const MAX_THREAD_MEMBERS_PREVIEW = 50;
export const MAX_THREAD_UNREAD_MESSAGE_COUNT = 25;
export const ThreadMemberFlags = obj;
export const OpenThreadAnalyticsLocations = { EMBED: "Embed", BROWSER: "Thread Browser", POPOUT: "Active Threads Popout", CHANNEL_LIST: "Channel List", GUILD_ACTIVE_THREADS_MODAL: "Guild Active Threads Modal", INBOX: "Inbox", FORUM: "Forum", VOICE_AUTO_OPEN: "Voice Auto Open" };
export const getThreadNotificationOptions = function getThreadNotificationOptions() {
  obj = { setting: obj.ALL_MESSAGES };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["n/bTaY"]);
  const items = [obj, , ];
  obj = { setting: obj.ONLY_MENTIONS };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.format(require(1212) /* getSystemLocale */.t.L2hmYy, {});
  items[1] = obj;
  obj = { setting: obj.NO_MESSAGES };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.CtVGyQ);
  items[2] = obj;
  return items;
};
export const ThreadSortOrderReadableForAnalytics = { LATEST_ACTIVITY: "Last Message", CREATION_DATE: "Creation" };
export const FORUM_POST_CREATION_UPLOAD_ERRORS = set;
export const FORUM_POST_CREATION_AUTOMOD_ERRORS = new Set(items1);
