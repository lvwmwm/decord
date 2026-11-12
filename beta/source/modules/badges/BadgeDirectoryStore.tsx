// Module ID: 8867
// Function ID: 8868
// Name: BadgeDirectoryStore
// Dependencies: [1385, 1089, 1453, 8868, 559, 8872, 504, 572, 2]
// Exports: getObtainedAtFromBadge, getSingleRequirementThreshold

// Module 8867 (BadgeDirectoryStore)
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1089 */;
import LRUCacheDefault from "LRUCache" /* 1453 */;
import BadgeIdResolution from "BadgeIdResolution" /* 8868 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8872 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let map, map1, set;

const HOUR = DurationsDefault.Millis.HOUR;
let tmp2 = new LRUCacheDefault({ max: 50 });
const hasOwnProperty = tmp2;
const Store = get_initializedDefault.Store;
class BadgeDirectoryStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getBadges(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp = id;
    }
    if (null == tmp) {
      return [];
    } else {
      let items;
      const value = closure_5.get(tmp);
      if (null != value) {
        const _Array = Array;
        const badges = value.badges;
        items = Array.from(badges.values());
      } else {
        items = [];
      }
      return items;
    }
  }
  hasCatalogFor(id) {
    const peekResult = closure_5.peek(id);
    let flag;
    if (peekResult != null) {
      flag = peekResult.catalogFetched;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isCatalogStaleFor(displayedUserId) {
    const peekResult = closure_5.peek(displayedUserId);
    let fetchedAt;
    if (peekResult != null) {
      fetchedAt = peekResult.fetchedAt;
    }
    let tmp3 = null == fetchedAt;
    if (!tmp3) {
      const _Date = Date;
      tmp3 = Date.now() - fetchedAt >= HOUR;
    }
    return tmp3;
  }
  hasCatalogFetchErrorFor(displayedUserId) {
    let tmp = displayedUserId;
    if (displayedUserId == null) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp = id;
    }
    let tmp5 = null != tmp;
    if (tmp5) {
      const peekResult = closure_5.peek(tmp);
      let flag;
      if (peekResult != null) {
        flag = peekResult.fetchError;
      }
      if (flag == null) {
        flag = false;
      }
      tmp5 = flag;
    }
    return tmp5;
  }
  getUnreadBadges(id) {
    const badges = this.getBadges(id);
    return badges.filter((has_updates) => true === has_updates.has_updates);
  }
  getUnreadBadgeCount(id) {
    let tmp = id;
    if (id == null) {
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp = id;
    }
    let num = 0;
    if (null != tmp) {
      const self = this;
      num = 0;
      if (this.hasCatalogFor(tmp)) {
        num = self.getUnreadBadges(tmp).length;
      }
    }
    return num;
  }
  getBadgeById(GIFTING, displayedUserId) {
    let tmp = displayedUserId;
    if (displayedUserId == null) {
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp = id;
    }
    let tmp5;
    if (null != tmp) {
      const value = closure_5.get(tmp);
      let value2;
      if (value != null) {
        const badges = value.badges;
        value2 = badges.get(GIFTING);
      }
      tmp5 = value2;
    }
    return tmp5;
  }
  getSingleRequirementProgress(GIFTING, id) {
    const badgeById = this.getBadgeById(GIFTING, id);
    let progress;
    if (badgeById != null) {
      progress = badgeById.progress;
    }
    if (null != progress) {
      if (0 !== progress.length) {
        return progress[0];
      }
    }
  }
  getCurrentTier(GIFTING, displayedUserId) {
    const badgeById = this.getBadgeById(GIFTING, displayedUserId);
    let current_tier;
    if (badgeById != null) {
      current_tier = badgeById.current_tier;
    }
    if (null != current_tier) {
      const tiers = badgeById.tiers;
      return tiers.find((key) => key.key === badgeById.current_tier);
    }
  }
  getObtainedAt(GIFTING, displayedUserId) {
    const badgeById = this.getBadgeById(GIFTING, displayedUserId);
    let tmp2;
    if (null != badgeById) {
      let obtained_at;
      if (null != badgeById.current_tier) {
        const tier_obtained_at = badgeById.tier_obtained_at;
        let tmp4;
        if (tier_obtained_at != null) {
          tmp4 = tier_obtained_at[badgeById.current_tier];
        }
        obtained_at = tmp4;
      }
      if (obtained_at == null) {
        obtained_at = badgeById.obtained_at;
      }
      tmp2 = obtained_at;
    }
    return tmp2;
  }
  getNextTier(GIFTING, displayedUserId) {
    const badgeById = this.getBadgeById(GIFTING, displayedUserId);
    let next_tier;
    if (badgeById != null) {
      next_tier = badgeById.next_tier;
    }
    if (null != next_tier) {
      const tiers = badgeById.tiers;
      return tiers.find((key) => key.key === badgeById.next_tier);
    }
  }
  getRemainingToNextTier(GIFTING, id) {
    const singleRequirementProgress = this.getSingleRequirementProgress(GIFTING, id);
    let threshold;
    if (singleRequirementProgress != null) {
      threshold = singleRequirementProgress.threshold;
    }
    let num = 0;
    if (null != threshold) {
      const _Math = Math;
      num = Math.max(0, singleRequirementProgress.threshold - singleRequirementProgress.current);
    }
    return num;
  }
}
const prototype = BadgeDirectoryStore.prototype;
BadgeDirectoryStore.displayName = "BadgeDirectoryStore";
let obj = {
  BADGE_DIRECTORY_FETCH_START: function handleFetchStart(userId) {
    const value = closure_5.get(userId.userId);
    if (null != value) {
      value.fetchError = false;
    }
  },
  BADGE_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let badges;
    let closure_129_0;
    let userId;
    const f94854 = (badge_id) => {
      const acks = _undefined.acks;
      const value = acks.get(badge_id.badge_id);
      let value2 = null;
      const tmp = _undefined;
      const tmp4 = null != value && closure_1_0 < value;
      if (tmp4) {
        const badges = tmp.badges;
        value2 = badges.get(badge_id.badge_id);
      }
      const items = [badge_id.badge_id, ];
      if (value2 == null) {
        value2 = badge_id;
      }
      items[1] = value2;
      return items;
    };
    ({ userId, badges, requestedAt: closure_129_0 } = arg0);
    let c1;
    let peekResult = closure_5.peek(userId);
    const obj = closure_5;
    if (peekResult == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj2 = { badges: map, catalogFetched: false, fetchError: false, fetchedAt: null, driftBackoff: null, driftFetchGateUntil: null, acks: map1 };
      map = new Map();
      let tmp4 = map;
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      peekResult = obj2;
      map1 = new Map();
    }
    c1 = peekResult;
    peekResult.badges = new Map(badges.map(f94854));
    peekResult.catalogFetched = true;
    peekResult.fetchError = false;
    new Map(badges.map(f94854));
    peekResult.fetchedAt = Date.now();
    const result = obj.set(userId, peekResult);
  },
  BADGE_DIRECTORY_FETCH_FAILURE: function handleFetchFailure(userId) {
    userId = userId.userId;
    let peekResult = closure_5.peek(userId);
    const obj = closure_5;
    if (peekResult == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj2 = { badges: map, catalogFetched: false, fetchError: false, fetchedAt: null, driftBackoff: null, driftFetchGateUntil: null, acks: map1 };
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      peekResult = obj2;
      map1 = new Map();
    }
    peekResult.fetchError = true;
    const result = obj.set(userId, peekResult);
  },
  BADGE_FETCH_SUCCESS: function handleBadgeFetchSuccess(requestedAt) {
    let badge;
    let userId;
    ({ userId, badge } = requestedAt);
    requestedAt = requestedAt.requestedAt;
    let peekResult = closure_5.peek(userId);
    const obj = closure_5;
    if (peekResult == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj2 = { badges: map, catalogFetched: false, fetchError: false, fetchedAt: null, driftBackoff: null, driftFetchGateUntil: null, acks: map1 };
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      peekResult = obj2;
      map1 = new Map();
    }
    const acks = peekResult.acks;
    const value = acks.get(badge.badge_id);
    const tmp8 = null != value && requestedAt < value;
    if (tmp8) {
      return false;
    } else {
      const badges = peekResult.badges;
      const result = badges.set(badge.badge_id, badge);
      const result1 = obj.set(userId, peekResult);
    }
  },
  BADGE_SUMMARY_FETCH_SUCCESS: function handleBadgeSummaryFetchSuccess(requestedAt) {
    let badge;
    let info_label;
    let progress;
    let userId;
    ({ userId, badge } = requestedAt);
    requestedAt = requestedAt.requestedAt;
    let peekResult = closure_5.peek(userId);
    const obj = closure_5;
    if (peekResult == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj2 = { badges: map, catalogFetched: false, fetchError: false, fetchedAt: null, driftBackoff: null, driftFetchGateUntil: null, acks: map1 };
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      map = new Map();
      peekResult = obj2;
      map1 = new Map();
    }
    const acks = peekResult.acks;
    const value = acks.get(badge.badge_id);
    const tmp8 = null != value && requestedAt < value;
    if (tmp8) {
      return false;
    } else {
      const badges = peekResult.badges;
      const value2 = badges.get(badge.badge_id);
      const badges2 = peekResult.badges;
      const badge_id = badge.badge_id;
      const obj3 = { progress, info_label };
      set = badges2.set;
      const merged = Object.assign(badge);
      progress = badge.progress;
      if (progress == null) {
        let progress1;
        if (value2 != null) {
          progress1 = value2.progress;
        }
        progress = progress1;
      }
      info_label = badge.info_label;
      if (info_label == null) {
        let info_label1;
        if (value2 != null) {
          info_label1 = value2.info_label;
        }
        info_label = info_label1;
      }
      const result = set(badge_id, obj3);
      const result1 = obj.set(userId, peekResult);
    }
  },
  BADGE_ACK_SUCCESS: function handleBadgeAckSuccess(badgeId) {
    badgeId = badgeId.badgeId;
    const peekResult = closure_5.peek(badgeId.userId);
    if (null == peekResult) {
      return false;
    } else {
      const acks = peekResult.acks;
      const _Date = Date;
      const result = acks.set(badgeId, Date.now());
      const badges2 = peekResult.badges;
      const value = badges2.get(badgeId);
      let has_updates;
      if (value != null) {
        has_updates = value.has_updates;
      }
      if (true !== has_updates) {
        return false;
      } else {
        const badges = peekResult.badges;
        const obj = { has_updates: false, previous_acked_tier: null };
        set = badges.set;
        const merged = Object.assign(value);
        const result1 = set(badgeId, obj);
      }
    }
  },
  USER_PROFILE_FETCH_SUCCESS: function handleUserProfileFetchSuccess(userProfile) {
    userProfile = userProfile.userProfile;
    const id = userProfile.user.id;
    const value = closure_5.get(id);
    if (null != value) {
      if (value.catalogFetched) {
        let badges1 = userProfile.badges;
        if (badges1 == null) {
          badges1 = [];
        }
        const _Array = Array;
        const badges = value.badges;
        const length = badges1.filter((id) => {
          const obj = BadgeIdResolution;
          return null != obj.resolveProfileBadgeId(id.id);
        }).length;
        const arr = Array.from(badges.values());
        if (length !== arr.filter((owned) => owned.owned).length) {
          let num = value.driftFetchGateUntil;
          if (num == null) {
            num = 0;
          }
          const _Date = Date;
          if (Date.now() >= num) {
            let driftBackoff2 = value.driftBackoff;
            if (driftBackoff2 == null) {
              const self = this;
              const self2 = this;
              const tmp6 = BackoffDefault;
              driftBackoff2 = new tmp6(DurationsDefault.Millis.MINUTE, HOUR, true);
            }
            value.driftBackoff = driftBackoff2;
            const _Date2 = Date;
            const timestamp = Date.now();
            value.driftFetchGateUntil = timestamp + driftBackoff2.fail();
            let obj = BadgeDirectoryActionCreators;
            const badgeDirectory = obj.fetchBadgeDirectory(id);
          }
        } else {
          const driftBackoff = value.driftBackoff;
          if (driftBackoff != null) {
            driftBackoff.succeed();
          }
          value.driftFetchGateUntil = null;
        }
      }
    }
    return false;
  },
  LOGOUT: function handleReset() {
    closure_5.reset();
  }
};
const badgeDirectoryStore = new BadgeDirectoryStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/badges/BadgeDirectoryStore.tsx");

export default badgeDirectoryStore;
export function getSingleRequirementThreshold(arg0) {
  let num;
  if (arg0 != null) {
    const first = arg0.requirements[0];
    if (first != null) {
      num = first.threshold;
    }
  }
  if (num == null) {
    num = 0;
  }
  return num;
}
export function getObtainedAtFromBadge(current_tier) {
  if (null != current_tier) {
    let obtained_at;
    if (null != current_tier.current_tier) {
      const tier_obtained_at = current_tier.tier_obtained_at;
      let tmp2;
      if (tier_obtained_at != null) {
        tmp2 = tier_obtained_at[current_tier.current_tier];
      }
      obtained_at = tmp2;
    }
    if (obtained_at == null) {
      obtained_at = current_tier.obtained_at;
    }
    return obtained_at;
  }
}
