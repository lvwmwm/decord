// Module ID: 10112
// Function ID: 10113
// Name: BadgeDirectorySeenStore
// Dependencies: [10113, 504, 572, 2]

// Module 10112 (BadgeDirectorySeenStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import BadgeUtils from "BadgeUtils" /* 10113 */;
import size from "module_2" /* 2 */;

let set;
let obj = { seenBadgeIndicatorIds: set };
set = new Set();
let obj2 = obj;
const PersistedStore = get_initializedDefault.PersistedStore;
class BadgeDirectorySeenStore extends PersistedStore {
  initialize(seenBadgeIndicatorIds) {
    let prop;
    const _Set = Set;
    if (seenBadgeIndicatorIds != null) {
      prop = seenBadgeIndicatorIds.seenBadgeIndicatorIds;
    }
    if (prop == null) {
      prop = [];
    }
    const _Set1 = new _Set(prop);
  }
  getState() {
    const obj = { seenBadgeIndicatorIds: Array.from(obj2.seenBadgeIndicatorIds) };
    return obj;
  }
  getSeenBadgeIndicators() {
    return obj2.seenBadgeIndicatorIds;
  }
}
const prototype = BadgeDirectorySeenStore.prototype;
BadgeDirectorySeenStore.displayName = "BadgeDirectorySeenStore";
BadgeDirectorySeenStore.persistKey = "BadgeDirectorySeenStore";
obj2 = {
  BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function handleMarkBadgeIndicatorSeen(badgeId) {
    badgeId = badgeId.badgeId;
    const seenBadgeIndicatorIds = obj2.seenBadgeIndicatorIds;
    if (!seenBadgeIndicatorIds.has(badgeId)) {
      const merged = Object.assign(obj2);
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, obj2.seenBadgeIndicatorIds, 0)] = badgeId;
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
    return false;
  },
  BADGE_ACK_SUCCESS: function handleBadgeAckSuccess(badgeId) {
    badgeId = badgeId.badgeId;
    const obj = BadgeUtils;
    let isBetaBadgeIdResult = obj.isBetaBadgeId(badgeId);
    if (isBetaBadgeIdResult) {
      const seenBadgeIndicatorIds = obj2.seenBadgeIndicatorIds;
      if (!seenBadgeIndicatorIds.has(badgeId)) {
        obj2 = { seenBadgeIndicatorIds: set };
        const merged = Object.assign(obj2);
        const _Set = Set;
        const items = [];
        items[HermesBuiltin.arraySpread(items, obj2.seenBadgeIndicatorIds, 0)] = badgeId;
        const self = this;
        const self2 = this;
        set = new Set(items);
      }
      isBetaBadgeIdResult = flag;
    }
    return isBetaBadgeIdResult;
  }
};
const badgeDirectorySeenStore = new BadgeDirectorySeenStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/badges/BadgeDirectorySeenStore.tsx");

export default badgeDirectorySeenStore;
