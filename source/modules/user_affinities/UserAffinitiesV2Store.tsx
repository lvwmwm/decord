// Module ID: 6897
// Function ID: 54963
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6897 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function recomputeAffinities() {
  const userAffinities = obj.userAffinities;
  const found = userAffinities.filter((otherUserId) => !blockedOrIgnored.isBlockedOrIgnored(otherUserId.otherUserId));
  const map = new Map(found.map((otherUserId) => {
    const items = [otherUserId.otherUserId, otherUserId];
    return items;
  }));
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const USER_AFFINITY_TTL = arg1(dependencyMap[6]).USER_AFFINITY_TTL;
const map = new Map();
let closure_8 = false;
const frozen = Object.freeze({ userAffinities: [], lastFetched: 0 });
let obj = {};
const merged = Object.assign(frozen);
let tmp5 = (PersistedStore) => {
  class UserAffinitiesV2Store {
    constructor() {
      self = this;
      tmp = UserAffinitiesV2Store(this, UserAffinitiesV2Store);
      obj = closure_3(UserAffinitiesV2Store);
      tmp2 = closure_2;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = UserAffinitiesV2Store;
  callback2(UserAffinitiesV2Store, PersistedStore);
  let obj = {
    key: "initialize",
    value(userAffinities) {
      const self = this;
      this.waitFor(closure_5);
      if (null != userAffinities) {
        closure_10.userAffinities = userAffinities.userAffinities;
        closure_10.lastFetched = userAffinities.lastFetched;
        callback3();
      }
      const items = [closure_5];
      self.syncWith(items, callback3);
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "shouldFetch",
    value() {
      if (!closure_8) {
        const _Date = Date;
        return Date.now() - closure_10.lastFetched > closure_6;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetching",
    value() {
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUserAffinities",
    value() {
      return closure_10.userAffinities;
    }
  };
  items[4] = {
    key: "getUserAffinitiesMap",
    value() {
      return closure_7;
    }
  };
  items[5] = {
    key: "compare",
    value(arg0, arg1) {
      let value = store.get(arg1);
      let prop;
      if (null != value) {
        prop = value.communicationProbability;
      }
      let num = 0;
      if (null != prop) {
        num = prop;
      }
      value = store.get(arg0);
      let prop1;
      if (null != value) {
        prop1 = value.communicationProbability;
      }
      let num2 = 0;
      if (null != prop1) {
        num2 = prop1;
      }
      return num - num2;
    }
  };
  items[6] = {
    key: "compareByDmProbability",
    value(arg0, arg1) {
      let value = store.get(arg1);
      let dmProbability;
      if (null != value) {
        dmProbability = value.dmProbability;
      }
      let num = 0;
      if (null != dmProbability) {
        num = dmProbability;
      }
      value = store.get(arg0);
      let dmProbability1;
      if (null != value) {
        dmProbability1 = value.dmProbability;
      }
      let num2 = 0;
      if (null != dmProbability1) {
        num2 = dmProbability1;
      }
      return num - num2;
    }
  };
  items[7] = {
    key: "getUserAffinity",
    value(arg0) {
      return store.get(arg0);
    }
  };
  items[8] = {
    key: "getState",
    value() {
      return closure_10;
    }
  };
  items[9] = {
    key: "isHighlyAffinedVCUser",
    value(arg0) {
      const value = store.get(arg0);
      let vcProbability;
      if (null != value) {
        vcProbability = value.vcProbability;
      }
      let num = 0;
      if (null != vcProbability) {
        num = vcProbability;
      }
      return num > 0.5;
    }
  };
  return callback(UserAffinitiesV2Store, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp5.displayName = "UserAffinitiesV2Store";
tmp5.persistKey = "UserAffinitiesStoreV2";
obj = {
  LOAD_USER_AFFINITIES_V2: function handleLoadUserAffinities() {
    let closure_8 = true;
  },
  LOAD_USER_AFFINITIES_V2_SUCCESS: function handleLoadUserAffinitiesSuccess(affineUsers) {
    obj.lastFetched = Date.now();
    let closure_8 = false;
    obj.userAffinities = affineUsers.affineUsers;
    recomputeAffinities();
  },
  LOAD_USER_AFFINITIES_V2_FAILURE: function handleLoadUserAffinitiesFailure() {
    let closure_8 = false;
  },
  LOGOUT: function handleLogout() {
    const obj = {};
    const merged = Object.assign(frozen);
    const map = new Map();
    let closure_8 = false;
  }
};
tmp5 = new tmp5(importDefault(dependencyMap[8]), obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_affinities/UserAffinitiesV2Store.tsx");

export default tmp5;
