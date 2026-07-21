// Module ID: 14918
// Function ID: 112329
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14918 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let tmp2 = (PersistedStore) => {
  class GuildBoostingProgressBarPersistedStore {
    constructor() {
      self = this;
      tmp = GuildBoostingProgressBarPersistedStore(this, GuildBoostingProgressBarPersistedStore);
      obj = closure_3(GuildBoostingProgressBarPersistedStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = GuildBoostingProgressBarPersistedStore;
  callback2(GuildBoostingProgressBarPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {

    }
  };
  const items = [obj, , ];
  obj = {
    key: "getState",
    value() {
      return closure_5;
    }
  };
  items[1] = obj;
  obj = {
    key: "getCountForGuild",
    value(arg0) {
      return closure_5[arg0];
    }
  };
  items[2] = obj;
  return callback(GuildBoostingProgressBarPersistedStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp2.displayName = "GuildBoostingProgressBarPersistedStore";
tmp2.persistKey = "PremiumGuildProgressBarPersistedStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  APPLIED_GUILD_BOOST_COUNT_UPDATE: function handlePremiumCountUpdate(arg0) {
    let guildId;
    let premiumCount;
    const obj = {};
    ({ guildId, premiumCount } = arg0);
    const merged = Object.assign(closure_5);
    obj[guildId] = premiumCount;
    closure_5 = obj;
  },
  APPLIED_GUILD_BOOST_COUNT_RESET: function handlePremiumCountReset() {
    let closure_5 = {};
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_boosting/GuildBoostingProgressBarPersistedStore.tsx");

export default tmp2;
