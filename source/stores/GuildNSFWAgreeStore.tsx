// Module ID: 4342
// Function ID: 38367
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4342 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = {};
let tmp2 = (Store) => {
  class GuildNSFWAgreeStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildNSFWAgreeStore);
      obj = closure_5(GuildNSFWAgreeStore);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildNSFWAgreeStore;
  callback2(GuildNSFWAgreeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const Storage = GuildNSFWAgreeStore(closure_1[5]).Storage;
      const value = Storage.get("GuildNSFWAgreeStore");
    }
  };
  const items = [obj, ];
  obj = {
    key: "didAgree",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        let tmp4 = !GuildNSFWAgreeStore(closure_1[6]).shouldAgeVerifyForAgeGate();
        if (tmp4) {
          tmp4 = closure_7[arg0] || false;
          const tmp6 = closure_7[arg0] || false;
        }
        tmp = tmp4;
        const obj = GuildNSFWAgreeStore(closure_1[6]);
      }
      return tmp;
    }
  };
  items[1] = obj;
  return callback(GuildNSFWAgreeStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "GuildNSFWAgreeStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  GUILD_NSFW_AGREE: function handleGuildNSFWAgree(guildId) {
    closure_7[guildId.guildId] = true;
    const Storage = arg1(dependencyMap[5]).Storage;
    const result = Storage.set("GuildNSFWAgreeStore", closure_7);
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/GuildNSFWAgreeStore.tsx");

export default tmp2;
