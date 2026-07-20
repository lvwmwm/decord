// Module ID: 1211
// Function ID: 13897
// Name: AbortCodes
// Dependencies: []
// Exports: getThreadNotificationOptions

// Module 1211 (AbortCodes)
const AbortCodes = require(dependencyMap[0]).AbortCodes;
const obj = { <string:3594180037>: "<string:1146552322>", borderRadius: "<string:1149435906>", justifyContent: "<string:1912602626>", alignItems: "<string:1076822017>" };
const items = [, , , ];
({ TOO_MANY_ATTACHMENTS: arr[0], EXPLICIT_CONTENT: arr[1], ENTITY_TOO_LARGE: arr[2], EXPLICIT_CONTENT: arr[3] } = AbortCodes);
const items1 = [, ];
({ AUTOMOD_MESSAGE_BLOCKED: arr2[0], AUTOMOD_TITLE_BLOCKED: arr2[1] } = AbortCodes);
const set = new Set(items);
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/threads/ThreadConstants.tsx");

export const DEFAULT_AUTO_ARCHIVE_DURATION = 4320;
export const MAX_THREAD_MESSAGE_COUNT_OLD = 50;
export const MAX_THREAD_MESSAGE_COUNT = 100000;
export const MAX_THREAD_MEMBERS_PREVIEW = 50;
export const MAX_THREAD_UNREAD_MESSAGE_COUNT = 25;
export const ThreadMemberFlags = obj;
export const OpenThreadAnalyticsLocations = { EMBED: "Embed", BROWSER: "Thread Browser", POPOUT: "Active Threads Popout", CHANNEL_LIST: "Channel List", GUILD_ACTIVE_THREADS_MODAL: "Guild Active Threads Modal", INBOX: "Inbox", FORUM: "Forum", VOICE_AUTO_OPEN: "Voice Auto Open" };
export const getThreadNotificationOptions = function getThreadNotificationOptions() {
  let obj = { setting: obj.ALL_MESSAGES };
  const intl = require(dependencyMap[1]).intl;
  obj.label = intl.string(require(dependencyMap[1]).t.n/bTaY);
  const items = [obj, , ];
  obj = { setting: obj.ONLY_MENTIONS };
  const intl2 = require(dependencyMap[1]).intl;
  obj.label = intl2.format(require(dependencyMap[1]).t.L2hmYy, {});
  items[1] = obj;
  obj = { setting: obj.NO_MESSAGES };
  const intl3 = require(dependencyMap[1]).intl;
  obj.label = intl3.string(require(dependencyMap[1]).t.CtVGyQ);
  items[2] = obj;
  return items;
};
export const ThreadSortOrderReadableForAnalytics = { LATEST_ACTIVITY: "Last Message", CREATION_DATE: "Creation" };
export const FORUM_POST_CREATION_UPLOAD_ERRORS = set;
export const FORUM_POST_CREATION_AUTOMOD_ERRORS = new Set(items1);
