// Module ID: 15045
// Function ID: 114574
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 15045 (_isNativeReflectConstruct)
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
let closure_5 = {};
let tmp2 = ((PersistedStore) => {
  class GuildBoostingProgressBarPersistedStore {
    constructor() {
      self = this;
      tmp = GuildBoostingProgressBarPersistedStore(this, GuildBoostingProgressBarPersistedStore);
      obj = outer1_3(GuildBoostingProgressBarPersistedStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(GuildBoostingProgressBarPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        const outer1_5 = arg0;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return outer1_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCountForGuild",
    value(arg0) {
      return outer1_5[arg0];
    }
  };
  items[2] = obj;
  return callback(GuildBoostingProgressBarPersistedStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "GuildBoostingProgressBarPersistedStore";
tmp2.persistKey = "PremiumGuildProgressBarPersistedStore";
tmp2 = new tmp2(require("dispatcher"), {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: function handlePremiumCountUpdate(arg0) {
    let guildId;
    let premiumCount;
    const obj = {};
    ({ guildId, premiumCount } = arg0);
    const merged = Object.assign(obj);
    obj[guildId] = premiumCount;
  },
  APPLIED_GUILD_BOOST_COUNT_RESET: function handlePremiumCountReset() {
    let closure_5 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx");

export default tmp2;
