// Module ID: 10822
// Function ID: 10823
// Name: FavoritesCleanup
// Dependencies: [5, 4825, 4821, 4901, 6757, 4824, 1098, 1211, 7394, 1104, 6808, 2]
// Exports: getFavoritesCleanupCandidates, loadFavoriteThreadsForCleanup

// Module 10822 (FavoritesCleanup)
import Constants from "Constants" /* 1098 */;
import DurationsDefault from "Durations" /* 1104 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1211 */;
import ChannelRecord from "ChannelRecord" /* 4825 */;
import getThreadAutoArchiveTimeOnce from "getThreadAutoArchiveTimeOnce" /* 6808 */;
import LazyLoadedThreadManagerDefault from "LazyLoadedThreadManager" /* 7394 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import ReadStateStore from "ReadStateStore" /* 6757 */;
import FavoriteStore from "FavoriteStore" /* 4824 */;
import size from "module_2" /* 2 */;

let c1, c2;

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
        return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/favorites/FavoritesCleanup.tsx");

export { getFavoriteThreadIdsForCleanup };
export const loadFavoriteThreadsForCleanup = function loadFavoriteThreadsForCleanup() {
  return obj(...arguments);
};
export const getFavoritesCleanupCandidates = function getFavoritesCleanupCandidates(days) {
  days = days.days;
  const categoryId = days.categoryId;
  if (Number.isSafeInteger(days)) {
    if (days >= 1) {
      const _Date = Date;
      const timestamp = Date.now();
      const items = [];
      const diff = timestamp - days * DurationsDefault.Millis.DAY;
      const tmp28 = getFavoriteThreadIdsForCleanup(categoryId);
      const iter = tmp28[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let tmp7 = channel;
        if (null != channel) {
          if (null != tmp7.threadMetadata) {
            if (PermissionStore.can(Permissions.VIEW_CHANNEL, tmp7)) {
              if (tmp7.threadMetadata.archived) {
                let arr = items.push(tmp7);
              } else if (!ReadStateStore.hasUnreadOrMentions(tmp4)) {
                obj = getThreadAutoArchiveTimeOnce;
                let threadLastActivityTime = obj.getThreadLastActivityTime(tmp7);
                let tmp15 = threadLastActivityTime;
                let _Number = Number;
                let isFiniteResult = Number.isFinite(threadLastActivityTime);
                if (isFiniteResult) {
                  isFiniteResult = tmp15 > 0;
                }
                if (isFiniteResult) {
                  isFiniteResult = tmp15 < diff;
                }
                if (isFiniteResult) {
                  let arr2 = items.push(tmp7);
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
};
