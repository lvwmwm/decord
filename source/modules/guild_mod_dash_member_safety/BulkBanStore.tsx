// Module ID: 5319
// Function ID: 45271
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5319 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[5]);
const set = new Set();
const set1 = new Set();
let tmp4 = (Store) => {
  class BulkBanStore {
    constructor() {
      self = this;
      tmp = BulkBanStore(this, BulkBanStore);
      obj = closure_3(BulkBanStore);
      tmp2 = closure_2;
      if (closure_8()) {
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
  let closure_0 = BulkBanStore;
  callback2(BulkBanStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "hasPendingBulkBan",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "consumeCompletedBeforeStarted",
    value(arg0, arg1) {
      return set2.delete("" + arg0 + ":" + arg1);
    }
  };
  items[2] = obj;
  return callback(BulkBanStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp4.displayName = "BulkBanStore";
tmp4 = new tmp4(importDefault(dependencyMap[7]), {
  GUILD_BULK_BAN_STARTED: function handleBulkBanStarted(guildId) {
    set.add(guildId.guildId);
  },
  GUILD_BULK_BAN_FAILED: function handleBulkBanFailed(guildId) {
    if (set.has(guildId.guildId)) {
      set.delete(guildId.guildId);
    } else {
      return false;
    }
  },
  GUILD_BULK_BAN_UPDATE: function handleBulkBanUpdate(guildId) {
    if (set.has(guildId.guildId)) {
      set.delete(guildId.guildId);
    } else {
      const _HermesInternal = HermesInternal;
      set1.add("" + guildId.guildId + ":" + id.getId());
      return false;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    set1.clear();
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_mod_dash_member_safety/BulkBanStore.tsx");

export default tmp4;
