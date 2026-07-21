// Module ID: 12562
// Function ID: 96653
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12562 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUserStoreUpdates() {
  const currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    if (currentUser.mfaEnabled !== mfaEnabled) {
      const mfaEnabled = currentUser.mfaEnabled;
    }
  }
  return false;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
const MFALevels = arg1(dependencyMap[7]).MFALevels;
let closure_8 = null;
let tmp2 = (Store) => {
  class GuildMFAWarningStore {
    constructor() {
      self = this;
      tmp = GuildMFAWarningStore(this, GuildMFAWarningStore);
      obj = closure_3(GuildMFAWarningStore);
      tmp2 = closure_2;
      if (closure_9()) {
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
  let closure_0 = GuildMFAWarningStore;
  callback2(GuildMFAWarningStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_6, closure_5);
      const items = [closure_6, closure_5];
      this.syncWith(items, closure_10);
    }
  };
  const items = [obj, ];
  obj = {
    key: "isVisible",
    value(mfaLevel) {
      let result = null != mfaLevel;
      if (result) {
        result = mfaLevel.mfaLevel === constants.ELEVATED;
      }
      if (result) {
        result = false === closure_8;
      }
      if (result) {
        result = closure_5.hasElevatedPermissions(mfaLevel.id);
      }
      return result;
    }
  };
  items[1] = obj;
  return callback(GuildMFAWarningStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "GuildMFAWarningStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  CONNECTION_OPEN: handleUserStoreUpdates,
  GUILD_UPDATE: function handleGuildPermissionsUpdate() {
    return true;
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/channel_notices/GuildMFAWarningStore.tsx");

export default tmp2;
