// Module ID: 8260
// Function ID: 65150
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8260 (_isNativeReflectConstruct)
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
function getSingleRequirementThreshold(arg0) {
  let threshold;
  if (null != arg0) {
    const first = arg0.requirements[0];
    if (null != first) {
      threshold = first.threshold;
    }
  }
  let num2 = 0;
  if (null != threshold) {
    num2 = threshold;
  }
  return num2;
}
function getObtainedAtFromBadge(current_tier) {
  if (null != current_tier) {
    let obtained_at;
    if (null != current_tier.current_tier) {
      const tier_obtained_at = current_tier.tier_obtained_at;
      let tmp2;
      if (null != tier_obtained_at) {
        tmp2 = tier_obtained_at[current_tier.current_tier];
      }
      obtained_at = tmp2;
    }
    if (null == obtained_at) {
      obtained_at = current_tier.obtained_at;
    }
    return obtained_at;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const HOUR = importDefault(dependencyMap[6]).Millis.HOUR;
const map = new Map();
const set = new Set();
const set1 = new Set();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
let tmp8 = (Store) => {
  class BadgeDirectoryStore {
    constructor() {
      self = this;
      tmp = closure_3(this, BadgeDirectoryStore);
      obj = closure_6(BadgeDirectoryStore);
      tmp2 = closure_5;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = BadgeDirectoryStore;
  callback2(BadgeDirectoryStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getBadges",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        const currentUser = authStore.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        tmp = id;
      }
      if (null == tmp) {
        return [];
      } else {
        const value = store.get(tmp);
        if (null != value) {
          const _Array = Array;
          let items = Array.from(value.values());
        } else {
          items = [];
        }
        return items;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "hasCatalogFor",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isCatalogStaleFor",
    value(arg0) {
      const value = closure_13.get(arg0);
      let tmp2 = null == value;
      if (!tmp2) {
        const _Date = Date;
        tmp2 = Date.now() - value >= closure_9;
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "hasCatalogFetchErrorFor",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        const currentUser = authStore.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        tmp = id;
      }
      let hasItem = null != tmp;
      if (hasItem) {
        hasItem = set2.has(tmp);
      }
      return hasItem;
    }
  };
  items[5] = {
    key: "getBadgeById",
    value(arg0, arg1) {
      let tmp = arg1;
      if (null == arg1) {
        const currentUser = authStore.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        tmp = id;
      }
      let tmp5;
      if (null != tmp) {
        let value = store.get(tmp);
        value = undefined;
        if (null != value) {
          value = value.get(arg0);
        }
        tmp5 = value;
      }
      return tmp5;
    }
  };
  items[6] = {
    key: "getSingleRequirementProgress",
    value(arg0, arg1) {
      const badgeById = this.getBadgeById(arg0, arg1);
      let progress;
      if (null != badgeById) {
        progress = badgeById.progress;
      }
      if (null != progress) {
        if (0 !== progress.length) {
          return progress[0];
        }
      }
    }
  };
  items[7] = {
    key: "getCurrentTier",
    value(arg0, arg1) {
      const badgeById = this.getBadgeById(arg0, arg1);
      const BadgeDirectoryStore = badgeById;
      let current_tier;
      if (null != badgeById) {
        current_tier = badgeById.current_tier;
      }
      if (null != current_tier) {
        const tiers = badgeById.tiers;
        return tiers.find((key) => key.key === badgeById.current_tier);
      }
    }
  };
  items[8] = {
    key: "getObtainedAt",
    value(arg0, arg1) {
      return callback5(this.getBadgeById(arg0, arg1));
    }
  };
  items[9] = {
    key: "getNextTier",
    value(arg0, arg1) {
      const badgeById = this.getBadgeById(arg0, arg1);
      const BadgeDirectoryStore = badgeById;
      let next_tier;
      if (null != badgeById) {
        next_tier = badgeById.next_tier;
      }
      if (null != next_tier) {
        const tiers = badgeById.tiers;
        return tiers.find((key) => key.key === badgeById.next_tier);
      }
    }
  };
  items[10] = {
    key: "getRemainingToNextTier",
    value(GIFTING) {
      const nextTier = this.getNextTier(GIFTING, arg1);
      const singleRequirementProgress = this.getSingleRequirementProgress(GIFTING, arg1);
      let num = 0;
      if (null != nextTier) {
        num = 0;
        if (null != singleRequirementProgress) {
          const _Math = Math;
          num = Math.max(0, callback4(nextTier) - singleRequirementProgress.current);
        }
      }
      return num;
    }
  };
  return callback(BadgeDirectoryStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp8.displayName = "BadgeDirectoryStore";
tmp8 = new tmp8(importDefault(dependencyMap[11]), {
  BADGE_DIRECTORY_FETCH_START: function handleFetchStart(userId) {
    const set = new Set(set);
    set.delete(userId.userId);
  },
  BADGE_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let badges;
    let userId;
    ({ userId, badges } = arg0);
    const map = new Map(map);
    const result = map.set(userId, new Map(badges.map((badge_id) => {
      const items = [badge_id.badge_id, badge_id];
      return items;
    })));
    const map1 = new Map(badges.map((badge_id) => {
      const items = [badge_id.badge_id, badge_id];
      return items;
    }));
    closure_11 = new Set(closure_11).add(userId);
    const set1 = new Set(set1);
    set1.delete(userId);
    const set = new Set(closure_11);
    closure_13 = new Map(closure_13).set(userId, Date.now());
  },
  BADGE_DIRECTORY_FETCH_FAILURE: function handleFetchFailure(userId) {
    closure_12 = new Set(closure_12).add(userId.userId);
  },
  BADGE_FETCH_SUCCESS: function handleBadgeFetchSuccess(arg0) {
    let badge;
    let userId;
    ({ userId, badge } = arg0);
    let map = new Map(map);
    map = map.get(userId);
    if (null == map) {
      const _Map = Map;
      map = new Map();
    }
    const map1 = new Map(map);
    const result = map1.set(badge.badge_id, badge);
    const result1 = map.set(userId, map1);
  },
  USER_PROFILE_FETCH_SUCCESS: function handleUserProfileFetchSuccess(userProfile) {
    let iter3;
    userProfile = userProfile.userProfile;
    const id = userProfile.user.id;
    if (set.has(id)) {
      let badges = userProfile.badges;
      if (null == badges) {
        badges = [];
      }
      let value = map.get(id);
      let items;
      if (null != value) {
        items = value.values();
      }
      if (null == items) {
        items = [];
      }
      const tmp2Result = _createForOfIteratorHelperLoose(items);
      const iter = tmp2Result();
      let iter2 = iter;
      let num = 0;
      let num2 = 0;
      if (!iter.done) {
        do {
          let sum = num;
          if (iter2.value.owned) {
            sum = num + 1;
          }
          iter3 = tmp2Result();
          num = sum;
          iter2 = iter3;
          num2 = sum;
        } while (!iter3.done);
      }
      if (badges.filter((id) => null != callback(closure_2[7]).resolveProfileBadgeId(id.id)).length !== num2) {
        value = map3.get(id);
        let num3 = 0;
        if (null != value) {
          num3 = value;
        }
        const _Date = Date;
        if (Date.now() >= num3) {
          let value1 = map2.get(id);
          if (null == value1) {
            const tmp15 = importDefault(dependencyMap[8]);
            const prototype = tmp15.prototype;
            value1 = new tmp15(importDefault(dependencyMap[6]).Millis.MINUTE, HOUR, true);
          }
          const result = map2.set(id, value1);
          const _Date2 = Date;
          const timestamp = Date.now();
          const result1 = map3.set(id, timestamp + value1.fail());
          const badgeDirectory = arg1(dependencyMap[9]).fetchBadgeDirectory(id);
          const obj4 = arg1(dependencyMap[9]);
        }
      } else {
        const value2 = map2.get(id);
        if (null != value2) {
          value2.succeed();
        }
        map3.delete(id);
      }
      const tmp2 = _createForOfIteratorHelperLoose;
    }
    return false;
  },
  LOGOUT: function handleReset() {
    const map = new Map();
    const set = new Set();
    const set1 = new Set();
    const map1 = new Map();
    map2.clear();
    map3.clear();
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/badges/BadgeDirectoryStore.tsx");

export default tmp8;
export { getSingleRequirementThreshold };
export { getObtainedAtFromBadge };
