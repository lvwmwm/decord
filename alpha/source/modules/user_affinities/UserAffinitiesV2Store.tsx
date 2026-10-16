// Module ID: 7567
// Function ID: 7568
// Name: UserAffinitiesV2Store
// Dependencies: [4819, 7568, 504, 584, 2]

// Module 7567 (UserAffinitiesV2Store)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserAffinitiesConstants from "UserAffinitiesConstants" /* 7568 */;
import RelationshipStore from "RelationshipStore" /* 4819 */;
import size from "module_2" /* 2 */;

let _null;

const f97408 = (otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId);
const f97409 = (otherUserId) => {
  const items = [otherUserId.otherUserId, otherUserId];
  return items;
};
function recomputeAffinities() {
  const userAffinities = obj.userAffinities;
  const found = userAffinities.filter(f97408);
  map = new Map(found.map(f97409));
  if (null != _null) {
    let value = map.get(_null.otherUserId);
    if (value == null) {
      value = null;
    }
    c5 = value;
    const result = map.set(_null.otherUserId, _null);
  }
}
const USER_AFFINITY_TTL = UserAffinitiesConstants.USER_AFFINITY_TTL;
let map = new Map();
let c3 = false;
const React3 = null;
let c5 = null;
const frozen = Object.freeze({ userAffinities: [], lastFetched: 0 });
let obj = {};
let merged = Object.assign(frozen);
const PersistedStore = get_initializedDefault.PersistedStore;
class UserAffinitiesV2Store extends PersistedStore {
  initialize(userAffinities) {
    const self = this;
    this.waitFor(RelationshipStore);
    userAffinities = undefined;
    const tmp = RelationshipStore;
    if (userAffinities != null) {
      userAffinities = userAffinities.userAffinities;
    }
    if (null != userAffinities) {
      obj.userAffinities = userAffinities.userAffinities;
      obj.lastFetched = userAffinities.lastFetched;
      const _Map = Map;
      const userAffinities1 = obj.userAffinities;
      const found = userAffinities1.filter(f97408);
      const self2 = this;
      const self3 = this;
      map = new Map(found.map(f97409));
      if (null != _null) {
        let value = map.get(_null.otherUserId);
        if (value == null) {
          value = null;
        }
        c5 = value;
        const result = map.set(_null.otherUserId, _null);
      }
    }
    const items = [tmp];
    self.syncWith(items, recomputeAffinities);
  }
  shouldFetch() {
    const tmp = c3;
    if (!tmp) {
      const _Date = Date;
      return Date.now() - obj.lastFetched > USER_AFFINITY_TTL;
    }
  }
  isFetching() {
    return c3;
  }
  getUserAffinities() {
    return obj.userAffinities;
  }
  getUserAffinitiesMap() {
    return map;
  }
  getDevToolsOverride() {
    return c4;
  }
  compare(arg0, arg1) {
    const value = map.get(arg1);
    let num;
    if (value != null) {
      num = value.communicationProbability;
    }
    if (num == null) {
      num = 0;
    }
    const value2 = map.get(arg0);
    let num2;
    if (value2 != null) {
      num2 = value2.communicationProbability;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  }
  compareByDmProbability(arg0, arg1) {
    const value = map.get(arg1);
    let num;
    if (value != null) {
      num = value.dmProbability;
    }
    if (num == null) {
      num = 0;
    }
    const value2 = map.get(arg0);
    let num2;
    if (value2 != null) {
      num2 = value2.dmProbability;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  }
  getUserAffinity(userId) {
    return map.get(userId);
  }
  getState() {
    return obj;
  }
  isHighlyAffinedVCUser(arg0) {
    const value = map.get(arg0);
    let num;
    if (value != null) {
      num = value.vcProbability;
    }
    if (num == null) {
      num = 0;
    }
    return num > 0.5;
  }
}
const prototype = UserAffinitiesV2Store.prototype;
UserAffinitiesV2Store.displayName = "UserAffinitiesV2Store";
UserAffinitiesV2Store.persistKey = "UserAffinitiesStoreV2";
const obj2 = {
  LOAD_USER_AFFINITIES_V2: function handleLoadUserAffinities() {
    c3 = true;
  },
  LOAD_USER_AFFINITIES_V2_SUCCESS: function handleLoadUserAffinitiesSuccess(affineUsers) {
    let blockedOrIgnored;
    affineUsers = affineUsers.affineUsers;
    obj.lastFetched = Date.now();
    c3 = false;
    obj.userAffinities = affineUsers;
    const userAffinities = obj.userAffinities;
    const found = userAffinities.filter(f97408);
    map = new Map(found.map(f97409));
    if (null != _null) {
      let value = map.get(_null.otherUserId);
      if (value == null) {
        value = null;
      }
      c5 = value;
      const result = map.set(_null.otherUserId, _null);
    }
  },
  LOAD_USER_AFFINITIES_V2_FAILURE: function handleLoadUserAffinitiesFailure() {
    c3 = false;
  },
  DEV_TOOLS_SET_USER_AFFINITY_OVERRIDE: function handleSetDevToolsOverride(override) {
    override = override.override;
    let tmp = null != _null || null != override;
    if (tmp) {
      if (null != _null) {
        if (null != override) {
          if (_null.otherUserId === override.otherUserId) {
            _null = override;
            const result = map.set(override.otherUserId, override);
          }
          tmp = tmp17;
        }
      }
      if (null != _null) {
        if (null != c5) {
          const result1 = map.set(_null.otherUserId, c5);
        } else {
          map.delete(_null.otherUserId);
        }
        c5 = null;
        _null = null;
      }
      if (null != override) {
        let value = map.get(override.otherUserId);
        if (value == null) {
          value = null;
        }
        c5 = value;
        _null = override;
        const result2 = map.set(override.otherUserId, override);
      }
    }
    return tmp;
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(frozen);
    map = new Map();
    c3 = false;
    let c4 = null;
    c5 = null;
  }
};
const userAffinitiesV2Store = new UserAffinitiesV2Store(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/user_affinities/UserAffinitiesV2Store.tsx");

export default userAffinitiesV2Store;
