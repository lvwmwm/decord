// Module ID: 11595
// Function ID: 90095
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 11595 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
function handleModifyingAppliedBoostStart() {
  let c9 = true;
}
let closure_5 = {};
let c6 = null;
let closure_7 = [];
let c8 = false;
let c9 = false;
let c10 = null;
let c11 = null;
let tmp2 = ((Store) => {
  class AppliedGuildBoostStore {
    constructor() {
      self = this;
      tmp = AppliedGuildBoostStore(this, AppliedGuildBoostStore);
      obj = outer1_3(AppliedGuildBoostStore);
      tmp2 = outer1_2;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(AppliedGuildBoostStore, Store);
  let obj = {
    key: "getAppliedGuildBoostsForGuild",
    value(arg0) {
      let subscriptions = null;
      if (null != outer1_5[arg0]) {
        subscriptions = outer1_5[arg0].subscriptions;
      }
      return subscriptions;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getLastFetchedAtForGuild",
    value(arg0) {
      let lastFetchedAt = null;
      if (null != outer1_5[arg0]) {
        lastFetchedAt = outer1_5[arg0].lastFetchedAt;
      }
      return lastFetchedAt;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCurrentUserAppliedBoosts",
    value() {
      return outer1_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAppliedGuildBoost",
    value(arg0) {
      let dispatcher = arg0;
      return outer1_7.find((id) => id.id === dispatcher);
    }
  };
  items[4] = {
    key: "isModifyingAppliedBoost",
    get() {
      return outer1_9;
    }
  };
  items[5] = {
    key: "applyBoostError",
    get() {
      return outer1_10;
    }
  };
  items[6] = {
    key: "unapplyBoostError",
    get() {
      return outer1_11;
    }
  };
  items[7] = {
    key: "cooldownEndsAt",
    get() {
      return outer1_6;
    }
  };
  items[8] = {
    key: "isFetchingCurrentUserAppliedBoosts",
    get() {
      return outer1_8;
    }
  };
  return callback(AppliedGuildBoostStore, items);
})(require("initialize").Store);
tmp2.displayName = "AppliedGuildBoostStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function handleAppliedBoostsForGuildFetchSuccess(appliedBoosts) {
    closure_5[appliedBoosts.guildId] = { subscriptions: appliedBoosts.appliedBoosts, lastFetchedAt: Date.now() };
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function handleAppliedBoostsForuserFetchSuccess(appliedGuildBoosts) {
    let c8 = false;
    appliedGuildBoosts = appliedGuildBoosts.appliedGuildBoosts;
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function handleAppliedBoostCooldownFetch(endsAt) {
    endsAt = endsAt.endsAt;
  },
  GUILD_UNAPPLY_BOOST_START: handleModifyingAppliedBoostStart,
  GUILD_APPLY_BOOST_START: handleModifyingAppliedBoostStart,
  GUILD_APPLY_BOOST_SUCCESS: function handleApplyBoostSuccess(appliedGuildBoost) {
    appliedGuildBoost = appliedGuildBoost.appliedGuildBoost;
    const set = new Set(appliedGuildBoost.map((id) => id.id));
    items = [...appliedGuildBoost, ...items.filter((id) => !set.has(id.id))];
    let c10 = null;
    let c9 = false;
  },
  GUILD_APPLY_BOOST_FAIL: function handleApplyBoostFail(error) {
    let c9 = false;
    error = error.error;
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function handleUnapplyBoostSuccess(boostId) {
    boostId = boostId.boostId;
    closure_7 = closure_7.filter((id) => id.id !== boostId);
    let c9 = false;
  },
  GUILD_UNAPPLY_BOOST_FAIL: function handleUnapplyBoostFail(error) {
    let c9 = false;
    error = error.error;
  },
  USER_APPLIED_BOOSTS_FETCH_START: function handleUserAppliedBoostsFetchStart() {
    let c8 = true;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/AppliedGuildBoostStore.tsx");

export default tmp2;
