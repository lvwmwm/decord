// Module ID: 10963
// Function ID: 10964
// Name: FavoritesCleanup
// Dependencies: [5, 4993, 4989, 5072, 6897, 4992, 5002, 1083, 1196, 7548, 1089, 6949, 2]
// Exports: getAutoAddedThreadsCategoryId, getFavoritesCleanupCandidates, loadFavoriteThreadsForCleanup

// Module 10963 (FavoritesCleanup)
import Constants from "Constants" /* 1083 */;
import DurationsDefault from "Durations" /* 1089 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import ChannelRecord from "ChannelRecord" /* 4993 */;
import getThreadAutoArchiveTimeOnce from "getThreadAutoArchiveTimeOnce" /* 6949 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7548 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import PermissionStore from "PermissionStore" /* 5072 */;
import ReadStateStore from "ReadStateStore" /* 6897 */;
import FavoriteStore from "FavoriteStore" /* 4992 */;
import FavoritesConstants from "FavoritesConstants" /* 5002 */;
import size from "module_2" /* 2 */;

let c1, c2;

let c10;
let c9;
function getFavoriteThreadIdsForCleanup(categoryId) {
  let closure_0 = categoryId;
  const values = Object.values(FavoriteStore.getFavoriteChannels());
  const found = values.filter((type) => {
    if (type.type !== preloaded_user_settings.FavoriteChannelType.REFERENCE_ORIGINAL) {
      return false;
    } else {
      let isThreadResult;
      if (null != categoryId) {
        if (type.parentId !== tmp) {
          return false;
        }
      }
      const channel = ChannelStore.getChannel(type.id);
      if (null != channel) {
        isThreadResult = channel.isThread();
      } else {
        isThreadResult = null != type.channelType && THREAD_CHANNEL_TYPES.has(type.channelType);
      }
      return isThreadResult;
    }
  });
  return found.map((id) => id.id);
}
let obj = function _loadFavoriteThreadsForCleanup() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c2 = 1;
            c1 = 1;
            const obj5 = { value: obj2.loadThreadsBulk(getFavoriteThreadIdsForCleanup(closure_0)), done: false };
            obj2 = LazyLoadedThreadManagerDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
({ FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: c9, FAVORITES_PRUNE_WHEN_ARCHIVED: c10 } = FavoritesConstants);
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/favorites/FavoritesCleanup.tsx");

export { getFavoriteThreadIdsForCleanup };
export function getAutoAddedThreadsCategoryId() {
  let closure_0 = closure_9.toLowerCase();
  const values = Object.values(FavoriteStore.getFavoriteChannels());
  const found = values.find((type) => {
    let tmp = type.type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
    if (tmp) {
      let formatted;
      if (type.nickname != null) {
        const str2 = type.nickname.trim();
        formatted = str2.toLowerCase();
      }
      tmp = formatted === closure_0;
    }
    return tmp;
  });
  let id;
  if (found != null) {
    id = found.id;
  }
  if (id == null) {
    id = null;
  }
  return id;
}
export function loadFavoriteThreadsForCleanup() {
  return obj(...arguments);
}
export function getFavoritesCleanupCandidates(days) {
  days = days.days;
  const categoryId = days.categoryId;
  if (Number.isSafeInteger(days)) {
    if (days >= 0) {
      const _Date = Date;
      const timestamp = Date.now();
      const items = [];
      const diff = timestamp - days * DurationsDefault.Millis.DAY;
      const tmp29 = getFavoriteThreadIdsForCleanup(categoryId);
      const iter = tmp29[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let tmp7 = channel;
        if (null != channel) {
          if (null != tmp7.threadMetadata) {
            if (PermissionStore.can(Permissions.VIEW_CHANNEL, tmp7)) {
              if (!ReadStateStore.hasUnreadOrMentions(tmp4)) {
                if (tmp7.threadMetadata.archived) {
                  let arr = items.push(tmp7);
                } else if (days !== authStore) {
                  obj = getThreadAutoArchiveTimeOnce;
                  let threadLastActivityTime = obj.getThreadLastActivityTime(tmp7);
                  let tmp16 = threadLastActivityTime;
                  let _Number = Number;
                  let isFiniteResult = Number.isFinite(threadLastActivityTime);
                  if (isFiniteResult) {
                    isFiniteResult = tmp16 > 0;
                  }
                  if (isFiniteResult) {
                    isFiniteResult = tmp16 < diff;
                  }
                  if (isFiniteResult) {
                    let arr2 = items.push(tmp7);
                  }
                }
              }
            }
          }
        }
        continue;
      }
      const mapped = items.map((channel) => {
        obj = getThreadAutoArchiveTimeOnce;
        let POSITIVE_INFINITY = obj.getThreadLastActivityTime(channel);
        const obj2 = { channel, activity: POSITIVE_INFINITY };
        if (!Number.isFinite(POSITIVE_INFINITY)) {
          const _Number = Number;
          POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
        }
        return obj2;
      });
      const sorted = mapped.sort((activity, activity2) => activity.activity - activity2.activity);
      return sorted.map((channel) => channel.channel);
    }
  }
  return [];
}
