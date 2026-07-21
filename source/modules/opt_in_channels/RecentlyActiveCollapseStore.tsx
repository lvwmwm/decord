// Module ID: 6758
// Function ID: 52922
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6758 (_isNativeReflectConstruct)
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
const set = new Set();
let tmp3 = (PersistedStore) => {
  class RecentlyActiveCollapseStore {
    constructor() {
      self = this;
      tmp = RecentlyActiveCollapseStore(this, RecentlyActiveCollapseStore);
      obj = closure_3(RecentlyActiveCollapseStore);
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
  let closure_0 = RecentlyActiveCollapseStore;
  callback2(RecentlyActiveCollapseStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(guilds) {
      set.clear();
      if (null != guilds) {
        guilds = guilds.guilds;
        const item = guilds.forEach((arg0) => set.add(arg0));
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isCollapsed",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { guilds: closure_5 };
    }
  };
  items[2] = obj;
  return callback(RecentlyActiveCollapseStore, items);
}(importDefault(dependencyMap[5]).PersistedStore);
tmp3.displayName = "RecentlyActiveCollapseStore";
tmp3.persistKey = "RecentlyActiveCollapseStore";
tmp3 = new tmp3(importDefault(dependencyMap[6]), {
  SET_RECENTLY_ACTIVE_COLLAPSED: function handleSetRecentlyActiveCollapsed(guildId) {
    guildId = guildId.guildId;
    if (guildId.collapsed) {
      obj.add(guildId);
    } else {
      obj.delete(guildId);
    }
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/opt_in_channels/RecentlyActiveCollapseStore.tsx");

export default tmp3;
