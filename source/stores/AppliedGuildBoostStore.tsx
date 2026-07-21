// Module ID: 11584
// Function ID: 90033
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11584 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleModifyingAppliedBoostStart() {
  let closure_9 = true;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let closure_6 = null;
let closure_7 = [];
let closure_8 = false;
let closure_9 = false;
let closure_10 = null;
let closure_11 = null;
let tmp2 = (Store) => {
  class AppliedGuildBoostStore {
    constructor() {
      self = this;
      tmp = AppliedGuildBoostStore(this, AppliedGuildBoostStore);
      obj = closure_3(AppliedGuildBoostStore);
      tmp2 = closure_2;
      if (closure_12()) {
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
  let closure_0 = AppliedGuildBoostStore;
  callback2(AppliedGuildBoostStore, Store);
  let obj = {
    key: "getAppliedGuildBoostsForGuild",
    value(arg0) {
      let subscriptions = null;
      if (null != closure_5[arg0]) {
        subscriptions = closure_5[arg0].subscriptions;
      }
      return subscriptions;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getLastFetchedAtForGuild",
    value(arg0) {
      let lastFetchedAt = null;
      if (null != closure_5[arg0]) {
        lastFetchedAt = closure_5[arg0].lastFetchedAt;
      }
      return lastFetchedAt;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCurrentUserAppliedBoosts",
    value() {
      return closure_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAppliedGuildBoost",
    value(arg0) {
      const AppliedGuildBoostStore = arg0;
      return closure_7.find((id) => id.id === id);
    }
  };
  items[4] = {
    key: "isModifyingAppliedBoost",
    get() {
      return closure_9;
    }
  };
  items[5] = {
    key: "applyBoostError",
    get() {
      return closure_10;
    }
  };
  items[6] = {
    key: "unapplyBoostError",
    get() {
      return closure_11;
    }
  };
  items[7] = {
    key: "cooldownEndsAt",
    get() {
      return closure_6;
    }
  };
  items[8] = {
    key: "isFetchingCurrentUserAppliedBoosts",
    get() {
      return closure_8;
    }
  };
  return callback(AppliedGuildBoostStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "AppliedGuildBoostStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function handleAppliedBoostsForGuildFetchSuccess(appliedBoosts) {
    closure_5[appliedBoosts.guildId] = { subscriptions: appliedBoosts.appliedBoosts, lastFetchedAt: Date.now() };
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function handleAppliedBoostsForuserFetchSuccess(appliedGuildBoosts) {
    let closure_8 = false;
    appliedGuildBoosts = appliedGuildBoosts.appliedGuildBoosts;
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function handleAppliedBoostCooldownFetch(endsAt) {
    endsAt = endsAt.endsAt;
  },
  GUILD_UNAPPLY_BOOST_START: handleModifyingAppliedBoostStart,
  GUILD_APPLY_BOOST_START: handleModifyingAppliedBoostStart,
  GUILD_APPLY_BOOST_SUCCESS: function handleApplyBoostSuccess(appliedGuildBoost) {
    appliedGuildBoost = appliedGuildBoost.appliedGuildBoost;
    let closure_0 = new Set(appliedGuildBoost.map((id) => id.id));
    const items = [...appliedGuildBoost, ...closure_7.filter((id) => !set.has(id.id))];
    let closure_7 = items;
    let closure_10 = null;
    let closure_9 = false;
  },
  GUILD_APPLY_BOOST_FAIL: function handleApplyBoostFail(error) {
    let closure_9 = false;
    error = error.error;
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function handleUnapplyBoostSuccess(boostId) {
    boostId = boostId.boostId;
    closure_7 = closure_7.filter((id) => id.id !== boostId);
    let closure_9 = false;
  },
  GUILD_UNAPPLY_BOOST_FAIL: function handleUnapplyBoostFail(error) {
    let closure_9 = false;
    error = error.error;
  },
  USER_APPLIED_BOOSTS_FETCH_START: function handleUserAppliedBoostsFetchStart() {
    let closure_8 = true;
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/AppliedGuildBoostStore.tsx");

export default tmp2;
